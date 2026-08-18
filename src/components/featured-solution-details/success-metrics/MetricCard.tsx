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
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      className="rounded-3xl bg-slate-900 p-10 text-center"
    >
      <div className="text-5xl font-bold text-blue-400">
        {value}
      </div>

      <p className="mt-4 text-slate-300">
        {label}
      </p>
    </motion.div>
  );
}