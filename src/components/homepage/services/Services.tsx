"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import Section from "@/components/common/Section";
import Container from "@/components/common/Container";

import { services } from "@/data/homepage/services";

import FeaturedService from "./FeaturedService";
import ServiceFilters from "./ServiceFilters";
import ServicesGrid from "./ServicesGrid";
import ServicesHeader from "./ServicesHeader";

export default function Services() {
  const [activeCategory, setActiveCategory] =
    useState("All");

  const filteredServices = useMemo(() => {
    if (activeCategory === "All") {
      return services;
    }

    return services.filter(
      (service) =>
        service.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <Section
      background="white"
      className="relative"
    >
      {/* Background Decorations */}

      <div className="absolute left-0 top-32 h-80 w-80 rounded-full bg-blue-500/5 blur-[140px]" />

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
            duration: 0.7,
          }}
        >
          <ServicesHeader />

          <FeaturedService
            category={activeCategory}
          />

          <ServiceFilters
            active={activeCategory}
            onChange={setActiveCategory}
          />

          <ServicesGrid
            services={filteredServices}
          />
        </motion.div>
      </Container>
    </Section>
  );
}