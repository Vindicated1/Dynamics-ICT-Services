"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { navigation } from "@/data/homepage/navigation";
import QuoteButton from "./QuoteButton";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function MobileNav({
  open,
  onClose,
}: Props) {
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.aside
            className="fixed right-0 top-0 z-50 flex h-full w-[340px] max-w-[90vw] flex-col bg-white shadow-2xl lg:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between border-b p-6">
              <h2 className="text-xl font-bold">
                Menu
              </h2>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-3">
                {navigation.map((item) => {
                  if (item.megaMenu) {
                    return (
                      <div key={item.title}>
                        <button
                          onClick={() =>
                            setExpanded(
                              expanded === item.title
                                ? null
                                : item.title
                            )
                          }
                          className="flex w-full items-center justify-between rounded-lg py-3 text-left font-semibold"
                        >
                          {item.title}

                          <ChevronDown
                            size={18}
                            className={`transition-transform ${
                              expanded === item.title
                                ? "rotate-180"
                                : ""
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {expanded === item.title && (
                            <motion.div
                              initial={{
                                height: 0,
                                opacity: 0,
                              }}
                              animate={{
                                height: "auto",
                                opacity: 1,
                              }}
                              exit={{
                                height: 0,
                                opacity: 0,
                              }}
                              className="overflow-hidden"
                            >
                              {item.columns.map((column) => (
                                <div
                                  key={column.heading}
                                  className="mb-6"
                                >
                                  <h4 className="mb-2 text-sm font-semibold text-blue-600">
                                    {column.heading}
                                  </h4>

                                  <div className="space-y-2">
                                    {column.items.map((link) => (
                                      <Link
                                        key={link.title}
                                        href={link.href}
                                        onClick={onClose}
                                        className="block rounded-lg px-3 py-2 text-slate-600 hover:bg-slate-100"
                                      >
                                        {link.title}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.title}
                      href={item.href!}
                      onClick={onClose}
                      className="block rounded-lg py-3 font-medium hover:bg-slate-100"
                    >
                      {item.title}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="border-t p-6">
              <QuoteButton />
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}