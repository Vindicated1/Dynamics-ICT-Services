"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface FeatureCardProps {
  feature: string;
}

export default function FeatureCard({
  feature,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-lg"
    >
      <CheckCircle2
        size={26}
        className="text-blue-600"
      />

      <span className="font-medium text-slate-700">
        {feature}
      </span>
    </motion.div>
  );
}