import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";

import ChallengeCard from "./ChallengeCard";

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
          badge="COMMON CHALLENGES"
          title="Problems We Solve"
          description="The technology challenges commonly faced by organizations in this industry."
          centered
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {challenges.map((challenge) => (
            <ChallengeCard
              key={challenge}
              challenge={challenge}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}