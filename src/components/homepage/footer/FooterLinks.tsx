import Link from "next/link";

interface Props {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}

export default function FooterLinks({
  title,
  links,
}: Props) {
  return (
    <div>
      <h3 className="mb-6 text-lg font-semibold text-white">
        {title}
      </h3>

      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-slate-400 transition hover:text-blue-400"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}