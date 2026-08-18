import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";

interface Props {
  outcomes: string[];
}

export default function Outcomes({
  outcomes,
}: Props) {
  return (
    <Section background="gray">
      <Container>
        <SectionHeading
          badge="RESULTS"
          title="Project Outcomes"
          centered
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {outcomes.map((outcome) => (
            <div
              key={outcome}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="font-semibold text-slate-800">
                ✓ {outcome}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}