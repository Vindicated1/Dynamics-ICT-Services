"use client";

import { motion } from "framer-motion";
import { ctaStats } from "@/data/homepage/cta";

export default function CTAStats() {
  return (
    <div className="relative z-10 mt-20 grid grid-cols-2 gap-6 lg:grid-cols-4">
      {ctaStats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.15,
          }}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-md"
        >
          <h3 className="text-5xl font-bold text-blue-400">
            {stat.value}
          </h3>

          <p className="mt-3 text-slate-300">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}