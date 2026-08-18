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
        <div className="grid gap-12 py-20 lg:grid-cols-5">
          <div className="lg:col-span-2">
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