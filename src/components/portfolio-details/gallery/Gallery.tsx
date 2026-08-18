import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";

import GalleryImage from "./GalleryImage";

interface Props {
  title: string;
  gallery: string[];
}

export default function Gallery({
  title,
  gallery,
}: Props) {
  return (
    <Section background="white">
      <Container>
        <SectionHeading
          badge="PROJECT GALLERY"
          title="Project Images"
          description="Explore highlights from the implementation."
          centered
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {gallery.map((image) => (
            <GalleryImage
              key={image}
              image={image}
              title={title}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}