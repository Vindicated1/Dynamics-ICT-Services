import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";

interface Props {
  overview: string;
}

export default function ProjectOverview({
  overview,
}: Props) {
  return (
    <Section background="white">
      <Container>
        <SectionHeading
          badge="PROJECT OVERVIEW"
          title="Project Summary"
          centered
        />

        <div className="mx-auto mt-12 max-w-4xl">
          <p className="text-lg leading-9 text-slate-600">
            {overview}
          </p>
        </div>
      </Container>
    </Section>
  );
}