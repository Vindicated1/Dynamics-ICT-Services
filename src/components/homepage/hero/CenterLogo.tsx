"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

interface CenterLogoProps {
  src?: string;
  alt?: string;
}

export default function CenterLogo({
  src = "/images/brand/logo.svg",
  alt = "Dynamics ICT Services",
}: CenterLogoProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="relative z-30 flex items-center justify-center"
      animate={
        reduceMotion
          ? {}
          : {
              scale: [1, 1.03, 1],
            }
      }
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Outer Glow */}
      <div className="absolute h-64 w-64 rounded-full bg-blue-600/20 blur-[100px]" />

      {/* Glass Ring */}
      <div className="absolute h-44 w-44 rounded-full border border-cyan-400/20 bg-white/5 backdrop-blur-2xl" />

      {/* Logo Container */}
      <div className="relative flex h-36 w-36 items-center justify-center rounded-full border border-cyan-400/30 bg-[#07152F]/90 shadow-[0_0_60px_rgba(37,99,235,.45)]">

        <Image
          src={src}
          alt={alt}
          width={110}
          height={110}
          priority
          className="object-contain"
        />

      </div>
    </motion.div>
  );
}