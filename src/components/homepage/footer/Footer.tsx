import Container from "@/components/common/Container";

import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterContact from "./FooterContact";
import FooterNewsletter from "./FooterNewsletter";
import FooterBottom from "./FooterBottom";
import ScrollToTop from "./ScrollToTop";

import {
  quickLinks,
  servicesLinks,
} from "@/data/homepage/footer";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950">
      <Container>
        <div className="grid gap-10 py-14 sm:grid-cols-2 sm:gap-12 sm:py-16 xl:grid-cols-5 xl:py-20">
          <div className="min-w-0 sm:col-span-2 xl:col-span-2">
            <FooterBrand />
          </div>

          <FooterLinks
            title="Quick Links"
            links={quickLinks}
          />

          <FooterLinks
            title="Services"
            links={servicesLinks}
          />

          <div className="space-y-10">
            <FooterContact />
            <FooterNewsletter />
          </div>
        </div>

        <FooterBottom />
      </Container>

      <ScrollToTop />
    </footer>
  );
}