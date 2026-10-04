"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Badge from "@/components/common/Badge";
import { PrimaryButton } from "@/components/common";

import type { Service } from "@/data/homepage/services";

interface SpotlightContentProps {
  service: Service;
}

export default function SpotlightContent({
  service,
}: SpotlightContentProps) {
  const Icon = service.icon;

  return (
    <div className="grid items-center gap-12 lg:grid-cols-2">
      {/* LEFT CONTENT */}

      <div>
        <Badge>Featured Service</Badge>

        <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
          {service.title}
        </h2>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          {service.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <PrimaryButton href={service.href}>
            Explore Service
          </PrimaryButton>

          <Link
            href="/contact"
            className="inline-flex items-center rounded-xl border border-slate-300 px-6 py-4 font-semibold text-slate-700 transition-all duration-300 hover:border-blue-600 hover:text-blue-600"
          >
            Start Your Project

            <ArrowRight
              className="ml-2"
              size={18}
            />
          </Link>
        </div>

        <div className="mt-10 flex items-center gap-4">
          <div
            className="flex h-16 w-16 items-center justify-center rounded-2xl shadow-xl"
            style={{
              background: service.color,
            }}
          >
            <Icon
              size={30}
              className="text-white"
            />
          </div>

          <div>
            <h4 className="font-semibold text-slate-900">
              {service.category}
            </h4>

            <p className="text-slate-500">
              Enterprise Technology Solution
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE */}

      <div className="relative">
        <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />

        <div className="relative overflow-hidden rounded-[32px] border border-slate-200 shadow-2xl">
          <Image
            src={service.image}
            alt={service.title}
            width={700}
            height={500}
            className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
        </div>
      </div>
    </div>
  );
}
