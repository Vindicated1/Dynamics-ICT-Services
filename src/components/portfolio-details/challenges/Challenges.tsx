import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";

interface Props {
  challenges: string[];
}

export default function Challenges({
  challenges,
}: Props) {
  return (
    <Section background="gray">
      <Container>
        <SectionHeading
          badge="CHALLENGES"
          title="Challenges"
          description="Problems identified before implementation."
          centered
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {challenges.map((challenge) => (
            <div
              key={challenge}
              className="rounded-2xl border border-red-100 bg-white p-6 shadow-sm"
            >
              {challenge}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}