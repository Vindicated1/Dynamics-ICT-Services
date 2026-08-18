"use client";

import { motion } from "framer-motion";
import { ctaFeatures } from "@/data/homepage/cta";

export default function CTAFeatures() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{
        delay: 0.4,
      }}
      className="relative z-10 mt-16 grid gap-8 md:grid-cols-3"
    >
      {ctaFeatures.map((feature, index) => {
        const Icon = feature.icon;

        return (
          <motion.div
            key={feature.text}
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.15,
            }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
          >
            <Icon
              size={32}
              className="mx-auto text-blue-400"
            />

            <h4 className="mt-5 text-lg font-semibold text-white">
              {feature.text}
            </h4>
          </motion.div>
        );
      })}
    </motion.div>
  );
}