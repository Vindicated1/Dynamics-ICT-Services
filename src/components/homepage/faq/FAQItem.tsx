"use client";

import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { FAQItem as FAQItemType } from "@/data/faq";

interface Props {
  item: FAQItemType;
  open: boolean;
  onToggle: () => void;
}

export default function FAQItem({
  item,
  open,
  onToggle,
}: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between px-8 py-6 text-left"
      >
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
            {item.category}
          </p>

          <h3 className="text-lg font-semibold text-slate-900">
            {item.question}
          </h3>
        </div>

        <motion.div
          animate={{
            rotate: open ? 180 : 0,
          }}
        >
          <ChevronDown />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            <div className="border-t border-slate-100 px-8 py-6 leading-8 text-slate-600">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}