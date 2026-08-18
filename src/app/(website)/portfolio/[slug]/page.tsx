import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { projectDetails } from "@/data/portfolio/projectDetails";

import ProjectHero from "@/components/portfolio-details/hero";
import ProjectOverview from "@/components/portfolio-details/overview";
import Outcomes from "@/components/portfolio-details/outcomes";

import CTA from "@/components/homepage/cta";
import Footer from "@/components/homepage/footer";
import Gallery from "@/components/portfolio-details/gallery";
import ClientInfo from "@/components/portfolio-details/client";
import Objectives from "@/components/portfolio-details/objectives";
import Challenges from "@/components/portfolio-details/challenges";
import Solutions from "@/components/portfolio-details/solutions";
import ProjectTimeline from "@/components/portfolio-details/timeline";
import ProjectMetrics from "@/components/portfolio-details/metrics";
import ProjectTechnologies from "@/components/portfolio-details/technologies";
import RelatedProjects from "@/components/portfolio-details/related";
import ProjectNavigation from "@/components/portfolio-details/navigation";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const project =
    projectDetails[
      slug as keyof typeof projectDetails
    ];

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | Portfolio | Dynamics ICT Services`,
    description: project.overview,
  };
}

export default async function PortfolioProjectPage({
  params,
}: Props) {
  const { slug } = await params;

  const project =
    projectDetails[
      slug as keyof typeof projectDetails
    ];

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <ProjectHero
        title={project.title}
        subtitle={project.heroSubtitle}
      />

      <ClientInfo
  client={project.client}
  location={project.location}
  category={project.category}
/>

<ProjectOverview
  overview={project.overview}
/>

<Objectives
  objectives={project.objectives}
/>

<Challenges
  challenges={project.challenges}
/>

<Solutions
  solutions={project.solutions}
/>

<ProjectTimeline
  timeline={project.timeline}
/>

<ProjectMetrics
  metrics={project.metrics}
/>

<ProjectTechnologies
  technologies={project.technologies}
/>

<Gallery
  title={project.title}
  gallery={project.gallery}
/>

<Outcomes
  outcomes={project.outcomes}
/>

<RelatedProjects
  currentSlug={slug}
/>

<ProjectNavigation
  currentSlug={slug}
/>

<CTA />

      <Footer />
    </main>
  );
}