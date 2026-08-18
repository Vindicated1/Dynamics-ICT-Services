import Link from "next/link";

import { projects } from "@/data/portfolio/projects";

interface Props {
  currentSlug: string;
}

export default function ProjectNavigation({
  currentSlug,
}: Props) {
  const currentIndex = projects.findIndex(
    (project) => project.slug === currentSlug
  );

  const previous =
    currentIndex > 0
      ? projects[currentIndex - 1]
      : null;

  const next =
    currentIndex < projects.length - 1
      ? projects[currentIndex + 1]
      : null;

  return (
    <div className="mx-auto mt-24 flex max-w-6xl justify-between border-t border-slate-200 pt-10">
      {previous ? (
        <Link
          href={`/portfolio/${previous.slug}`}
          className="text-blue-600 hover:underline"
        >
          ← {previous.title}
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={`/portfolio/${next.slug}`}
          className="text-blue-600 hover:underline"
        >
          {next.title} →
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}