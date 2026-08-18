import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";

import { projects } from "@/data/portfolio/projects";

import ProjectCard from "./ProjectCard";

export default function PortfolioGrid() {
  return (
    <Section background="white">
      <Container>
        <SectionHeading
          badge="OUR PROJECTS"
          title="Selected Projects"
          description="A selection of projects delivered for clients across multiple industries."
          centered
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              {...project}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}