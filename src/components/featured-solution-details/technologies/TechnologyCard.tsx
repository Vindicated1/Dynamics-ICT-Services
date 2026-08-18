"use client";

import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

interface Props {
  technology: string;
}

export default function TechnologyCard({
  technology,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
    >
      <Cpu
        className="mx-auto text-blue-600"
        size={36}
      />

      <h3 className="mt-5 text-lg font-semibold text-slate-900">
        {technology}
      </h3>
    </motion.div>
  );
}