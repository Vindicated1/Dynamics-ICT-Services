"use client";

import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { MouseEvent } from "react";
import TechNetwork from "./TechNetwork";

export default function HeroIllustration() {
  const reduceMotion = useReducedMotion();

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springX = useSpring(rotateX, {
    stiffness: 120,
    damping: 20,
    mass: 0.8,
  });

  const springY = useSpring(rotateY, {
    stiffness: 120,
    damping: 20,
    mass: 0.8,
  });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduceMotion) return;

    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    rotateY.set(((x - centerX) / centerX) * 6);
    rotateX.set(-((y - centerY) / centerY) * 6);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 60,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.9,
        ease: "easeOut",
      }}
      className="relative flex w-full min-w-0 items-center justify-center overflow-hidden"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: springX,
          rotateY: springY,
          transformPerspective: 1400,
        }}
        className="relative h-[286px] w-[286px] sm:h-[325px] sm:w-[325px] md:h-[468px] md:w-[468px] lg:h-[650px] lg:w-[650px]"
      >
        <div className="absolute left-1/2 top-1/2 origin-center -translate-x-1/2 -translate-y-1/2 scale-[0.44] sm:scale-50 md:scale-[0.72] lg:scale-100">
          <TechNetwork />
        </div>
      </motion.div>
    </motion.div>
  );
}