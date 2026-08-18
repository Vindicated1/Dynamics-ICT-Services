"use client";

import { motion } from "framer-motion";

import { featuredSolutions } from "@/data/homepage/featuredSolutions";

import SolutionCard from "./SolutionCard";

export default function FeaturedSolutionsGrid() {
  return (
    <div className="mt-20 space-y-12">
      {featuredSolutions.map((solution, index) => (
        <motion.div
          key={solution.id}
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
            delay: index * 0.1,
          }}
        >
          <SolutionCard
            solution={solution}
            reverse={index % 2 === 1}
          />
        </motion.div>
      ))}
    </div>
  );
}