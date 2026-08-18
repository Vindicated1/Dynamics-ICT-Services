import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";

interface SolutionOverviewProps {
  overview: string;
}

export default function SolutionOverview({
  overview,
}: SolutionOverviewProps) {
  return (
    <Section background="white">
      <Container>
        <SectionHeading
          badge="OVERVIEW"
          title="Solution Overview"
          description="A comprehensive technology solution designed for modern organizations."
          centered
        />

        <div className="mx-auto mt-16 max-w-4xl">
          <p className="text-center text-lg leading-9 text-slate-600">
            {overview}
          </p>
        </div>
      </Container>
    </Section>
  );
}