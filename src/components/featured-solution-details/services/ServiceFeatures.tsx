import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";

import ServiceFeatureCard from "./ServiceFeatureCard";

interface Props {
  features: string[];
}

export default function ServiceFeatures({
  features,
}: Props) {
  return (
    <Section background="gray">
      <Container>
        <SectionHeading
          badge="FEATURES"
          title="What's Included"
          description="Everything included in this solution."
          centered
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <ServiceFeatureCard
              key={feature}
              feature={feature}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}