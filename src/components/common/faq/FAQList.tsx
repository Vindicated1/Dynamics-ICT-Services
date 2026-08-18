"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { faqs } from "@/data/faq";

export default function FAQList() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
    >
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
        >
          <AccordionTrigger>
            {faq.question}
          </AccordionTrigger>

          <AccordionContent>
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}