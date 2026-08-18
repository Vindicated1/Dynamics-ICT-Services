"use client";

import CenterLogo from "./CenterLogo";
import ConnectionLines from "./ConnectionLines";
import FloatingGlow from "./FloatingGlow";
import OrbitRing from "./OrbitRing";
import TechNode from "./TechNode";

import { heroNodes } from "@/data/homepage/heroNodes";

const CENTER = 325;

export default function TechNetwork() {
  return (
    <div className="relative h-[650px] w-[650px]">

      {/* Background Glow */}
      <FloatingGlow
        size="lg"
        color="blue"
        className="-left-40 top-12"
      />

      <FloatingGlow
        size="md"
        color="cyan"
        className="right-0 bottom-10"
        delay={2}
      />

      <FloatingGlow
        size="sm"
        color="purple"
        className="left-1/2 top-1/2 -translate-x-1/2"
        delay={4}
      />

      {/* Network Lines */}
      <ConnectionLines />

      {/* Orbit Rings */}
      <div className="absolute inset-0 flex items-center justify-center">

        <OrbitRing
          size={240}
          duration={18}
        />

        <OrbitRing
          size={330}
          duration={28}
          reverse
        />

        <OrbitRing
          size={430}
          duration={40}
        />

      </div>

      {/* Center Logo */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <CenterLogo />
      </div>

      {/* Technology Nodes */}
      {heroNodes.map((node) => {
        const angle = (node.angle * Math.PI) / 180;

        const x =
          CENTER +
          Math.cos(angle) * node.radius;

        const y =
          CENTER +
          Math.sin(angle) * node.radius;

        const Icon = node.icon;

        return (
          <TechNode
            key={node.id}
            title={node.title}
            icon={<Icon size={22} />}
            delay={node.delay}
            style={{
              left: x,
              top: y,
              transform: "translate(-50%, -50%)",
            }}
          />
        );
      })}
    </div>
  );
}