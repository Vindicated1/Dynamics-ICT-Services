import Image from "next/image";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";

interface Props {
  images: string[];
}

export default function Gallery({
  images,
}: Props) {
  return (
    <Section background="white">
      <Container>
        <SectionHeading
          badge="PROJECT GALLERY"
          title="Solution Showcase"
          description="Examples of real-world deployments."
          centered
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {images.map((image) => (
            <div
              key={image}
              className="overflow-hidden rounded-3xl shadow-lg"
            >
              <Image
                src={image}
                alt=""
                width={600}
                height={400}
                className="aspect-[4/3] h-full w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}