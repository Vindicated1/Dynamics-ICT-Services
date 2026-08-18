import Link from "next/link";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";

import { projects } from "@/data/portfolio/projects";

interface Props {
  caseStudies: string[];
}

export default function RelatedCaseStudies({
  caseStudies,
}: Props) {
  const relatedProjects = projects.filter((project) =>
    caseStudies.includes(project.slug)
  );

  if (relatedProjects.length === 0) {
    return null;
  }

  return (
    <Section background="gray">
      <Container>
        <SectionHeading
          badge="SUCCESS STORIES"
          title="Related Case Studies"
          description="See how we've successfully delivered similar solutions."
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