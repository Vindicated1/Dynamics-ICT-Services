"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  TextareaProps
>(({ className, label, error, id, ...props }, ref) => {
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

      <textarea
        id={id}
        ref={ref}
        className={cn(
          "min-h-[140px] w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm shadow-sm transition-all",
          "placeholder:text-slate-400",
          "focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-100",
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
});

Textarea.displayName = "Textarea";

export default Textarea;