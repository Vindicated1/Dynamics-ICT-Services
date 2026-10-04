"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Solutions", href: "/solutions" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#071A52]/70 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 font-bold text-white shadow-lg">
              D
            </div>

            <div className="hidden sm:block">
              <h2 className="text-lg font-bold text-white">
                Dynamics ICT
              </h2>

              <p className="text-xs text-slate-300">
                Smart Technology Solutions
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-white"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button className="bg-blue-600 px-6 hover:bg-blue-700">
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-white transition hover:bg-white/10 lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="fixed inset-y-0 right-0 z-50 w-72 border-l border-white/10 bg-[#071A52] p-8 shadow-2xl lg:hidden"
          >
            <div className="mb-10 flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">
                Menu
              </h2>

              <button
                onClick={() => setMobileOpen(false)}
                className="rounded-lg p-2 text-white hover:bg-white/10"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-medium text-slate-300 transition hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <Button className="mt-10 w-full bg-blue-600 hover:bg-blue-700">
              Get a Quote
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
