"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Layers3, Ruler, Scissors, BarChart3, Clock3, PackageCheck, Database, TrendingDown, Boxes } from "lucide-react";
import ShowMoreList from "@/components/ShowMoreList";
import Button from "@/components/Button";

const chain = [
  "Digital consumption logic and validated pattern data",
  "Order, size-ratio and colour combination analysis",
  "Marker generation / selection and efficiency comparison",
  "Fabric-width and requirement optimization",
  "Purchase quantity alignment to actual planning logic",
  "Roll inventory visibility and roll-length matching",
  "Lay planning and exact roll selection",
  "Cut-plan sequencing",
  "Usable remnant capture and reuse",
  "Actual-vs-standard feedback for future planning",
].map(title => ({title}));

const steps = [
  "Select a representative product/order sample.",
  "Agree baseline consumption, marker efficiency, end-bit/remnant and current planning time.",
  "Clean required pattern, order and roll data.",
  "Run optimized alternatives using the selected technology platform and Madasky manufacturing logic.",
  "Execute the pilot on real production where practical.",
  "Compare actual fabric used against the baseline.",
  "Identify which saving sources are repeatable.",
  "Define integration and scale-up only after results are validated.",
].map(title => ({title}));

const measures = [
  {icon: PackageCheck, title:"Fabric cost per good shipped unit"},
  {icon: BarChart3, title:"Consumption variance"},
  {icon: Layers3, title:"Marker efficiency"},
  {icon: Ruler, title:"Fabric utilization"},
  {icon: Scissors, title:"Roll-end / remnant loss"},
  {icon: TrendingDown, title:"Weight or area waste where relevant"},
  {icon: Clock3, title:"Planning time"},
  {icon: CheckCircle2, title:"Cut plan adherence"},
  {icon: Boxes, title:"Inventory accuracy and excess purchase quantity"},
];

const reasons = [
  "We optimize the complete fabric decision chain rather than one software feature.",
  "Technology is selected to fit the manufacturing use case.",
  "Pilots establish evidence before claims are made.",
  "Operations and planning expertise help embed the new process into daily work.",
  "Home Textile and Apparel product complexity is considered in the design.",
];

const reveal = {initial:{opacity:0,y:22},whileInView:{opacity:1,y:0},viewport:{once:true,amount:0.12},transition:{duration:0.55}} as const;
const wrap = "relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10";

