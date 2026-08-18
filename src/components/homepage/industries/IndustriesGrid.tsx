"use client";

import { motion } from "framer-motion";

import { industries } from "@/data/homepage/industries";

import IndustryCard from "./IndustryCard";

export default function IndustriesGrid() {
  return (
    <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
      {industries.map((industry, index) => (
        <motion.div
          key={industry.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.08,
          }}
        >
          <IndustryCard industry={industry} />
        </motion.div>
      ))}
    </div>
  );
}