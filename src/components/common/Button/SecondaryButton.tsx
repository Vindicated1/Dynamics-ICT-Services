"use client";

import Link from "next/link";

interface Props {
  href: string;
  children: React.ReactNode;
}

export default function SecondaryButton({
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
      border
      border-slate-300
      bg-white
      px-7
      py-4
      font-semibold
      transition-all
      duration-300
      hover:border-blue-500
      hover:text-blue-600
      "
    >
      {children}
    </Link>
  );
}