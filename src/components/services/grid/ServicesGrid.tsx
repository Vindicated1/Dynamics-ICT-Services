import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";

import { services } from "@/data/services/services";

import ServiceCard from "./ServiceCard";

export default function ServicesGrid() {
  return (
    <Section background="gray">
      <Container>
        <SectionHeading
          badge="OUR SERVICES"
          title="Technology Solutions Built Around Your Business"
          description="We provide end-to-end ICT solutions designed to improve productivity, strengthen security, and accelerate digital transformation."
          centered
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.slug}
              {...service}
              index={index}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}