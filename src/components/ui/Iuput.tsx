"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
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

        <input
          id={id}
          ref={ref}
          className={cn(
            "flex h-12 w-full rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm shadow-sm transition-all duration-200",
            "placeholder:text-slate-400",
            "focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-100",
            "disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-red-500 focus:border-red-500 focus:ring-red-100",
            className
          )}
          {...props}
        />

        {error && (
          <p className="text-sm text-red-600">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;