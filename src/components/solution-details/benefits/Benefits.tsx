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
    <Section background="gray">
      <Container>
        <SectionHeading
          badge="KEY BENEFITS"
          title="Business Benefits"
          description="How your organization benefits from our integrated technology solutions."
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