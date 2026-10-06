"use client";
import Link from "next/link";

import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CarouselSlider = () => {
  // const banners = [
  //   {
  //     id: 1,
  //     src: "/assets/images/banner/Automation Audit (1).png",
  //     title: "Industrial Efficiency",
  //   },
  //   {
  //     id: 2,
  //     src: "/assets/images/banner/Bisiness Health Chck.png",
  //     title: "Safety Standards",
  //   },
  //   {
  //     id: 3,
  //     src: "/assets/images/banner/Finance & Cashflow Audit.png",
  //     title: "Process Automation",
  //   },
  //   {
  //     id: 4,
  //     src: "/assets/images/banner/Go-To-Market Audit.png",
  //     title: "Quality Control",
  //   },
  //   {
  //     id: 5,
  //     src: "/assets/images/banner/Operations Excellence Audits.png",
  //     title: "Supply Chain",
  //   },
  //   {
  //     id: 6,
  //     src: "/assets/images/banner/People & Organisational Performance Audit.png",
  //     title: "Org Performance",
  //   },
  //   {
  //     id: 7,
  //     src: "/assets/images/banner/Productivity Audit.png",
  //     title: "Productivity",
  //   },
  //   {
  //     id: 8,
  //     src: "/assets/images/banner/Sales Process Audit.png",
  //     title: "Sales Process",
  //   },
  // ];

  // /assets/images/banner/Automation Audit (1).png

  const banners = [
    {
      id: 1,
      src: "/assets/images/banner/Sales Process Audit.png",
      title: "Industrial Efficiency",
      sectionId: "automation-audit",
    },
    {
      id: 2,
      src: "/assets/images/banner/Bisiness Health Chck.png",
      title: "Safety Standards",
      sectionId: "business-health",
    },
    {
      id: 3,
      src: "/assets/images/banner/FinanceCashflowAudit.png",
      title: "Process Automation",
      sectionId: "finance-cashflow",
    },
    {
      id: 4,
      src: "/assets/images/banner/Operations Excellence Audits.png",
      title: "Quality Control",
      sectionId: "operations-excellence",
    },
    {
      id: 5,
      src: "/assets/images/banner/Go-To-Market Audit.png",
      title: "Supply Chain",
      sectionId: "go-to-market",
    },
    {
      id: 6,
      src: "/assets/images/banner/Automation Audit (1).png",
      title: "Org Performance",
      sectionId: "people-performance",
    },
    {
      id: 7,
      src: "/assets/images/banner/People Organisational Performance Audit.png",
      title: "Productivity",
      sectionId: "productivity",
    },
    {
      id: 8,
      src: "/assets/images/banner/Productivity Audit.png",
      title: "Sales Process",
      sectionId: "sales-process",
    },
  ];

  // Configuration
  const autoPlayInterval = 3000; // 3 seconds

  const [curr, setCurr] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Determine how many items to show based on logic (We will handle responsive via CSS,
  // but logically we need to know when to stop scrolling).
  // For this logic, we assume we show 3 at a time on desktop.
  // The max index we can scroll to is (total - 3).
  // To make it loop, when we pass max, we go back to 0.

  const next = useCallback(() => {
    setCurr((curr) => {
      // If we are at the end (total - 3 visible), loop back to 0
      // Note: On mobile where 1 is visible, this logic might need adjustment or CSS snapping.
      // This is a simplified "Desktop First" logic for the requested 3-column view.
      return curr === banners.length - 3 ? 0 : curr + 1;
    });
  }, [banners.length]);

  const prev = () => {
    setCurr((curr) => (curr === 0 ? banners.length - 3 : curr - 1));
  };

  // Auto-play effect
  useEffect(() => {
    if (isPaused) return;
    const slideInterval = setInterval(next, autoPlayInterval);
    return () => clearInterval(slideInterval);
  }, [isPaused, next]);

  return (
    <section
      className="py-20 overflow-hidden bg-gray-100  max-md:py-10"
    >
      <div
        className="px-6 mx-auto mb-10 text-center max-w-7xl"
      >
        <h2
          className="text-4xl font-bold text-slate-900"
        >
          Audit Series
        </h2>
      </div>

      {/* Carousel Container */}
      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="relative px-6 mx-auto max-w-7xl group"
      >
        {/* Left Arrow */}
        <button
          onClick={prev}
          className="absolute z-20 p-3 transition-all -translate-y-1/2 rounded-full shadow-lg opacity-0 text-slate-800 bg-white/90 left-2 top-1/2 hover:bg-blue-600 hover:text-white group-hover:opacity-100 disabled:opacity-0"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="absolute z-20 p-3 transition-all -translate-y-1/2 rounded-full shadow-lg opacity-0 text-slate-800 bg-white/90 right-2 top-1/2 hover:bg-blue-600 hover:text-white group-hover:opacity-100"
        >
          <ChevronRight size={24} />
        </button>

        {/* Viewport (Mask) */}
        <div
          className="pb-4 overflow-hidden rounded-2xl"
        >
          {/* Track */}
          <div
            style={{ transform: `translateX(-${curr * (100 / 3)}%)` }}
            className="flex transition-transform duration-700 ease-out "
          >
            {banners.map((item) => (
              <div
                key={item.id}
                className="
                  min-w-full
                  px-3
                  md:min-w-[50%]
                  lg:min-w-[33.333%]
                "
              >
                <Link href={`/audit#${item.sectionId}`}>
                  <div
                    className="
                      overflow-hidden
                      h-[450px]
                      p-2
                      bg-white
                      rounded-2xl border border-slate-100
                      cursor-pointer shadow-md
                      relative group/card
                    "
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      className="object-contain w-full h-full transition-transform duration-700 bg-white group-hover/card:scale-105"
                    />
                  </div>

                  <div className="flex items-center justify-center w-full">
                    <button className="py-2 px-4 text-white bg-[#152869] hover:bg-[#152869]/90 rounded-2xl w-fit mx-auto mt-8 hover:cursor-pointer">Free Audit</button>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        {/* <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: banners.length - 2 }).map((_, i) => (
            <div
              key={i}
              onClick={() => setCurr(i)}
              className={`
                transition-all duration-300 cursor-pointer rounded-full
                ${curr === i ? "w-8 h-2 bg-blue-600" : "w-2 h-2 bg-slate-300 hover:bg-slate-400"}
              `}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default CarouselSlider;
