"use client";

import { motion } from "framer-motion";

interface TechnologyChipProps {
  technology: string;
}

export default function TechnologyChip({
  technology,
}: TechnologyChipProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="rounded-full border border-blue-200 bg-blue-50 px-5 py-3 text-sm font-semibold text-blue-700 transition-all duration-300 hover:bg-blue-600 hover:text-white"
    >
      {technology}
    </motion.div>
  );
}