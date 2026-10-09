"use client";

import { motion } from "framer-motion";
import { ctaStats } from "@/data/homepage/cta";

export default function CTAStats() {
  return (
    <div className="relative z-10 mt-14 grid grid-cols-2 gap-3 sm:mt-20 sm:gap-6 lg:grid-cols-4">
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
          className="rounded-3xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-md sm:p-6 lg:p-8"
        >
          <h3 className="text-3xl font-bold text-blue-400 sm:text-4xl lg:text-5xl">
            {stat.value}
          </h3>

          <p className="mt-2 text-xs text-slate-300 sm:mt-3 sm:text-sm">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}