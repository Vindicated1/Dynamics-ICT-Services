import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";

import FAQItem from "./FAQItem";

interface FAQ {
  question: string;
  answer: string;
}

interface Props {
  faqs: FAQ[];
}

export default function FAQ({
  faqs,
}: Props) {
  if (!faqs.length) {
    return null;
  }

  return (
    <Section background="white">
      <Container>
        <SectionHeading
          badge="FAQ"
          title="Frequently Asked Questions"
          centered
        />

        <div className="mx-auto mt-16 max-w-4xl space-y-5">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}