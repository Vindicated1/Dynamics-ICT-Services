"use client";

import { AnimatePresence, motion } from "framer-motion";

import type { Service } from "@/data/homepage/services";

import ServiceCard from "./ServiceCard";

interface ServicesGridProps {
  services: Service[];
}

export default function ServicesGrid({
  services,
}: ServicesGridProps) {
  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        layout
        className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
      >
        {services.map((service, index) => (
          <motion.div
            layout
            key={service.id}
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
            }}
            transition={{
              duration: 0.4,
              delay: index * 0.05,
            }}
          >
            <ServiceCard
              service={service}
            />
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
