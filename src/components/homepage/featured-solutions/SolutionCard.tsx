"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import SolutionBenefits from "./SolutionBenefits";
import type { FeaturedSolution } from "@/data/homepage/featuredSolutions";

interface SolutionCardProps {
  solution: FeaturedSolution;
  reverse?: boolean;
}

export default function SolutionCard({
  solution,
  reverse = false,
}: SolutionCardProps) {
  const Icon = solution.icon;

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className={`
        group
        overflow-hidden
        rounded-[32px]
        border
        border-slate-200
        bg-white
        shadow-lg
        transition-all
        duration-500
        hover:shadow-2xl
      `}
    >
      <div
        className={`
          grid
          items-center
          gap-10
          lg:grid-cols-2
          ${reverse ? "lg:[&>*:first-child]:order-2" : ""}
        `}
      >
        {/* IMAGE */}

        <div className="relative h-[360px] overflow-hidden">
          <Image
            src={solution.image}
            alt={solution.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

          <div
            className="absolute left-8 top-8 flex h-16 w-16 items-center justify-center rounded-2xl shadow-xl"
            style={{ backgroundColor: solution.color }}
          >
            <Icon className="text-white" size={30} />
          </div>
        </div>

        {/* CONTENT */}

        <div className="p-8 lg:p-12">
          <p
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: solution.color }}
          >
            {solution.subtitle}
          </p>

          <h3 className="mt-3 text-3xl font-bold text-slate-900">
            {solution.title}
          </h3>

          <p className="mt-6 leading-8 text-slate-600">
            {solution.description}
          </p>

          <SolutionBenefits
            benefits={solution.benefits}
            color={solution.color}
          />

          <Link
            href={solution.href}
            className="mt-8 inline-flex items-center font-semibold transition-colors hover:text-blue-600"
          >
            Learn More

            <ArrowRight
              className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
              size={18}
            />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}