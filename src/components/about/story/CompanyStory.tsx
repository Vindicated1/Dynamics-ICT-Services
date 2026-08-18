import Container from "@/components/common/Container";
import Section from "@/components/common/Section";

import StoryContent from "./StoryContent";

export default function CompanyStory() {
  return (
    <Section background="white">
      <Container>
        <div className="mx-auto max-w-4xl">
          <StoryContent />
        </div>
      </Container>
    </Section>
  );
}