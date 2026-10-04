import {
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { contactInfo } from "@/data/contact/contact";

const iconMap = {
  office: MapPin,
  phone: Phone,
  email: Mail,
  hours: Clock3,
};

export default function ContactInfo() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Get In Touch
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            We're Here to Help
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Whether you need a new technology solution, technical
            support, or want to discuss a project, our team is ready
            to help.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((item) => {
            const Icon =
              iconMap[item.id as keyof typeof iconMap];

            const content = (
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 font-semibold text-blue-600">
                  {item.value}
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>
            );

            if (item.href) {
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className="block"
                >
                  {content}
                </a>
              );
            }

            return (
              <div key={item.id}>
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}