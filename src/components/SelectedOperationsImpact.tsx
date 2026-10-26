"use client";
import { motion } from "framer-motion";
import {
  IndianRupee,
  TrendingDown,
  Truck,
  ChartNoAxesCombined,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

const impactMetrics = [
  {
    label: "Annual overtime cost eliminated",
    value: "₹43 lakh",
    icon: IndianRupee,
  },
  {
    label: "Reduction in packaging-line overtime hours",
    value: "92%",
    icon: TrendingDown,
  },
  {
    label: "OTIF improvement",
    value: "82%",
    after: "97%",
    icon: Truck,
  },
  {
    label: "Line balancing efficiency",
    value: "61%",
    after: "88%",
    icon: ChartNoAxesCombined,
  },
];

export default function SelectedOperationsImpact() {
  return (
    <section className="relative overflow-hidden bg-[#f5f7fa] py-20 max-md:py-14">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">

          {/* Left: Results and case study */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#D7442E]">
              Selected Operations Impact
            </p>

            <h2 className="max-w-2xl font-baskervville text-4xl font-bold leading-tight text-[#0E2C53] md:text-5xl">
              Measurable Improvements.
              <span className="block">Better Delivery Performance.</span>
            </h2>

            <p className="mt-5 text-lg text-gray-600">
              Home Textile Packaging Line
            </p>

            {/* KPI Grid */}
            <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {impactMetrics.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.08,
                    }}
                    className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D7442E]/40 hover:shadow-lg sm:p-6"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fff0eb] text-[#D7442E] transition-colors group-hover:bg-[#D7442E] group-hover:text-white">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>

                    <div className="mt-5 flex flex-wrap items-center gap-2">
                      <span className="font-baskervville text-3xl font-bold text-[#0E2C53] sm:text-4xl">
                        {item.value}
                      </span>

                      {item.after && (
                        <>
                          <ArrowRight
                            size={19}
                            className="text-[#D7442E]"
                          />
                          <span className="font-baskervville text-3xl font-bold text-[#D7442E] sm:text-4xl">
                            {item.after}
                          </span>
                        </>
                      )}
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-gray-600">
                      {item.label}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Impact Summary */}
            <div className="mt-7 border-l-4 border-[#D7442E] bg-white px-5 py-5 shadow-sm sm:px-6">
              <h3 className="text-lg font-bold text-[#0E2C53]">
                The impact went beyond overtime savings.
              </h3>

              <p className="mt-3 text-[15px] leading-relaxed text-gray-600">
                The operation achieved better delivery performance with fewer
                paid hours by fixing line balance, changeover, visibility and
                planning.
              </p>
            </div>

            {/* Case Study CTA */}
            <a
              href="/case-studies/home-textile-packaging-line"
              className="mt-7 inline-flex items-center gap-3 rounded-md bg-[#0E2C53] px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#D7442E]"
            >
              Explore the Full Case Study
              <ArrowUpRight size={18} />
            </a>
          </motion.div>

          {/* Right: Production-floor image */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl bg-[#0E2C53]">
              <img
                src="/assets/images/Modern Textile Packaging Factory Floor.png"
                alt="Industrial production floor with machinery and packaging operations"
                className="h-[420px] w-full object-cover sm:h-[560px] lg:h-[680px]"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0E2C53]/90 via-[#0E2C53]/10 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="mb-3 h-1 w-12 rounded-full bg-[#FF7B5E]" />

                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#FFAA96]">
                  Operational Excellence
                </p>

                <h3 className="mt-3 max-w-md font-baskervville text-2xl font-bold leading-snug text-white sm:text-3xl">
                  Better Flow. Fewer Paid Hours. Stronger Delivery.
                </h3>
              </div>
            </div>

            <div className="absolute -right-4 -top-4 -z-10 h-28 w-28 rounded-2xl bg-[#D7442E]/10" />
            <div className="absolute -bottom-4 -left-4 -z-10 h-24 w-24 rounded-2xl bg-[#0E2C53]/10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
