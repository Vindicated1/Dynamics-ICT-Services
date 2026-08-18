"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

interface Props {
  challenge: string;
}

export default function ChallengeCard({
  challenge,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl border border-red-100 bg-red-50 p-6"
    >
      <AlertTriangle
        className="mb-4 text-red-600"
        size={28}
      />

      <p className="font-medium text-slate-700">
        {challenge}
      </p>
    </motion.div>
  );
}