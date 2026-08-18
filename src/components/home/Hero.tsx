import Container from "@/components/common/Container";
import { Button } from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="bg-slate-950 py-32 text-white">
      <Container>

        <span className="rounded-full bg-blue-700 px-4 py-2 text-sm">
          Nigeria's Trusted Technology Partner
        </span>

        <h1 className="mt-8 max-w-4xl text-6xl font-extrabold leading-tight">
          Smart Energy.

          <br />

          Secure Spaces.

          <br />

          Connected Technology.
        </h1>

        <p className="mt-8 max-w-2xl text-xl text-slate-300">
          We design, deploy and maintain
          world-class ICT, Solar,
          Fleet Tracking, Smart Home,
          Security and Digital Solutions.
        </p>

        <div className="mt-10 flex gap-4">
          <Button size="lg">
            Get Free Quote
          </Button>

          <Button
            size="lg"
            variant="outline"
          >
            Explore Services
          </Button>
        </div>

      </Container>
    </section>
  );
}