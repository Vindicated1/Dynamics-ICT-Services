"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import Brand from "./Brand";

const links = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Solutions", href: "/solutions" },
  { title: "Projects", href: "/projects" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden rounded-lg p-2 transition hover:bg-slate-100"
        aria-label="Open menu"
      >
        <Menu size={28} />
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] bg-white">
          <div className="flex h-20 items-center justify-between border-b px-6">
            <Brand />

            <button
              onClick={() => setOpen(false)}
              className="rounded-lg p-2 hover:bg-slate-100"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
          </div>

          <nav className="flex flex-col px-6 py-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-slate-100 py-5 text-lg font-medium text-slate-700 transition hover:text-blue-600"
              >
                {link.title}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-8 rounded-full bg-blue-600 py-4 text-center font-semibold text-white hover:bg-blue-700"
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}