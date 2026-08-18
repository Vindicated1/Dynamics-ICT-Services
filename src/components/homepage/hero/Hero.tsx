"use client";

import Container from "@/components/common/Container";

import HeroContent from "./HeroContent";
import HeroIllustration from "./HeroIllustration";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-[#07152F] to-slate-900 text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,.18),transparent_35%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(34,211,238,.08),transparent_40%)]" />

      <Container>
        <div className="grid min-h-screen items-center gap-20 py-24 lg:grid-cols-2">
          {/* Left */}
          <div>
            <HeroContent />
          </div>

          {/* Right */}
          <div className="relative flex justify-center">
            <HeroIllustration />
          </div>
        </div>
      </Container>

      <ScrollIndicator />
    </section>
  );
}