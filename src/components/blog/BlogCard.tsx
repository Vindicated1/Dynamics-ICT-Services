import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3 } from "lucide-react";

import type { BlogPost } from "@/data/blog/posts";

interface Props {
  post: BlogPost;
}

export default function BlogCard({ post }: Props) {
  const publishedDate = new Date(
    post.publishedAt
  ).toLocaleDateString("en-NG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link href={`/blog/${post.slug}`}>
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />

          <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-blue-700 shadow-sm">
            {post.category}
          </div>
        </div>

        <div className="p-6">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-slate-500">
            <span>{publishedDate}</span>

            <span>•</span>

            <span className="inline-flex items-center gap-1">
              <Clock3 className="h-3.5 w-3.5" />
              {post.readingTime} min read
            </span>
          </div>

          <h2 className="mt-4 text-xl font-bold leading-7 text-slate-900 transition-colors group-hover:text-blue-600">
            {post.title}
          </h2>

          <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
            {post.excerpt}
          </p>

          <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600">
            Read Article

            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </article>
  );
}