import SectionHeading from "@/components/common/SectionHeading";
import { prisma } from "@/lib/prisma";

import ProjectCard from "./ProjectCard";

export default async function ProjectsGrid() {
  const projects = await prisma.project.findMany({
    where: {
      isPublished: true,
      showOnProjects: true,
    },
    orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
  });

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Work"
          title="Projects We've Delivered"
          description="Explore some of the technology solutions delivered by Dynamics ICT Services."
        />

        {projects.length > 0 ? (
          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <p className="mt-16 text-center text-slate-600">
            Project highlights will be published here soon.
          </p>
        )}
      </div>
    </section>
  );
}