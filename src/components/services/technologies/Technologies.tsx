import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";

import TechnologyGrid from "./TechnologyGrid";

export default function Technologies() {
  return (
    <Section background="gray">
      <Container>
        <SectionHeading
          badge="TECHNOLOGY STACK"
          title="Technologies We Use"
          description="We leverage modern frameworks, cloud platforms, networking solutions, and security technologies to deliver scalable, secure, and future-ready ICT solutions."
          centered
        />

        <TechnologyGrid />
      </Container>
    </Section>
  );
}