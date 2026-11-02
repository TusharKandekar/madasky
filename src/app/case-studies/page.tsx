import type { Metadata } from "next";
import Link from "next/link";
import AboutNavbar from "@/components/Header/AboutNavbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Manufacturing Case Studies | Madasky Consulting",
  description:
    "Explore Madasky Consulting's published manufacturing improvement case studies and the operating outcomes behind them.",
};

const publishedCases = [
  {
    title: "Home Textile Packaging Line: Operations Excellence",
    outcome: "₹43 lakh in annual overtime eliminated and OTIF improved from 82% to 97%.",
    href: "https://madasky.com/show-blog/operations-excellence-case-study-how-a-kolkata-packaging-line-eliminated-43-lakh-in-annual-overtime-cost",
    service: "Operations Excellence",
    serviceHref: "/operations-excellence-consulting",
    industry: "Home Textiles",
    industryHref: "/industries/home-textiles",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <AboutNavbar />
      <main className="min-h-[65vh] bg-[#f5f7fa] pt-28 text-[#0E2C53]">
        <section className="mx-auto max-w-7xl px-6 pb-16 sm:px-8 lg:px-10">
          <p className="mb-3 text-sm font-bold tracking-widest text-[#D72B0D]">MANUFACTURING RESULTS</p>
          <h1 className="font-baskervville text-4xl font-bold sm:text-5xl">Case Studies</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Real examples of manufacturing problems, implementation work and measurable outcomes.
            Only published, verified cases are linked here.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {publishedCases.map((study) => (
              <article key={study.href} className="rounded-xl border border-slate-200 bg-white p-7 shadow-sm">
                <h2 className="font-baskervville text-2xl font-bold">{study.title}</h2>
                <p className="mt-4 leading-7 text-slate-700">{study.outcome}</p>
                <a
                  href={study.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block font-semibold text-[#C62D12] underline underline-offset-4"
                >
                  Read the published case study
                </a>
                <div className="mt-6 flex flex-wrap gap-3 border-t border-slate-200 pt-5 text-sm font-semibold">
                  <Link className="text-[#0E2C53] hover:underline" href={study.serviceHref}>{study.service}</Link>
                  <span aria-hidden="true" className="text-slate-300">•</span>
                  <Link className="text-[#0E2C53] hover:underline" href={study.industryHref}>{study.industry}</Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-xl bg-[#0E2C53] p-7 text-white sm:p-10">
            <h2 className="font-baskervville text-2xl font-bold">Discuss your factory performance challenge</h2>
            <p className="mt-3 max-w-2xl leading-7 text-slate-200">
              A factory diagnostic helps identify the constraints, baselines and priorities before a wider transformation project.
            </p>
            <Link href="/factory-diagnostic" className="mt-5 inline-block rounded-md bg-[#D72B0D] px-6 py-3 font-semibold text-white hover:bg-[#BD260B]">
              Explore Factory Diagnostic
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
