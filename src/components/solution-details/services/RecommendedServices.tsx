import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";

import ServiceBadge from "./ServiceBadge";

interface Props {
  services: string[];
}

export default function RecommendedServices({
  services,
}: Props) {
  return (
    <Section background="white">
      <Container>
        <SectionHeading
          badge="OUR SOLUTIONS"
          title="Recommended Services"
          description="Integrated services specifically designed for this industry."
          centered
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceBadge
              key={service}
              service={service}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}