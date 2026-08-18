"use client";

import { motion } from "framer-motion";

interface Props {
  step: string;
  number: number;
}

export default function ProcessCard({
  step,
  number,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
        {number}
      </div>

      <h3 className="mt-6 text-xl font-bold text-slate-900">
        {step}
      </h3>
    </motion.div>
  );
}