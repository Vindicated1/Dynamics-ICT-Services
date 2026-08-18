"use client";

import Image from "next/image";
import Link from "next/link";

import { portfolioProjects } from "@/data/homepage/portfolio";

export default function FeaturedProject() {
  const project = portfolioProjects.find((p) => p.featured);

  if (!project) return null;

  return (
    <div className="mb-20 overflow-hidden rounded-[36px] bg-slate-900 text-white lg:grid lg:grid-cols-2">
      <div className="relative h-96">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col justify-center p-12">
        <span className="font-semibold uppercase tracking-widest text-blue-400">
          Featured Project
        </span>

        <h2 className="mt-4 text-4xl font-bold">
          {project.title}
        </h2>

        <p className="mt-6 text-slate-300">
          {project.description}
        </p>

        <Link
          href={project.href}
          className="mt-8 inline-flex w-fit rounded-xl bg-blue-600 px-6 py-4 font-semibold"
        >
          View Project
        </Link>
      </div>
    </div>
  );
}