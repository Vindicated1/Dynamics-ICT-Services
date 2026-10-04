import type { Metadata } from "next";

import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";

import CTA from "@/components/homepage/cta";
import Footer from "@/components/homepage/footer";

export const metadata: Metadata = {
  title: "Contact Us | Dynamics ICT Services",
  description:
    "Get in touch with Dynamics ICT Services for software development, networking, cybersecurity, solar energy, CCTV, cloud and other technology solutions.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <ContactHero />

      <ContactInfo />

      <ContactForm />

      <ContactMap />

      <CTA />

      <Footer />
    </main>
  );
}