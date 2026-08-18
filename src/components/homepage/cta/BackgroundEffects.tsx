"use client";

import { motion } from "framer-motion";

export default function BackgroundEffects() {
  return (
    <>
      {/* Left Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.55, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute -left-44 top-0 h-[520px] w-[520px] rounded-full bg-blue-600/30 blur-[170px]"
      />

      {/* Right Glow */}
      <motion.div
        animate={{
          scale: [1.1, 0.95, 1.1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute -right-44 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[170px]"
      />

      {/* Center Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[150px]"
      />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(to right,#ffffff 1px,transparent 1px),
              linear-gradient(to bottom,#ffffff 1px,transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Floating Orbs */}
      <motion.div
        animate={{
          y: [-20, 20, -20],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="absolute left-20 top-20 h-6 w-6 rounded-full bg-blue-400"
      />

      <motion.div
        animate={{
          y: [20, -20, 20],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute right-24 top-32 h-5 w-5 rounded-full bg-cyan-400"
      />

      <motion.div
        animate={{
          y: [-15, 15, -15],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
        }}
        className="absolute bottom-24 left-1/4 h-4 w-4 rounded-full bg-blue-500"
      />
    </>
  );
}