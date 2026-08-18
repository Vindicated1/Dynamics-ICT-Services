import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";

import { companyTimeline } from "@/data/about/timeline";

import TimelineItem from "./TimelineItem";

export default function CompanyTimeline() {
  return (
    <Section background="gray">
      <Container>
        <SectionHeading
          badge="OUR JOURNEY"
          title="A Timeline of Innovation and Growth"
          description="Over the years, Dynamics ICT Services has evolved into a trusted technology partner, consistently delivering impactful solutions across multiple industries."
          centered
        />

        <div className="mx-auto mt-20 max-w-5xl space-y-2">
          {companyTimeline.map((item, index) => (
            <TimelineItem
              key={item.year}
              {...item}
              isLast={index === companyTimeline.length - 1}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}