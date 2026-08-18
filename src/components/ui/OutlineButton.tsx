import Link from "next/link";

interface OutlineButtonProps {
  href: string;
  children: React.ReactNode;
}

export default function OutlineButton({
  href,
  children,
}: OutlineButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white hover:text-slate-900"
    >
      {children}
    </Link>
  );
}