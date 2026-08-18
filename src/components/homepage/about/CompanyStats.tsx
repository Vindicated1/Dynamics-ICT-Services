"use client";

import { motion } from "framer-motion";
import { companyStats } from "@/data/homepage/about";

export default function CompanyStats() {
  return (
    <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
      {companyStats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
          }}
          className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <h3 className="text-4xl font-bold text-blue-600">
            {stat.number}
          </h3>

          <p className="mt-2 text-sm font-medium text-slate-600">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}