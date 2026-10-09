import Link from "next/link";
import { notFound } from "next/navigation";
import { FileText } from "lucide-react";

import { prisma } from "@/lib/prisma";
import BlogForm from "./BlogForm";
import { setBlogArticlePublication } from "./actions";

interface Props {
  searchParams: Promise<{ edit?: string }>;
}

export default async function AdminBlogPage({ searchParams }: Props) {
  const { edit } = await searchParams;
  const [articles, editingArticle] = await Promise.all([
    prisma.blogArticle.findMany({
      orderBy: [{ updatedAt: "desc" }],
    }),
    edit
      ? prisma.blogArticle.findUnique({
          where: { id: edit },
        })
      : Promise.resolve(null),
  ]);

  if (edit && !editingArticle) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:space-y-10 sm:px-6 sm:py-10 lg:px-8">
        <div>
          <Link
            href="/admin"
            className="text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            Admin dashboard
          </Link>
          <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-blue-600">
            Website content
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            Blog management
          </h1>
          <p className="mt-2 text-slate-600">
            Write articles and control what is published on the public blog.
          </p>
        </div>

        <BlogForm
          article={
            editingArticle
              ? {
                  id: editingArticle.id,
                  title: editingArticle.title,
                  slug: editingArticle.slug,
                  excerpt: editingArticle.excerpt,
                  content: editingArticle.content,
                  category: editingArticle.category,
                  tags: editingArticle.tags,
                  authorName: editingArticle.authorName,
                  authorRole: editingArticle.authorRole ?? "",
                  image: editingArticle.image,
                  publishedAt: editingArticle.publishedAt
                    .toISOString()
                    .slice(0, 10),
                  isFeatured: editingArticle.isFeatured,
                  isPublished: editingArticle.isPublished,
                }
              : undefined
          }
        />

        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
            <div>
              <h2 className="text-xl font-bold text-slate-900">All articles</h2>
              <p className="mt-1 text-sm text-slate-500">
                {articles.length} {articles.length === 1 ? "article" : "articles"} · newest edits first
              </p>
            </div>
            <FileText className="h-6 w-6 text-blue-600" />
          </div>

          {articles.length === 0 ? (
            <p className="px-6 py-12 text-center text-sm text-slate-500">
              No articles have been created yet.
            </p>
          ) : (
            <ul className="divide-y divide-slate-100">
              {articles.map((article) => (
                <li
                  key={article.id}
                  className="flex flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-semibold text-slate-900">
                        {article.title}
                      </h3>
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                          article.isPublished
                            ? "bg-green-50 text-green-700"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {article.isPublished ? "Published" : "Draft"}
                      </span>
                      {article.isFeatured && (
                        <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="mt-1 truncate text-sm text-slate-500">
                      {article.category} · /blog/{article.slug}
                    </p>
                    <p className="mt-2 text-xs text-slate-500">
                      Updated{" "}
                      {new Intl.DateTimeFormat("en-NG", {
                        dateStyle: "medium",
                      }).format(article.updatedAt)}
                    </p>
                  </div>

                  <div className="flex shrink-0 items-center gap-3">
                    {article.isPublished && (
                      <Link
                        href={`/blog/${article.slug}`}
                        target="_blank"
                        className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                      >
                        Preview
                      </Link>
                    )}
                    <Link
                      href={`/admin/blog?edit=${encodeURIComponent(article.id)}`}
                      className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                    >
                      Edit
                    </Link>
                    <form action={setBlogArticlePublication}>
                      <input type="hidden" name="id" value={article.id} />
                      <input
                        type="hidden"
                        name="published"
                        value={String(!article.isPublished)}
                      />
                      <button
                        type="submit"
                        className={`rounded-lg px-4 py-2 text-sm font-semibold ${
                          article.isPublished
                            ? "border border-amber-200 text-amber-800 hover:bg-amber-50"
                            : "bg-blue-600 text-white hover:bg-blue-700"
                        }`}
                      >
                        {article.isPublished ? "Unpublish" : "Publish"}
                      </button>
                    </form>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
}
