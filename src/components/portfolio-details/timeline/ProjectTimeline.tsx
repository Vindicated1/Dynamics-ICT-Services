import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";

import TimelineStep from "./TimelineStep";

interface TimelineItem {
  title: string;
  duration: string;
}

interface Props {
  timeline: TimelineItem[];
}

export default function ProjectTimeline({
  timeline,
}: Props) {
  return (
    <Section background="gray">
      <Container>
        <SectionHeading
          badge="PROJECT TIMELINE"
          title="Implementation Timeline"
          description="A structured delivery process from planning to deployment."
          centered
        />

        <div className="mt-16 space-y-6">
          {timeline.map((item) => (
            <TimelineStep
              key={`${item.title}-${item.duration}`}
              title={item.title}
              duration={item.duration}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}