"use client";

import Link from "next/link";
import { useActionState, useState } from "react";

import ImageUploadField from "@/components/admin/ImageUploadField";
import {
  saveProject,
  type ProjectFormState,
} from "./actions";

type ProjectFormValues = {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  image: string;
  location: string;
  year: string;
  services: string[];
  showOnProjects: boolean;
  showOnHomepage: boolean;
  isFeatured: boolean;
  sortOrder: number;
};

interface Props {
  project?: ProjectFormValues;
}

export default function ProjectForm({ project }: Props) {
  const [imageUploading, setImageUploading] = useState(false);
  const [state, action, pending] = useActionState<ProjectFormState, FormData>(
    saveProject,
    null,
  );

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            {project ? "Edit project" : "Add a project"}
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Saved projects update the selected public website sections.
          </p>
        </div>
        {project && (
          <Link
            href="/admin/projects"
            className="text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            Cancel editing
          </Link>
        )}
      </div>

      <form action={action} className="mt-6 grid gap-5 sm:grid-cols-2">
        {project && <input type="hidden" name="id" value={project.id} />}

        <label className="text-sm font-semibold text-slate-700">
          Project title
          <input
            name="title"
            required
            maxLength={160}
            defaultValue={project?.title}
            className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2.5 font-normal"
          />
        </label>

        <label className="text-sm font-semibold text-slate-700">
          URL slug
          <input
            name="slug"
            maxLength={180}
            placeholder="generated-from-title"
            defaultValue={project?.slug}
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
            maxLength={80}
            defaultValue={project?.category}
            className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2.5 font-normal"
          />
        </label>

        <ImageUploadField
          initialValue={project?.image ?? ""}
          label="Project image"
          onUploadingChange={setImageUploading}
          required={!project?.image}
          scope="project"
        />

        <label className="text-sm font-semibold text-slate-700">
          Location (optional)
          <input
            name="location"
            maxLength={160}
            defaultValue={project?.location}
            className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2.5 font-normal"
          />
        </label>

        <label className="text-sm font-semibold text-slate-700">
          Year (optional)
          <input
            name="year"
            maxLength={20}
            defaultValue={project?.year}
            className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2.5 font-normal"
          />
        </label>

        <label className="text-sm font-semibold text-slate-700 sm:col-span-2">
          Description
          <textarea
            name="description"
            required
            maxLength={5000}
            rows={4}
            defaultValue={project?.description}
            className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2.5 font-normal"
          />
        </label>

        <label className="text-sm font-semibold text-slate-700 sm:col-span-2">
          Services or technologies
          <textarea
            name="services"
            rows={2}
            maxLength={1000}
            placeholder="Separate entries with commas"
            defaultValue={project?.services.join(", ")}
            className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2.5 font-normal"
          />
        </label>

        <label className="text-sm font-semibold text-slate-700">
          Display order
          <input
            name="sortOrder"
            type="number"
            min={0}
            max={100000}
            step={1}
            defaultValue={project?.sortOrder ?? 0}
            className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2.5 font-normal"
          />
        </label>

        <fieldset className="grid gap-3 text-sm text-slate-700 sm:col-span-2 sm:grid-cols-2">
          <legend className="mb-3 font-semibold">Show this project on</legend>
          <label className="flex items-center gap-2">
            <input
              name="showOnProjects"
              type="checkbox"
              defaultChecked={project?.showOnProjects ?? true}
              className="h-4 w-4 accent-blue-600"
            />
            Public Projects and Portfolio pages and their detail pages
          </label>
          <label className="flex items-center gap-2">
            <input
              name="showOnHomepage"
              type="checkbox"
              defaultChecked={project?.showOnHomepage ?? false}
              className="h-4 w-4 accent-blue-600"
            />
            Homepage portfolio
          </label>
          <label className="flex items-center gap-2 sm:col-span-2">
            <input
              name="isFeatured"
              type="checkbox"
              defaultChecked={project?.isFeatured ?? false}
              className="h-4 w-4 accent-blue-600"
            />
            Feature this project in the homepage portfolio
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
                : project
                  ? "Save changes"
                  : "Add project"}
          </button>
        </div>
      </form>
    </section>
  );
}
