"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { testimonials } from "@/data/homepage/testimonials";

import TestimonialCard from "./TestimonialCard";

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  function previous() {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  }

  function next() {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }

  return (
    <div className="mt-20">
      <TestimonialCard testimonial={testimonials[current]} />

      <div className="mt-8 flex justify-center gap-4">
        <button
          onClick={previous}
          className="rounded-full border border-slate-300 p-4 transition hover:bg-slate-100"
        >
          <ChevronLeft size={22} />
        </button>

        <button
          onClick={next}
          className="rounded-full bg-blue-600 p-4 text-white transition hover:bg-blue-700"
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </div>
  );
}