"use client";

import { motion } from "framer-motion";
import { ctaContent } from "@/data/homepage/cta";

export default function CTAHeader() {
  return (
    <motion.div
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
        duration: 0.7,
      }}
      className="relative z-10 text-center"
    >
      <span className="inline-flex rounded-full border border-blue-400/40 bg-blue-500/10 px-6 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-300 backdrop-blur-md">
        {ctaContent.badge}
      </span>

      <h2 className="mx-auto mt-8 max-w-5xl text-4xl font-extrabold leading-tight text-white md:text-6xl">
        {ctaContent.title}
      </h2>

      <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-300 md:text-xl">
        {ctaContent.description}
      </p>
    </motion.div>
  );
}