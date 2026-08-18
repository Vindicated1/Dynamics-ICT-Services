import { servicesOverview } from "@/data/services/overview";

export default function OverviewContent() {
  return (
    <>
      <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
        {servicesOverview.badge}
      </span>

      <h2 className="mt-6 text-4xl font-bold text-slate-900">
        {servicesOverview.title}
      </h2>

      <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
        {servicesOverview.description}
      </p>
    </>
  );
}