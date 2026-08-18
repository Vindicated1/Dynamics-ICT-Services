import Link from "next/link";

import SectionHeading from "@/components/common/SectionHeading";

import { services } from "@/data/services/services";

interface Props {
  currentSlug: string;
}

export default function RelatedServices({
  currentSlug,
}: Props) {
  const relatedServices = services
    .filter(
      (service) => service.slug !== currentSlug
    )
    .slice(0, 3);

  if (relatedServices.length === 0) {
    return null;
  }

  return (
    <section className="border-t border-slate-200 bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Related Services"
          title="Explore More Technology Solutions"
          description="Discover other solutions from Dynamics ICT Services that can support your organization."
          centered
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {relatedServices.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {service.description}
                </p>

                <span className="mt-5 inline-flex text-sm font-semibold text-blue-600">
                  Explore Service

                  <span className="ml-2 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}