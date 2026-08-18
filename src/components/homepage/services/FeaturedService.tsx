"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { services } from "@/data/homepage/services";

import SpotlightContent from "./SpotlightContent";

interface FeaturedServiceProps {
  category?: string;
}

export default function FeaturedService({
  category = "All",
}: FeaturedServiceProps) {
  const filteredServices = useMemo(() => {
    if (category === "All") {
      return services;
    }

    return services.filter(
      (service) => service.category === category
    );
  }, [category]);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [category]);

  useEffect(() => {
    if (filteredServices.length <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((previous) =>
        previous === filteredServices.length - 1
          ? 0
          : previous + 1
      );
    }, 6000);

    return () => clearInterval(timer);
  }, [filteredServices]);

  if (filteredServices.length === 0) {
    return null;
  }

  return (
    <div className="mb-20 overflow-hidden rounded-[40px] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-blue-50 p-8 shadow-xl lg:p-12">
      <AnimatePresence mode="wait">
        <motion.div
          key={filteredServices[activeIndex].id}
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -30,
          }}
          transition={{
            duration: 0.45,
          }}
        >
          <SpotlightContent
            service={filteredServices[activeIndex]}
          />
        </motion.div>
      </AnimatePresence>

      {/* Progress Indicators */}

      <div className="mt-10 flex justify-center gap-3">
        {filteredServices.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              activeIndex === index
                ? "w-10 bg-blue-600"
                : "w-3 bg-slate-300 hover:bg-blue-300"
            }`}
            aria-label={`Show featured service ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}