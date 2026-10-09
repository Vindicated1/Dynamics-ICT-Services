import Link from "next/link";

import {
  ArrowRight,
  Bot,
  Camera,
  Cloud,
  Code2,
  Database,
  Globe,
  Headphones,
  Megaphone,
  Network,
  ShieldCheck,
  Smartphone,
  Sun,
} from "lucide-react";

import SectionHeading from "@/components/common/SectionHeading";

import { services } from "@/data/services/services";

interface Props {
  currentSlug: string;
}

const iconMap = {
  Code2,
  Globe,
  Smartphone,
  Network,
  ShieldCheck,
  Camera,
  Sun,
  Cloud,
  Database,
  Bot,
  Megaphone,
  Headphones,
};

export default function RelatedServices({
  currentSlug,
}: Props) {
  const relatedServices = services
    .filter((service: { slug: string; }) => service.slug !== currentSlug)
    .slice(0, 3);

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="More Services"
          title="Explore Our Other Services"
          description="Discover more technology solutions designed to support your organization's growth and digital transformation."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {relatedServices.map((service: (typeof services)[number]) => {
            const Icon =
              iconMap[
                service.icon as keyof typeof iconMap
              ] ?? Code2;

            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
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

                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600">
                  Explore Service

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}