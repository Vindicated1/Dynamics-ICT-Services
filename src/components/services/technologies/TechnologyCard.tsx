"use client";

import { motion } from "framer-motion";

interface TechnologyCardProps {
  title: string;
  technologies: string[];
}

export default function TechnologyCard({
  title,
  technologies,
}: TechnologyCardProps) {
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
      className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <h3 className="text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <div className="mt-8 flex flex-wrap gap-3">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700"
          >
            {technology}
          </span>
        ))}
      </div>
    </motion.div>
  );
}