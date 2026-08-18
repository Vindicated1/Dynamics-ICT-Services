import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";

import CertificationsGrid from "./CertificationsGrid";

export default function Certifications() {
  return (
    <Section background="gray">
      <Container>
        <SectionHeading
          badge="CERTIFICATIONS & PARTNERS"
          title="Trusted Technologies. Recognized Expertise."
          description="We leverage globally recognized technologies and industry best practices to deliver secure, scalable and innovative ICT solutions."
          centered
        />

        <CertificationsGrid />
      </Container>
    </Section>
  );
}