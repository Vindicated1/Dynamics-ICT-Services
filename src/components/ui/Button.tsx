"use client";

import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl",

        secondary:
          "bg-slate-900 text-white hover:bg-slate-800",

        outline:
          "border border-slate-300 bg-white hover:bg-slate-100",

        ghost:
          "hover:bg-slate-100",

        destructive:
          "bg-red-600 text-white hover:bg-red-700",
      },

      size: {
        sm: "h-9 px-4 text-sm",

        md: "h-11 px-6",

        lg: "h-14 px-8 text-lg",

        xl: "h-16 px-10 text-xl",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;

  href?: string;

  leftIcon?: ReactNode;

  rightIcon?: ReactNode;
}

export default function Button({
  children,
  href,
  variant,
  size,
  leftIcon,
  rightIcon,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
      >
        {leftIcon}

        <span className="mx-2">{children}</span>

        {rightIcon}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...props}
    >
      {leftIcon}

      <span className="mx-2">{children}</span>

      {rightIcon}
    </button>
  );
}