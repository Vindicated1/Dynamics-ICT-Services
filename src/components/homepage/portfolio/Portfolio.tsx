import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import { prisma } from "@/lib/prisma";

import PortfolioContent from "./PortfolioContent";

export default async function Portfolio() {
  const records = await prisma.project.findMany({
    where: {
      isPublished: true,
      showOnHomepage: true,
    },
    orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
  });

  const projects = records.map((project) => ({
    id: project.id,
    title: project.title,
    category: project.category,
    description: project.description,
    image: project.image,
    href: `/portfolio/${project.slug}`,
    technologies: project.services,
    featured: project.isFeatured,
  }));

  return (
    <Section background="gray">
      <Container>
        <PortfolioContent projects={projects} />
      </Container>
    </Section>
  );
}