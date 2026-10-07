import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { BlogArticle } from "@/components/blog";

import CTA from "@/components/homepage/cta";
import Footer from "@/components/homepage/footer";
import { prisma } from "@/lib/prisma";
import { toBlogPost } from "@/lib/blog-articles";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const post = await prisma.blogArticle.findFirst({
    where: { slug, isPublished: true },
    select: { title: true, excerpt: true },
  });

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | Dynamics ICT Services`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: Props) {
  const { slug } = await params;

  const article = await prisma.blogArticle.findFirst({
    where: { slug, isPublished: true },
  });

  if (!article) {
    notFound();
  }

  const post = toBlogPost(article);

  return (
    <main className="min-h-screen bg-white">
      <BlogArticle post={post} />

      <CTA />

      <Footer />
    </main>
  );
}