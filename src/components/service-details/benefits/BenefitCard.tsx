"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

interface BenefitCardProps {
  benefit: string;
}

export default function BenefitCard({
  benefit,
}: BenefitCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <TrendingUp
        size={34}
        className="mx-auto text-orange-500"
      />

      <p className="mt-6 text-lg font-semibold text-slate-800">
        {benefit}
      </p>
    </motion.div>
  );
}