"use client";

import CountUp from "react-countup";

interface Props {
  value: number;
  suffix?: string;
}

export default function AnimatedCounter({
  value,
  suffix = "",
}: Props) {
  return (
    <span className="text-5xl font-bold">
      <CountUp
        end={value}
        duration={2.5}
      />
      {suffix}
    </span>
  );
}