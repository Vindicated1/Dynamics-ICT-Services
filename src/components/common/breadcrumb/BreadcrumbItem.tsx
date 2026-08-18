import Link from "next/link";

interface BreadcrumbItemProps {
  label: string;
  href?: string;
  active?: boolean;
}

export default function BreadcrumbItem({
  label,
  href,
  active = false,
}: BreadcrumbItemProps) {
  if (active) {
    return (
      <span className="font-medium text-blue-600">
        {label}
      </span>
    );
  }

  return (
    <Link
      href={href ?? "#"}
      className="transition-colors hover:text-blue-600"
    >
      {label}
    </Link>
  );
}