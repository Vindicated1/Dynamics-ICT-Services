import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";

import ValuesGrid from "./ValuesGrid";

export default function CoreValues() {
  return (
    <Section background="white">
      <Container>
        <SectionHeading
          badge="OUR CORE VALUES"
          title="The Principles That Guide Every Solution"
          description="Our values define how we work, innovate, and build lasting relationships with our clients."
          centered
        />

        <ValuesGrid />
      </Container>
    </Section>
  );
}