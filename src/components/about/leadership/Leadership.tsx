import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";

import LeadershipGrid from "./LeadershipGrid";

export default function Leadership() {
  return (
    <Section background="white">
      <Container>
        <SectionHeading
          badge="OUR LEADERSHIP"
          title="Meet the Leadership Team"
          description="Our experienced professionals are passionate about delivering innovative technology solutions that empower businesses to thrive."
          centered
        />

        <LeadershipGrid />
      </Container>
    </Section>
  );
}