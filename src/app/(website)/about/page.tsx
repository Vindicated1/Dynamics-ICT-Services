import type { Metadata } from "next";

import {
  PageLayout,
} from "@/components/common";

import AboutHero from "@/components/about/hero";
import CompanyStory from "@/components/about/story";
import MissionVision from "@/components/about/mission";
import CoreValues from "@/components/about/values";
import CompanyTimeline from "@/components/about/timeline";
import Leadership from "@/components/about/leadership";
import Certifications from "@/components/about/certifications";
import AboutCTA from "@/components/about/cta";

import Footer from "@/components/homepage/footer";

export const metadata: Metadata = {
  title: "About Us | Dynamics ICT Services",
  description:
    "Learn more about Dynamics ICT Services and our commitment to delivering innovative ICT solutions.",
};

export default function AboutPage() {
  return (
    <PageLayout>
      <AboutHero />

      <CompanyStory />

      <MissionVision />

      <CoreValues />

      <CompanyTimeline />

      <Leadership />

      <Certifications />

      <AboutCTA />

      <Footer />
    </PageLayout>
  );
}