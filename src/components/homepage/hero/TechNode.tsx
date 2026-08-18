"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TechNodeProps {
  icon: React.ReactNode;
  title: string;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function TechNode({
  icon,
  title,
 delay = 0,
  className,
  style,
}: TechNodeProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      style={style}
      className={cn("absolute", className)}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={
        reduceMotion
          ? { opacity: 1, scale: 1 }
          : {
              opacity: 1,
              scale: 1,
              y: [0, -10, 0],
            }
      }
      transition={{
        duration: 5,
        delay,
        repeat: Infinity,
      }}
      whileHover={{
        scale: 1.08,
      }}
    >
      <div className="group flex flex-col items-center">

        <div className="absolute h-20 w-20 rounded-full bg-cyan-500/20 blur-2xl opacity-0 transition duration-500 group-hover:opacity-100" />

        <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-cyan-400/30 bg-white/10 backdrop-blur-xl">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-xl">

            {icon}

          </div>

        </div>

        <p className="mt-3 text-sm font-medium text-slate-200">

          {title}

        </p>

      </div>
    </motion.div>
  );
}