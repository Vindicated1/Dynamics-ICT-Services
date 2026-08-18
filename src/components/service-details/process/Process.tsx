import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";

import ProcessStep from "./ProcessStep";

interface Props {
  process: string[];
}

export default function Process({
  process,
}: Props) {
  return (
    <Section background="white">
      <Container>
        <SectionHeading
          badge="OUR PROCESS"
          title="How We Deliver"
          description="A proven development workflow ensures every project is delivered on time, on budget, and to the highest quality standards."
          centered
        />

        <div className="mt-16 space-y-6">
          {process.map((step, index) => (
            <ProcessStep
              key={step}
              number={index + 1}
              title={step}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}