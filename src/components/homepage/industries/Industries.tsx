"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import PrimaryButton from "@/components/common/Button/PrimaryButton";

import IndustriesHeader from "./IndustriesHeader";
import IndustriesGrid from "./IndustriesGrid";

export default function Industries() {
  return (
    <Section
      background="white"
      className="relative overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-blue-500/5 blur-[160px]" />

      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-400/5 blur-[160px]" />

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
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <IndustriesHeader />

          <IndustriesGrid />

          {/* CTA */}

          <div className="mt-24 rounded-[32px] bg-gradient-to-r from-slate-900 to-blue-900 p-12 text-center text-white">

            <h3 className="text-3xl font-bold">
              Can't Find Your Industry?
            </h3>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Every organization is unique. Our team designs tailored ICT,
              software, networking, security and renewable energy solutions
              for businesses across every sector.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">

              <PrimaryButton href="/contact">
                Talk to Our Experts
              </PrimaryButton>

              <Link
                href="/industries"
                className="inline-flex items-center rounded-xl border border-white/30 px-6 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-slate-900"
              >
                View All Industries

                <ArrowRight
                  className="ml-2"
                  size={18}
                />

              </Link>

            </div>

          </div>

        </motion.div>
      </Container>
    </Section>
  );
}