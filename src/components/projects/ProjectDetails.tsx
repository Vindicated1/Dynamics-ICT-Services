import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import type { Project } from "@prisma/client";

import CTA from "@/components/homepage/cta";
import Footer from "@/components/homepage/footer";

interface Props {
  project: Project;
  backHref: string;
  backLabel: string;
}

export default function ProjectDetails({
  project,
  backHref,
  backLabel,
}: Props) {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to {backLabel}
          </Link>

          <div className="mt-10 max-w-4xl">
            <span className="inline-flex rounded-full bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
              {project.category}
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-[16/8] overflow-hidden rounded-3xl bg-slate-100">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:gap-12 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Project Overview
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Delivering Technology That Works
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {project.description}
            </p>

            {project.services.length > 0 && (
              <>
                <h3 className="mt-10 text-xl font-bold text-slate-900">
                  Services Delivered
                </h3>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {project.services.map((service) => (
                    <div
                      key={service}
                      className="flex gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-600" />
                      <span className="text-sm font-medium text-slate-700">
                        {service}
                      </span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          <aside className="h-fit rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-bold text-slate-900">
              Project Details
            </h3>

            <div className="mt-6 space-y-5">
              <div>
                <p className="text-xs font-semibold uppercase text-slate-500">
                  Category
                </p>
                <p className="mt-1 font-medium text-slate-900">
                  {project.category}
                </p>
              </div>

              {project.location && (
                <div>
                  <p className="text-xs font-semibold uppercase text-slate-500">
                    Location
                  </p>
                  <p className="mt-1 font-medium text-slate-900">
                    {project.location}
                  </p>
                </div>
              )}

              {project.year && (
                <div>
                  <p className="text-xs font-semibold uppercase text-slate-500">
                    Year
                  </p>
                  <p className="mt-1 font-medium text-slate-900">
                    {project.year}
                  </p>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="mt-8 flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Start a Project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </aside>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
