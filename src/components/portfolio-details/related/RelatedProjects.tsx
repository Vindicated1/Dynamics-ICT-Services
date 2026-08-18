import Link from "next/link";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";

import { projects } from "@/data/portfolio/projects";

interface Props {
  currentSlug: string;
}

export default function RelatedProjects({
  currentSlug,
}: Props) {
  const relatedProjects = projects
    .filter((project) => project.slug !== currentSlug)
    .slice(0, 3);

  return (
    <Section background="white">
      <Container>
        <SectionHeading
          badge="RELATED PROJECTS"
          title="More Case Studies"
          description="Explore additional projects completed by Dynamics ICT Services."
          centered
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {relatedProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/portfolio/${project.slug}`}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <h3 className="text-xl font-bold">
                {project.title}
              </h3>

              <p className="mt-4 text-slate-600">
                {project.shortDescription}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}