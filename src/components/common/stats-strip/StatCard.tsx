"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";

interface StatCardProps {
  value: string;
  label: string;
}

export default function StatCard({
  value,
  label,
}: StatCardProps) {
  const numeric = parseInt(value.replace(/\D/g, ""));

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="text-5xl font-extrabold text-blue-600">
        {isNaN(numeric) ? (
          value
        ) : (
          <>
            <CountUp
              end={numeric}
              duration={2}
            />
            {value.replace(String(numeric), "")}
          </>
        )}
      </div>

      <p className="mt-4 text-slate-600">
        {label}
      </p>
    </motion.div>
  );
}