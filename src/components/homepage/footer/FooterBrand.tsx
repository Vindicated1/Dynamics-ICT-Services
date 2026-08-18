"use client";

import Link from "next/link";

import {
  footerCompany,
  socialLinks,
} from "@/data/homepage/footer";

export default function FooterBrand() {
  return (
    <div>
      <Link
        href="/"
        className="text-3xl font-bold text-white"
      >
        {footerCompany.name}
      </Link>

      <p className="mt-6 leading-8 text-slate-400">
        {footerCompany.description}
      </p>

      <div className="mt-8 flex gap-4">
        {socialLinks.map((social) => {
          const Icon = social.icon;

          return (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition-all duration-300 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
              aria-label={social.name}
            >
              <Icon size={18} />
            </a>
          );
        })}
      </div>
    </div>
  );
}