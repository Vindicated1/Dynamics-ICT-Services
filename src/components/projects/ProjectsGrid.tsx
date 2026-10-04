import SectionHeading from "@/components/common/SectionHeading";

import { projects } from "@/data/projects/projects";

import ProjectCard from "./ProjectCard";

export default function ProjectsGrid() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Work"
          title="Projects We've Delivered"
          description="Explore some of the technology solutions delivered by Dynamics ICT Services."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}