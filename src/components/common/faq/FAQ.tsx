import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";

import FAQList from "./FAQList";

export default function FAQ() {
  return (
    <Section background="gray">
      <Container>
        <SectionHeading
          badge="FAQ"
          title="Frequently Asked Questions"
          description="Answers to some of the most common questions about our services and how we work."
          centered
        />

        <div className="mx-auto mt-20 max-w-4xl">
          <FAQList />
        </div>
      </Container>
    </Section>
  );
}