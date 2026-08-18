import Container from "@/components/common/Container";
import Section from "@/components/common/Section";

interface Props {
  overview: string;
}

export default function ServiceOverview({
  overview,
}: Props) {
  return (
    <Section background="white">
      <Container>
        <div className="mx-auto max-w-4xl">
          <p className="text-lg leading-9 text-slate-600">
            {overview}
          </p>
        </div>
      </Container>
    </Section>
  );
}