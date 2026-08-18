"use client";

import { useEffect, useState } from "react";

import Container from "@/components/common/Container";

import Brand from "./Brand";
import DesktopNav from "./DesktopNav";
import CTAButton from "./CTAButton";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const [scrolled, setScrolled] =
    useState(false);

  useEffect(() => {
    const handleScroll = () =>
      setScrolled(window.scrollY > 20);

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <header
      className={`
        sticky
        top-0
        z-50
        transition-all
        duration-300
        ${
          scrolled
            ? "border-b border-slate-200 bg-white/90 backdrop-blur-xl shadow-sm"
            : "bg-white"
        }
      `}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Brand />

          <DesktopNav />

          <CTAButton />

          <MobileNav />
        </div>
      </Container>
    </header>
  );
}