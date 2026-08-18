"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* Main Gradient */}
      <div className="absolute inset-0 bg-[#071A52]" />

      {/* Radial Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-250px] top-[-150px] h-[700px] w-[700px] rounded-full bg-blue-600 blur-[180px]"
      />

      {/* Cyan Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-200px] bottom-[-150px] h-[650px] w-[650px] rounded-full bg-cyan-500 blur-[170px]"
      />

      {/* Center Light */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[140px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.18) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.18) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Top Fade */}
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/20 to-transparent" />

    </div>
  );
}