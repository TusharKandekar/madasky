"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Brain,
  CalendarClock,
  CheckCircle2,
  Cpu,
  Database,
  Factory,
  Gauge,
  Layers3,
  Lightbulb,
  Monitor,
  Search,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

import Button from "@/components/Button";
import ShowMoreList from "@/components/ShowMoreList";
const approachSteps = [
  {
    title: "Define the Business Problem and KPI",
    text: "Identify the business challenge, desired outcome and key performance indicators that will measure success.",
  },
  {
    title: "Assess Process Maturity and Data Availability",
    text: "Evaluate existing processes, data quality, systems and operational readiness.",
  },
  {
    title: "Map Decisions, Users and Current Delays",
    text: "Understand who makes decisions, how frequently they act and where delays occur.",
  },
  {
    title: "Select or Configure the Right Technology",
    text: "Choose and configure an appropriate technology platform based on business requirements.",
  },
  {
    title: "Pilot a Measurable Use Case",
    text: "Test a contained use case against a clearly defined baseline and measurable outcomes.",
  },
  {
    title: "Integrate Required Data Sources",
    text: "Connect the necessary ERP, CAD, MES and machine data to support the use case.",
  },
  {
    title: "Train Users and Change Operating Routines",
    text: "Prepare teams to use the solution and incorporate it into daily operating practices.",
  },
  {
    title: "Measure Adoption and Business Benefit",
    text: "Track user adoption, performance improvements and the business value delivered.",
  },
  {
    title: "Scale Only After the Use Case Is Proven",
    text: "Expand the solution when measurable results demonstrate that it is ready to scale.",
  },
];

type AIManufacturingSectionsProps = {
  digitalImageUrl: string;
  digitalImageAlt: string;
};

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.16 },
  transition: { duration: 0.65, ease: "easeOut" },
} as const;

const intelligenceAreas = [
  {
    icon: Layers3,
    title: "Fabric & Raw Material Optimization",
    text: "Consumption, marker/order combinations, fabric requirement, roll selection, lay planning and remnant reduction.",
    link: "/fabric-raw-material-optimization",
    label: "Material intelligence",
  },
  {
    icon: CalendarClock,
    title: "Production Planning & Scheduling",
    text: "Capacity, material, skill, machine constraints, priorities, scenarios and dynamic rescheduling.",
    link: "/production-planning-scheduling",
    label: "Planning intelligence",
  },
  {
    icon: Monitor,
    title: "Digital Factory & MES",
    text: "Real-time production, downtime, quality, WIP, material, maintenance and delivery-risk visibility.",
    link: "/digital-factory-mes",
    label: "Shopfloor intelligence",
  },
];

const implementationSteps = [
  {
    number: "01",
    icon: Search,
    title: "Define",
    text: "Define the business problem and KPI.",
  },
  {
    number: "02",
    icon: Gauge,
    title: "Assess",
    text: "Assess process maturity and data availability.",
  },
  {
    number: "03",
    icon: Workflow,
    title: "Map",
    text: "Map decisions, users, frequency and current delays.",
  },
  {
    number: "04",
    icon: Cpu,
    title: "Select",
    text: "Select or configure an appropriate technology platform.",
  },
  {
    number: "05",
    icon: Lightbulb,
    title: "Pilot",
    text: "Pilot a contained use case with a measurable baseline.",
  },
  {
    number: "06",
    icon: Database,
    title: "Integrate",
    text: "Integrate required ERP, CAD, MES and machine data.",
  },
  {
    number: "07",
    icon: Factory,
    title: "Adopt",
    text: "Train users and change operating routines.",
  },
  {
    number: "08",
    icon: BarChart3,
    title: "Measure",
    text: "Measure adoption and business benefit.",
  },
  {
    number: "09",
    icon: Sparkles,
    title: "Scale",
    text: "Scale only after the use case is proven.",
  },
];

const whyMadasky = [
  "Manufacturing expertise defines the use case before technology is selected.",
  "Madasky remains the client-facing transformation lead while specialist platforms operate behind the solution.",
  "Vendor-neutral architecture protects the client from forcing one tool into every problem.",
  "Pilots use agreed baselines so value can be proven before scale.",
  "Operations Excellence capability helps convert system outputs into changed shopfloor behaviour.",
];

