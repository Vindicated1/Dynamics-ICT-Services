import type { Metadata } from "next";

import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectsGrid from "@/components/projects/ProjectsGrid";

import CTA from "@/components/homepage/cta";
import Footer from "@/components/homepage/footer";

export const metadata: Metadata = {
  title: "Our Projects | Dynamics ICT Services",
  description:
    "Explore projects delivered by Dynamics ICT Services across software development, networking, cybersecurity, renewable energy and smart technology.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white">
      <ProjectsHero />

      <ProjectsGrid />

      <CTA />

      <Footer />
    </main>
  );
}