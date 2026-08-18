"use client";

import { motion } from "framer-motion";
import { trustMetrics } from "@/data/homepage/testimonials";

export default function TrustMetrics() {
  return (
    <div className="mt-20 grid grid-cols-2 gap-6 lg:grid-cols-4">
      {trustMetrics.map((metric, index) => (
        <motion.div
          key={metric.label}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
          }}
          className="rounded-3xl bg-white p-8 text-center shadow-lg"
        >
          <h3 className="text-4xl font-bold text-blue-600">
            {metric.value}
          </h3>

          <p className="mt-2 text-slate-600">
            {metric.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}