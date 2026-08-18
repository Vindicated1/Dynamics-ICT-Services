"use client";

import { motion } from "framer-motion";

import type { Advantage } from "@/data/homepage/whyChooseUs";

interface Props {
  advantage: Advantage;
}

export default function AdvantageCard({
  advantage,
}: Props) {
  const Icon = advantage.icon;

  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: .3,
      }}
      className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-xl"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 transition-colors duration-300 group-hover:bg-blue-600">
        <Icon
          size={30}
          className="text-blue-600 transition-colors duration-300 group-hover:text-white"
        />
      </div>

      <h3 className="mt-6 text-xl font-bold text-slate-900">
        {advantage.title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {advantage.description}
      </p>
    </motion.div>
  );
}