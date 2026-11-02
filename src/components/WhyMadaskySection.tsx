import { CheckCircle2 } from "lucide-react";
import type { ReactNode } from "react";

type WhyItem = { title?: string; text: string };

interface WhyMadaskySectionProps {
  title: string;
  description?: ReactNode;
  items?: WhyItem[];
  id?: string;
  layout?: "auto" | "five-column";
}

/**
 * Shared presentation for the 14-page Word-document review.
 * Odd counts use a side-by-side stacked list; even counts use a balanced grid.
 * Selected pages with five compact points can retain their original five-column layout.
 * Page-specific approved wording remains owned by the calling page.
 */
export default function WhyMadaskySection({
  title,
  description,
  items = [],
  id,
  layout = "auto",
}: WhyMadaskySectionProps) {
  const compactFive = layout === "five-column";
  const stacked = !compactFive && items.length % 2 === 1;

  return (
    <section id={id} className="bg-[#102D50] py-16 text-white sm:py-20">
      <div className={`mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 ${stacked ? "lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12" : ""}`}>
        <div className={compactFive ? "mx-auto mb-10 max-w-4xl text-center" : stacked ? "" : "mb-9 max-w-4xl"}>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#9DD5F0]">Why Madasky</p>
          <h2 className="font-baskervville text-3xl font-bold leading-tight text-white sm:text-4xl">{title}</h2>
          {description && <div className="mt-5 max-w-3xl text-[17px] leading-relaxed text-[#D1DDEA]">{description}</div>}
        </div>
        {items.length > 0 && (
          <div className={`grid gap-4 ${compactFive ? "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5" : stacked ? "mt-8 lg:mt-0" : "sm:grid-cols-2"}`}>
            {items.map((item, index) => (
              <article key={index} className={`flex h-full min-w-0 gap-3 rounded-xl border border-[#45617D] bg-[#254466] p-5 ${compactFive ? "flex-col" : "sm:p-6"}`}>
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#FF684C]" aria-hidden="true" />
                <div className="min-w-0">
                  {item.title && <h3 className="font-baskervville text-lg font-bold leading-snug text-white">{item.title}</h3>}
                  <p className={`${item.title ? "mt-2" : ""} text-[16px] leading-relaxed text-[#D1DDEA]`}>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
