import type { Metadata } from "next";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

import ConsultingNavbar2 from "@/components/ConsultingNavbar2";
import Footer from "@/components/Footer";
import AboutVideo from "@/components/AboutVideo";
import HelpYou from "@/components/HelpYou";
import GallerySliderWrapper from "@/components/GallerySliderWrapper";
import BlogSliderWrapper from "@/components/BlogSliderWrapper";
import VideoSliderWrapper from "@/components/VideoSliderWrapper";
import FaqComponent from "@/components/FaqComponent";
import Button from "@/components/Button";
import BaseUrl from "@/components/BaseUrl";

import {
  fetchMetaDataByPageName,
  getDataByPageName,
  getImageAltText,
  getImageData,
} from "@/common/api";

const PAGE_NAME = "Fabric & Raw Material Optimization";
const PAGE_PATH = "fabric-raw-material-optimization";
const PAGE_TITLE = "Fabric & Raw Material Optimization";
const META_DESCRIPTION =
  "AI-enabled fabric optimization for Home Textile and Apparel: consumption, markers, order combinations, roll selection, cutting planning and remnants.";

// Make sure this file exists in your webimage uploads. Update the filename if needed.
const FABRIC_IMAGE = "Fabric & Raw Material Optimization.jpeg";
// Make sure this video exists in public/assets/videos. Update the filename if needed.
const HERO_VIDEO = "/assets/videos/Fabric & Raw Material Optimization.mp4";

export async function generateMetadata(): Promise<Metadata> {
  try {
    const pageMetadata = await fetchMetaDataByPageName({ pageName: PAGE_NAME });

    return {
      title: pageMetadata?.data?.meta_title || `${PAGE_TITLE} | Madasky`,
      description: pageMetadata?.data?.meta_desc || META_DESCRIPTION,
      keywords:
        pageMetadata?.data?.meta_keyword ||
        "fabric optimization apparel home textiles, fabric waste reduction, marker optimization, cutting room optimization, fabric consumption optimization, AI fabric optimization",
      authors: {
        name: pageMetadata?.data?.author || "Madasky",
        url: "https://madasky.com",
      },
      alternates: {
        canonical: `${BaseUrl().mainurl}${PAGE_PATH}`,
      },
    };
  } catch {
    return {
      title: `${PAGE_TITLE} | Madasky`,
      description: META_DESCRIPTION,
      keywords:
        "fabric optimization apparel home textiles, fabric waste reduction, marker optimization, cutting room optimization, fabric consumption optimization, AI fabric optimization",
      alternates: {
        canonical: `${BaseUrl().mainurl}${PAGE_PATH}`,
      },
    };
  }
}

type Faq = {
  question: string;
  answer: string;
};

const SectionHeading = ({ title }: { title: string }) => (
  <div className="flex items-start gap-2 font-bold text-2xl text-gray-600 leading-tight max-md:text-xl">
    <FaArrowRight className="mt-1 shrink-0 text-[20px]" />
    <h2>{title}</h2>
  </div>
);

