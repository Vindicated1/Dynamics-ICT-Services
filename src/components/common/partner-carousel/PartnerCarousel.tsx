import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";

import PartnerRow from "./PartnerRow";

export default function PartnerCarousel() {
  return (
    <Section background="white">
      <Container>
        <SectionHeading
          badge="TECHNOLOGY PARTNERS"
          title="Trusted Technologies We Work With"
          description="We leverage globally recognized technologies and strategic partnerships to deliver secure, scalable, and innovative digital solutions."
          centered
        />

        <div className="mt-20 overflow-hidden">
          <PartnerRow />
        </div>
      </Container>
    </Section>
  );
}