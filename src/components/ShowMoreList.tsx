
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export interface ShowMoreItem {
  title: string;
  text: string;
}

interface ShowMoreListProps {
  items: ShowMoreItem[];
  visibleCount?: number;
  image?: string;
  imageAlt?: string;
  className?: string;
}

export default function ShowMoreList({
  items,
  visibleCount = 5,
  image,
  imageAlt = "",
  className = "",
}: ShowMoreListProps) {
  const [expanded, setExpanded] = useState(false);

  const visibleItems = expanded
    ? items
    : items.slice(0, visibleCount);

  const list = (
    <div className="w-[80%]">
      <div className="divide-y divide-gray-200 border-y border-gray-200 w-full">
        <AnimatePresence initial={false}>
          {visibleItems.map((item, index) => (
            <motion.div
              key={`${item.title}-${index}`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden w-full"
            >
              <div className="group flex gap-4 py-5 w-full">
                <span className="mt-1 shrink-0 font-baskervville text-lg font-bold text-[#D7442E]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3 className="text-lg font-bold leading-snug text-[#0E2C53] transition-colors group-hover:text-[#D7442E]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[15px] leading-relaxed text-gray-600">
                    {item.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {items.length > visibleCount && (
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          aria-expanded={expanded}
          className="mt-7 inline-flex items-center gap-2 rounded-md bg-[#0E2C53] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#D7442E]"
        >
          {expanded ? "Show Less" : "Read More"}
          <ChevronDown
            size={18}
            className={`transition-transform duration-300 ${
              expanded ? "rotate-180" : ""
            }`}
          />
        </button>
      )}
    </div>
  );

  return (
    <div
      className={` items-start gap-10 ${
        image ? "grid grid-cols-2 lg:grid-cols-2 lg:gap-12" : ""
      } ${className}`}
    >
      {list}

      {image && (
        <div className="relative min-h-[280px] overflow-hidden rounded-2xl sm:min-h-[400px] lg:sticky lg:top-24">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      )}
    </div>
  );
}
