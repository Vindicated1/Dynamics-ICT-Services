import Image from "next/image";
import Link from "next/link";

export default function Brand() {
  return (
    <Link
      href="/"
      aria-label="Dynamics ICT Services"
      className="flex shrink-0 items-center gap-3"
    >
      <Image
        src="/images/brand/logo.svg"
        alt="Dynamics ICT Services"
        width={58}
        height={58}
        priority
        className="h-12 w-12 object-contain"
      />

      <div className="hidden sm:block leading-tight">
        <p className="text-base font-bold tracking-tight text-slate-900 lg:text-lg">
          Dynamics ICT Services
        </p>

        <p className="mt-0.5 text-[10px] font-medium tracking-wide text-slate-500 lg:text-xs">
          Innovative Technology Solutions
        </p>
      </div>
    </Link>
  );
}