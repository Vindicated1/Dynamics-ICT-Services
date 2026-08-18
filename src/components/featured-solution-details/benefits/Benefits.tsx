import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";

import BenefitCard from "./BenefitCard";

interface BenefitsProps {
  benefits: string[];
}

export default function Benefits({
  benefits,
}: BenefitsProps) {
  return (
    <Section background="white">
      <Container>
        <SectionHeading
          badge="BENEFITS"
          title="Business Benefits"
          description="The measurable value this solution delivers."
          centered
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {benefits.map((benefit) => (
            <BenefitCard
              key={benefit}
              benefit={benefit}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}