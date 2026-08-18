"use client";

import { motion, useReducedMotion } from "framer-motion";

interface Props {
  size: number;
  duration: number;
  reverse?: boolean;
}

export default function OrbitRing({
  size,
  duration,
  reverse = false,
}: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="absolute rounded-full border border-blue-400/20"
      style={{
        width: size,
        height: size,
      }}
      animate={
        reduceMotion
          ? {}
          : {
              rotate: reverse ? -360 : 360,
            }
      }
      transition={{
        duration,
        ease: "linear",
        repeat: Infinity,
      }}
    >
      <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee]" />
    </motion.div>
  );
}