export default function AIManufacturingSections({
  digitalImageUrl,
  digitalImageAlt,
}: AIManufacturingSectionsProps) {
  return (
    <main className="overflow-hidden bg-white">
      <motion.section
        {...reveal}
        className="relative overflow-hidden py-20 max-md:py-14"
      >
        <motion.div
          aria-hidden="true"
          animate={{ y: [0, 16, 0], rotate: [0, 4, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-10 top-8 h-[220px] w-[180px] opacity-[0.07] max-md:hidden"
        >
          <Image
            src="/assets/images/shape-2.png"
            alt=""
            fill
            className="object-contain"
          />
        </motion.div>

        <div className="relative z-10 grid items-center gap-14 px-6 mx-auto max-w-7xl lg:grid-cols-[0.92fr_1.08fr] sm:px-8 lg:px-10 max-lg:gap-10">
          <div className="relative min-h-[470px] overflow-hidden rounded-2xl bg-[#eef4fb] shadow-xl max-md:min-h-[320px]">
            <Image
              src={digitalImageUrl}
              alt={digitalImageAlt}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07182e]/75 via-[#07182e]/10 to-transparent" />
            <div className="absolute bottom-0 left-0 p-7 text-white max-md:p-5">
              <p className="mb-2 text-sm font-semibold tracking-[0.18em] uppercase text-white/75">
                Manufacturing intelligence
              </p>
              <p className="max-w-lg text-2xl font-bold leading-snug font-baskervville max-md:text-xl">
                Start with the manufacturing decision. Add technology only where it improves that decision.
              </p>
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm font-bold tracking-[0.18em] uppercase text-[#D72B0D]">
              Manufacturing problem first
            </p>
            <h2 className="text-4xl font-bold leading-tight text-[#0E2C53] font-baskervville max-md:text-3xl">
              Manufacturing Problem First. Technology Second.
            </h2>
            <div className="mt-7 space-y-5 text-lg leading-relaxed text-gray-600 max-md:text-[17px]">
              <p>
                AI can process combinations, patterns and exceptions faster than people can do manually. But it cannot compensate for unreliable data, weak processes or unclear ownership. Madasky therefore starts with the manufacturing decision: what is slow, repetitive, variable, expensive or dependent on one individual? We then determine whether optimization, AI, MES, IoT, analytics or a simpler process change is the right answer.
              </p>
              <p>
                This keeps technology connected to cost, capacity, delivery and productivity rather than becoming a separate IT project.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <section id="intelligence-areas" className="relative bg-[#252638] bg-[url('/assets/images/what-we-solve-bg.jpg')] bg-cover bg-center bg-no-repeat py-20 max-md:py-14">
        <div className="absolute inset-0 bg-[#10172d]/82" />
        <motion.div
          {...reveal}
          className="relative z-10 px-6 mx-auto max-w-7xl sm:px-8 lg:px-10"
        >
          <div className="max-w-3xl mx-auto text-center">
            <p className="mb-3 text-sm font-bold tracking-[0.18em] uppercase text-[#ff6a49]">
              Three high-value intelligence areas
            </p>
            <h2 className="text-4xl font-bold text-white font-baskervville max-md:text-3xl">
              Where Manufacturing Intelligence Creates Value
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/75 max-md:text-[17px]">
              Madasky focuses AI and digital capability on decisions that directly affect material, capacity, delivery and shopfloor response.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-12 max-lg:grid-cols-1">
            {intelligenceAreas.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white p-7 shadow-lg transition-shadow hover:shadow-2xl max-md:p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eef4fb] text-[#0E2C53] transition-colors group-hover:bg-[#D72B0D] group-hover:text-white">
                    <Icon size={24} strokeWidth={1.9} />
                  </div>
                  <p className="mt-6 text-xs font-bold tracking-[0.17em] uppercase text-[#D72B0D]">
                    {item.label}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold leading-snug text-[#0E2C53] font-baskervville">
                    {item.title}
                  </h3>
                  <p className="mt-4 flex-1 text-[16px] leading-relaxed text-gray-600">
                    {item.text}
                  </p>
                  <Link
                    href={item.link}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0E2C53] transition-colors hover:text-[#D72B0D]"
                  >
                    Explore capability <ArrowUpRight size={17} />
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </section>

      <ShowMoreList
        items={approachSteps}
        visibleCount={5}
        image=""
        className=" my-12 w-full flex items-center justify-center" 
      />
      <section id="ai-fit" className="relative bg-[#f5f5f6] py-20 max-md:py-14">
        <div className="absolute inset-0 bg-[url('/assets/images/industrybg.png')] bg-cover bg-center opacity-[0.06]" />
        <motion.div
          {...reveal}
          className="relative z-10 px-6 mx-auto max-w-7xl sm:px-8 lg:px-10"
        >
          <div className="max-w-3xl mx-auto text-center">
            <p className="mb-3 text-sm font-bold tracking-[0.18em] uppercase text-[#D72B0D]">
              Apply AI selectively
            </p>
            <h2 className="text-4xl font-bold text-[#0E2C53] font-baskervville max-md:text-3xl">
              Know Where AI Helps — and Where It Does Not
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-7 mt-12 max-lg:grid-cols-1">
            <motion.article
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm max-md:p-6"
            >
              <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-[#eef4fb]" />
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0E2C53] text-white">
                <Brain size={24} strokeWidth={1.9} />
              </div>
              <p className="relative z-10 mt-6 text-xs font-bold tracking-[0.17em] uppercase text-[#D72B0D]">
                Where AI adds real value
              </p>
              <h3 className="relative z-10 mt-2 text-3xl font-bold leading-tight text-[#0E2C53] font-baskervville max-md:text-2xl">
                Use computation where human planning cannot reasonably test every combination.
              </h3>
              <p className="relative z-10 mt-5 text-[17px] leading-relaxed text-gray-600">
                AI and optimization are useful when a decision contains more combinations than a planner can reasonably evaluate, when patterns in data are difficult to detect manually, or when response speed matters. In Home Textiles and Apparel, this can include order and marker combinations, roll matching, finite-capacity scheduling, risk detection, anomaly identification and selected predictive maintenance or quality applications.
              </p>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm max-md:p-6"
            >
              <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-[#fff0ec]" />
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-[#D72B0D] text-white">
                <ShieldCheck size={24} strokeWidth={1.9} />
              </div>
              <p className="relative z-10 mt-6 text-xs font-bold tracking-[0.17em] uppercase text-[#D72B0D]">
                Where we would not start with AI
              </p>
              <h3 className="relative z-10 mt-2 text-3xl font-bold leading-tight text-[#0E2C53] font-baskervville max-md:text-2xl">
                Fix process discipline and data foundations before adding complexity.
              </h3>
              <p className="relative z-10 mt-5 text-[17px] leading-relaxed text-gray-600">
                We would not begin with AI when master data is unreliable, production reporting is inconsistent, the process itself changes daily without standards, or the business problem is not measurable. In those cases the first value may come from process discipline, visibility and data capture rather than an advanced algorithm.
              </p>
            </motion.article>
          </div>
        </motion.div>
      </section>

      <section className="relative overflow-hidden bg-[#0E2C53] bg-[url('/assets/images/what-we-solve-bg.jpg')] bg-cover bg-center py-20 max-md:py-14">
        <div className="absolute inset-0 bg-[#081b34]/88" />
        <motion.div
          {...reveal}
          className="relative z-10 grid items-center gap-12 px-6 mx-auto max-w-7xl lg:grid-cols-[0.85fr_1.15fr] sm:px-8 lg:px-10"
        >
          <div>
            <p className="mb-3 text-sm font-bold tracking-[0.18em] uppercase text-[#ff6a49]">
              Why Madasky
            </p>
            <h2 className="text-4xl font-bold leading-tight text-white font-baskervville max-md:text-3xl">
              Why Madasky for AI-Enabled Manufacturing Intelligence
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/70 max-md:text-[17px]">
              The technology remains connected to manufacturing economics, process ownership and measurable operating behaviour.
            </p>
          </div>

          <div className="grid gap-4">
            {whyMadasky.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.07] p-5 backdrop-blur-sm"
              >
                <CheckCircle2 className="mt-0.5 shrink-0 text-[#ff6a49]" size={22} />
                <p className="text-[16px] leading-relaxed text-white/85">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <motion.section
        {...reveal}
        className="relative overflow-hidden bg-white py-20 max-md:py-14"
      >
        <div className="absolute inset-0 bg-[url('/assets/images/homeblogbg.png')] bg-cover bg-center opacity-[0.16]" />
        <div className="relative z-10 px-6 mx-auto max-w-6xl sm:px-8 lg:px-10">
          <div className="rounded-3xl border border-[#dbe4ee] bg-white/95 p-10 shadow-xl max-md:p-6">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="mb-3 text-sm font-bold tracking-[0.18em] uppercase text-[#D72B0D]">
                  AI & digital manufacturing diagnostic
                </p>
                <h2 className="text-4xl font-bold leading-tight text-[#0E2C53] font-baskervville max-md:text-3xl">
                  Where Should AI Start in Your Factory?
                </h2>
                <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-600 max-md:text-[17px]">
                  A short diagnostic can identify which decisions are worth digitizing, which data gaps must be fixed first and where a pilot can produce measurable value.
                </p>
              </div>
              <div className="shrink-0 lg:pl-4">
                <Button text="Book an AI & Digital Manufacturing Diagnostic" />
              </div>
            </div>
          </div>
        </div>
      </motion.section>


    </main>
  );
}
