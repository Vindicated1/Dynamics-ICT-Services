"use client";

export default function TrustedLogos() {
  const companies = [
    "University of Ibadan",
    "Prime Logistics",
    "Green Energy",
    "ABC Manufacturing",
    "FutureTech",
    "Elite Hospital",
  ];

  return (
    <div className="mt-24">
      <p className="mb-10 text-center text-sm font-semibold uppercase tracking-widest text-slate-500">
        Trusted By
      </p>

      <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-6">
        {companies.map((company) => (
          <div
            key={company}
            className="flex h-24 items-center justify-center rounded-2xl border border-slate-200 bg-white font-semibold text-slate-500 shadow-sm"
          >
            {company}
          </div>
        ))}
      </div>
    </div>
  );
}