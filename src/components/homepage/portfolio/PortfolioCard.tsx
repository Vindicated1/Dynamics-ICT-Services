"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import type { PortfolioProject } from "@/data/homepage/portfolio";

interface Props {
  project: PortfolioProject;
}

export default function PortfolioCard({ project }: Props) {
  const Icon = project.icon;

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl"
    >
      <div className="relative h-60">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />
      </div>

      <div className="p-8">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
          <Icon className="text-blue-600" size={28} />
        </div>

        <h3 className="text-2xl font-bold">{project.title}</h3>

        <p className="mt-4 text-slate-600">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          href={project.href}
          className="mt-8 inline-flex items-center font-semibold text-blue-600"
        >
          View Case Study
          <ArrowRight size={18} className="ml-2" />
        </Link>
      </div>
    </motion.article>
  );
}