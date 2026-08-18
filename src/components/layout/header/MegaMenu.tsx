"use client";

import { motion, AnimatePresence } from "framer-motion";
import MegaMenuColumn from "./MegaMenuColumn";

interface MegaMenuProps {
  open: boolean;
  columns: {
    heading: string;
    items: any[];
  }[];
}

export default function MegaMenu({
  open,
  columns,
}: MegaMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: 20,
          }}
          transition={{
            duration: 0.25,
          }}
          className="absolute left-1/2 top-full z-50 mt-5 w-[1000px] -translate-x-1/2 rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl"
        >
          <div className="grid grid-cols-3 gap-10">
            {columns.map((column) => (
              <MegaMenuColumn
                key={column.heading}
                heading={column.heading}
                items={column.items}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}