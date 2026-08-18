"use client";

import { motion } from "framer-motion";

import { advantages } from "@/data/homepage/whyChooseUs";

import AdvantageCard from "./AdvantageCard";

export default function AdvantagesGrid() {
  return (
    <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {advantages.map((advantage, index) => (
        <motion.div
          key={advantage.id}
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
            duration: .5,
            delay: index * .08,
          }}
        >
          <AdvantageCard
            advantage={advantage}
          />
        </motion.div>
      ))}
    </div>
  );
}