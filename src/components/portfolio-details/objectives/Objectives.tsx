import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";

interface Props {
  objectives: string[];
}

export default function Objectives({
  objectives,
}: Props) {
  return (
    <Section background="white">
      <Container>
        <SectionHeading
          badge="OBJECTIVES"
          title="Project Objectives"
          description="The key goals that guided this implementation."
          centered
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {objectives.map((objective) => (
            <div
              key={objective}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              ✓ {objective}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}