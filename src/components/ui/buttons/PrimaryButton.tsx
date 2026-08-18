import Link from "next/link";

interface Props {
  href?: string;
  children: React.ReactNode;
}

export default function PrimaryButton({
  href = "#",
  children,
}: Props) {
  return (
    <Link
      href={href}
      className="inline-flex items-center rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-blue-700"
    >
      {children}
    </Link>
  );
}