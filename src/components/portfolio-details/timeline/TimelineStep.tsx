"use client";

import { motion } from "framer-motion";

interface TimelineStepProps {
  title: string;
  duration: string;
}

export default function TimelineStep({
  title,
  duration,
}: TimelineStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <span className="text-sm font-semibold text-blue-600">
        {duration}
      </span>

      <h3 className="mt-2 text-xl font-bold text-slate-900">
        {title}
      </h3>
    </motion.div>
  );
}