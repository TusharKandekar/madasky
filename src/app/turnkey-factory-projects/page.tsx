import type { Metadata } from "next";
import Link from "next/link";

import ConsultingNavbar from "@/components/ConsultingNavbar";
import AboutVideo from "@/components/AboutVideo";
import CapabilitiesMainCard2 from "@/components/CapabilitiesMainCard2";
import FaqComponent from "@/components/FaqComponent";
import VideoSliderWrapper from "@/components/VideoSliderWrapper";
import BlogSliderWrapper from "@/components/BlogSliderWrapper";
import GallerySliderWrapper from "@/components/GallerySliderWrapper";
import HelpYou from "@/components/HelpYou";
import Footer from "@/components/Footer";
import BaseUrl from "@/components/BaseUrl";

import {
  fetchMetaDataByPageName,
  getDataByPageName,
  getImageAltText,
} from "@/common/api";

import type { Blog, Gallery, Video } from "@/common/types";

const pageName = "Turnkey Factory Projects";

const fallbackMeta = {
  title: "Turnkey Factory Setup Consultant India | Madasky",
  description:
    "Turnkey Home Textile and Apparel factory projects: capacity, layout, engineering, vendor selection, PMC, commissioning, workforce readiness and handover.",
  keywords:
    "turnkey factory setup consultant India, home textile factory setup, apparel factory setup, greenfield factory setup, brownfield expansion, factory PMC, manufacturing plant setup consultant",
  h1: "Turnkey Factory Projects",
};

const sectionHeadingClass =
  "mb-5 mt-0 text-[42px] leading-[1.15] font-bold text-gray-800 text-left tracking-normal max-md:text-3xl max-md:text-center";

const bodyTextClass =
  "flex flex-col gap-4 text-[18px] leading-[1.7] font-normal text-left tracking-normal text-gray-500 max-md:text-[17px]";

const paragraphClass =
  "text-[18px] leading-[1.7] font-normal text-left tracking-normal text-gray-500 max-md:text-[17px]";

const listClass =
  "pl-6 space-y-3 text-[18px] leading-[1.65] font-normal text-left tracking-normal text-gray-500 list-disc max-md:text-[17px] max-md:pl-5";

const cardWrapperClass = "w-full";

const commonCardOptions = {
  compact: true,
  contentTopAlign: true,
  inlineExpanded: true,
  inlineButton: true,
};

export async function generateMetadata(): Promise<Metadata> {
  try {
    const response = await fetchMetaDataByPageName({ pageName });
    const meta = response?.data;

    return {
      title: meta?.meta_title || fallbackMeta.title,
      description: meta?.meta_desc || fallbackMeta.description,
      keywords: meta?.meta_keyword || fallbackMeta.keywords,
      authors: {
        name: meta?.author || "Madasky",
        url: "https://madasky.com",
      },
      alternates: {
        canonical: `${BaseUrl().mainurl}/turnkey-factory-projects`,
      },
    };
  } catch {
    return {
      title: fallbackMeta.title,
      description: fallbackMeta.description,
      keywords: fallbackMeta.keywords,
      authors: {
        name: "Madasky",
        url: "https://madasky.com",
      },
      alternates: {
        canonical: `${BaseUrl().mainurl}/turnkey-factory-projects`,
      },
    };
  }
}

const faqs = [
  {
    question: "What is included in a Madasky turnkey factory project?",
    answer:
      "Scope can include product and capacity planning, process flow, factory layout, architecture and engineering coordination, utilities, machinery specifications, vendor selection support, PMC, digital readiness, workforce readiness, commissioning and operational handover.",
  },
  {
    question: "Is Madasky an EPC contractor?",
    answer:
      "Madasky’s recommended model is turnkey project management and integration rather than balance-sheet-heavy EPC. Major vendor contracts may remain directly between the client and approved vendors while Madasky manages design, integration, project controls and handover.",
  },
  {
    question: "Can Madasky work with our existing architect or engineers?",
    answer:
      "Yes. Madasky can work with client-appointed consultants or bring its own specialist network. The key requirement is one agreed design basis, responsibility matrix and decision process.",
  },
  {
    question: "How early should Madasky be involved?",
    answer:
      "Ideally before layout, machinery and utilities are frozen. Changes made after civil or equipment orders are released are slower and more expensive.",
  },
  {
    question: "Do you support ramp-up after commissioning?",
    answer:
      "Yes. Scope can include trial production, bottleneck identification, operating routines, workforce readiness and stabilization after mechanical completion.",
  },
];

type ImageAltResponse = {
  data?: Array<{ webimage?: string; alt_text?: string }>;
};

