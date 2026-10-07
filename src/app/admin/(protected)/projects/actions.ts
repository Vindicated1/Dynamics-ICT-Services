"use server";

import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { z } from "zod";

import { requireAdmin } from "@/lib/admin-auth";
import { isAllowedImageReference } from "@/lib/image-storage";
import { prisma } from "@/lib/prisma";

export type ProjectFormState = {
  error?: string;
  message?: string;
} | null;

function stringField(formData: FormData, key: string) {
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

const ProjectSchema = z.object({
  id: z.string().optional(),
  title: z.string().trim().min(1).max(160),
  slug: z.string().trim().max(180),
  category: z.string().trim().min(1).max(80),
  description: z.string().trim().min(1).max(5000),
  image: z
    .string()
    .trim()
    .min(1)
    .max(2048)
    .refine(isAllowedImageReference, "Choose an uploaded image or use a valid existing site image."),
  location: z.string().trim().max(160),
  year: z.string().trim().max(20),
  services: z.string().max(1000),
  sortOrder: z.coerce.number().int().min(0).max(100000),
});

function refreshProjectPages(slugs: string[]) {
  revalidatePath("/");
  revalidatePath("/projects");
  revalidatePath("/projects/[slug]", "page");
  revalidatePath("/portfolio");
  revalidatePath("/portfolio/[slug]", "page");
  revalidatePath("/admin");
  revalidatePath("/admin/projects");

  for (const slug of slugs) {
    if (slug) {
      revalidatePath(`/projects/${slug}`);
      revalidatePath(`/portfolio/${slug}`);
    }
  }
}

export async function saveProject(
  _previousState: ProjectFormState,
  formData: FormData,
): Promise<ProjectFormState> {
  await requireAdmin();

  const parsed = ProjectSchema.safeParse({
    id: stringField(formData, "id") || undefined,
    title: stringField(formData, "title"),
    slug: stringField(formData, "slug"),
    category: stringField(formData, "category"),
    description: stringField(formData, "description"),
    image: stringField(formData, "image"),
    location: stringField(formData, "location"),
    year: stringField(formData, "year"),
    services: stringField(formData, "services"),
    sortOrder: stringField(formData, "sortOrder") || "0",
  });

  if (!parsed.success) {
    return {
      error: parsed.error.issues[0]?.message ?? "Check the project details and try again.",
    };
  }

  const slug = makeSlug(parsed.data.slug || parsed.data.title);
  if (!slug) {
    return { error: "Enter a project title that can be used to create a URL." };
  }

  const services = parsed.data.services
    .split(/[,\n]/)
    .map((service) => service.trim())
    .filter(Boolean);

  const showOnProjects = formData.get("showOnProjects") === "on";
  const showOnHomepage = formData.get("showOnHomepage") === "on";

  const data = {
    title: parsed.data.title,
    slug,
    category: parsed.data.category,
    description: parsed.data.description,
    image: parsed.data.image,
    location: parsed.data.location || null,
    year: parsed.data.year || null,
    services,
    showOnProjects,
    showOnHomepage,
    isFeatured: showOnHomepage && formData.get("isFeatured") === "on",
    sortOrder: parsed.data.sortOrder,
  };

  try {
    const oldProject = parsed.data.id
      ? await prisma.project.findUnique({
          where: { id: parsed.data.id },
          select: { slug: true },
        })
      : null;

    if (parsed.data.id && !oldProject) {
      return { error: "This project no longer exists. Refresh the page and try again." };
    }

    if (parsed.data.id) {
      await prisma.project.update({
        where: { id: parsed.data.id },
        data,
      });
    } else {
      await prisma.project.create({ data });
    }

    refreshProjectPages([oldProject?.slug ?? "", slug]);
    return { message: "Project saved. Public pages now use the updated details." };
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      return { error: "That URL slug is already in use. Choose a different slug." };
    }

    throw error;
  }
}

export async function setProjectPublication(formData: FormData) {
  await requireAdmin();

  const id = stringField(formData, "id");
  const published = stringField(formData, "published");

  if (!id || (published !== "true" && published !== "false")) {
    throw new Error("Invalid project publication request.");
  }

  const project = await prisma.project.update({
    where: { id },
    data: { isPublished: published === "true" },
    select: { slug: true },
  });

  refreshProjectPages([project.slug]);
}
