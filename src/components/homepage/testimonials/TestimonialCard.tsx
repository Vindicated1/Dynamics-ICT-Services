"use client";

import { Star } from "lucide-react";

import type { Testimonial } from "@/data/homepage/testimonials";
import InitialAvatar from "@/components/common/InitialAvatar";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({
  testimonial,
}: TestimonialCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7">
      {/* Rating */}
      <div
        className="flex items-center gap-1"
        aria-label={`${testimonial.rating} out of 5 stars`}
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={`h-4 w-4 ${
              index < testimonial.rating
                ? "fill-amber-400 text-amber-400"
                : "text-slate-300"
            }`}
          />
        ))}
      </div>

      {/* Testimonial */}
      <blockquote className="mt-5 flex-1">
        <p className="text-base leading-7 text-slate-600">
          “{testimonial.testimonial}”
        </p>
      </blockquote>

      {/* Client */}
      <div className="mt-7 flex items-center gap-4 border-t border-slate-100 pt-5">
        <InitialAvatar
          name={testimonial.name}
          initials={testimonial.initials}
          size="md"
        />

        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-slate-900">
            {testimonial.name}
          </p>

          <p className="mt-0.5 text-sm text-slate-500">
            {testimonial.role}
          </p>

          <p className="mt-0.5 truncate text-xs font-medium text-blue-600">
            {testimonial.company}
          </p>
        </div>
      </div>
    </article>
  );
}