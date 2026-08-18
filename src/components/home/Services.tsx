import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";
import ServiceCard from "./ServiceCard";

import { services } from "@/data/services";

export default function Services() {
  return (
    <Section className="bg-slate-50">
      <Container>
        <SectionHeading
          badge="Our Services"
          title="Technology Solutions That Drive Growth"
          subtitle="We provide end-to-end ICT, energy, and security solutions tailored to your needs."
          center
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}