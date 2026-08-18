import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";

import FeatureCard from "./FeatureCard";

interface Props {
  features: string[];
}

export default function Features({
  features,
}: Props) {
  return (
    <Section background="gray">
      <Container>
        <SectionHeading
          badge="FEATURES"
          title="What This Service Includes"
          description="Every project is delivered using proven methodologies, modern technologies, and industry best practices."
          centered
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <FeatureCard
              key={feature}
              feature={feature}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}