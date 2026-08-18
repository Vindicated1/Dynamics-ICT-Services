import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center"
      aria-label="Dynamics ICT Services"
    >
      <Image
        src="/images/brand/logo.svg" // Change to logo.svg if using SVG
        alt="Dynamics ICT Services"
        width={220}
        height={60}
        priority
        className="h-14 w-auto object-contain transition duration-300"
      />
    </Link>
  );
}