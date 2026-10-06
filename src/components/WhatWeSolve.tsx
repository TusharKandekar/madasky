"use client";

import Button from "@/components/Button";
import Link from "next/link";
import { FaMoneyBillAlt, FaRocket, FaChartLine } from "react-icons/fa";

export default function WhatWeSolveAtScale() {
  const cards = [
    {
      id: 1,
      icon: <FaMoneyBillAlt className="text-[#004A92] text-5xl" />,
      title: "Turnkey Factory Projects",
      content:
        "From concept, product mix and capacity through factory layout, engineering, utilities, vendor selection, PMC, commissioning, workforce readiness and operational handover.",
      borderColor: "border-[#004A92]",
      url: "/",
    },
    {
      id: 2,
      icon: <FaRocket className="text-[#D72B0D] text-5xl" />,
      title: "Operations Excellence",
      content:
        "Improve productivity, capacity utilization, manpower performance, OTIF, quality, WIP, lead time and cost by removing the constraints that prevent existing assets from performing.",
      borderColor: "border-[#D72B0D]",
      url: "/operations-excellence-consulting",
    },
    {
      id: 3,
      icon: <FaChartLine className="text-[#6B6B6B] text-5xl" />,
      title: "AI-Enabled Manufacturing Intelligence",
      content:
        "Apply AI, optimization, planning systems, MES and IoT to high-value decisions in fabric utilization, production planning, scheduling and real-time shopfloor management.",
      borderColor: "border-[#6B6B6B]",
      url: "/",
    },
  ];

  return (
    <section className="relative bg-[#252638] bg-[url('/assets/images/what-we-solve-bg.jpg')] bg-cover bg-center bg-no-repeat py-20">
      <div className="px-6 mx-auto max-w-7xl">
        <div className="w-full mx-auto">

          {/* Heading */}
          <div className="flex flex-col items-center mb-12 text-center">
            <h2 className="mb-2 text-4xl font-bold text-white font-baskervville max-md:text-3xl max-xl:text-4xl">
              Three Ways We Create Manufacturing Value
            </h2>
          </div>

          {/* Card Grid */}
          <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
            {cards.map((card) => (
              <div
                key={card.id}
                className={`relative bg-white shadow-sm border-t-4 ${card.borderColor} transition-all duration-300 rounded-sm hover:-translate-y-1`}
              >
                <Link
                  href={card.url}
                  className="flex flex-col justify-between h-full p-8"
                >
                  <div>
                    <div className="mb-4">
                      {card.icon}
                    </div>

                    <h3 className="text-[#0E2C53] text-xl font-bold mb-3">
                      {card.title}
                    </h3>

                    <p className="mb-6 text-lg leading-relaxed text-gray-600">
                      {card.content}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex justify-start mt-12 max-md:justify-center">
            <Button text="Reserve Your Time" />
          </div>

        </div>
      </div>
    </section>
  );
}