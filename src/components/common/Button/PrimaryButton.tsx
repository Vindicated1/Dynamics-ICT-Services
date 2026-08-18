"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Props {
  href: string;
  children: React.ReactNode;
}

export default function PrimaryButton({
  href,
  children,
}: Props) {
  return (
    <Link
      href={href}
      className="
      inline-flex
      items-center
      rounded-xl
      bg-gradient-to-r
      from-blue-600
      to-cyan-500
      px-7
      py-4
      font-semibold
      text-white
      transition-all
      duration-300
      hover:shadow-lg
      hover:shadow-blue-500/30
      "
    >
      {children}

      <ArrowRight
        size={18}
        className="ml-3"
      />
    </Link>
  );
}