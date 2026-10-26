"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  BarChart3,
  Boxes,
  CalendarClock,
  CheckCircle2,
  ClipboardCheck,
  Factory,
  GitBranch,
  Gauge,
  Layers3,
  RefreshCw,
  Route,
  Settings2,
  ShieldCheck,
  TimerReset,
  UsersRound,
  Workflow,
} from "lucide-react";

import Button from "@/components/Button";

type ProductionPlanningSectionsProps = {
  planningImageUrl: string;
  planningImageAlt: string;
};

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.16 },
  transition: { duration: 0.65, ease: "easeOut" },
} as const;

const planningCapabilities = [
  { icon: Gauge, title: "Capacity Model", text: "Capacity model by machine, line, process and calendar." },
  { icon: ClipboardCheck, title: "Order Prioritization", text: "Order prioritization and delivery-date logic." },
  { icon: ShieldCheck, title: "Material Readiness", text: "Material-readiness gates before a plan is released." },
  { icon: CheckCircle2, title: "Pre-Production", text: "Pre-production milestone tracking." },
  { icon: Factory, title: "Line & Machine Loading", text: "Line and machine loading against real capacity." },
  { icon: UsersRound, title: "Skill Constraints", text: "Skill and manpower constraints included in planning." },
  { icon: RefreshCw, title: "Sequence Logic", text: "Changeover and sequence logic." },
  { icon: CalendarClock, title: "Finite Scheduling", text: "Finite-capacity scheduling instead of theoretical loading." },
  { icon: GitBranch, title: "What-If Scenarios", text: "What-if scenario planning before commitments are made." },
  { icon: TimerReset, title: "Dynamic Rescheduling", text: "Dynamic rescheduling when factory conditions change." },
  { icon: Boxes, title: "Multi-Factory Coordination", text: "Multi-process or multi-factory coordination where required." },
  { icon: BarChart3, title: "Plan vs Actual", text: "Plan-vs-actual and schedule adherence reporting." },
];

const methodSteps = [
  { number: "01", icon: Workflow, title: "Map", text: "Map the current planning cycle and decision rights." },
  { number: "02", icon: Gauge, title: "Model", text: "Build reliable capacity and calendar rules." },
  { number: "03", icon: ShieldCheck, title: "Gate", text: "Define material and pre-production readiness criteria." },
  { number: "04", icon: Settings2, title: "Clean", text: "Clean master data and routing." },
  { number: "05", icon: CalendarClock, title: "Govern", text: "Agree planning horizon, freeze windows and priority rules." },
  { number: "06", icon: Layers3, title: "Pilot", text: "Configure and pilot the selected planning technology." },
  { number: "07", icon: Route, title: "Parallel Run", text: "Run old and new planning methods in parallel where required." },
  { number: "08", icon: BarChart3, title: "Measure", text: "Measure plan attainment, planning effort, OTIF risk detection and schedule stability." },
  { number: "09", icon: UsersRound, title: "Adopt", text: "Train planners and production teams in the new operating cadence." },
];

const kpis = [
  "Plan attainment",
  "Schedule adherence",
  "OTIF",
  "Planning cycle time",
  "Capacity utilization",
  "Late-order risk identified in advance",
  "Changeover loss",
  "WIP",
  "Material-ready orders vs planned orders",
  "Manual reschedules / overrides",
];

const whyMadasky = [
  "Planning is connected to actual factory capacity and operations, not treated only as a software configuration.",
  "We can integrate planning with Operations Excellence and MES so plan and execution use a common logic.",
  "Technology providers remain backend specialists; Madasky owns the manufacturing process and implementation governance.",
  "Pilots focus on a measurable planning pain point before full deployment.",
];

