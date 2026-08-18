import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";

import TechnologyCard from "./TechnologyCard";

interface Props {
  technologies: string[];
}

export default function ProjectTechnologies({
  technologies,
}: Props) {
  return (
    <Section background="gray">
      <Container>
        <SectionHeading
          badge="TECHNOLOGY STACK"
          title="Technologies Used"
          description="Industry-standard technologies used throughout the project."
          centered
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {technologies.map((technology) => (
            <TechnologyCard
              key={technology}
              technology={technology}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}