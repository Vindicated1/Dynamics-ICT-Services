import type { ReactNode } from "react";
import clsx from "clsx";

interface SectionHeadingProps {
  badge?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  subtitle?: string;
  centered?: boolean;
  center?: boolean;
  light?: boolean;
  children?: ReactNode;
  className?: string;
}

export default function SectionHeading({
  badge,
  eyebrow,
  title,
  description,
  subtitle,
  centered = false,
  center,
  light = false,
  children,
  className,
}: SectionHeadingProps) {
  const label = badge ?? eyebrow;
  const isCentered = centered || center;
  const supportingText = description ?? subtitle;

  return (
    <div
      className={clsx(
        "relative z-10 max-w-3xl",
        isCentered && "mx-auto text-center",
        className
      )}
    >
      {label && (
        <div
          className={clsx(
            "mb-4 inline-flex items-center rounded-full px-4 py-2",
            "text-xs font-semibold uppercase tracking-[0.18em]",
            light
              ? "bg-white/10 text-blue-200"
              : "bg-blue-50 text-blue-700"
          )}
        >
          {label}
        </div>
      )}

      <h2
        className={clsx(
          "text-3xl font-bold leading-[1.1] tracking-tight",
          "sm:text-4xl lg:text-5xl",
          light ? "text-white" : "text-slate-900"
        )}
      >
        {title}
      </h2>

      {supportingText && (
        <p
          className={clsx(
            "mt-5 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8",
            isCentered && "mx-auto",
            light ? "text-slate-300" : "text-slate-600"
          )}
        >
          {supportingText}
        </p>
      )}

      {children}
    </div>
  );
}