export default async function FabricRawMaterialOptimizationPage() {
  let blogData: any = { data: [] };
  let videoData: any = { data: [] };
  let galleryData: any = { data: [] };
  let imgAltText: string[] = [];

  try {
    const imageData = await getImageAltText([FABRIC_IMAGE]);
    const altText = await getImageData(imageData);
    if (Array.isArray(altText)) imgAltText = altText;

    blogData = await getDataByPageName([PAGE_NAME, "blogs"]);
    videoData = await getDataByPageName([PAGE_NAME, "videos"]);
    galleryData = await getDataByPageName([PAGE_NAME, "gallery"]);
  } catch (error) {
    // The main service content can still render if optional CMS media is unavailable.
    console.error("Unable to load Fabric & Raw Material Optimization page media:", error);
  }

  const faqs: Faq[] = [
    {
      question: "Can this work if we already use CAD and marker software?",
      answer:
        "Yes. The opportunity often exists across order combination, consumption, purchasing, roll selection, lay planning and remnant reuse around the CAD system.",
    },
    {
      question: "How much fabric can be saved?",
      answer:
        "The answer depends on current performance, product mix, widths, order complexity, marker efficiency and roll characteristics. Madasky does not recommend promising a fixed saving before baseline measurement and pilot validation.",
    },
    {
      question: "What data is required?",
      answer:
        "Typical inputs include orders, dimensions/pattern data, size/colour ratios, fabric width, current consumption, marker results, roll inventory/lengths and actual cutting data.",
    },
    {
      question: "Can this integrate with ERP or CAD?",
      answer:
        "Integration is possible subject to the systems, available data interfaces and project scope. The pilot can also begin with controlled data before full integration.",
    },
    {
      question: "Is this only for Apparel?",
      answer:
        "No. The approach is relevant to both Apparel and Home Textiles, though the optimization logic differs by product and cutting process.",
    },
  ];

  const hasVideos = Array.isArray(videoData?.data) && videoData.data.length > 0;
  const hasBlogs = Array.isArray(blogData?.data) && blogData.data.length > 0;
  const hasGallery = Array.isArray(galleryData?.data) && galleryData.data.length > 0;
  const hasMedia = hasVideos || hasBlogs || hasGallery;

  return (
    <>
      <ConsultingNavbar2 url={`/${PAGE_PATH}`} title={PAGE_TITLE} />

      <AboutVideo
        vid1={HERO_VIDEO}
        title={PAGE_TITLE}
        des="Reduce fabric loss by improving the decisions made before, during and after cutting. Madasky connects consumption, pattern and marker logic, fabric requirement, order combination, roll selection, lay planning, cutting and remnant visibility into one optimization approach."
        h1={PAGE_TITLE}
      />

      <main className="mx-auto w-[80vw] bg-white max-md:w-[90vw]">
        <div className="my-20 w-full">
          {/* INTRO */}
          <section className="flex flex-col gap-8 border-b border-gray-300 pb-10">
            <h2 className="text-4xl font-bold text-black max-md:text-3xl">
              Fabric Waste Often Starts Before Cutting
            </h2>

            <div className="flex items-center gap-10 max-md:flex-col">
              <div className="flex w-[60%] flex-col gap-4 text-[18px] font-extralight text-gray-700 max-md:w-full">
                <p className="text-justify">
                  Fabric is typically one of the largest cost components in Home
                  Textile and Apparel manufacturing. Yet many factories manage
                  consumption, marker planning, purchasing, roll selection and
                  cutting as separate activities. A good marker cannot recover
                  loss created by the wrong width, the wrong order combination,
                  poor roll-length matching or excess purchase quantity.
                </p>
                <p className="text-justify">
                  Madasky looks at the complete fabric decision chain. The
                  objective is to improve cost per good shipped unit, not simply
                  produce a better marker percentage.
                </p>
              </div>

              <div className="relative h-[20rem] w-[40%] overflow-hidden rounded-2xl max-md:h-[15rem] max-md:w-full">
                <Image
                  fill
                  src={`${BaseUrl().imgurl}${FABRIC_IMAGE}`}
                  alt={
                    imgAltText[0] ||
                    "Fabric rolls and cutting-room material optimization"
                  }
                  sizes="(max-width: 768px) 90vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* WHAT WE DO */}
          <section className="flex flex-col gap-6 border-b border-gray-300 py-10">
            <SectionHeading title="The Fabric Optimization Chain" />
            <ul className="ml-8 list-disc space-y-2 text-[18px] leading-relaxed text-gray-700 max-md:ml-5">
              <li>Digital consumption logic and validated pattern data</li>
              <li>Order, size-ratio and colour combination analysis</li>
              <li>Marker generation / selection and efficiency comparison</li>
              <li>Fabric-width and requirement optimization</li>
              <li>Purchase quantity alignment to actual planning logic</li>
              <li>Roll inventory visibility and roll-length matching</li>
              <li>Lay planning and exact roll selection</li>
              <li>Cut-plan sequencing</li>
              <li>Usable remnant capture and reuse</li>
              <li>Actual-vs-standard feedback for future planning</li>
            </ul>
          </section>

          {/* OUR APPROACH */}
          <section className="flex flex-col gap-6 border-b border-gray-300 py-10">
            <SectionHeading title="Pilot, Prove, Then Scale" />
            <ol className="ml-8 list-decimal space-y-3 text-[18px] leading-relaxed text-gray-700 max-md:ml-5">
              <li>Select a representative product/order sample.</li>
              <li>
                Agree baseline consumption, marker efficiency, end-bit/remnant
                and current planning time.
              </li>
              <li>Clean required pattern, order and roll data.</li>
              <li>
                Run optimized alternatives using the selected technology
                platform and Madasky manufacturing logic.
              </li>
              <li>Execute the pilot on real production where practical.</li>
              <li>Compare actual fabric used against the baseline.</li>
              <li>Identify which saving sources are repeatable.</li>
              <li>
                Define integration and scale-up only after results are
                validated.
              </li>
            </ol>
          </section>

          {/* ADDITIONAL SECTION */}
          <section className="flex flex-col gap-5 border-b border-gray-300 py-10">
            <SectionHeading title="Why CAD Alone May Not Solve the Problem" />
            <p className="text-justify text-[18px] leading-relaxed text-gray-700">
              Modern CAD is essential, but many losses occur outside the marker
              itself. Planners may still choose combinations manually.
              Purchasing may not align orders to optimized marker or roll logic.
              Roll selection may be based on availability rather than best fit.
              Remnants may exist physically but not be visible to the next
              planner. The opportunity therefore sits across information flow,
              not only nesting.
            </p>
          </section>

          {/* ADDITIONAL SECTION */}
          <section className="flex flex-col gap-5 border-b border-gray-300 py-10">
            <SectionHeading title="How AI and Optimization Help" />
            <p className="text-justify text-[18px] leading-relaxed text-gray-700">
              Optimization engines can test many feasible combinations of sizes,
              colours, widths, markers, rolls and lays far faster than manual
              planning. The technology becomes valuable when it helps answer
              specific questions: Which combination consumes less fabric? What
              roll length best fits this marker? Which rolls should be picked?
              Which remnant can be reused? What purchase quantity is actually
              required?
            </p>
          </section>

          {/* MEASURES */}
          <section className="flex flex-col gap-6 border-b border-gray-300 py-10">
            <SectionHeading title="What We Measure" />
            <ul className="ml-8 list-disc space-y-2 text-[18px] leading-relaxed text-gray-700 max-md:ml-5">
              <li>Fabric cost per good shipped unit</li>
              <li>Consumption variance</li>
              <li>Marker efficiency</li>
              <li>Fabric utilization</li>
              <li>Roll-end / remnant loss</li>
              <li>Weight or area waste where relevant</li>
              <li>Planning time</li>
              <li>Cut plan adherence</li>
              <li>Inventory accuracy and excess purchase quantity</li>
            </ul>
          </section>

          {/* WHY MADASKY */}
          <section className="flex flex-col gap-6 border-b border-gray-300 py-10">
            <SectionHeading title="Why Madasky" />
            <ul className="ml-8 list-disc space-y-3 text-[18px] leading-relaxed text-gray-700 max-md:ml-5">
              <li>
                We optimize the complete fabric decision chain rather than one
                software feature.
              </li>
              <li>Technology is selected to fit the manufacturing use case.</li>
              <li>Pilots establish evidence before claims are made.</li>
              <li>
                Operations and planning expertise help embed the new process
                into daily work.
              </li>
              <li>
                Home Textile and Apparel product complexity is considered in
                the design.
              </li>
            </ul>
          </section>

          {/* CTA */}
          <section className="flex flex-col items-start gap-5 py-10 max-md:items-center">
            <h2 className="text-4xl font-bold text-black max-md:text-center max-md:text-3xl">
              Is There a Material Opportunity Worth Pursuing?
            </h2>
            <p className="text-justify text-[18px] leading-relaxed text-gray-700">
              Share a representative order mix, fabric consumption data and
              cutting-planning process. We can determine whether the opportunity
              is large enough to justify a structured pilot.
            </p>
            <Button text="Discuss a Fabric Optimization Pilot" />
          </section>

          {/* Keep the same shared FAQ accordion component */}
          <FaqComponent faqs={faqs} />
        </div>
      </main>

      {hasMedia && (
        <div className="flex h-auto w-full flex-col items-center justify-center bg-[#bce1fd75] bg-[url('/assets/images/homeblogbg.png')] bg-cover bg-center p-6 py-[1vh]">
          {hasVideos && <VideoSliderWrapper videos={videoData.data} />}
          {hasVideos && hasBlogs && <div className="h-[2px] w-[90%] bg-gray-300" />}
          {hasBlogs && <BlogSliderWrapper blogs={blogData.data} />}
          {(hasVideos || hasBlogs) && hasGallery && (
            <div className="h-[2px] w-[90%] bg-gray-300" />
          )}
          {hasGallery && <GallerySliderWrapper gallery={galleryData.data} />}
        </div>
      )}

      <HelpYou />
      <Footer />
    </>
  );
}
