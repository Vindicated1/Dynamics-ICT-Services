"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  ShieldCheck,
  Award,
  Users,
} from "lucide-react";

interface ValueCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function ValueCard({
  title,
  description,
  icon,
}: ValueCardProps) {
  const icons = {
    lightbulb: Lightbulb,
    shield: ShieldCheck,
    award: Award,
    users: Users,
  };

  const Icon =
    icons[icon as keyof typeof icons] ?? Lightbulb;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
        <Icon
          size={28}
          className="text-blue-600"
        />
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