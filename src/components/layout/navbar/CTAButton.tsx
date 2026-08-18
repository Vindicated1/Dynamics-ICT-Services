import Link from "next/link";

export default function CTAButton() {
  return (
    <Link
      href="/contact"
      className="
      hidden
      lg:inline-flex
      items-center
      rounded-full
      bg-blue-600
      px-6
      py-3
      text-sm
      font-semibold
      text-white
      transition
      hover:bg-blue-700
    "
    >
      Get a Quote
    </Link>
  );
}