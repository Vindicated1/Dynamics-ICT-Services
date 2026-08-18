"use client";

import { motion } from "framer-motion";
import { storyStats } from "@/data/about/story";

export default function StoryStats() {
  return (
    <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
      {storyStats.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
          }}
          className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
        >
          <h3 className="text-3xl font-bold text-blue-600">
            {item.value}
          </h3>

          <p className="mt-2 text-sm text-slate-600">
            {item.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}