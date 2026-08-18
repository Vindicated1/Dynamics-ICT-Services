"use client";

import { useMemo, useState } from "react";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";

import {
  portfolioCategories,
  portfolioProjects,
} from "@/data/homepage/portfolio";

import FeaturedProject from "./FeaturedProject";
import PortfolioFilters from "./PortfolioFilters";
import PortfolioGrid from "./PortfolioGrid";
import PortfolioHeader from "./PortfolioHeader";

export default function Portfolio() {
  const [active, setActive] = useState("All");

  const projects = useMemo(() => {
    if (active === "All") return portfolioProjects;

    return portfolioProjects.filter(
      (p) => p.category === active
    );
  }, [active]);

  return (
    <Section background="gray">
      <Container>
        <PortfolioHeader />

        <FeaturedProject />

        <PortfolioFilters
          categories={portfolioCategories}
          active={active}
          onChange={setActive}
        />

        <PortfolioGrid projects={projects} />
      </Container>
    </Section>
  );
}