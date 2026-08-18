import Image from "next/image";

interface PartnerLogoProps {
  name: string;
  logo: string;
}

export default function PartnerLogo({
  name,
  logo,
}: PartnerLogoProps) {
  return (
    <div className="flex h-28 w-56 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg">
      <Image
        src={logo}
        alt={name}
        width={140}
        height={60}
        className="h-auto w-auto object-contain grayscale transition duration-300 hover:grayscale-0"
      />
    </div>
  );
}