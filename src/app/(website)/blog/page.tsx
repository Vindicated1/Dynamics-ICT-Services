import type { Metadata } from "next";

import BlogHero from "@/components/blog/BlogHero";
import BlogGrid from "@/components/blog/BlogGrid";

import CTA from "@/components/homepage/cta";
import Footer from "@/components/homepage/footer";

export const metadata: Metadata = {
  title: "Blog & Insights | Dynamics ICT Services",
  description:
    "Read technology insights and practical resources from Dynamics ICT Services covering software development, cybersecurity, networking, solar energy and digital transformation.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <BlogHero />

      <BlogGrid />

      <CTA />

      <Footer />
    </main>
  );
}