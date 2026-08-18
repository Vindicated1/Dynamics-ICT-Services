"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface Props {
  feature: string;
}

export default function ServiceFeatureCard({
  feature,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
    >
      <CheckCircle2
        size={30}
        className="text-blue-600"
      />

      <h3 className="mt-5 text-lg font-semibold text-slate-900">
        {feature}
      </h3>
    </motion.div>
  );
}