import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@prisma/client";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Project Image */}
      <Link href={`/projects/${project.slug}`}>
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        </div>
      </Link>

      {/* Project Content */}
      <div className="p-6">
        <p className="text-sm font-semibold text-blue-600">
          {project.category}
        </p>

        <Link href={`/projects/${project.slug}`}>
          <h2 className="mt-2 text-xl font-bold text-slate-900 transition-colors group-hover:text-blue-600">
            {project.title}
          </h2>
        </Link>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
          {project.description}
        </p>

        {/* Project Meta */}
        <div className="mt-4 flex flex-wrap gap-3 text-xs text-slate-500">
          {project.location && (
            <span>{project.location}</span>
          )}

          {project.year && (
            <span>• {project.year}</span>
          )}
        </div>

        {/* Services */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.services.slice(0, 2).map((service) => (
            <span
              key={service}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
            >
              {service}
            </span>
          ))}
        </div>

        {/* View Project */}
        <Link
          href={`/projects/${project.slug}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700"
        >
          View Project
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}