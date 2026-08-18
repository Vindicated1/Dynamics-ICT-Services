"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import type { Industry } from "@/data/industries";

interface Props {
  industry: Industry;
}

export default function IndustryCard({
  industry,
}: Props) {
  const Icon = industry.icon;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-xl"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 transition-all duration-300 group-hover:bg-blue-600">
        <Icon
          size={30}
          className="text-blue-600 transition-colors duration-300 group-hover:text-white"
        />
      </div>

      <h3 className="mt-6 text-xl font-bold text-slate-900">
        {industry.title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {industry.description}
      </p>

      <Link
        href={industry.href}
        className="mt-6 inline-flex items-center font-semibold text-blue-600"
      >
        Learn More

        <ArrowRight
          size={18}
          className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>
    </motion.div>
  );
}