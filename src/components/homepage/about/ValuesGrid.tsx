"use client";

import { motion } from "framer-motion";
import { companyValues } from "@/data/homepage/about";

export default function ValuesGrid() {
  return (
    <div className="mt-16 grid gap-6 md:grid-cols-2">
      {companyValues.map((value, index) => {
        const Icon = value.icon;

        return (
          <motion.div
            key={value.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
            }}
            className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 transition-colors duration-300 group-hover:bg-blue-600">
              <Icon
                size={28}
                className="text-blue-600 transition-colors duration-300 group-hover:text-white"
              />
            </div>

            <h3 className="mt-6 text-xl font-bold text-slate-900">
              {value.title}
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              {value.description}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}