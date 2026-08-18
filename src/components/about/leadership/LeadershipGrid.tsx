import { leadership } from "@/data/about/leadership";
import LeaderCard from "./LeaderCard";

export default function LeadershipGrid() {
  return (
    <div className="mt-20 grid gap-10 md:grid-cols-2 xl:grid-cols-4">
      {leadership.map((leader) => (
        <LeaderCard
          key={leader.name}
          leader={leader}
        />
      ))}
    </div>
  );
}