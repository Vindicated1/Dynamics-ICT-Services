import Container from "@/components/common/Container";
import Breadcrumb from "@/components/common/breadcrumb/Breadcrumb";

interface FeaturedSolutionHeroProps {
  title: string;
  subtitle: string;
}

export default function FeaturedSolutionHero({
  title,
  subtitle,
}: FeaturedSolutionHeroProps) {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-32">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      <Container className="relative z-10">
        <Breadcrumb
          items={[
            {
              label: "Solutions",
              href: "/solutions",
            },
            {
              label: title,
            },
          ]}
        />

        <div className="mt-10 max-w-4xl">
          <span className="inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-blue-300">
            Featured Solution
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-tight text-white lg:text-6xl">
            {title}
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-300">
            {subtitle}
          </p>
        </div>
      </Container>
    </section>
  );
}