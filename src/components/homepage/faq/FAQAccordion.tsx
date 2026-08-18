"use client";

import { useState } from "react";

import type { FAQItem as FAQType } from "@/data/faq";

import FAQItem from "./FAQItem";

interface Props {
  items: FAQType[];
}

export default function FAQAccordion({
  items,
}: Props) {
  const [open, setOpen] = useState<string | null>("1");

  return (
    <div className="mt-16 space-y-5">
      {items.map((item) => (
        <FAQItem
          key={item.id}
          item={item}
          open={open === item.id}
          onToggle={() =>
            setOpen(open === item.id ? null : item.id)
          }
        />
      ))}
    </div>
  );
}