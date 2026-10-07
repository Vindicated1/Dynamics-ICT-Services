"use client";

import Link from "next/link";
import { useActionState, useState } from "react";

import ImageUploadField from "@/components/admin/ImageUploadField";
import { saveBlogArticle, type BlogFormState } from "./actions";

type BlogFormValues = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  authorName: string;
  authorRole: string;
  image: string;
  publishedAt: string;
  isFeatured: boolean;
  isPublished: boolean;
};

interface Props {
  article?: BlogFormValues;
}

export default function BlogForm({ article }: Props) {
  const [imageUploading, setImageUploading] = useState(false);
  const [state, action, pending] = useActionState<BlogFormState, FormData>(
    saveBlogArticle,
    null,
  );

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            {article ? "Edit article" : "Write an article"}
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Save as a draft or publish it to the public blog.
          </p>
        </div>
        {article && (
          <Link
            href="/admin/blog"
            className="text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            Cancel editing
          </Link>
        )}
      </div>

      <form action={action} className="mt-6 grid gap-5 sm:grid-cols-2">
        {article && <input type="hidden" name="id" value={article.id} />}

        <label className="text-sm font-semibold text-slate-700">
          Title
          <input
            name="title"
            required
            maxLength={180}
            defaultValue={article?.title}
            className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2.5 font-normal"
          />
        </label>

        <label className="text-sm font-semibold text-slate-700">
          URL slug
          <input
            name="slug"
            maxLength={200}
            placeholder="generated-from-title"
            defaultValue={article?.slug}
            className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2.5 font-normal"
          />
          <span className="mt-1 block text-xs font-normal text-slate-500">
            Leave blank to generate it from the title.
          </span>
        </label>

        <label className="text-sm font-semibold text-slate-700">
          Category
          <input
            name="category"
            required
            maxLength={100}
            defaultValue={article?.category}
            className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2.5 font-normal"
          />
        </label>

        <ImageUploadField
          initialValue={article?.image ?? ""}
          label="Article image"
          onUploadingChange={setImageUploading}
          required={!article?.image}
          scope="blog"
        />

        <label className="text-sm font-semibold text-slate-700">
          Author name
          <input
            name="authorName"
            required
            maxLength={120}
            defaultValue={article?.authorName ?? "Dynamics ICT Services"}
            className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2.5 font-normal"
          />
        </label>

        <label className="text-sm font-semibold text-slate-700">
          Author role (optional)
          <input
            name="authorRole"
            maxLength={120}
            defaultValue={article?.authorRole}
            className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2.5 font-normal"
          />
        </label>

        <label className="text-sm font-semibold text-slate-700 sm:col-span-2">
          Excerpt
          <textarea
            name="excerpt"
            required
            maxLength={1000}
            rows={2}
            defaultValue={article?.excerpt}
            className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2.5 font-normal"
          />
        </label>

        <label className="text-sm font-semibold text-slate-700 sm:col-span-2">
          Article content
          <textarea
            name="content"
            required
            maxLength={50000}
            rows={12}
            defaultValue={article?.content}
            className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2.5 font-normal"
          />
          <span className="mt-1 block text-xs font-normal text-slate-500">
            Plain text is supported; line breaks and paragraphs are preserved.
            Reading time is estimated automatically.
          </span>
        </label>

        <label className="text-sm font-semibold text-slate-700 sm:col-span-2">
          Tags
          <input
            name="tags"
            maxLength={2000}
            placeholder="Separate tags with commas"
            defaultValue={article?.tags.join(", ")}
            className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2.5 font-normal"
          />
        </label>

        <label className="text-sm font-semibold text-slate-700">
          Publication date
          <input
            name="publishedAt"
            type="date"
            required
            defaultValue={
              article?.publishedAt ?? new Date().toISOString().slice(0, 10)
            }
            className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2.5 font-normal"
          />
        </label>

        <fieldset className="grid gap-3 text-sm text-slate-700">
          <legend className="mb-2 font-semibold">Display options</legend>
          <label className="flex items-center gap-2">
            <input
              name="isPublished"
              type="checkbox"
              defaultChecked={article?.isPublished ?? false}
              className="h-4 w-4 accent-blue-600"
            />
            Published on the public blog
          </label>
          <label className="flex items-center gap-2">
            <input
              name="isFeatured"
              type="checkbox"
              defaultChecked={article?.isFeatured ?? false}
              className="h-4 w-4 accent-blue-600"
            />
            Feature in the featured section
          </label>
        </fieldset>

        {state?.error && (
          <p role="alert" className="text-sm font-medium text-red-700 sm:col-span-2">
            {state.error}
          </p>
        )}
        {state?.message && (
          <p role="status" className="text-sm font-medium text-green-700 sm:col-span-2">
            {state.message}
          </p>
        )}

        <div className="sm:col-span-2">
          <button
            type="submit"
            disabled={pending || imageUploading}
            className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-wait disabled:opacity-60"
          >
            {imageUploading
              ? "Uploading image..."
              : pending
                ? "Saving..."
                : "Save article"}
          </button>
        </div>
      </form>
    </section>
  );
}
