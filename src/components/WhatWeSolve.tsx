"use client";
// import { FiArrowRight } from "react-icons/fi";
import Button from "@/components/Button";
import { FaMoneyBillAlt, FaRocket, FaChartLine } from "react-icons/fa";

export default function WhatWeSolveAtScale() {
  const cards = [
    {
      id: 1,
      icon: <FaMoneyBillAlt className="text-[#004A92] text-5xl" />,
      title: "Release Hidden Cash",
      content:
        "Growth often stalls not because of opportunity but because capital is trapped in inventory, receivables, and process gaps. We map where it's locked and release it to power your next strategic investment.",
      borderColor: "border-[#004A92]",
    },
    {
      id: 2,
      icon: <FaRocket className="text-[#D72B0D] text-5xl" />,
      title: "Accelerate Execution",
      content:
        "Instead of chasing expensive new machines or systems, we refine workflows, eliminate bottlenecks, and rebalance capacity. You'll see dramatic lead-time drops while leveraging existing assets.",
      borderColor: "border-[#D72B0D]",
    },
    {
      id: 3,
      icon: <FaChartLine className="text-[#6B6B6B] text-5xl" />,
      title: "Intelligent Growth",
      content:
        "Pipeline growth that outpaces operational capacity is a ticking time bomb. We design sales systems that respect your delivery capabilities, creating sustainable growth paths.",
      borderColor: "border-[#6B6B6B]",
    },
  ];
  // bg-[#252638]/100
  return (
    <section className="relative bg-[#252638] bg-[url('/assets/images/what-we-solve-bg.jpg')]/30 bg-cover bg-center bg-no-repeat py-20 ">
      {/* <div className="absolute inset-0 bg-[#252638]/80 z-0"></div> */}
      <div className="px-6 mx-auto max-w-7xl">

        <div className="w-[100%] mx-auto">

          {/* Heading */}
          <div className="flex flex-col items-center mb-12 text-center">
            <h2 className="mb-2 text-4xl font-bold text-white font-baskervville max-md:text-3xl max-xl:text-4xl">
              What We Solve at Scale
            </h2>
            {/* <div
            className="w-[40%] h-[3px] bg-blue-300"
            style={{
              background: "linear-gradient(to right, #05528a 50%, #d02c22 50%)",
            }}
          ></div> */}
          </div>

          {/* Card Grid */}
          <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
            {cards.map((card) => (
              <div
                key={card.id}
                className={`relative bg-white shadow-sm border-t-4 ${card.borderColor} transition-all duration-300 rounded-sm hover:-translate-y-1`}
              >
                <div className="flex flex-col justify-between h-full p-8">
                  <div>
                    <div className="mb-4">{card.icon}</div>
                    <h3 className="text-[#0E2C53] text-xl font-bold mb-3">
                      {card.title}
                    </h3>
                    <p className="mb-6 text-lg leading-relaxed text-gray-600">
                      {card.content}
                    </p>
                  </div>

                  {/* <div className="flex items-center text-[#0E2C53] font-semibold hover:text-[#D72B0D] transition-colors duration-300">
                  <span>Read more</span>
                  <FiArrowRight className="ml-2" />
                </div> */}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex justify-start mt-12 max-md:justify-center">
            {/* <button className="bg-[#E1340D] hover:bg-[#C02A0B] transition text-white font-semibold px-6 py-3 rounded-md shadow">
            Reserve Your Time
          </button> */}

            <Button text={"Reserve Your Time"} />
          </div>

        </div>

      </div>
    </section>
  );
}
