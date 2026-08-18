import Container from "@/components/common/Container";
import Section from "@/components/common/Section";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";

interface InnerPageHeroProps {
  title: string;
  subtitle: string;
  breadcrumb: {
    label: string;
    href?: string;
  }[];
}

export default function InnerPageHero({
  title,
  subtitle,
  breadcrumb,
}: InnerPageHeroProps) {
  return (
    <Section
      background="dark"
      className="relative overflow-hidden py-32"
    >
      <HeroBackground />

      <Container>
        <HeroContent
          title={title}
          subtitle={subtitle}
          breadcrumb={breadcrumb}
        />
      </Container>
    </Section>
  );
}