"use client";

import { motion, useReducedMotion } from "framer-motion";
import { heroNodes } from "@/data/homepage/heroNodes";

const CENTER = 325;

export default function ConnectionLines() {
  const reduceMotion = useReducedMotion();

  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 650 650"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="hero-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop
            offset="0%"
            stopColor="#38BDF8"
          />

          <stop
            offset="100%"
            stopColor="#2563EB"
          />
        </linearGradient>

        <filter id="hero-glow">
          <feGaussianBlur
            stdDeviation="2"
            result="blur"
          />

          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {heroNodes.map((node) => {
        const radians = (node.angle * Math.PI) / 180;

        const x =
          CENTER +
          Math.cos(radians) * node.radius;

        const y =
          CENTER +
          Math.sin(radians) * node.radius;

        return (
          <g key={node.id}>
            <path
              d={`M ${CENTER} ${CENTER} Q ${(CENTER + x) / 2} ${(CENTER + y) / 2 - 20} ${x} ${y}`}
              stroke="url(#hero-gradient)"
              strokeWidth="2"
              strokeOpacity="0.28"
              fill="none"
              filter="url(#hero-glow)"
            />

            <motion.circle
              r="4"
              fill="#67E8F9"
              initial={{
                cx: CENTER,
                cy: CENTER,
              }}
              animate={
                reduceMotion
                  ? {
                      cx: CENTER,
                      cy: CENTER,
                    }
                  : {
                      cx: [CENTER, x],
                      cy: [CENTER, y],
                    }
              }
              transition={{
                duration: 2.5,
                ease: "linear",
                repeat: Infinity,
                repeatDelay: 1,
                delay: node.delay,
              }}
            />
          </g>
        );
      })}
    </svg>
  );
}