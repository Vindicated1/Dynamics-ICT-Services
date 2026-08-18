"use client";

import { motion } from "framer-motion";

import Container from "@/components/common/Container";

import TrustedClientsHeader from "./TrustedClientsHeader";
import LogoMarquee from "./LogoMarquee";
import TrustMetrics from "./TrustMetrics";

export default function TrustedClients() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-28">

      {/* Background Grid */}

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(#0B5FFF 1px, transparent 1px),
            linear-gradient(90deg, #0B5FFF 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Background Glow */}

      <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />

      <Container>

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <TrustedClientsHeader />

          <LogoMarquee />

          <TrustMetrics />
        </motion.div>

      </Container>

    </section>
  );
}