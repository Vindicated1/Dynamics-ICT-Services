"use server";

import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { z } from "zod";

import { requireAdmin } from "@/lib/admin-auth";
import { isAllowedImageReference } from "@/lib/image-storage";
import { prisma } from "@/lib/prisma";

export type BlogFormState = {
  error?: string;
  message?: string;
} | null;

function textField(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value : "";
}

function makeSlug(value: string) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const BlogSchema = z.object({
  id: z.string().optional(),
  title: z.string().trim().min(1).max(180),
  slug: z.string().trim().max(200),
  excerpt: z.string().trim().min(1).max(1000),
  content: z.string().trim().min(1).max(50000),
  category: z.string().trim().min(1).max(100),
  tags: z.string().max(2000),
  authorName: z.string().trim().min(1).max(120),
  authorRole: z.string().trim().max(120),
  image: z
    .string()
    .trim()
    .min(1)
    .max(2048)
    .refine(isAllowedImageReference, "Choose an uploaded image or use a valid existing site image."),
  publishedAt: z.iso.date(),
});

function revalidateBlogPages(slugs: string[]) {
  revalidatePath("/admin");
  revalidatePath("/admin/blog");
  revalidatePath("/blog");
  revalidatePath("/blog/[slug]", "page");

  for (const slug of slugs) {
    if (slug) {
      revalidatePath(`/blog/${slug}`);
    }
  }
}

export async function saveBlogArticle(
  _previousState: BlogFormState,
  formData: FormData,
): Promise<BlogFormState> {
  await requireAdmin();

  const parsed = BlogSchema.safeParse({
    id: textField(formData, "id") || undefined,
    title: textField(formData, "title"),
    slug: textField(formData, "slug"),
    excerpt: textField(formData, "excerpt"),
    content: textField(formData, "content"),
    category: textField(formData, "category"),
    tags: textField(formData, "tags"),
    authorName: textField(formData, "authorName"),
    authorRole: textField(formData, "authorRole"),
    image: textField(formData, "image"),
    publishedAt: textField(formData, "publishedAt"),
  });

  if (!parsed.success) {
    return {
      error:
        parsed.error.issues[0]?.message ??
        "Check the article details and try again.",
    };
  }

  const slug = makeSlug(parsed.data.slug || parsed.data.title);
  if (!slug) {
    return { error: "Enter an article title that can be used to create a URL." };
  }

  const wordCount = parsed.data.content.split(/\s+/).filter(Boolean).length;
  const data = {
    title: parsed.data.title,
    slug,
    excerpt: parsed.data.excerpt,
    content: parsed.data.content,
    category: parsed.data.category,
    tags: parsed.data.tags
      .split(/[,\n]/)
      .map((tag) => tag.trim())
      .filter(Boolean),
    authorName: parsed.data.authorName,
    authorRole: parsed.data.authorRole || null,
    image: parsed.data.image,
    publishedAt: new Date(`${parsed.data.publishedAt}T00:00:00.000Z`),
    readingTime: Math.max(1, Math.ceil(wordCount / 200)),
    isFeatured: formData.get("isFeatured") === "on",
    isPublished: formData.get("isPublished") === "on",
  };

  try {
    const oldArticle = parsed.data.id
      ? await prisma.blogArticle.findUnique({
          where: { id: parsed.data.id },
          select: { slug: true },
        })
      : null;

    if (parsed.data.id && !oldArticle) {
      return {
        error: "This article no longer exists. Refresh the page and try again.",
      };
    }

    if (parsed.data.id) {
      await prisma.blogArticle.update({
        where: { id: parsed.data.id },
        data,
      });
    } else {
      await prisma.blogArticle.create({ data });
    }

    revalidateBlogPages([oldArticle?.slug ?? "", slug]);
    return {
      message: "Article saved. The public blog now reflects the updated content.",
    };
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      return {
        error: "That article URL is already in use. Choose a different slug.",
      };
    }

    throw error;
  }
}

export async function setBlogArticlePublication(formData: FormData) {
  await requireAdmin();

  const id = textField(formData, "id");
  const published = textField(formData, "published");
  if (!id || (published !== "true" && published !== "false")) {
    throw new Error("Invalid article publication request.");
  }

  const article = await prisma.blogArticle.update({
    where: { id },
    data: { isPublished: published === "true" },
    select: { slug: true },
  });

  revalidateBlogPages([article.slug]);
}
