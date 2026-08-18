import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";

import TechnologyChip from "./TechnologyChip";

interface Props {
  technologies: string[];
}

export default function Technologies({
  technologies,
}: Props) {
  return (
    <Section background="gray">
      <Container>
        <SectionHeading
          badge="TECHNOLOGY STACK"
          title="Technologies We Use"
          description="Our engineers use industry-leading technologies to build reliable, secure, and scalable solutions."
          centered
        />

        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {technologies.map((technology) => (
            <TechnologyChip
              key={technology}
              technology={technology}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}