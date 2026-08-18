"use client";

import { motion } from "framer-motion";

import Section from "@/components/common/Section";
import Container from "@/components/common/Container";

import FeaturedSolutionsHeader from "./FeaturedSolutionsHeader";
import FeaturedSolutionsGrid from "./FeaturedSolutionsGrid";

export default function FeaturedSolutions() {
  return (
    <Section
      background="gray"
      className="relative overflow-hidden"
    >
      {/* Background Effects */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-500/5 blur-[160px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-400/5 blur-[160px]" />

      <Container>
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <FeaturedSolutionsHeader />

          <FeaturedSolutionsGrid />
        </motion.div>
      </Container>
    </Section>
  );
}