import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

interface PrimaryButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
}

export default function PrimaryButton({
  href,
  children,
  className = "",
  external = false,
}: PrimaryButtonProps) {
  const classes = `
    inline-flex
    items-center
    justify-center
    gap-2
    rounded-full
    bg-blue-600
    px-6
    py-3
    text-sm
    font-semibold
    text-white
    shadow-sm
    transition-all
    duration-300
    hover:-translate-y-0.5
    hover:bg-blue-700
    hover:shadow-lg
    focus:outline-none
    focus:ring-2
    focus:ring-blue-500
    focus:ring-offset-2
    ${className}
  `;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}

        <ArrowRight
          size={17}
          strokeWidth={2}
        />
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}

      <ArrowRight
        size={17}
        strokeWidth={2}
      />
    </Link>
  );
}