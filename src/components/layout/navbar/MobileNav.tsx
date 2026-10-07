"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

import Brand from "./Brand";
import { servicesMenuItems, solutionsMenuItems } from "./menu-items";

const linksBeforeMenus = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
];

const linksAfterMenus = [
  { title: "Projects", href: "/projects" },
  { title: "Portfolio", href: "/portfolio" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

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

          <nav className="flex max-h-[calc(100vh-5rem)] flex-col overflow-y-auto px-6 py-8">
            {linksBeforeMenus.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-slate-100 py-5 text-lg font-medium text-slate-700 transition hover:text-blue-600"
              >
                {link.title}
              </Link>
            ))}

            {[
              { title: "Services", items: servicesMenuItems },
              { title: "Solutions", items: solutionsMenuItems },
            ].map((menu) => {
              const expanded = expandedMenu === menu.title;
              const menuId = `mobile-menu-${menu.title.toLowerCase()}`;

              return (
                <div key={menu.title} className="border-b border-slate-100">
                  <button
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={menuId}
                    onClick={() =>
                      setExpandedMenu(expanded ? null : menu.title)
                    }
                    className="flex w-full items-center justify-between py-5 text-left text-lg font-medium text-slate-700 transition hover:text-blue-600"
                  >
                    {menu.title}
                    <ChevronDown
                      size={20}
                      className={`transition-transform ${
                        expanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {expanded && (
                    <div id={menuId} className="space-y-1 pb-4 pl-4">
                      {menu.items.map((item, index) => (
                        <div key={item.href}>
                          {item.group !== menu.items[index - 1]?.group && (
                            <h3 className="px-3 pb-1 pt-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                              {item.group}
                            </h3>
                          )}
                          <Link
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className="block rounded-lg px-3 py-3 text-base text-slate-600 transition hover:bg-slate-50 hover:text-blue-600"
                          >
                            {item.title}
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {linksAfterMenus.map((link) => (
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