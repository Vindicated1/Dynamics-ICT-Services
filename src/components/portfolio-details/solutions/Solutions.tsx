import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";

interface Props {
  solutions: string[];
}

export default function Solutions({
  solutions,
}: Props) {
  return (
    <Section background="white">
      <Container>
        <SectionHeading
          badge="SOLUTIONS"
          title="Solution Delivered"
          description="How Dynamics ICT Services solved the problem."
          centered
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {solutions.map((solution) => (
            <div
              key={solution}
              className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm"
            >
              ✓ {solution}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}