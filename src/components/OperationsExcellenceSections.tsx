"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Activity,
  BarChart3,
  Boxes,
  Clock3,
  Gauge,
  LayoutDashboard,
  Move3D,
  RefreshCcw,
  ShieldCheck,
  TimerReset,
  UsersRound,
  Wrench,
  CheckCircle2,
} from "lucide-react";

type OperationsExcellenceSectionsProps = {
  productionImageUrl: string;
  productionImageAlt: string;
};

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.6, ease: "easeOut" },
} as const;

const improveItems = [
  {
    icon: Gauge,
    title: "Productivity & Output",
    text: "Process capacity, line balance, methods, standard work and constraint removal.",
  },
  {
    icon: BarChart3,
    title: "Capacity Utilization",
    text: "Identify hidden capacity before approving new machines or people.",
  },
  {
    icon: UsersRound,
    title: "Manpower Productivity",
    text: "Skill mix, staffing, work content, multi-skilling and supervisor routines.",
  },
  {
    icon: Clock3,
    title: "Lead Time & WIP",
    text: "Flow, batch logic, waiting, prioritization and handoffs between departments.",
  },
  {
    icon: TimerReset,
    title: "OTIF & Delivery Reliability",
    text: "Connect material, planning, production, packing and dispatch risk.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Rework",
    text: "Defect loops, first-time-right performance and feedback to root cause.",
  },
  {
    icon: Wrench,
    title: "Downtime & Maintenance",
    text: "Reason visibility, planned maintenance, escalation and chronic-loss removal.",
  },
  {
    icon: Move3D,
    title: "Layout & Material Movement",
    text: "Reduce unnecessary travel, congestion and poor adjacency.",
  },
  {
    icon: RefreshCcw,
    title: "Daily Management",
    text: "Target vs actual, short-interval control, escalation, ownership and review cadence.",
  },
  {
    icon: LayoutDashboard,
    title: "Digital Visibility",
    text: "Add dashboards and alerts after process logic and data ownership are clear.",
  },
];

const methodSteps = [
  {
    number: "01",
    title: "Baseline the economics",
    text: "Translate production loss into capacity, cost, delivery, overtime, WIP or margin.",
  },
  {
    number: "02",
    title: "Observe the work",
    text: "Use floor observation, data and operator/supervisor inputs to understand the actual system rather than only SOPs.",
  },
  {
    number: "03",
    title: "Build the loss tree",
    text: "Separate symptoms from causes and quantify where time, material and capacity are lost.",
  },
  {
    number: "04",
    title: "Prioritize",
    text: "Focus first on the few constraints that control output or cost. Not every inefficiency deserves a project.",
  },
  {
    number: "05",
    title: "Implement",
    text: "Redesign methods, balance work, change planning rules, improve visual control, train teams and introduce technology only where useful.",
  },
  {
    number: "06",
    title: "Stabilize",
    text: "Build ownership into supervisor routines, KPI reviews, standard work and escalation.",
  },
  {
    number: "07",
    title: "Measure the benefit",
    text: "Compare the agreed baseline with sustained post-implementation performance.",
  },
];

const impactItems = [
  { value: "₹43 lakh", label: "Annual overtime cost eliminated" },
  { value: "92%", label: "Reduction in packaging-line overtime hours" },
  { value: "82% → 97%", label: "OTIF improvement" },
  { value: "61% → 88%", label: "Line balancing efficiency improvement" },
];

const whyItems = [
  {
    title: "Implementation-led",
    text: "Recommendations are converted into changed operating routines and measurable results.",
  },
  {
    title: "Sector context",
    text: "Home Textiles and Apparel are core industries, not occasional projects.",
  },
  {
    title: "Business outcome focus",
    text: "Output, OTIF, cost, capacity, fabric, manpower and lead time are more important than tool deployment.",
  },
  {
    title: "Technology-neutral",
    text: "Digital systems support the operating model rather than define it.",
  },
  {
    title: "Diagnostic-first",
    text: "Management sees the size of the opportunity before committing to a larger transformation.",
  },
];

