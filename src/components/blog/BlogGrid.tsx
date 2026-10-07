import SectionHeading from "@/components/common/SectionHeading";
import { prisma } from "@/lib/prisma";
import { toBlogPost } from "@/lib/blog-articles";

import BlogCard from "./BlogCard";

export default async function BlogGrid() {
  const articles = await prisma.blogArticle.findMany({
    where: { isPublished: true },
    orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }],
  });
  const publishedPosts = articles.map(toBlogPost);
  const featuredPosts = publishedPosts.filter((post) => post.featured);
  const regularPosts = publishedPosts.filter((post) => !post.featured);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {featuredPosts.length > 0 && (
          <>
            <SectionHeading
              eyebrow="Featured"
              title="Featured Technology Insights"
              description="Our latest insights and practical technology resources for businesses."
            />

            <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {featuredPosts.map((post) => (
                <BlogCard
                  key={post.id}
                  post={post}
                />
              ))}
            </div>
          </>
        )}

        {regularPosts.length > 0 && (
          <div className="mt-24">
            <SectionHeading
              eyebrow="Latest Articles"
              title="Explore Our Latest Articles"
              description="Practical information to help you make better technology decisions."
            />

            <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {regularPosts.map((post) => (
                <BlogCard
                  key={post.id}
                  post={post}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}