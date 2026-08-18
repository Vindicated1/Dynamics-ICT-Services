"use client";

import { motion } from "framer-motion";

import Section from "@/components/common/Section";
import Container from "@/components/common/Container";

import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";

export default function About() {
  return (
    <Section
      background="white"
      className="relative overflow-hidden"
    >
      {/* Background Decorations */}

      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-blue-500/5 blur-[160px]" />

      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-400/5 blur-[160px]" />

      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Content */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <AboutContent />
          </motion.div>

          {/* Image */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
          >
            <AboutImage />
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}