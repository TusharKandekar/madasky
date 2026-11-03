import type { ReactNode } from "react";

/** Shared post-hero message treatment approved for the Madasky long-form pages. */
interface HeroSupportingMessageProps {
  lead: ReactNode;
  secondary?: ReactNode;
}

export default function HeroSupportingMessage({ lead, secondary }: HeroSupportingMessageProps) {
  return (
    <section className="relative overflow-hidden border-b border-[#e1e8ef] bg-gradient-to-br from-[#f5f8fc] via-white to-[#edf3f9] py-12 sm:py-16">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border-[40px] border-[#0E2C53]/[0.035]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="max-w-5xl border-l-4 border-[#D72B0D] pl-5 sm:pl-8">
          <p className="font-baskervville text-[clamp(1.4rem,2.5vw,2.1rem)] font-semibold leading-snug text-[#0E2C53] capitalize">{lead}</p>
          {secondary && (
            <p className="mt-5 text-[17px] leading-relaxed text-[#42536a] sm:text-lg capitalize">{secondary}</p>
          )}
        </div>
      </div>
    </section>
  );
}
