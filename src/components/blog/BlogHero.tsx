import Container from "@/components/common/Container";

export default function BlogHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.18),transparent_40%)]" />

      <Container>
        <div className="relative max-w-3xl">
          <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
            Dynamics ICT Insights
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Technology Insights for
            <span className="block text-blue-400">
              Modern Businesses.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Explore practical insights, technology trends and useful
            information about software, cybersecurity, networking,
            renewable energy and digital transformation.
          </p>
        </div>
      </Container>
    </section>
  );
}