"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ScrollIndicator() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:flex flex-col items-center text-slate-500">
      <span className="mb-2 text-xs font-medium uppercase tracking-[0.3em]">
        Scroll
      </span>

      <motion.div
        animate={
          reduceMotion
            ? {}
            : {
                y: [0, 8, 0],
              }
        }
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex h-10 w-6 items-start justify-center rounded-full border border-slate-300 p-1"
      >
        <motion.div
          animate={
            reduceMotion
              ? {}
              : {
                  y: [0, 10, 0],
                }
          }
          transition={{
            duration: 1.8,
            repeat: Infinity,
          }}
          className="h-2 w-2 rounded-full bg-blue-600"
        />
      </motion.div>

      <ChevronDown
        size={16}
        className="mt-3"
      />
    </div>
  );
}