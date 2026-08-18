"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface IndustryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function IndustryCard({
  title,
  description,
  icon: Icon,
}: IndustryCardProps) {
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
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.45,
      }}
      className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 transition-all duration-300 group-hover:bg-blue-600">
        <Icon
          size={30}
          className="text-blue-600 transition-colors duration-300 group-hover:text-white"
        />
      </div>

      <h3 className="mt-8 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-5 leading-7 text-slate-600">
        {description}
      </p>
    </motion.div>
  );
}