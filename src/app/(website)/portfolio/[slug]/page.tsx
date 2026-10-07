import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ProjectDetails from "@/components/projects/ProjectDetails";
import { prisma } from "@/lib/prisma";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await prisma.project.findFirst({
    where: { slug, isPublished: true, showOnProjects: true },
    select: { title: true, description: true },
  });

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | Portfolio | Dynamics ICT Services`,
    description: project.description,
  };
}

export default async function PortfolioProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = await prisma.project.findFirst({
    where: { slug, isPublished: true, showOnProjects: true },
  });

  if (!project) {
    notFound();
  }

  return (
    <ProjectDetails
      project={project}
      backHref="/portfolio"
      backLabel="Portfolio"
    />
  );
}
