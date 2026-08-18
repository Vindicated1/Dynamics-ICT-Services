"use client";

import { motion } from "framer-motion";
import { CircleCheckBig } from "lucide-react";

interface BenefitCardProps {
  benefit: string;
}

export default function BenefitCard({
  benefit,
}: BenefitCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
    >
      <CircleCheckBig
        className="mt-1 text-emerald-600"
        size={28}
      />

      <span className="text-lg font-medium text-slate-700">
        {benefit}
      </span>
    </motion.div>
  );
}