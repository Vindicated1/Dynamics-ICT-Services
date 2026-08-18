"use client";

import { motion } from "framer-motion";

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  isLast?: boolean;
}

export default function TimelineItem({
  year,
  title,
  description,
  isLast = false,
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative flex gap-8"
    >
      {/* Timeline */}
      <div className="flex flex-col items-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white shadow-lg">
          {year}
        </div>

        {!isLast && (
          <div className="mt-2 h-full w-1 bg-blue-200" />
        )}
      </div>

      {/* Content */}
      <div className="pb-12">
        <h3 className="text-2xl font-bold text-slate-900">
          {title}
        </h3>

        <p className="mt-3 max-w-3xl leading-8 text-slate-600">
          {description}
        </p>
      </div>
    </motion.div>
  );
}