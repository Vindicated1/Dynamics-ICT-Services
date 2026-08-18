import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";

import BenefitCard from "./BenefitCard";

interface Props {
  benefits: string[];
}

export default function Benefits({
  benefits,
}: Props) {
  return (
    <Section background="white">
      <Container>
        <SectionHeading
          badge="BENEFITS"
          title="Business Value"
          description="Our solutions are designed to deliver measurable results and long-term value."
          centered
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
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