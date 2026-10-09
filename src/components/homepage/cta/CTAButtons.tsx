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
      className="relative z-10 mt-8 flex flex-col justify-center gap-4 sm:mt-12 sm:flex-row sm:gap-5"
    >
      <Link
        href={ctaContent.primaryButton.href}
        className="inline-flex w-full items-center justify-center rounded-2xl bg-blue-600 px-5 py-4 text-base font-semibold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-blue-700 sm:w-auto sm:px-9 sm:py-5 sm:text-lg"
      >
        {ctaContent.primaryButton.label}

        <PrimaryIcon
          className="ml-3"
          size={20}
        />
      </Link>

      <Link
        href={ctaContent.secondaryButton.href}
        className="inline-flex w-full items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-blue-500 hover:bg-white hover:text-slate-900 sm:w-auto sm:px-9 sm:py-5 sm:text-lg"
      >
        {ctaContent.secondaryButton.label}
      </Link>
    </motion.div>
  );
}