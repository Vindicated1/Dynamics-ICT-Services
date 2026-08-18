"use client";

import Section from "@/components/common/Section";
import Container from "@/components/common/Container";

import TestimonialsHeader from "./TestimonialsHeader";
import TestimonialsCarousel from "./TestimonialsCarousel";
import TrustMetrics from "./TrustMetrics";
import TrustedLogos from "./TrustedLogos";

export default function Testimonials() {
  return (
    <Section
      background="gray"
      className="relative overflow-hidden"
    >
      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-blue-500/5 blur-[180px]" />

      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-400/5 blur-[180px]" />

      <Container>
        <TestimonialsHeader />

        <TestimonialsCarousel />

        <TrustMetrics />

        <TrustedLogos />
      </Container>
    </Section>
  );
}