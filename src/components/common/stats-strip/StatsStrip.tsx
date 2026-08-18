import Container from "@/components/common/Container";
import Section from "@/components/common/Section";

import { companyStats } from "@/data/companyStats";

import StatCard from "./StatCard";

export default function StatsStrip() {
  return (
    <Section
      background="gray"
      className="py-20"
    >
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {companyStats.map((stat) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}