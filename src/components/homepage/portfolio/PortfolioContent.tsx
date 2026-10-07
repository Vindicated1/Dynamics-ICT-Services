"use client";

import { useMemo, useState } from "react";

import type { PortfolioProject } from "@/data/homepage/portfolio";

import FeaturedProject from "./FeaturedProject";
import PortfolioFilters from "./PortfolioFilters";
import PortfolioGrid from "./PortfolioGrid";
import PortfolioHeader from "./PortfolioHeader";

interface Props {
  projects: PortfolioProject[];
}

export default function PortfolioContent({ projects }: Props) {
  const [active, setActive] = useState("All");

  const categories = useMemo(
    () => ["All", ...new Set(projects.map((project) => project.category))],
    [projects],
  );
  const filteredProjects = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((project) => project.category === active),
    [active, projects],
  );

  return (
    <>
      <PortfolioHeader />
      <FeaturedProject project={projects.find((project) => project.featured)} />
      {projects.length > 0 ? (
        <>
          <PortfolioFilters
            categories={categories}
            active={active}
            onChange={setActive}
          />
          <PortfolioGrid projects={filteredProjects} />
        </>
      ) : (
        <p className="mt-16 text-center text-slate-600">
          Project highlights will be published here soon.
        </p>
      )}
    </>
  );
}
