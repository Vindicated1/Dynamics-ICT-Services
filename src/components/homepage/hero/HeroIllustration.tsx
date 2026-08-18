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
      className="relative flex w-full items-center justify-center"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: springX,
          rotateY: springY,
          transformPerspective: 1400,
        }}
        className="relative"
      >
        {/* Desktop */}
        <div className="hidden lg:block">
          <TechNetwork />
        </div>

        {/* Tablet */}
        <div className="hidden md:block lg:hidden">
          <div className="scale-[0.82] origin-center">
            <TechNetwork />
          </div>
        </div>

        {/* Mobile */}
        <div className="block md:hidden">
          <div className="scale-[0.58] origin-center">
            <TechNetwork />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}