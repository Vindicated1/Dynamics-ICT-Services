import Container from "@/components/common/Container";
import Section from "@/components/common/Section";

import CTAContent from "./CTAContent";

export default function AboutCTA() {
  return (
    <Section
      background="dark"
      className="relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" />
      </div>

      <Container>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <CTAContent />
        </div>
      </Container>
    </Section>
  );
}