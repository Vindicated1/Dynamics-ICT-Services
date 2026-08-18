"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface GalleryImageProps {
  image: string;
  title: string;
}

export default function GalleryImage({
  image,
  title,
}: GalleryImageProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.95,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.45,
      }}
      className="group relative overflow-hidden rounded-3xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />
      </div>
    </motion.div>
  );
}