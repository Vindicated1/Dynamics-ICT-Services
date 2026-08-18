"use client";

import * as React from "react";

interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Checkbox({
  label,
  id,
  ...props
}: CheckboxProps) {
  return (
    <label
      htmlFor={id}
      className="flex cursor-pointer items-center gap-3"
    >
      <input
        id={id}
        type="checkbox"
        className="h-5 w-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
        {...props}
      />

      <span className="text-sm text-slate-700">
        {label}
      </span>
    </label>
  );
}