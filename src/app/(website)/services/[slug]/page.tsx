import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { serviceDetails } from "@/data/services/serviceDetails";

import ServiceHero from "@/components/service-details/hero";
import ServiceOverview from "@/components/service-details/overview";
import Features from "@/components/service-details/features";
import Benefits from "@/components/service-details/benefits";
import Technologies from "@/components/service-details/technologies";
import Process from "@/components/service-details/process";
import RelatedServices from "@/components/service-details/related";

import CTA from "@/components/homepage/cta";
import Footer from "@/components/homepage/footer";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const service =
    serviceDetails[
      slug as keyof typeof serviceDetails
    ];

  if (!service) {
    return {};
  }

  return {
    title: `${service.title} | Dynamics ICT Services`,
    description: service.overview,
  };
}

export default async function ServicePage({
  params,
}: Props) {
  const { slug } = await params;

  const service =
    serviceDetails[
      slug as keyof typeof serviceDetails
    ];

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <ServiceHero
        title={service.heroTitle}
        subtitle={service.heroSubtitle}
      />

      <ServiceOverview
        overview={service.overview}
      />

      <Features
        features={service.features}
      />

      <Benefits
        benefits={service.benefits}
      />

      <Technologies
        technologies={service.technologies}
      />

      <Process
        process={service.process}
      />

      <RelatedServices
        currentSlug={slug}
      />

      <CTA />

      <Footer />
    </main>
  );
}