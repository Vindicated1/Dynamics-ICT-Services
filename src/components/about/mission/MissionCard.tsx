"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

interface MissionCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function MissionCard({
  title,
  description,
  icon,
}: MissionCardProps) {
  const Icon = icon === "target" ? Target : Eye;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
        <Icon className="text-blue-600" size={30} />
      </div>

      <h3 className="mt-6 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 leading-8 text-slate-600">
        {description}
      </p>
    </motion.div>
  );
}