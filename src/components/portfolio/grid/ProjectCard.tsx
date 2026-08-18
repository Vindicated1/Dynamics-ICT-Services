import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  slug: string;
  title: string;
  category: string;
  image: string;
  shortDescription: string;
}

export default function ProjectCard({
  slug,
  title,
  category,
  image,
  shortDescription,
}: ProjectCardProps) {
  return (
    <Link
      href={`/portfolio/${slug}`}
      className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-8">
        <span className="text-sm font-semibold text-blue-600">
          {category}
        </span>

        <h3 className="mt-3 text-2xl font-bold text-slate-900">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          {shortDescription}
        </p>
      </div>
    </Link>
  );
}