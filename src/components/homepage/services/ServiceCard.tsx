"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import Card from "@/components/common/Card";
import Badge from "@/components/common/Badge";
import ServiceIcon from "./ServiceIcon";

import type { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({
  service,
}: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className="flex h-full flex-col overflow-hidden p-0">

        {/* Top Image */}

        <div className="relative h-56 overflow-hidden">

          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />

        </div>

        {/* Content */}

        <div className="flex flex-1 flex-col p-8">

          <Badge className="w-fit">
            {service.category}
          </Badge>

          <div className="mt-6">
            <ServiceIcon
              color={service.color}
              icon={<Icon size={28} />}
            />
          </div>

          <h3 className="mt-6 text-2xl font-bold text-slate-900">
            {service.title}
          </h3>

          <p className="mt-4 leading-7 text-slate-600">
            {service.shortDescription}
          </p>

          <div className="mt-auto pt-8">

            <Link
              href={service.href}
              className="inline-flex items-center font-semibold text-blue-600 transition-colors hover:text-blue-800"
            >
              Learn More

              <ArrowRight
                size={18}
                className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

          </div>

        </div>

      </Card>
    </motion.div>
  );
}