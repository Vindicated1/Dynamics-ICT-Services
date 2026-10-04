"use client";

import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Globe,
  Smartphone,
  Network,
  ShieldCheck,
  Camera,
  Sun,
  Cloud,
  Database,
  Bot,
  Megaphone,
  Headphones,
} from "lucide-react";

import type { Service } from "@/data/services/services";

const iconMap = {
  Code2,
  Globe,
  Smartphone,
  Network,
  ShieldCheck,
  Camera,
  Sun,
  Cloud,
  Database,
  Bot,
  Megaphone,
  Headphones,
};

interface ServiceCardProps extends Service {
  index?: number;
}

export default function ServiceCard({
  slug,
  title,
  icon,
  description,
  features,
}: ServiceCardProps) {
  const Icon =
    iconMap[icon as keyof typeof iconMap] ?? Code2;

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
      {/* Icon */}
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
        <Icon className="h-7 w-7" />
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

      {/* Features */}
      <ul className="mt-6 space-y-2">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-2 text-sm text-slate-600"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            {feature}
          </li>
        ))}
      </ul>

      {/* Link */}
      <div className="mt-auto pt-7">
        <Link
          href={`/services/${slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700"
        >
          Explore Service

          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}