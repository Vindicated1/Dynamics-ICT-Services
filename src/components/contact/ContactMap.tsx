import { MapPin } from "lucide-react";

export default function ContactMap() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          {/* Location information */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Find Us
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Visit Our Office
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Our team is available to discuss your technology needs,
              ongoing projects and potential partnerships.
            </p>

            <div className="mt-8 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <MapPin className="h-6 w-6" />
              </div>

              <div>
                <h3 className="font-bold text-slate-900">
                  Dynamics ICT Services
                </h3>

                <p className="mt-1 text-slate-600">
                  Ibadan, Oyo State, Nigeria
                </p>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="relative min-h-[380px] overflow-hidden rounded-3xl border border-slate-200 bg-slate-100">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg">
                  <MapPin className="h-8 w-8" />
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  Our Location
                </h3>

                <p className="mt-2 text-sm text-slate-600">
                  Ibadan, Oyo State, Nigeria
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Interactive map integration can be connected here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}