export default function ProductionPlanningSections({
  planningImageUrl,
  planningImageAlt,
}: ProductionPlanningSectionsProps) {
  return (
    <main className="overflow-hidden bg-white">
      <motion.section {...reveal} className="relative overflow-hidden py-20 max-md:py-14">
        <motion.div
          aria-hidden="true"
          animate={{ y: [0, 14, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-10 top-8 h-[220px] w-[180px] opacity-[0.07] max-md:hidden"
        >
          <Image src="/assets/images/shape-2.png" alt="" fill className="object-contain" />
        </motion.div>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 sm:px-8 lg:grid-cols-[0.94fr_1.06fr] lg:px-10 max-lg:gap-10">
          <div className="relative min-h-[470px] overflow-hidden rounded-2xl bg-[#eef4fb] shadow-xl max-md:min-h-[320px]">
            <Image
              src="/assets/images/Production Planning Control Room.png"
              alt={planningImageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07182e]/80 via-[#07182e]/10 to-transparent" />
            <div className="absolute bottom-0 left-0 p-7 text-white max-md:p-5">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-white/75">
                Constraint-aware planning
              </p>
              <p className="max-w-lg text-2xl font-bold leading-snug font-baskervville max-md:text-xl">
                Build a plan around the constraints the factory must actually manage.
              </p>
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#D72B0D]">
              Planning operating model first
            </p>
            <h2 className="text-4xl font-bold leading-tight text-[#0E2C53] font-baskervville max-md:text-3xl">
              A Production Plan Is Only as Good as the Constraints It Understands
            </h2>
            <div className="mt-7 space-y-5 text-lg leading-relaxed text-gray-600 max-md:text-[17px]">
              <p>
                Many planning processes begin with delivery dates and required quantities but do not reliably incorporate material readiness, actual line capability, skills, changeovers, pre-production status, machine downtime or WIP already on the floor. The result is a plan that looks balanced on paper and begins changing as soon as production starts.
              </p>
              <p>
                Madasky works on the planning operating model first: capacity rules, calendars, material gates, priorities, responsibilities and exception management. We then integrate an appropriate APS/planning platform where the complexity justifies it.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <section id="planning-capabilities" className="relative bg-[#252638] bg-[url('/assets/images/what-we-solve-bg.jpg')] bg-cover bg-center bg-no-repeat py-20 max-md:py-14">
        <div className="absolute inset-0 bg-[#10172d]/84" />
        <motion.div {...reveal} className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#ff6a49]">
              Planning capabilities
            </p>
            <h2 className="text-4xl font-bold text-white font-baskervville max-md:text-3xl">
              Make Capacity, Material and Delivery Rules Visible
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/75 max-md:text-[17px]">
              The planning model brings together the operating constraints that determine whether a schedule can actually run on the factory floor.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-5 max-xl:grid-cols-2 max-md:grid-cols-1">
            {planningCapabilities.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.16 }}
                  transition={{ duration: 0.48, delay: Math.min(index * 0.035, 0.18) }}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-white/10 bg-white/95 p-6 shadow-lg transition-shadow hover:shadow-2xl"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eef4fb] text-[#0E2C53]">
                    <Icon size={21} strokeWidth={1.9} />
                  </div>
                  <h3 className="mt-5 text-xl font-bold leading-snug text-[#0E2C53] font-baskervville">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[16px] leading-relaxed text-gray-600">{item.text}</p>
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </section>

      <motion.section id="planning-method" {...reveal} className="relative overflow-hidden bg-white py-20 max-md:py-14">
        <motion.div
          aria-hidden="true"
          animate={{ y: [0, -15, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-8 -top-10 h-[240px] w-[190px] opacity-[0.07] max-md:hidden"
        >
          <Image src="/assets/images/shape-2.png" alt="" fill className="object-contain" />
        </motion.div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#D72B0D]">
              Planning transformation method
            </p>
            <h2 className="text-4xl font-bold leading-tight text-[#0E2C53] font-baskervville max-md:text-3xl">
              Move from Firefighting to a Stable Planning Cadence
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-600 max-md:text-[17px]">
              Madasky combines planning rules, master data, technology and operating routines so the plan becomes usable by both planners and production teams.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
            {methodSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.article
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, delay: Math.min(index * 0.04, 0.2) }}
                  className="relative overflow-hidden rounded-2xl border border-gray-200 bg-[#fafbfc] p-6 transition-all hover:-translate-y-1 hover:bg-white hover:shadow-lg"
                >
                  <span className="absolute right-5 top-4 text-5xl font-bold text-[#0E2C53]/[0.06]">{step.number}</span>
                  <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-xl bg-[#0E2C53] text-white">
                    <Icon size={21} strokeWidth={1.9} />
                  </div>
                  <h3 className="relative z-10 mt-5 text-2xl font-bold text-[#0E2C53] font-baskervville">{step.title}</h3>
                  <p className="relative z-10 mt-3 text-[16px] leading-relaxed text-gray-600">{step.text}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </motion.section>

      <section id="planning-complexity" className="relative bg-[#f5f5f6] py-20 max-md:py-14">
        <div className="absolute inset-0 bg-[url('/assets/images/industrybg.png')] bg-cover bg-center opacity-[0.06]" />
        <motion.div {...reveal} className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#D72B0D]">Why complexity grows</p>
            <h2 className="text-4xl font-bold leading-tight text-[#0E2C53] font-baskervville max-md:text-3xl">
              Why Planning Complexity Grows Faster Than Volume
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600 max-md:text-[17px]">
              In Apparel especially, growth adds styles, sizes, colours, lines, skills, machines, material constraints and delivery priorities. These combinations interact. A planner may be experienced, but there is a point where evaluating alternatives manually becomes slow and dependent on individual judgement. Optimization and APS tools become valuable when they make constraints visible and allow scenarios to be tested before commitments are made.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
            {[
              ["Product Mix", "Styles, sizes and colours create interacting combinations."],
              ["Factory Capacity", "Lines, machines, skills and calendars define what is feasible."],
              ["Material Status", "Readiness and constraints change what can be loaded and when."],
              ["Delivery Priorities", "Multiple commitments compete for the same constrained capacity."],
            ].map(([title, text], index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <AlertTriangle size={22} className="text-[#D72B0D]" strokeWidth={1.9} />
                <h3 className="mt-4 text-xl font-bold text-[#0E2C53] font-baskervville">{title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-gray-600">{text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="planning-kpis" className="relative overflow-hidden bg-white py-20 max-md:py-14">
        <motion.div {...reveal} className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#D72B0D]">Measures that matter</p>
            <h2 className="text-4xl font-bold text-[#0E2C53] font-baskervville max-md:text-3xl">Planning KPIs That Matter</h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-600 max-md:text-[17px]">
              The objective is not a more sophisticated plan on paper. It is a planning process that improves stability, risk visibility and execution discipline.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-5 gap-4 max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
            {kpis.map((kpi, index) => (
              <motion.div
                key={kpi}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.035, 0.16) }}
                className="flex min-h-[118px] items-center rounded-2xl border border-[#0E2C53]/10 bg-[#eef4fb] p-5"
              >
                <div className="flex gap-3">
                  <CheckCircle2 size={20} className="mt-0.5 flex-shrink-0 text-[#D72B0D]" />
                  <p className="font-semibold leading-snug text-[#0E2C53]">{kpi}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="relative overflow-hidden bg-[#0c1d36] py-20 text-white max-md:py-14">
        <div className="absolute inset-0 bg-[url('/assets/images/what-we-solve-bg.jpg')] bg-cover bg-center opacity-[0.12]" />
        <motion.div {...reveal} className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#ff6a49]">Why Madasky</p>
              <h2 className="text-4xl font-bold leading-tight font-baskervville max-md:text-3xl">Planning That Connects to the Real Factory</h2>
              <p className="mt-5 text-lg leading-relaxed text-white/75 max-md:text-[17px]">
                Planning improvement works when capacity, operations, technology and implementation governance use one manufacturing logic.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
              {whyMadasky.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.16 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.07] p-6 backdrop-blur-sm"
                >
                  <div className="flex gap-4">
                    <CheckCircle2 size={22} className="mt-0.5 flex-shrink-0 text-[#ff6a49]" />
                    <p className="text-[16px] leading-relaxed text-white/90">{item}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <motion.section {...reveal} className="relative overflow-hidden bg-[#f5f5f6] py-20 max-md:py-14">
        <div className="absolute inset-0 bg-[url('/assets/images/industrybg.png')] bg-cover bg-center opacity-[0.05]" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center sm:px-8">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#D72B0D]">Planning & Scheduling Health Check</p>
          <h2 className="text-4xl font-bold leading-tight text-[#0E2C53] font-baskervville max-md:text-3xl">
            If Your Planner Spends the Day Repairing the Plan
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600 max-md:text-[17px]">
            Start with a Planning & Scheduling Health Check to identify where capacity, material, master data or decision rules are causing instability.
          </p>
          <div className="mt-8 flex justify-center">
            <Button text="Request a Planning Health Check" />
          </div>
        </div>
      </motion.section>


    </main>
  );
}
