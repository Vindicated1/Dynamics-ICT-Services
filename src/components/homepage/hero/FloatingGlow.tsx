"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  size?: "sm" | "md" | "lg";
  color?: "blue" | "cyan" | "purple";
  delay?: number;
}

export default function FloatingGlow({
  className,
  size = "md",
  color = "blue",
  delay = 0,
}: Props) {
  const reduceMotion = useReducedMotion();

  const sizes = {
    sm: "h-48 w-48",
    md: "h-72 w-72",
    lg: "h-[34rem] w-[34rem]",
  };

  const colors = {
    blue: "bg-blue-600/25",
    cyan: "bg-cyan-500/20",
    purple: "bg-violet-500/20",
  };

  return (
    <motion.div
      aria-hidden
      className={cn(
        "absolute rounded-full blur-[120px]",
        sizes[size],
        colors[color],
        className
      )}
      animate={
        reduceMotion
          ? {}
          : {
              scale: [1, 1.15, 1],
              opacity: [0.3, 0.7, 0.3],
            }
      }
      transition={{
        duration: 10,
        repeat: Infinity,
        delay,
      }}
    />
  );
}