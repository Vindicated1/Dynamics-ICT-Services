import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";

import MetricCard from "./MetricCard";

interface Metric {
  value: string;
  label: string;
}

interface Props {
  metrics: Metric[];
}

export default function ProjectMetrics({
  metrics,
}: Props) {
  return (
    <Section background="white">
      <Container>
        <SectionHeading
          badge="PROJECT IMPACT"
          title="Measured Results"
          description="Key performance indicators achieved after implementation."
          centered
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
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