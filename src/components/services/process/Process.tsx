import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";

import ProcessTimeline from "./ProcessTimeline";

export default function Process() {
  return (
    <Section background="white">
      <Container>
        <SectionHeading
          badge="OUR PROCESS"
          title="How We Deliver Successful Projects"
          description="Every solution follows a structured process that ensures quality, transparency, and long-term success."
          centered
        />

        <ProcessTimeline />
      </Container>
    </Section>
  );
}