"use client";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";

import BackgroundEffects from "./BackgroundEffects";
import CTAHeader from "./CTAHeader";
import CTAButtons from "./CTAButtons";
import CTAFeatures from "./CTAFeatures";
import CTAStats from "./CTAStats";

export default function CTA() {
  return (
    <Section
      background="dark"
      className="relative overflow-hidden"
    >
      <BackgroundEffects />

      <Container>
        <div className="relative z-10 mx-auto max-w-7xl py-6">

          <CTAHeader />

          <CTAButtons />

          <CTAFeatures />

          <CTAStats />

        </div>
      </Container>
    </Section>
  );
}