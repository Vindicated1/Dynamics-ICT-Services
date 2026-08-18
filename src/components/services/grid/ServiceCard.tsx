"use client";

import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

import ServiceIcon from "./ServiceIcon";
import ServiceFeatures from "./ServiceFeatures";
import ServiceButton from "./ServiceButton";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  slug: string;
  index: number;
}

export default function ServiceCard({
  title,
  description,
  icon,
  features,
  slug,
  index,
}: ServiceCardProps) {
  return (
    <motion.article
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
        delay: index * 0.08,
      }}
      className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl"
    >
      <ServiceIcon icon={icon} />

      <h3 className="mt-8 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {description}
      </p>

      <ServiceFeatures
        features={features}
      />

      <ServiceButton slug={slug} />
    </motion.article>
  );
}