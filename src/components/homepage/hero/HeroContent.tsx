import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";

export default function HeroContent() {
  return (
    <div className="max-w-2xl">
      {/* Badge */}
      <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
        Nigeria's Trusted Technology Partner
      </span>

      {/* Heading */}
      <h1 className="mt-8 text-5xl font-extrabold leading-tight tracking-tight text-slate-100 lg:text-6xl">
        Smart Technology.
        <br />
        Secure Infrastructure.
        <br />
        Connected Future.
      </h1>

      {/* Description */}
      <p className="mt-8 text-lg leading-8 text-slate-400">
        Dynamics ICT Services delivers innovative ICT solutions,
        enterprise networking, cybersecurity, smart automation,
        CCTV surveillance, renewable energy systems, and custom
        software development that help organizations grow
        confidently in the digital age.
      </p>

      <HeroButtons />

      <HeroStats />
    </div>
  );
}