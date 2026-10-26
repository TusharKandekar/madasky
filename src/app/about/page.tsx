import type { Metadata } from "next";
import AboutNavbar from "@/components/Header/AboutNavbar";
import AboutVideo from "@/components/AboutVideo";
import Button from "@/components/Button";
import HelpYou from "@/components/HelpYou";
import Footer from "@/components/Footer";
import BaseUrl from "@/components/BaseUrl";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = BaseUrl().mainurl.replace(/\/+$/, "");

  return {
    title: "About Madasky Consulting | Manufacturing Transformation",
    description:
      "Madasky is a manufacturing transformation consultancy focused on Home Textiles and Apparel, spanning factory projects, operations and AI-enabled manufacturing intelligence.",
    keywords: ["manufacturing transformation consulting company"],
    authors: [{ name: "Madasky", url: "https://madasky.com" }],
    alternates: {
      canonical: `${baseUrl}/about`,
    },
  };
}

const principles = [
  "A machine is an asset. A factory is a system.",
  "Manufacturing problem first. Technology second.",
  "Capex should follow a verified capacity requirement.",
  "AI creates value only when process and data are ready.",
  "Implementation matters more than presentation.",
  "The client should never have to assemble the transformation themselves.",
  "Every assignment should have a measurable business or project outcome.",
];

export default function AboutPage() {
  return (
    <>
      <AboutNavbar />

      <AboutVideo
        vid1="/assets/videos/HomePageWebsite.mp4"
        title={null}
        des="Madasky Consulting works with owners and manufacturing leaders who need more than recommendations. Our work sits where factory design, operations, engineering, technology and people meet."
        h1="Manufacturing Experience. Execution Discipline. Smarter Factories."
      />

      <main className="mx-auto w-[80vw] max-w-7xl bg-white max-md:w-full max-md:px-5">
        {/* Our Manufacturing Background */}
        <section className="flex w-full flex-col gap-6 border-b border-gray-300 py-14 md:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D72B0D]">
            About Madasky
          </p>
          <h2 className="font-baskervville text-4xl font-bold text-black max-md:text-3xl">
            Our Manufacturing Background
          </h2>
          <div className="flex flex-col gap-5 text-justify text-[18px] leading-relaxed text-gray-700">
            <p>
              Madasky has deep roots in Home Textile manufacturing and decades of hands-on experience in factories serving international markets. Over time, that operating background expanded into factory setup, productivity improvement, operations transformation, industrial engineering, project execution and digital manufacturing.
            </p>
            <p>
              The relaunch of Madasky is not a move away from that history. It is a clearer expression of it: help manufacturers build better factories, improve the factories they already have and use data and AI where they make manufacturing decisions smarter.
            </p>
          </div>
        </section>

        {/* Our Model */}
        <section className="grid grid-cols-1 gap-10 border-b border-gray-300 py-14 md:grid-cols-[0.9fr_1.1fr] md:py-16">
          <div>
            <p className="mb-3 text-sm hidden font-semibold uppercase tracking-[0.18em] text-[#D72B0D]">
              Our Model
            </p>
            <h2 className="font-baskervville text-4xl font-bold leading-tight text-black max-md:text-3xl">
              One Client-Facing Team, Specialist Capability Behind It
            </h2>
          </div>
          <div className="flex flex-col gap-5 text-justify text-[18px] leading-relaxed text-gray-700">
            <p>
              Madasky remains the frontend transformation partner. Depending on the assignment, architects, structural engineers, MEP specialists, automation experts, MES providers, planning platforms, fabric-optimization technology and other domain experts may form part of the backend delivery team.
            </p>
            <p>
              The client should not have to assemble the solution. Madasky defines the manufacturing requirement, integrates the expertise, manages interfaces and remains accountable for the agreed consulting/project scope. Technology partners are introduced where transparency, licensing, technical evaluation, support or contracting requires it.
            </p>
          </div>
        </section>

        {/* What We Believe */}
        <section className="border-b border-gray-300 py-14 md:py-16">
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-sm hidden font-semibold uppercase tracking-[0.18em] text-[#D72B0D]">
              What We Believe
            </p>
            <h2 className="font-baskervville text-4xl font-bold text-black max-md:text-3xl">
              Principles That Guide Our Work
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((principle, index) => (
              <div
                key={principle}
                className="flex min-h-32 gap-4 border-t-4 border-[#D72B0D] bg-[#F7F8FA] p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="font-baskervville text-2xl font-bold text-[#D72B0D]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-[17px] font-semibold leading-relaxed text-black">
                  {principle}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Industries */}
        <section className="border-b border-gray-300 py-14 md:py-16">
          <p className="mb-3 text-sm hidden font-semibold uppercase tracking-[0.18em] text-[#D72B0D]">
            Industries
          </p>
          <h2 className="mb-6 font-baskervville text-4xl font-bold text-black max-md:text-3xl">
            Where We Focus
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="border border-gray-200 p-6 md:p-8">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-gray-500">
                Core industries
              </p>
              <p className="text-2xl font-semibold text-black">
                Home Textiles and Apparel
              </p>
            </div>
            <div className="border border-gray-200 p-6 md:p-8">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-gray-500">
                Extended capabilities
              </p>
              <p className="text-2xl font-semibold text-black">
                Textiles and Technical Textiles
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="flex flex-col items-start gap-6 py-14 md:py-16">
          <p className="text-sm hidden font-semibold uppercase tracking-[0.18em] text-[#D72B0D]">
            Work With Madasky
          </p>
          <h2 className="max-w-4xl font-baskervville text-4xl font-bold leading-tight text-black max-md:text-3xl">
            Build. Improve. Make It Smarter.
          </h2>
          <p className="max-w-4xl text-[18px] leading-relaxed text-gray-700">
            Whether the requirement is a new facility, an underperforming plant or a manufacturing-intelligence opportunity, start with the business problem and Madasky will define the right path.
          </p>
          <Button text="Talk to Madasky" />
        </section>
      </main>

      <HelpYou />
      <Footer />
    </>
  );
}