export default function FabricSections({imageAlt}:{imageAlt?:string}) {
  return <main className="overflow-hidden bg-white">
    <section className="relative py-20 max-md:py-14">
      <motion.div {...reveal} className={`${wrap} grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]`}>
        <div className="relative min-h-[350px] overflow-hidden rounded-2xl bg-[#eef4fb] shadow-xl lg:min-h-[470px]">
          <Image src="/assets/images/fabric-raw-material-optimization.png" alt={imageAlt || "Fabric rolls and cutting-room material optimization"} fill sizes="(max-width:1024px) 100vw,45vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07182e]/70 to-transparent" />
          <p className="absolute bottom-6 left-6 right-6 font-baskervville text-2xl font-bold text-white">Improve cost per good shipped unit, not just marker efficiency.</p>
        </div>
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#D72B0D]">Manufacturing problem first</p>
          <h2 className="font-baskervville text-4xl font-bold leading-tight text-[#0E2C53] max-md:text-3xl">Fabric Waste Often Starts Before Cutting</h2>
          <div className="mt-7 space-y-5 text-lg leading-relaxed text-gray-600">
            <p>Fabric is typically one of the largest cost components in Home Textile and Apparel manufacturing. Yet many factories manage consumption, marker planning, purchasing, roll selection and cutting as separate activities. A good marker cannot recover loss created by the wrong width, the wrong order combination, poor roll-length matching or excess purchase quantity.</p>
            <p>Madasky looks at the complete fabric decision chain. The objective is to improve cost per good shipped unit, not simply produce a better marker percentage.</p>
          </div>
        </div>
      </motion.div>
    </section>

    <section className="relative bg-[#f5f7fa] py-20 max-md:py-14">
      <motion.div {...reveal} className={wrap}>
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#D72B0D]">What We Do</p>
        <h2 className="mb-10 font-baskervville text-4xl font-bold text-[#0E2C53] max-md:text-3xl">The Fabric Optimization Chain</h2>
        <ShowMoreList items={chain} visibleCount={5} image="/assets/images/fabric-raw-material-optimization.png" imageAlt="Fabric optimization and cutting-room operations" />
      </motion.div>
    </section>

    <section className="py-20 max-md:py-14">
      <motion.div {...reveal} className={wrap}>
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#D72B0D]">Our Approach</p>
          <h2 className="font-baskervville text-4xl font-bold text-[#0E2C53] max-md:text-3xl">Pilot, Prove, Then Scale</h2>
        </div>
        <ShowMoreList items={steps} visibleCount={5} className="mx-auto max-w-4xl" />
      </motion.div>
    </section>

    <section className="relative bg-[#f5f5f6] py-20 max-md:py-14">
      <motion.div {...reveal} className={wrap}>
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#D72B0D]">Where optimization creates value</p>
          <h2 className="font-baskervville text-4xl font-bold text-[#0E2C53] max-md:text-3xl">Beyond CAD and Marker Software</h2>
        </div>
        <div className="grid gap-7 lg:grid-cols-2">
          <article className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm max-md:p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0E2C53] text-white"><Layers3 size={24}/></div>
            <h3 className="mt-6 font-baskervville text-2xl font-bold text-[#0E2C53]">Why CAD Alone May Not Solve the Problem</h3>
            <p className="mt-5 text-[17px] leading-relaxed text-gray-600">Modern CAD is essential, but many losses occur outside the marker itself. Planners may still choose combinations manually. Purchasing may not align orders to optimized marker or roll logic. Roll selection may be based on availability rather than best fit. Remnants may exist physically but not be visible to the next planner. The opportunity therefore sits across information flow, not only nesting.</p>
          </article>
          <article className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm max-md:p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D72B0D] text-white"><Database size={24}/></div>
            <h3 className="mt-6 font-baskervville text-2xl font-bold text-[#0E2C53]">How AI and Optimization Help</h3>
            <p className="mt-5 text-[17px] leading-relaxed text-gray-600">Optimization engines can test many feasible combinations of sizes, colours, widths, markers, rolls and lays far faster than manual planning. The technology becomes valuable when it helps answer specific questions: Which combination consumes less fabric? What roll length best fits this marker? Which rolls should be picked? Which remnant can be reused? What purchase quantity is actually required?</p>
          </article>
        </div>
      </motion.div>
    </section>

    <section className="py-20 max-md:py-14">
      <motion.div {...reveal} className={wrap}>
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#D72B0D]">Performance visibility</p>
          <h2 className="font-baskervville text-4xl font-bold text-[#0E2C53] max-md:text-3xl">What We Measure</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {measures.map(({icon:Icon,title}) => <article key={title} className="rounded-xl border border-[#dbe4ee] bg-white p-6 shadow-sm transition-shadow hover:shadow-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eef4fb] text-[#0E2C53]"><Icon size={23}/></div>
            <h3 className="mt-5 text-lg font-bold text-[#0E2C53]">{title}</h3>
          </article>)}
        </div>
      </motion.div>
    </section>

    <section className="relative bg-gradient-to-br from-[#0d203b] via-[#22446a] to-[#132742] py-20 max-md:py-14">
      <div className="pointer-events-none absolute -right-16 top-0 h-60 w-60 rounded-full border-[35px] border-white/[0.035]" aria-hidden="true" />
      <motion.div {...reveal} className={`${wrap} grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]`}>
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#ff6a49]">Why Madasky</p>
          <h2 className="font-baskervville text-4xl font-bold text-white max-md:text-3xl">Why Madasky for Fabric & Raw Material Optimization</h2>
        </div>
        <div className="grid gap-4">{reasons.map(reason=><div key={reason} className="flex gap-4 rounded-xl border border-white/25 bg-[#355577]/85 p-5 shadow-[0_12px_30px_rgba(0,0,0,0.12)]"><CheckCircle2 className="mt-0.5 shrink-0 text-[#ff6a49]" size={22}/><p className="text-[16px] leading-relaxed text-white/90">{reason}</p></div>)}</div>
      </motion.div>
    </section>

    <section className="relative bg-white py-20 max-md:py-14">
      <motion.div {...reveal} className={`${wrap} max-w-6xl`}>
        <div className="rounded-3xl border border-[#dbe4ee] bg-white p-10 shadow-xl max-md:p-6">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#D72B0D]">Fabric optimization diagnostic</p>
              <h2 className="font-baskervville text-4xl font-bold text-[#0E2C53] max-md:text-3xl">Is There a Material Opportunity Worth Pursuing?</h2>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-600">Share a representative order mix, fabric consumption data and cutting-planning process. We can determine whether the opportunity is large enough to justify a structured pilot.</p>
            </div>
            <div className="shrink-0"><Button text="Discuss a Fabric Optimization Pilot" /></div>
          </div>
        </div>
      </motion.div>
    </section>
  </main>;
}
