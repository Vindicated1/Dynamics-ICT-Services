"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { PortfolioProject } from "@/data/homepage/portfolio";
import PortfolioCard from "./PortfolioCard";

interface Props {
  projects: PortfolioProject[];
}

export default function PortfolioGrid({ projects }: Props) {
  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        layout
        className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
      >
        {projects.map((project) => (
          <motion.div
            layout
            key={project.id}
          >
            <PortfolioCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}