export default function OperationsExcellenceSections({
  productionImageUrl,
  productionImageAlt,
}: OperationsExcellenceSectionsProps) {
  return (
    <div className="overflow-hidden bg-white">
      <motion.section
        {...reveal}
        className="relative bg-[#f5f6f8] py-20 max-md:py-14"
      >
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#dce9f4]/50 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#f7d7cf]/35 blur-3xl" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 sm:px-8 lg:grid-cols-2 lg:px-10 max-md:gap-9">
          <div className="relative min-h-[430px] overflow-hidden rounded-2xl shadow-xl max-md:min-h-[280px]">
            <Image
              src={productionImageUrl}
              alt={productionImageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e2c53]/75 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-7 text-white max-md:p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/70">
                Operations Excellence
              </p>
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#D72B0D]">
              Factory Performance
            </p>
            <h2 className="font-baskervville text-4xl font-bold leading-tight text-[#0E2C53] max-md:text-3xl">
              Busy Is Not the Same as Productive
            </h2>
            <div className="mt-7 space-y-5 text-lg leading-relaxed text-gray-600 max-md:text-[17px]">
              <p>
                Most factories do not lose performance through one dramatic failure. They lose it through waiting, imbalanced work, weak scheduling, material delays, changeovers, rework, downtime, excess WIP, poor daily routines and decisions that arrive too late. Overtime and additional manpower can temporarily hide these losses, but they rarely remove the cause.
              </p>
              <p>
                Madasky begins by establishing the baseline: what the factory should be capable of, what it is actually delivering and where the gap is created. We then rank opportunities by financial impact, implementation effort and speed. The objective is not to apply a standard lean toolkit. It is to remove the constraints that matter to that factory.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <section className="relative bg-[#10182d] py-20 max-md:py-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(38,87,126,0.45),transparent_36%),radial-gradient(circle_at_85%_75%,rgba(20,103,93,0.28),transparent_34%)]" />
        <motion.div {...reveal} className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#ff6a49]">
              What We Do
            </p>
            <h2 className="font-baskervville text-4xl font-bold text-white max-md:text-3xl">
              What We Improve
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-5 max-md:grid-cols-1 lg:grid-cols-5">
            {improveItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, delay: Math.min(index * 0.035, 0.18) }}
                  whileHover={{ y: -5 }}
                  className="rounded-xl border border-white/10 bg-white/[0.97] p-5 shadow-lg transition-shadow hover:shadow-2xl"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#edf4fb] text-[#0E2C53]">
                    <Icon size={21} strokeWidth={1.9} />
                  </div>
                  <h3 className="mt-4 text-[18px] font-bold leading-snug text-[#0E2C53]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-gray-600">
                    {item.text}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </section>

      <motion.section {...reveal} className="relative bg-white py-20 max-md:py-14">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#D72B0D]">
              Our Approach
            </p>
            <h2 className="font-baskervville text-4xl font-bold leading-tight text-[#0E2C53] max-md:text-3xl">
              Our Operations Excellence Method
            </h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {methodSteps.map((step, index) => (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.48 }}
                className="group flex gap-5 rounded-2xl border border-gray-200 bg-[#fafbfc] p-6 transition-all hover:border-[#bac9d8] hover:bg-white hover:shadow-lg"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#0E2C53] text-sm font-bold text-white shadow-md transition-colors group-hover:bg-[#D72B0D]">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-baskervville text-2xl font-bold text-[#0E2C53]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[16px] leading-relaxed text-gray-600">
                    {step.text}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      <section className="relative overflow-hidden bg-[#eef4f8] py-20 max-md:py-14">
        <div className="absolute -right-28 -top-24 h-96 w-96 rounded-full bg-white/70 blur-3xl" />
        <motion.div {...reveal} className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#D72B0D]">
                Proof
              </p>
              <h2 className="font-baskervville text-4xl font-bold leading-tight text-[#0E2C53] max-md:text-3xl">
                Selected Operations Impact
              </h2>
              <p className="mt-4 text-base font-bold text-[#0E2C53]">
                Home Textile packaging line:
              </p>
              <p className="mt-6 text-lg leading-relaxed text-gray-600 max-md:text-[17px]">
                The important point was not the overtime saving alone. The operation achieved better delivery performance with fewer paid hours by fixing line balance, changeover, visibility and planning.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {impactItems.map((item) => (
                <article key={item.label} className="rounded-2xl border border-white bg-white p-6 shadow-sm">
                  <p className="font-baskervville text-3xl font-bold text-[#0E2C53]">
                    {item.value}
                  </p>
                  <p className="mt-2 text-[15px] leading-relaxed text-gray-600">
                    {item.label}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <motion.section {...reveal} className="bg-white py-20 max-md:py-14">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="rounded-3xl border border-gray-200 bg-[#fbfcfd] p-9 shadow-sm max-md:p-6">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#0E2C53] text-white">
                  <Boxes size={26} />
                </div>
                <h2 className="mt-6 font-baskervville text-4xl font-bold leading-tight text-[#0E2C53] max-md:text-3xl">
                  Before You Add Capex, Find the Missing Capacity
                </h2>
              </div>
              <p className="text-lg leading-relaxed text-gray-600 max-md:text-[17px]">
                Installed capacity is what machines can theoretically produce. Effective capacity is what the complete operating system can reliably deliver after downtime, changeovers, manpower, quality, material and planning constraints. If a factory is using only part of its effective potential, buying more equipment may add depreciation without solving the real bottleneck. Madasky’s capacity work separates equipment limitation from operating loss so management can decide where capital is genuinely required.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-gray-200 p-8 transition-shadow hover:shadow-lg max-md:p-6">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#D72B0D]">
                Home Textiles
              </p>
              <h3 className="mt-3 font-baskervville text-3xl font-bold text-[#0E2C53]">
                Operations Excellence for Home Textiles
              </h3>
              <p className="mt-5 text-[17px] leading-relaxed text-gray-600">
                Home Textile operations often carry complexity across cutting, quilting, stitching, finishing, packing, style/size variety, customer-specific packaging and export dispatch. Improvements frequently require coordination across departments rather than isolated line efficiency. Madasky evaluates the complete flow from material readiness through shipment.
              </p>
            </article>

            <article className="rounded-2xl border border-gray-200 p-8 transition-shadow hover:shadow-lg max-md:p-6">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#D72B0D]">
                Apparel
              </p>
              <h3 className="mt-3 font-baskervville text-3xl font-bold text-[#0E2C53]">
                Operations Excellence for Apparel
              </h3>
              <p className="mt-5 text-[17px] leading-relaxed text-gray-600">
                Apparel performance is sensitive to style change, line skill, learning curve, feeding, cutting readiness, WIP and daily line management. Madasky combines industrial-engineering logic with planning, supervisor routines and digital visibility so improvements remain practical at line level.
              </p>
            </article>
          </div>
        </div>
      </motion.section>

      <section className="relative overflow-hidden bg-[#0B2F55] py-20 max-md:py-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(77,139,190,0.22),transparent_28%),radial-gradient(circle_at_86%_78%,rgba(255,106,73,0.12),transparent_24%)]" />
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full border border-white/[0.04]" />
        <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full border border-white/[0.04]" />

        <motion.div {...reveal} className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#ff7352]">
              Why Madasky
            </p>
            <h2 className="font-baskervville text-4xl font-bold leading-tight text-white max-md:text-3xl">
              Why Partner with Madasky
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {whyItems.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: Math.min(index * 0.045, 0.18) }}
                whileHover={{ y: -6 }}
                className="group relative min-h-[220px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.075] p-6 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/[0.11] hover:shadow-2xl"
              >
                <div className="absolute right-4 top-4 h-14 w-14 rounded-full bg-white/[0.035] transition-transform duration-300 group-hover:scale-125" />
                <div className="relative z-10">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ff7352]/40 bg-[#ff7352]/10 text-[#ff7352]">
                    <CheckCircle2 size={19} strokeWidth={2.1} />
                  </div>

                  <h3 className="mt-5 font-baskervville text-xl font-bold leading-snug text-white">
                    {item.title}
                  </h3>

                  <div className="mt-4 h-px w-10 bg-[#ff7352]/55 transition-all duration-300 group-hover:w-16" />

                  <p className="mt-4 text-[15px] leading-relaxed text-white/75">
                    {item.text}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      <motion.section {...reveal} className="bg-[#f5f6f8] py-20 max-md:py-14">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-10 shadow-sm max-md:p-6">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#eaf1f7] blur-2xl" />
            <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#D72B0D]">
                  Factory Diagnostic
                </p>
                <h2 className="font-baskervville text-4xl font-bold leading-tight text-[#0E2C53] max-md:text-3xl">
                  Start with a Factory Performance Diagnostic
                </h2>
                <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-600 max-md:text-[17px]">
                  If the factory is busy but performance is not improving, begin by identifying the few losses that control the economics. Madasky can conduct a focused diagnostic before a full engagement is considered.
                </p>
              </div>
              <Link
                href="/factory-diagnostic"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#E1340D] px-6 py-3 text-center text-base font-semibold text-white shadow transition hover:bg-[#C02A0B]"
              >
                Request a Factory Diagnostic
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
