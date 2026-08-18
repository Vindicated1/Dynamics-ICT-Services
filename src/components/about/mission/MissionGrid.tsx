import { missionVision } from "@/data/about/mission";
import MissionCard from "./MissionCard";

export default function MissionGrid() {
  return (
    <div className="mt-20 grid gap-10 lg:grid-cols-2">
      {missionVision.map((item) => (
        <MissionCard
          key={item.title}
          title={item.title}
          description={item.description}
          icon={item.icon}
        />
      ))}
    </div>
  );
}