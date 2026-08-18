import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";

import TechnologyCard from "./TechnologyCard";

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
          badge="TECHNOLOGIES"
          title="Technologies We Use"
          description="Enterprise-grade technologies powering this solution."
          centered
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3 xl:grid-cols-6">
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