import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  Clock3,
} from "lucide-react";

import type { BlogPost } from "@/data/blog/posts";

interface Props {
  post: BlogPost;
}

export default function BlogArticle({ post }: Props) {
  const publishedDate = new Date(
    post.publishedAt
  ).toLocaleDateString("en-NG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article>
      {/* Article Header */}
      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          <div className="mt-10">
            <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
              {post.category}
            </span>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {post.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {post.excerpt}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-400">
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                {publishedDate}
              </span>

              <span className="inline-flex items-center gap-2">
                <Clock3 className="h-4 w-4" />
                {post.readingTime} min read
              </span>

              <span>
                By{" "}
                <strong className="text-slate-200">
                  {post.author.name}
                </strong>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-10">
            <div className="whitespace-pre-line break-words text-base leading-8 text-slate-700 sm:text-lg sm:leading-9">
              {post.content}
            </div>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="mt-12 border-t border-slate-200 pt-8">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Tags
                </h2>

                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Back to Blog */}
          <div className="mt-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-semibold text-blue-600 transition-colors hover:text-blue-700"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to all articles
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}