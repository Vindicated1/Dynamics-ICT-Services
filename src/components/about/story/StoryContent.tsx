import { companyStory } from "@/data/about/story";

import StoryStats from "./StoryStats";

export default function StoryContent() {
  return (
    <>
      <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
        {companyStory.badge}
      </span>

      <h2 className="mt-6 text-4xl font-bold text-slate-900">
        {companyStory.title}
      </h2>

      <div className="mt-8 space-y-6 text-lg leading-8 text-slate-600">
        {companyStory.description.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <StoryStats />
    </>
  );
}