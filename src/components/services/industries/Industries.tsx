import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";

import IndustriesGrid from "./IndustriesGrid";

export default function Industries() {
  return (
    <Section background="white">
      <Container>
        <SectionHeading
          badge="INDUSTRIES"
          title="Industries We Serve"
          description="Our multidisciplinary team delivers tailored technology solutions for organizations across diverse industries."
          centered
        />

        <IndustriesGrid />
      </Container>
    </Section>
  );
}