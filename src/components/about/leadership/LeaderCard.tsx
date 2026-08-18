"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, LinkIcon } from "lucide-react";

interface Leader {
  name: string;
  position: string;
  image: string;
  bio: string;
  linkedin: string;
  email: string;
}

interface LeaderCardProps {
  leader: Leader;
}

export default function LeaderCard({
  leader,
}: LeaderCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="relative h-80 w-full">
        <Image
          src={leader.image}
          alt={leader.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-bold text-slate-900">
          {leader.name}
        </h3>

        <p className="mt-2 font-medium text-blue-600">
          {leader.position}
        </p>

        <p className="mt-5 leading-7 text-slate-600">
          {leader.bio}
        </p>

        <div className="mt-8 flex gap-4">
          <Link
            href={leader.linkedin}
            target="_blank"
            className="rounded-xl bg-slate-100 p-3 transition hover:bg-blue-600 hover:text-white"
          >
            <LinkIcon size={20} />
          </Link>

          <Link
            href={`mailto:${leader.email}`}
            className="rounded-xl bg-slate-100 p-3 transition hover:bg-blue-600 hover:text-white"
          >
            <Mail size={20} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}