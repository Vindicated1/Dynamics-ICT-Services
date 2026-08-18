import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";

import MetricCard from "./MetricCard";

interface Props {
  metrics: {
    value: string;
    label: string;
  }[];
}

export default function SuccessMetrics({
  metrics,
}: Props) {
  return (
    <Section background="dark">
      <Container>
        <SectionHeading
          badge="RESULTS"
          title="Business Impact"
          description="The measurable results organizations achieve after implementing this solution."
          centered
          light
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric) => (
            <MetricCard
              key={metric.label}
              value={metric.value}
              label={metric.label}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}