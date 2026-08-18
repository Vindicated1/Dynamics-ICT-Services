"use client";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function FAQSearch({
  value,
  onChange,
}: Props) {
  return (
    <div className="mx-auto mt-12 max-w-2xl">
      <input
        type="text"
        placeholder="Search frequently asked questions..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl border border-slate-300 bg-white px-6 py-4 text-lg outline-none transition focus:border-blue-600"
      />
    </div>
  );
}