"use client";

import { motion } from "framer-motion";

interface MetricCardProps {
  value: string;
  label: string;
}

export default function MetricCard({
  value,
  label,
}: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm"
    >
      <div className="text-4xl font-extrabold text-blue-600">
        {value}
      </div>

      <div className="mt-3 text-slate-600">
        {label}
      </div>
    </motion.div>
  );
}