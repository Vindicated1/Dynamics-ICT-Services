import { aboutCTA } from "@/data/about/cta";
import CTAButtons from "./CTAButtons";

export default function CTAContent() {
  return (
    <>
      <span className="rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
        {aboutCTA.badge}
      </span>

      <h2 className="mt-8 text-4xl font-bold text-white lg:text-5xl">
        {aboutCTA.title}
      </h2>

      <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
        {aboutCTA.description}
      </p>

      <CTAButtons />
    </>
  );
}