export default async function TurnkeyFactoryProjectsPage() {
  const imageNames = [
    "Project.png",
    "What we do_.png",
    "Our Approach.png",
    "Framework and solutions.png",
    "People & Skill.png",
    "Why Choose Madasky Consulting.png",
    "Partner with Us.png",
  ];

  let imageAltMap: Record<string, string> = {};
  let blogs: Blog[] = [];
  let videos: Video[] = [];
  let gallery: Gallery[] = [];

  try {
    const imageResponse = (await getImageAltText(
      imageNames
    )) as ImageAltResponse | null;

    imageAltMap = Object.fromEntries(
      (imageResponse?.data || []).map((image) => [
        image.webimage || "",
        image.alt_text || "Madasky Consulting",
      ])
    );
  } catch {
    imageAltMap = {};
  }

  try {
    const [blogResponse, videoResponse, galleryResponse] = await Promise.all([
      getDataByPageName([pageName, "blogs"]),
      getDataByPageName([pageName, "videos"]),
      getDataByPageName([pageName, "gallery"]),
    ]);

    blogs = Array.isArray(blogResponse?.data) ? blogResponse.data : [];
    videos = Array.isArray(videoResponse?.data) ? videoResponse.data : [];
    gallery = Array.isArray(galleryResponse?.data) ? galleryResponse.data : [];
  } catch {
    blogs = [];
    videos = [];
    gallery = [];
  }

  const alt = (imageName: string, fallback: string) =>
    imageAltMap[imageName] || fallback;

  return (
    <>
      <ConsultingNavbar
        url="/turnkey-factory-projects"
        title={pageName}
        navItems={[
          { title: "Plant Layout", link: "/plant-layout-consulting" },
          { title: "Technical Consulting", link: "/technical-consulting" },
          { title: "Manpower Planning", link: "/manpower-planning-consulting" },
          {
            title: "Process & Material Flow",
            link: "/process-and-material-flow-consulting",
          },
        ]}
      />

      <AboutVideo
        vid1="/assets/videos/Projects.mp4"
        title={pageName}
        h1="From concept to operational handover."
        des="Madasky manages the complete manufacturing project so product, process, capacity, layout, engineering, utilities, machines, vendors, people and systems are designed as one factory - not as disconnected packages."
        pageName={pageName}
      />

      <main>
        <div className={cardWrapperClass}>
          <CapabilitiesMainCard2
            details1={{
              updes: [
                <div key="intro" className="text-lg">
                  <h2 className={sectionHeadingClass}>
                    One Team from Factory Concept to Production Ramp-Up
                  </h2>

                  <div className={bodyTextClass}>
                    <p>
                      A new manufacturing facility starts making expensive
                      decisions long before construction begins. Product mix
                      determines process. Process determines capacity. Capacity
                      shapes machinery, utilities, storage, manpower and space.
                      Layout decisions influence material movement and
                      productivity for years. If these decisions are taken
                      independently, the factory may be completed on schedule
                      yet still enter production with avoidable constraints.
                    </p>
                    <p>
                      Madasky’s Turnkey Factory Projects offering is designed
                      for manufacturers who want a single manufacturing-led
                      team to coordinate the complete journey. We take
                      responsibility for the project logic, integrate
                      architects, engineers and specialist providers, support
                      vendor finalization, manage project execution and stay
                      through commissioning and operational handover.
                    </p>
                    <p>
                      Our preferred model is turnkey project management and
                      integration rather than balance-sheet-heavy EPC. Major
                      machinery, civil, PEB, utilities or technology packages
                      can remain contracted directly between the client and
                      selected vendors while Madasky remains the manufacturing
                      design authority and project integrator.
                    </p>
                  </div>
                </div>,
              ],
              img: "Project.png",
              direction: "",
              ...commonCardOptions,
              altText: alt(
                "Project.png",
                "Turnkey factory project design and planning"
              ),
            }}
          />
        </div>

        <div className={cardWrapperClass}>
          <CapabilitiesMainCard2
            details1={{
              updes: [
                <div key="what-we-manage" className="text-lg">
                  <h2 className={sectionHeadingClass}>
                    What We Manage
                  </h2>
                  <ul className={listClass}>
                    <li>
                      <span className="font-semibold text-gray-700">
                        Project Definition &amp; Business Case
                      </span>{" "}
                      - product mix, capacity, phase strategy, investment logic
                      and future expansion.
                    </li>
                    <li>
                      <span className="font-semibold text-gray-700">
                        Process Flow &amp; Capacity Planning
                      </span>{" "}
                      - route, takt/throughput, process capacities, buffers and
                      bottleneck logic.
                    </li>
                    <li>
                      <span className="font-semibold text-gray-700">
                        Factory Layout &amp; Space Planning
                      </span>{" "}
                      - machinery, storage, movement, ergonomics, safety,
                      utilities and expansion zones.
                    </li>
                    <li>
                      <span className="font-semibold text-gray-700">
                        Architecture, Civil, Structural &amp; MEP Coordination
                      </span>{" "}
                      - translate manufacturing requirements into coordinated
                      engineering packages.
                    </li>
                    <li>
                      <span className="font-semibold text-gray-700">
                        Utilities &amp; Infrastructure
                      </span>{" "}
                      - electrical load, compressed air, HVAC/ventilation,
                      water, drainage, fire systems and other process utilities.
                    </li>
                  </ul>
                </div>,
              ],
              hdes: [
                <div key="what-we-manage-more" className="text-lg">
                  <ul className={listClass}>
                    <li>
                      <span className="font-semibold text-gray-700">
                        Machinery &amp; Technology Selection
                      </span>{" "}
                      - specifications, performance requirements, automation
                      level and technical comparisons.
                    </li>
                    <li>
                      <span className="font-semibold text-gray-700">
                        Vendor Identification &amp; Finalization
                      </span>{" "}
                      - RFQ, techno-commercial evaluation, negotiation support
                      and recommendation.
                    </li>
                    <li>
                      <span className="font-semibold text-gray-700">
                        PMC &amp; Project Controls
                      </span>{" "}
                      - schedule, dependencies, site coordination, review
                      meetings, quality, documentation and escalation.
                    </li>
                    <li>
                      <span className="font-semibold text-gray-700">
                        Digital &amp; AI Readiness
                      </span>{" "}
                      - data points, network, MES/IoT requirements,
                      planning-system interfaces and future digital
                      architecture.
                    </li>
                    <li>
                      <span className="font-semibold text-gray-700">
                        Workforce Readiness
                      </span>{" "}
                      - organization, manpower plan, critical-role support,
                      skill requirements, training and ramp-up planning.
                    </li>
                    <li>
                      <span className="font-semibold text-gray-700">
                        Commissioning &amp; Operational Handover
                      </span>{" "}
                      - installation readiness, trials, performance checks,
                      SOPs, training and production stabilization.
                    </li>
                  </ul>
                </div>,
              ],
              img: "What we do_.png",
              direction: "",
              ...commonCardOptions,
              altText: alt("What we do_.png", "Turnkey factory project scope"),
            }}
          />
        </div>

        <div className={cardWrapperClass}>
          <CapabilitiesMainCard2
            details1={{
              updes: [
                <div key="approach" className="text-lg">
                  <h2 className={sectionHeadingClass}>
                    How the Turnkey Project Runs
                  </h2>
                  <div className={bodyTextClass}>
                    <p>
                      <span className="font-semibold text-gray-700">
                        Stage 1 - Define.
                      </span>{" "}
                      Confirm product mix, volumes, quality expectations,
                      process route, shift model, automation philosophy,
                      expansion horizon and project constraints.
                    </p>
                    <p>
                      <span className="font-semibold text-gray-700">
                        Stage 2 - Design.
                      </span>{" "}
                      Convert the manufacturing model into capacity
                      calculations, block layout, process flow, storage,
                      utilities, manpower and digital requirements.
                    </p>
                    <p>
                      <span className="font-semibold text-gray-700">
                        Stage 3 - Engineer.
                      </span>{" "}
                      Coordinate architectural, structural, civil and MEP
                      design around frozen manufacturing requirements. Review
                      interfaces before drawings become construction
                      instructions.
                    </p>
                    <p>
                      <span className="font-semibold text-gray-700">
                        Stage 4 - Source.
                      </span>{" "}
                      Develop specifications and RFQs, identify capable
                      vendors, compare technical and commercial offers, clarify
                      deviations and support final selection.
                    </p>
                  </div>
                </div>,
              ],
              hdes: [
                <div key="approach-more" className={bodyTextClass}>
                  <p>
                    <span className="font-semibold text-gray-700">
                      Stage 5 - Execute.
                    </span>{" "}
                    Run master schedule, package dependencies, site meetings,
                    design clarifications, vendor coordination, installation
                    readiness and issue escalation through PMC.
                  </p>
                  <p>
                    <span className="font-semibold text-gray-700">
                      Stage 6 - Commission.
                    </span>{" "}
                    Check utilities, equipment, safety, systems, documentation,
                    training and trials against agreed acceptance criteria.
                  </p>
                  <p>
                    <span className="font-semibold text-gray-700">
                      Stage 7 - Ramp Up &amp; Handover.
                    </span>{" "}
                    Support initial production, identify early constraints,
                    stabilize routines and hand over an operating factory rather
                    than only a completed project.
                  </p>
                </div>,
              ],
              img: "Our Approach.png",
              direction: "",
              ...commonCardOptions,
              altText: alt("Our Approach.png", "Turnkey factory project stages"),
            }}
          />
        </div>

        <div className={cardWrapperClass}>
          <CapabilitiesMainCard2
            details1={{
              updes: [
                <div key="greenfield" className="text-lg">
                  <h2 className={sectionHeadingClass}>
                    Greenfield Factory Projects
                  </h2>
                  <p className={paragraphClass}>
                    For greenfield projects, Madasky should be involved before
                    the site plan and machinery list are frozen. Early work
                    focuses on what the business must produce, in what volume,
                    through which process route and with what future growth.
                    This allows the building, machine plan, utility backbone,
                    warehouse, workforce and digital architecture to follow
                    manufacturing logic rather than force the manufacturing
                    process to fit a predetermined shell.
                  </p>
                </div>,
              ],
              img: "Project.png",
              direction: "",
              ...commonCardOptions,
              altText: alt("Project.png", "Greenfield factory project planning"),
            }}
          />
        </div>

        <div className={cardWrapperClass}>
          <CapabilitiesMainCard2
            details1={{
              updes: [
                <div key="brownfield" className="text-lg">
                  <h2 className={sectionHeadingClass}>
                    Brownfield Expansion &amp; Modernization
                  </h2>
                  <p className={paragraphClass}>
                    Brownfield projects need stronger phasing discipline because
                    the existing factory must continue operating. We evaluate
                    current bottlenecks, available space, structural
                    limitations, utility headroom, material movement, shutdown
                    windows and integration risks. The goal is not simply to
                    add capacity but to prevent the expansion from creating new
                    constraints in storage, movement, utilities, manpower or
                    planning.
                  </p>
                </div>,
              ],
              img: "Framework and solutions.png",
              direction: "",
              ...commonCardOptions,
              altText: alt(
                "Framework and solutions.png",
                "Brownfield factory expansion and modernization"
              ),
            }}
          />
        </div>

        <div className={cardWrapperClass}>
          <CapabilitiesMainCard2
            details1={{
              updes: [
                <div key="workforce" className="text-lg">
                  <h2 className={sectionHeadingClass}>
                    Workforce Readiness Is Part of the Project
                  </h2>
                  <p className={paragraphClass}>
                    A factory is not ready because the machines are
                    commissioned. It is ready when the operating organization
                    can run them. Madasky can support organization structure,
                    manpower planning, critical-role definitions, technical
                    assessment and key talent support. Where structured
                    skilling, operator training or workforce-development
                    programs are required, these can be delivered through
                    Ananta Mitra Foundation under a clearly defined program.
                  </p>
                </div>,
              ],
              img: "People & Skill.png",
              direction: "",
              ...commonCardOptions,
              altText: alt("People & Skill.png", "Factory workforce readiness"),
            }}
          />
        </div>

        <div className={cardWrapperClass}>
          <CapabilitiesMainCard2
            details1={{
              updes: [
                <div key="why-madasky" className="text-lg">
                  <h2 className={sectionHeadingClass}>
                    Why Madasky for Turnkey Factory Projects
                  </h2>
                  <ul className={listClass}>
                    <li>
                      <span className="font-semibold text-gray-700">
                        Manufacturing-led design
                      </span>{" "}
                      - factory decisions are driven by process, capacity and
                      operating economics.
                    </li>
                    <li>
                      <span className="font-semibold text-gray-700">
                        One client-facing project authority
                      </span>{" "}
                      - Madasky coordinates specialist architects, engineers and
                      solution providers around one project agenda.
                    </li>
                    <li>
                      <span className="font-semibold text-gray-700">
                        Execution visibility
                      </span>{" "}
                      - project controls focus on dependencies, risks, decisions
                      and readiness, not only percentage-complete reporting.
                    </li>
                    <li>
                      <span className="font-semibold text-gray-700">
                        Operational handover
                      </span>{" "}
                      - the engagement can continue through trials, ramp-up and
                      early factory stabilization.
                    </li>
                    <li>
                      <span className="font-semibold text-gray-700">
                        Home Textile &amp; Apparel depth
                      </span>{" "}
                      - layouts, storage, cutting, sewing, finishing, packing
                      and supporting operations are approached with sector
                      context.
                    </li>
                  </ul>
                </div>,
              ],
              img: "Why Choose Madasky Consulting.png",
              direction: "",
              ...commonCardOptions,
              altText: alt(
                "Why Choose Madasky Consulting.png",
                "Why choose Madasky for turnkey factory projects"
              ),
            }}
          />
        </div>

        <div className={cardWrapperClass}>
          <CapabilitiesMainCard2
            details1={{
              updes: [
                <div key="cta" className="text-lg">
                  <h2 className={sectionHeadingClass}>
                    Planning a New Factory or Major Expansion?
                  </h2>
                  <p className={paragraphClass}>
                    Engage Madasky before machinery, civil design and layout are
                    frozen. Early manufacturing decisions have the highest
                    leverage and are the least expensive to change.
                  </p>
                </div>,
              ],
              img: "Partner with Us.png",
              direction: "",
              ...commonCardOptions,
              altText: alt("Partner with Us.png", "Discuss your factory project"),
              calendarButton: true,
              btnText: "Discuss Your Factory Project",
            }}
          />
        </div>

        <section className="relative w-full py-[3.5vh] bg-no-repeat bg-cover">
          <div className="absolute inset-0 bg-[url('/assets/images/industrybg.png')] bg-no-repeat bg-cover opacity-20 max-md:bg-none" />
          <div className="relative z-10 w-[85%] mx-auto bg-white border border-gray-200 shadow-2xl rounded-2xl px-10 py-8 max-md:w-[90%] max-md:px-4 [&>div]:max-w-none [&>div]:px-0 [&>div]:py-0 [&>div>h2]:text-[42px] [&>div>h2]:leading-[1.15] [&>div>h2]:mb-7 [&>div>h2]:text-left max-md:[&>div>h2]:text-3xl max-md:[&>div>h2]:text-center">
            <FaqComponent faqs={faqs} />
          </div>
        </section>

        <section className="relative w-full py-[3.5vh] bg-no-repeat bg-cover">
          <div className="absolute inset-0 bg-[url('/assets/images/industrybg.png')] bg-no-repeat bg-cover opacity-20 max-md:bg-none" />
          <div className="relative z-10 w-[85%] mx-auto p-10 bg-white border border-gray-200 shadow-2xl rounded-2xl max-md:w-[90%] max-md:p-6">
            <h2 className="mb-7 text-[42px] leading-[1.15] font-bold text-left tracking-normal text-gray-800 max-md:text-3xl max-md:text-center">
              Related Capabilities &amp; Industries
            </h2>
            <div className="grid grid-cols-1 gap-x-10 gap-y-4 text-[18px] leading-7 md:grid-cols-2">
              <Link
                href="/plant-layout-consulting"
                className="font-semibold text-[#152869] hover:underline"
              >
                Plant Layout
              </Link>
              <Link
                href="/process-and-material-flow-consulting"
                className="font-semibold text-[#152869] hover:underline"
              >
                Process &amp; Material Flow
              </Link>
              <Link
                href="/digital-factory-mes"
                className="font-semibold text-[#152869] hover:underline"
              >
                Digital Factory &amp; MES
              </Link>
              <Link
                href="/workforce-readiness-talent-support"
                className="font-semibold text-[#152869] hover:underline"
              >
                Workforce Readiness &amp; Key Talent Support
              </Link>
              <Link
                href="/industries/home-textiles"
                className="font-semibold text-[#152869] hover:underline"
              >
                Home Textiles
              </Link>
              <Link
                href="/industries/apparel"
                className="font-semibold text-[#152869] hover:underline"
              >
                Apparel
              </Link>
            </div>
          </div>
        </section>
      </main>

      {(videos.length > 0 || blogs.length > 0 || gallery.length > 0) && (
        <div className="p-6 flex h-auto flex-col w-full py-[1vh] bg-[#bce1fd75] bg-[url('/assets/images/homeblogbg.png')] bg-center bg-no-repeat bg-cover items-center justify-center">
          {videos.length > 0 && (
            <>
              <VideoSliderWrapper videos={videos} />
              {(blogs.length > 0 || gallery.length > 0) && (
                <div className="w-[90%] h-[2px] bg-gray-300" />
              )}
            </>
          )}

          {blogs.length > 0 && (
            <>
              <BlogSliderWrapper blogs={blogs} />
              {gallery.length > 0 && (
                <div className="w-[90%] h-[2px] bg-gray-300" />
              )}
            </>
          )}

          {gallery.length > 0 && <GallerySliderWrapper gallery={gallery} />}
        </div>
      )}

      <HelpYou />
      <Footer />
    </>
  );
}
