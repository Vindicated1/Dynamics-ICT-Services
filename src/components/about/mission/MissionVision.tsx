import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";

import MissionGrid from "./MissionGrid";

export default function MissionVision() {
  return (
    <Section background="gray">
      <Container>
        <SectionHeading
          badge="MISSION & VISION"
          title="Guided by Purpose. Driven by Excellence."
          description="Our mission and vision define who we are and inspire every technology solution we deliver."
          centered
        />

        <MissionGrid />
      </Container>
    </Section>
  );
}