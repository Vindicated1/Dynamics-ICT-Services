import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";

import { solutions } from "@/data/solutions/solutions";

import IndustryCard from "./IndustryCard";

export default function IndustriesGrid() {
  return (
    <Section background="white">
      <Container>
        <SectionHeading
          badge="INDUSTRY SOLUTIONS"
          title="Technology Solutions by Industry"
          description="Every industry has unique challenges. We provide integrated solutions designed specifically for your sector."
          centered
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {solutions.map((solution) => (
            <IndustryCard
              key={solution.slug}
              solution={solution}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}