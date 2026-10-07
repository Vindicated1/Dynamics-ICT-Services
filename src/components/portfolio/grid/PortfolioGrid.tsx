import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";
import { prisma } from "@/lib/prisma";

import ProjectCard from "./ProjectCard";

export default async function PortfolioGrid() {
  const projects = await prisma.project.findMany({
    where: {
      isPublished: true,
      showOnProjects: true,
    },
    orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
  });

  return (
    <Section background="white">
      <Container>
        <SectionHeading
          badge="OUR PROJECTS"
          title="Selected Projects"
          description="A selection of projects delivered for clients across multiple industries."
          centered
        />

        {projects.length > 0 ? (
          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                slug={project.slug}
                title={project.title}
                category={project.category}
                image={project.image}
                shortDescription={project.description}
              />
            ))}
          </div>
        ) : (
          <p className="mt-16 text-center text-slate-600">
            Project highlights will be published here soon.
          </p>
        )}
      </Container>
    </Section>
  );
}