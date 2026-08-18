"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface Option {
  label: string;
  value: string;
}

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: Option[];
}

const Select = React.forwardRef<
  HTMLSelectElement,
  SelectProps
>(({ label, error, options, className, id, ...props }, ref) => {
  return (
    <div className="space-y-2">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-semibold text-slate-700"
        >
          {label}
        </label>
      )}

      <select
        id={id}
        ref={ref}
        className={cn(
          "h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm shadow-sm",
          "focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-100",
          error && "border-red-500",
          className
        )}
        {...props}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>

      {error && (
        <p className="text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
});

Select.displayName = "Select";

export default Select;