"use client";

import {
  Search,
  ClipboardList,
  Palette,
  Code,
  TestTube,
  Rocket,
} from "lucide-react";

import type { ProcessStep } from "@/data/services/process";

const iconMap = {
  Search,
  ClipboardList,
  Palette,
  Code,
  TestTube,
  Rocket,
};

type ProcessCardProps = ProcessStep;

export default function ProcessCard({
  step,
  title,
  description,
  icon,
}: ProcessCardProps) {
  const Icon =
    iconMap[icon as keyof typeof iconMap] ?? Search;

  return (
    <article className="group relative">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
        {/* Step */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold tracking-wider text-blue-600">
            {step}
          </span>

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
            <Icon className="h-6 w-6" />
          </div>
        </div>

        {/* Content */}
        <div className="mt-6">
          <h3 className="text-xl font-bold text-slate-900">
            {title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}