import type { Metadata } from "next";

import PortfolioHero from "@/components/portfolio/hero";
import PortfolioGrid from "@/components/portfolio/grid";

import CTA from "@/components/homepage/cta";
import Footer from "@/components/homepage/footer";

export const metadata: Metadata = {
  title: "Portfolio | Dynamics ICT Services",

  description:
    "Explore software development, networking, cybersecurity, solar, CCTV, automation, and digital transformation projects completed by Dynamics ICT Services.",
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white">
      <PortfolioHero />

      <PortfolioGrid />

      <CTA />

      <Footer />
    </main>
  );
}