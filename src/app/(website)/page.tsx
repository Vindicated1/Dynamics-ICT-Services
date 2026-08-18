import { PageLayout } from "@/components/common";
import Hero from "@/components/homepage/hero";
import TrustedClients from "@/components/homepage/trusted-clients";
import Services from "@/components/homepage/services";
import FeaturedSolutions from "@/components/homepage/featured-solutions";
import About from "@/components/homepage/about";
import WhyChooseUs from "@/components/homepage/why-choose-us";
import Industries from "@/components/homepage/industries";
import Portfolio from "@/components/homepage/portfolio";
import Testimonials from "@/components/homepage/testimonials";
import FAQ from "@/components/homepage/faq";
import CTA from "@/components/homepage/cta";
import Footer from "@/components/homepage/footer";

export default function HomePage() {
  return (
    <PageLayout>
      {/* Hero */}
      <Hero />

      {/* Trusted Clients */}
      <TrustedClients />

      {/* Services */}
      <Services />

      {/* Featured Solutions */}
      <FeaturedSolutions />

      {/* About */}
      <About />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Industries */}
      <Industries />

      {/* Portfolio */}
      <Portfolio />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* Call To Action */}
      <CTA />

      {/* Footer */}
      <Footer />
    </PageLayout>
  );
}