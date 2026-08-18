"use client";

import { useState } from "react";

import Container from "@/components/common/Container";

import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import MobileMenuButton from "./MobileMenuButton";
import SearchButton from "./SearchButton";
import QuoteButton from "./QuoteButton";
import HeaderBackground from "./HeaderBackground";

import useHeaderScroll from "@/hooks/useHeaderScroll";

export default function Header() {
  const scrolled = useHeaderScroll();

  const [mobileOpen, setMobileOpen] =
    useState(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3"
            : "py-6"
        }`}
      >
        <HeaderBackground
          scrolled={scrolled}
        />

        <Container className="relative z-10">
          <div className="flex items-center justify-between">

            <Logo />

            <DesktopNav />

            <div className="hidden items-center gap-3 lg:flex">
              <SearchButton />

              <QuoteButton />
            </div>

            <MobileMenuButton
              open={mobileOpen}
              onClick={() =>
                setMobileOpen(!mobileOpen)
              }
            />

          </div>
        </Container>
      </header>

      <MobileNav
        open={mobileOpen}
        onClose={() =>
          setMobileOpen(false)
        }
      />
    </>
  );
}