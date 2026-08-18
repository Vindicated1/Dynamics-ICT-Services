import { processSteps } from "@/data/services/process";

import ProcessCard from "./ProcessCard";
import ProcessConnector from "./ProcessConnector";

export default function ProcessTimeline() {
  return (
    <div className="mx-auto mt-20 max-w-5xl">
      {processSteps.map((step, index) => (
        <div key={step.step}>
          <ProcessCard
            {...step}
          />

          {index !== processSteps.length - 1 && (
            <ProcessConnector />
          )}
        </div>
      ))}
    </div>
  );
}