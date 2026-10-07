import type { BlogArticle } from "@prisma/client";

import type { BlogPost } from "@/data/blog/posts";

export function toBlogPost(article: BlogArticle): BlogPost {
  return {
    id: article.id,
    title: article.title,
    slug: article.slug,
    excerpt: article.excerpt,
    content: article.content,
    category: article.category,
    tags: article.tags,
    author: {
      name: article.authorName,
      ...(article.authorRole ? { role: article.authorRole } : {}),
    },
    image: article.image,
    publishedAt: article.publishedAt.toISOString(),
    updatedAt: article.updatedAt.toISOString(),
    readingTime: article.readingTime,
    featured: article.isFeatured,
    published: article.isPublished,
  };
}
