import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { blogPosts } from "@/data/blog/posts";

import { BlogArticle } from "@/components/blog";

import CTA from "@/components/homepage/cta";
import Footer from "@/components/homepage/footer";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const post = blogPosts.find(
    (item) => item.slug === slug && item.published
  );

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

  const post = blogPosts.find(
    (item) => item.slug === slug && item.published
  );

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <BlogArticle post={post} />

      <CTA />

      <Footer />
    </main>
  );
}