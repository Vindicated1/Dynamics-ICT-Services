"use client";

import { useMemo, useState } from "react";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";

import { faqs } from "@/data/homepage/faq";

import FAQHeader from "./FAQHeader";
import FAQSearch from "./FAQSearch";
import FAQAccordion from "./FAQAccordion";
import FAQCTA from "./FAQCTA";

export default function FAQ() {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!search) return faqs;

    return faqs.filter(
      (faq) =>
        faq.question
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        faq.answer
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        faq.category
          .toLowerCase()
          .includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <Section
      background="white"
      className="relative overflow-hidden"
    >
      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-blue-500/5 blur-[180px]" />

      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-400/5 blur-[180px]" />

      <Container>
        <FAQHeader />

        <FAQSearch
          value={search}
          onChange={setSearch}
        />

        <FAQAccordion items={filtered} />

        <FAQCTA />
      </Container>
    </Section>
  );
}