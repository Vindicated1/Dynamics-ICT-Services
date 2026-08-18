"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({
  href,
  children,
}: Props) {
  const pathname = usePathname();

  const active =
    pathname === href ||
    pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={`
        relative
        font-medium
        transition-colors
        ${
          active
            ? "text-blue-600"
            : "text-slate-700 hover:text-blue-600"
        }
      `}
    >
      {children}

      {active && (
        <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-blue-600" />
      )}
    </Link>
  );
}