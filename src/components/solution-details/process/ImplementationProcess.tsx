import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";

import ProcessCard from "./ProcessCard";

interface Props {
  process: string[];
}

export default function ImplementationProcess({
  process,
}: Props) {
  return (
    <Section background="white">
      <Container>
        <SectionHeading
          badge="IMPLEMENTATION"
          title="Our Delivery Process"
          description="A proven process that ensures successful project delivery."
          centered
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-5">
          {process.map((step, index) => (
            <ProcessCard
              key={step}
              step={step}
              number={index + 1}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}