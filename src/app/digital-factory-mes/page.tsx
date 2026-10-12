import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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

const PAGE_NAME = "Digital Factory & MES";
const PAGE_PATH = "/digital-factory-mes";
const PAGE_TITLE = "Digital Factory & MES";
const SEO_TITLE = "MES for Textile & Apparel Manufacturing | Madasky";
const META_DESCRIPTION =
  "MES and Digital Factory implementation for Home Textile and Apparel: real-time production, downtime, quality, material, WIP and delivery visibility.";

// Update these filenames if your CMS or public assets use different names.
const FACTORY_IMAGE = "Digital Factory & MES.png";
const HERO_VIDEO = "/assets/videos/Digital Factory & MES.mp4";

export async function generateMetadata(): Promise<Metadata> {
  try {
    const pageMetadata = await fetchMetaDataByPageName({ pageName: PAGE_NAME });
    const baseUrl = BaseUrl().mainurl.replace(/\/+$/, "");

    return {
      title: pageMetadata?.data?.meta_title || SEO_TITLE,
      description: pageMetadata?.data?.meta_desc || META_DESCRIPTION,
      keywords:
        pageMetadata?.data?.meta_keyword ||
        "MES for textile and apparel manufacturing, digital factory textile, Industry 4.0 textile, shopfloor digitalization, production monitoring apparel, IoT textile manufacturing",
      authors: {
        name: pageMetadata?.data?.author || "Madasky",
        url: "https://madasky.com",
      },
      alternates: {
        canonical: `${baseUrl}${PAGE_PATH}`,
      },
      openGraph: {
        title: pageMetadata?.data?.meta_title || SEO_TITLE,
        description: pageMetadata?.data?.meta_desc || META_DESCRIPTION,
        url: `${baseUrl}${PAGE_PATH}`,
        type: "website",
      },
    };
  } catch {
    const baseUrl = BaseUrl().mainurl.replace(/\/+$/, "");
    return {
      title: SEO_TITLE,
      description: META_DESCRIPTION,
      keywords:
        "MES for textile and apparel manufacturing, digital factory textile, Industry 4.0 textile, shopfloor digitalization, production monitoring apparel, IoT textile manufacturing",
      alternates: {
        canonical: `${baseUrl}${PAGE_PATH}`,
      },
      openGraph: {
        title: SEO_TITLE,
        description: META_DESCRIPTION,
        url: `${baseUrl}${PAGE_PATH}`,
        type: "website",
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

export default async function DigitalFactoryMESPage() {
  let blogData: any = { data: [] };
  let videoData: any = { data: [] };
  let galleryData: any = { data: [] };
  let imgAltText: string[] = [];

  // Load optional CMS media without preventing the page content from rendering.
  try {
    const imageData = await getImageAltText([FACTORY_IMAGE]);
    const altText = await getImageData(imageData);
    if (Array.isArray(altText)) imgAltText = altText;
  } catch (error) {
    console.error("Unable to load Digital Factory image alt text:", error);
  }

  try {
    [blogData, videoData, galleryData] = await Promise.all([
      getDataByPageName([PAGE_NAME, "blogs"]),
      getDataByPageName([PAGE_NAME, "videos"]),
      getDataByPageName([PAGE_NAME, "gallery"]),
    ]);
  } catch (error) {
    console.error("Unable to load Digital Factory & MES page media:", error);
  }

  const faqs: Faq[] = [
    {
      question: "What is the difference between ERP and MES?",
      answer:
        "ERP typically manages business transactions and enterprise planning; MES focuses on execution and real-time shopfloor status. The exact division depends on the client’s systems.",
    },
    {
      question: "Can MES connect to machines?",
      answer:
        "Yes, where machine interfaces, sensors or gateways support connectivity. Manual, barcode or IoT data capture can also be used where direct machine integration is not practical.",
    },
    {
      question: "Should the whole factory be digitized at once?",
      answer:
        "Usually no. Madasky recommends a contained pilot with measurable decisions and adoption before scaling.",
    },
    {
      question: "Can Madasky use our existing MES platform?",
      answer:
        "Yes. Madasky can work with an existing client-selected platform if it can meet the manufacturing requirement.",
    },
    {
      question: "How is ROI measured?",
      answer:
        "ROI should connect to specific use cases such as productivity, downtime, quality, manpower, WIP, decision time or delivery improvement rather than only number of screens deployed.",
    },
  ];

  const hasVideos = Array.isArray(videoData?.data) && videoData.data.length > 0;
  const hasBlogs = Array.isArray(blogData?.data) && blogData.data.length > 0;
  const hasGallery = Array.isArray(galleryData?.data) && galleryData.data.length > 0;
  const hasMedia = hasVideos || hasBlogs || hasGallery;

  return (
    <>
      <ConsultingNavbar2 url={PAGE_PATH} title={PAGE_TITLE} />

      <AboutVideo
        vid1={HERO_VIDEO}
        title={PAGE_TITLE}
        des="Turn shopfloor data into faster action. Madasky helps manufacturers implement real-time production visibility, MES, IoT and digital operating routines around the decisions plant teams need to make during the shift."
        h1={PAGE_TITLE}
      />

      <main className="mx-auto w-[80vw] bg-white max-md:w-[90vw]">
        <div className="my-20 w-full">
          {/* INTRO */}
          <section className="flex flex-col gap-8 border-b border-gray-300 pb-10">
            <h2 className="text-4xl font-bold text-black max-md:text-3xl">
              If You See the Problem Tomorrow, You Cannot Recover Today
            </h2>

            <div className="flex items-center gap-10 max-md:flex-col">
              <div className="flex w-[60%] flex-col gap-4 text-[18px] font-extralight text-gray-700 max-md:w-full">
                <p className="text-justify">
                  ERP remains critical for business transactions, but plant leaders often need a different level of operational visibility. They need to know whether the shift is on plan, where the gap is developing, why a machine or line is down, whether quality is drifting, whether material is blocking production and which order is at risk now.
                </p>
                <p className="text-justify">
                  Madasky designs the decision process first and the dashboard second. We define data ownership, reason codes, alerts, escalation and management routines, then configure an appropriate MES/IoT platform to support them.
                </p>
              </div>

              <div className="relative h-[20rem] w-[40%] overflow-hidden rounded-2xl max-md:h-[15rem] max-md:w-full">
                <Image
                  fill
                  src={`${BaseUrl().imgurl}${FACTORY_IMAGE}`}
                  alt={
                    imgAltText[0] ||
                    "Digital factory dashboard and manufacturing shopfloor visibility"
                  }
                  sizes="(max-width: 768px) 90vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* WHAT WE DO */}
          <section className="flex flex-col gap-6 border-b border-gray-300 py-10">
            <SectionHeading title="Typical Digital Factory Scope" />
            <ul className="ml-8 list-disc space-y-2 text-[18px] leading-relaxed text-gray-700 max-md:ml-5">
              <li>Target vs actual production by line, process and order</li>
              <li>Downtime and reason-code capture</li>
              <li>Quality defects and rework</li>
              <li>WIP and process status</li>
              <li>Material shortage and readiness</li>
              <li>Maintenance alerts and machine status</li>
              <li>Order progress and delivery risk</li>
              <li>Supervisor, plant and management dashboards</li>
              <li>Digital work instructions where relevant</li>
              <li>Machine, sensor, barcode and RFID integration as required</li>
              <li>ERP and planning-system integration</li>
              <li>Analytics and selected AI use cases after data maturity improves</li>
            </ul>
          </section>

          {/* OUR APPROACH */}
          <section className="flex flex-col gap-6 border-b border-gray-300 py-10">
            <SectionHeading title="Pilot Before Plant-Wide Rollout" />
            <ol className="ml-8 list-decimal space-y-3 text-[18px] leading-relaxed text-gray-700 max-md:ml-5">
              <li>Define the decisions the system must improve.</li>
              <li>Select the pilot area and establish the KPI baseline.</li>
              <li>Standardize process and data definitions.</li>
              <li>Configure data capture and integrations.</li>
              <li>Build role-based dashboards and alerts.</li>
              <li>Train users and go live.</li>
              <li>Validate data accuracy and response behaviour.</li>
              <li>Measure whether decisions happen faster and performance improves.</li>
              <li>Scale to other departments or plants only after adoption is proven.</li>
            </ol>
          </section>

          {/* ADDITIONAL SECTION */}
          <section className="flex flex-col gap-6 border-b border-gray-300 py-10">
            <SectionHeading title="The Five Screens a Plant Head Should See" />
            <div className="grid grid-cols-5 gap-4 max-lg:grid-cols-3 max-md:grid-cols-1">
              {[
                "Output vs target",
                "Downtime and why",
                "Quality and rework",
                "Material shortage or WIP risk",
                "Orders at delivery risk",
              ].map((screen, index) => (
                <div
                  key={screen}
                  className="flex min-h-32 flex-col justify-between border-t-4 border-[#004A92] bg-gray-50 p-5"
                >
                  <span className="text-sm font-semibold text-[#D72B0D]">
                    SCREEN 0{index + 1}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-[#0E2C53]">{screen}</h3>
                </div>
              ))}
            </div>
            <p className="text-justify text-[18px] leading-relaxed text-gray-700">
              The dashboard should not display everything the system can collect. It should make deviation visible and trigger action.
            </p>
          </section>

          {/* ADDITIONAL SECTION */}
          <section className="flex flex-col gap-5 border-b border-gray-300 py-10">
            <SectionHeading title="MES Is Not a Substitute for Process Discipline" />
            <p className="text-justify text-[18px] leading-relaxed text-gray-700">
              If reason codes are inconsistent, supervisors do not respond to alerts, targets are unreliable or master data changes without control, digitalization can simply make poor processes more visible. Madasky combines MES implementation with operating routines so the information changes behaviour.
            </p>
          </section>

          {/* WHY MADASKY */}
          <section className="flex flex-col gap-6 border-b border-gray-300 py-10">
            <SectionHeading title="Why Madasky" />
            <ul className="ml-8 list-disc space-y-3 text-[18px] leading-relaxed text-gray-700 max-md:ml-5">
              <li>Manufacturing-led requirements before software configuration.</li>
              <li>Existing MES tie-ups and technology relationships can be used without making the Madasky brand subordinate to a platform.</li>
              <li>Operations Excellence capability ensures digital visibility is connected to action.</li>
              <li>Phased implementation reduces adoption and integration risk.</li>
              <li>Architecture can remain flexible if the client already has ERP, planning or machine systems.</li>
            </ul>
          </section>

          {/* CTA */}
          <section className="flex flex-col items-start gap-5 py-10 max-md:items-center">
            <h2 className="text-4xl font-bold text-black max-md:text-center max-md:text-3xl">
              Start with the Few Decisions That Need Real-Time Visibility
            </h2>
            <p className="text-justify text-[18px] leading-relaxed text-gray-700">
              A Digital Factory Diagnostic can map current data, decision delays, integrations and the pilot use case with the strongest business case.
            </p>
            <Button text="Book a Digital Factory Diagnostic" />
          </section>

          {/* RELATED SERVICE LINKS */}
          <section className="flex flex-col gap-5 border-b border-gray-300 pb-10">
            <SectionHeading title="Related Manufacturing Capabilities" />
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-[18px] font-semibold">
              <Link
                href="/ai-enabled-manufacturing-intelligence"
                className="text-[#004A92] transition-colors hover:text-[#D72B0D]"
              >
                AI-Enabled Manufacturing Intelligence
              </Link>
              <Link
                href="/production-planning-scheduling"
                className="text-[#004A92] transition-colors hover:text-[#D72B0D]"
              >
                Production Planning &amp; Scheduling
              </Link>
              <Link
                href="/operations-excellence-consulting"
                className="text-[#004A92] transition-colors hover:text-[#D72B0D]"
              >
                Operations Excellence
              </Link>
            </div>
          </section>

          {/* Existing FAQ accordion */}
          <div className="pt-10">
            <FaqComponent faqs={faqs} />
          </div>
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
