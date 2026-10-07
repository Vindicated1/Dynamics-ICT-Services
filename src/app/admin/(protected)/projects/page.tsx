import Link from "next/link";
import { notFound } from "next/navigation";
import { FolderKanban } from "lucide-react";

import { prisma } from "@/lib/prisma";
import ProjectForm from "./ProjectForm";
import { setProjectPublication } from "./actions";

interface Props {
  searchParams: Promise<{ edit?: string }>;
}

export default async function AdminProjectsPage({ searchParams }: Props) {
  const { edit } = await searchParams;
  const [projects, editingProject] = await Promise.all([
    prisma.project.findMany({
      orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
    }),
    edit
      ? prisma.project.findUnique({
          where: { id: edit },
        })
      : Promise.resolve(null),
  ]);

  if (edit && !editingProject) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl space-y-10 px-6 py-10 lg:px-8">
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
            Project management
          </h1>
          <p className="mt-2 text-slate-600">
            Manage projects displayed on the public Projects and Portfolio pages, plus homepage highlights.
          </p>
        </div>

        <ProjectForm
          project={
            editingProject
              ? {
                  id: editingProject.id,
                  title: editingProject.title,
                  slug: editingProject.slug,
                  category: editingProject.category,
                  description: editingProject.description,
                  image: editingProject.image,
                  location: editingProject.location ?? "",
                  year: editingProject.year ?? "",
                  services: editingProject.services,
                  showOnProjects: editingProject.showOnProjects,
                  showOnHomepage: editingProject.showOnHomepage,
                  isFeatured: editingProject.isFeatured,
                  sortOrder: editingProject.sortOrder,
                }
              : undefined
          }
        />

        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
            <div>
              <h2 className="text-xl font-bold text-slate-900">All projects</h2>
              <p className="mt-1 text-sm text-slate-500">
                {projects.length} {projects.length === 1 ? "project" : "projects"} · ordered by display order
              </p>
            </div>
            <FolderKanban className="h-6 w-6 text-blue-600" />
          </div>

          {projects.length === 0 ? (
            <p className="px-6 py-12 text-center text-sm text-slate-500">
              No projects have been created yet.
            </p>
          ) : (
            <ul className="divide-y divide-slate-100">
              {projects.map((project) => (
                <li
                  key={project.id}
                  className="flex flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-semibold text-slate-900">
                        {project.title}
                      </h3>
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                          project.isPublished
                            ? "bg-green-50 text-green-700"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {project.isPublished ? "Published" : "Unpublished"}
                      </span>
                    </div>
                    <p className="mt-1 truncate text-sm text-slate-500">
                      {project.category} · /projects/{project.slug}
                    </p>
                    <p className="mt-2 text-xs text-slate-500">
                      {project.showOnProjects ? "Projects page" : ""}
                      {project.showOnProjects && project.showOnHomepage ? " · " : ""}
                      {project.showOnHomepage ? "Homepage portfolio" : ""}
                      {!project.showOnProjects && !project.showOnHomepage
                        ? "Not featured in public listings"
                        : ""}
                      {project.isFeatured ? " · Homepage feature" : ""}
                    </p>
                  </div>

                  <div className="flex shrink-0 items-center gap-3">
                    <Link
                      href={`/admin/projects?edit=${encodeURIComponent(project.id)}`}
                      className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                    >
                      Edit
                    </Link>
                    <form action={setProjectPublication}>
                      <input type="hidden" name="id" value={project.id} />
                      <input
                        type="hidden"
                        name="published"
                        value={String(!project.isPublished)}
                      />
                      <button
                        type="submit"
                        className={`rounded-lg px-4 py-2 text-sm font-semibold ${
                          project.isPublished
                            ? "border border-amber-200 text-amber-800 hover:bg-amber-50"
                            : "bg-blue-600 text-white hover:bg-blue-700"
                        }`}
                      >
                        {project.isPublished ? "Unpublish" : "Publish"}
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
