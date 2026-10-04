"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import Card from "@/components/common/Card";
import ServiceIcon from "./ServiceIcon";

import type { Service } from "@/data/homepage/services";

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

        {/* Content */}

        <div className="flex flex-1 flex-col p-8">

          <div className="mt-6">
            <ServiceIcon
              icon={<Icon />}
              color="blue"
            />
          </div>

          <h3 className="mt-6 text-2xl font-bold text-slate-900">
            {service.title}
          </h3>

          <p className="mt-4 leading-7 text-slate-600">
            {service.description}
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
