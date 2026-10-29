import type { Metadata } from "next";
import FabricSections from "@/components/FabricOptimizationSections";

import ConsultingNavbar2 from "@/components/ConsultingNavbar2";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import HelpYou from "@/components/HelpYou";
import GallerySliderWrapper from "@/components/GallerySliderWrapper";
import BlogSliderWrapper from "@/components/BlogSliderWrapper";
import VideoSliderWrapper from "@/components/VideoSliderWrapper";
import FaqComponent from "@/components/FaqComponent";
import BaseUrl from "@/components/BaseUrl";
import LegacyInternalLinks from "@/components/LegacyInternalLinks";

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
const FABRIC_IMAGE = "/assets/images/fabric-raw-material-optimization.png";
// Make sure this video exists in public/assets/videos. Update the filename if needed.
const HERO_VIDEO = "/assets/videos/364.mp4";

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
        canonical: `${BaseUrl().mainurl.replace(/\/$/, "")}/${PAGE_PATH}`,
      },
    };
  } catch {
    return {
      title: `${PAGE_TITLE} | Madasky`,
      description: META_DESCRIPTION,
      keywords:
        "fabric optimization apparel home textiles, fabric waste reduction, marker optimization, cutting room optimization, fabric consumption optimization, AI fabric optimization",
      alternates: {
        canonical: `${BaseUrl().mainurl.replace(/\/$/, "")}/${PAGE_PATH}`,
      },
    };
  }
}

type Faq = {
  question: string;
  answer: string;
};

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

      {/* Page-specific hero: keep the video and H1 here; place the approved copy UNDER the hero. */}
      <section className="relative isolate mt-20 flex min-h-[420px] items-end overflow-hidden bg-[#0E2C53] sm:min-h-[480px] lg:min-h-[560px]">
        <video
          src={HERO_VIDEO}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#07172d]/95 via-[#0b2748]/80 to-[#0b2748]/35" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-14 pt-24 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24">
          <div className="mb-6 h-1 w-16 rounded-full bg-[#e63818]" aria-hidden="true" />
          <h1 className="max-w-4xl font-baskervville text-[clamp(2.35rem,5vw,4.5rem)] font-bold leading-[1.12] tracking-tight text-white">
            Fabric &amp; Raw Material Optimization
          </h1>
        </div>
      </section>
      <Contact />

      {/* Both paragraphs are reproduced verbatim from the approved Word document. */}
      <section className="relative overflow-hidden border-b border-[#e1e8ef] bg-gradient-to-br from-[#f5f8fc] via-white to-[#edf3f9] py-12 sm:py-16 lg:py-20">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border-[40px] border-[#0E2C53]/[0.035]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="max-w-5xl border-l-4 border-[#dc3216] pl-5 sm:pl-8">
            <p className="font-baskervville text-[clamp(1.5rem,2.8vw,2.35rem)] font-semibold leading-snug text-[#0E2C53]">
              Reduce fabric loss by improving the decisions made before, during and after cutting.
            </p>
            <p className="mt-6 max-w-4xl text-[17px] leading-[1.85] text-[#42536a] sm:text-lg">
              Madasky connects consumption, pattern/marker logic, fabric requirement, order combination, roll selection, lay planning, cutting and remnant visibility into one optimization approach.
            </p>
          </div>
        </div>
      </section>

      <FabricSections imageAlt={imgAltText[0]} />
      <LegacyInternalLinks
        title="Explore Related Services"
        links={[
          { label: "AI-Enabled Manufacturing Intelligence", href: "/ai-manufacturing-intelligence" },
          { label: "Production Planning & Scheduling", href: "/production-planning-scheduling" },
          { label: "Home Textiles", href: "/industries/home-textiles" },
          { label: "Apparel", href: "/industries/apparel" },
        ]}
      />
      <div className="mx-auto max-w-6xl px-6 pb-20 sm:px-8 lg:px-10">
        <FaqComponent faqs={faqs} />
      </div>
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
