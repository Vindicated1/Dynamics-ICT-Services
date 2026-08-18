import Container from "@/components/common/Container";
import Section from "@/components/common/Section";

import OverviewContent from "./OverviewContent";

export default function Overview() {
  return (
    <Section background="white">
      <Container>
        <div className="max-w-4xl">
          <OverviewContent />
        </div>
      </Container>
    </Section>
  );
}