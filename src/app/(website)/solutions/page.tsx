import type { Metadata } from "next";

import SolutionsHero from "@/components/solutions/hero";
import IndustriesGrid from "@/components/solutions/industries";

import CTA from "@/components/homepage/cta";
import Footer from "@/components/homepage/footer";

export const metadata: Metadata = {
  title: "Industry Solutions | Dynamics ICT Services",
  description:
    "Industry-specific ICT, cybersecurity, networking, software development, automation, CCTV, and renewable energy solutions tailored to your organization's needs.",
};

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <SolutionsHero />

      <IndustriesGrid />

      <CTA />

      <Footer />
    </main>
  );
}