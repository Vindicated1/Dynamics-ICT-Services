import type { Metadata } from "next";

import ServicesHero from "@/components/services/hero";
import Overview from "@/components/services/overview";
import ServicesGrid from "@/components/services/grid";
import FAQ from "@/components/common/faq";
import PartnerCarousel from "@/components/common/partner-carousel";
import StatsStrip from "@/components/common/stats-strip";
import CTA from "@/components/homepage/cta";
import Footer from "@/components/homepage/footer";
import Process from "@/components/services/process";
import Technologies from "@/components/services/technologies";
import Industries from "@/components/services/industries";

export const metadata: Metadata = {
  title: "Our Services | Dynamics ICT Services",

  description:
    "Explore Dynamics ICT Services' comprehensive ICT solutions including software development, web development, networking, cybersecurity, cloud computing, CCTV, solar energy, automation, and digital transformation services.",

  keywords: [
    "ICT Services",
    "Software Development",
    "Web Development",
    "Mobile App Development",
    "Networking",
    "Cybersecurity",
    "Cloud Computing",
    "Solar Installation",
    "CCTV Installation",
    "Database Solutions",
    "Automation",
    "Digital Marketing",
    "IT Support",
    "Nigeria",
  ],

  openGraph: {
    title: "Our Services | Dynamics ICT Services",

    description:
      "Comprehensive ICT solutions for businesses, institutions, and organizations across Nigeria.",

    images: [
      {
        url: "/images/og/services.jpg",
        width: 1200,
        height: 630,
        alt: "Dynamics ICT Services",
      },
    ],

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Our Services | Dynamics ICT Services",

    description:
      "Discover innovative ICT solutions tailored for modern businesses.",

    images: ["/images/og/services.jpg"],
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <ServicesHero />

      {/* Introduction */}
      <Overview />

      {/* Statistics */}
      <StatsStrip />

      {/* Core Services */}
      <ServicesGrid />

      {/* Delivery Process */}
      <Process />

      {/* Technologies */}
      <Technologies /> 

      {/* Industries */}
      <Industries />

      {/* Technology Partners */}
      <PartnerCarousel />

      {/* Frequently Asked Questions */}
      <FAQ />

      {/* Call To Action */}
      <CTA />

      {/* Footer */}
      <Footer />
    </main>
  );
}