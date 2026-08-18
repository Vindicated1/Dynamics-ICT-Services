"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ctaContent } from "@/data/homepage/cta";

export default function CTAButtons() {
  const PrimaryIcon = ctaContent.primaryButton.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: 0.2,
      }}
      className="relative z-10 mt-12 flex flex-col justify-center gap-5 sm:flex-row"
    >
      <Link
        href={ctaContent.primaryButton.href}
        className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-9 py-5 text-lg font-semibold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-blue-700"
      >
        {ctaContent.primaryButton.label}

        <PrimaryIcon
          className="ml-3"
          size={20}
        />
      </Link>

      <Link
        href={ctaContent.secondaryButton.href}
        className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-9 py-5 text-lg font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-blue-500 hover:bg-white hover:text-slate-900"
      >
        {ctaContent.secondaryButton.label}
      </Link>
    </motion.div>
  );
}