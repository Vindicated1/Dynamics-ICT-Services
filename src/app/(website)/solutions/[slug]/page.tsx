import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Footer from "@/components/homepage/footer";
import CTA from "@/components/homepage/cta";

/* Industry Solution Components */
import SolutionHero from "@/components/solution-details/hero";
import SolutionOverview from "@/components/solution-details/overview";
import Challenges from "@/components/solution-details/challenges";
import RecommendedServices from "@/components/solution-details/services";
import Benefits from "@/components/solution-details/benefits";
import ImplementationProcess from "@/components/solution-details/process";
import RelatedCaseStudies from "@/components/solution-details/case-studies";
import FAQ from "@/components/solution-details/faq";

/* Featured Solution Components */
import FeaturedSolutionHero from "@/components/featured-solution-details/hero";
import FeatureOverview from "@/components/featured-solution-details/overview";
import SuccessMetrics from "@/components/featured-solution-details/success-metrics";
import ServiceFeatures from "@/components/featured-solution-details/services";
import FeatureBenefits from "@/components/featured-solution-details/benefits";
import Technologies from "@/components/featured-solution-details/technologies";
import Gallery from "@/components/featured-solution-details/gallery";
import FeatureFAQ from "@/components/featured-solution-details/faq";

/* Data */
import { solutionDetails } from "@/data/solutions/solutionDetails";
import { featuredSolutionDetails } from "@/data/homepage/featuredSolutionDetails";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const industry =
    solutionDetails[
      slug as keyof typeof solutionDetails
    ];

  if (industry) {
    return {
      title: `${industry.heroTitle} | Dynamics ICT Services`,
      description: industry.overview,
    };
  }

  const featured =
    featuredSolutionDetails[
      slug as keyof typeof featuredSolutionDetails
    ];

  if (featured) {
    return {
      title: `${featured.heroTitle} | Dynamics ICT Services`,
      description: featured.overview,
    };
  }

  return {
    title: "Solution Not Found",
  };
}

export default async function SolutionPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const industry =
    solutionDetails[
      slug as keyof typeof solutionDetails
    ];

  if (industry) {
    return (
      <main className="min-h-screen bg-white">
        <SolutionHero
          title={industry.heroTitle}
          subtitle={industry.heroSubtitle}
        />

        <SolutionOverview
          overview={industry.overview}
        />

        <Challenges
          challenges={industry.challenges}
        />

        <RecommendedServices
          services={industry.recommendedServices}
        />

        <Benefits
          benefits={industry.benefits}
        />

        <ImplementationProcess
          process={industry.process}
        />

        <RelatedCaseStudies
          caseStudies={industry.caseStudies}
        />

        <FAQ
          faqs={industry.faqs}
        />

        <CTA />

        <Footer />
      </main>
    );
  }

  const featured =
    featuredSolutionDetails[
      slug as keyof typeof featuredSolutionDetails
    ];

  if (featured) {
    return (
      <main className="min-h-screen bg-white">
        <FeaturedSolutionHero
          title={featured.heroTitle}
          subtitle={featured.heroSubtitle}
        />

        <FeatureOverview
          overview={featured.overview}
        />

        {"metrics" in featured && (
          <SuccessMetrics
            metrics={featured.metrics as { value: string; label: string }[]}
          />
        )}

        <ServiceFeatures
          features={featured.features}
        />

        <FeatureBenefits
          benefits={featured.benefits}
        />

        <Technologies
          technologies={featured.technologies}
        />

        <Gallery
          images={featured.gallery}
        />

        <FeatureFAQ
          faqs={featured.faqs}
        />

        <CTA />

        <Footer />
      </main>
    );
  }

  notFound();
}