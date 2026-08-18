"use client";

import { motion } from "framer-motion";

interface Props {
  number: number;
  title: string;
}

export default function ProcessStep({
  number,
  title,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -25 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex items-center gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
        {number}
      </div>

      <span className="text-lg font-semibold text-slate-800">
        {title}
      </span>
    </motion.div>
  );
}