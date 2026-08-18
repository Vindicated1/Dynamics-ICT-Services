"use client";

import { motion } from "framer-motion";

interface Props {
  technology: string;
}

export default function TechnologyCard({
  technology,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-xl border border-blue-100 bg-blue-50 px-5 py-4 text-center font-semibold text-blue-700"
    >
      {technology}
    </motion.div>
  );
}