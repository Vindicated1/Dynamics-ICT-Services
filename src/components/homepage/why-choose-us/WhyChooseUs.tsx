"use client";

import { motion } from "framer-motion";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";

import AdvantagesGrid from "./AdvantagesGrid";
import ComparisonTable from "./ComparisonTable";
import WhyChooseUsHeader from "./WhyChooseUsHeader";

export default function WhyChooseUs() {
  return (
    <Section
      background="gray"
      className="relative overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-500/5 blur-[180px]" />

      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-400/5 blur-[180px]" />

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
          <WhyChooseUsHeader />

          <AdvantagesGrid />

          <ComparisonTable />
        </motion.div>
      </Container>
    </Section>
  );
}