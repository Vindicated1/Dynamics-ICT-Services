"use client";

import {
  Building2,
  Cpu,
  Factory,
  GraduationCap,
  Hospital,
  Hotel,
  Landmark,
  ShoppingCart,
} from "lucide-react";

import type { Industry } from "@/data/services/industries";

const iconMap = {
  Building2,
  Cpu,
  Factory,
  GraduationCap,
  Hospital,
  Hotel,
  Landmark,
  ShoppingCart,
};

export default function IndustryCard({
  title,
  icon,
  description,
}: Industry) {
  const Icon =
    iconMap[icon as keyof typeof iconMap] ?? Building2;

  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
        <Icon className="h-7 w-7" />
      </div>

      <h3 className="mt-6 text-xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-600">
        {description}
      </p>
    </article>
  );
}