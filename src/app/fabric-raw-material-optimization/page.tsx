import type { Metadata } from "next";
import FabricSections from "@/components/FabricOptimizationSections";
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
        title={null}
        des=" Madasky connects consumption, pattern and marker logic, fabric requirement, order combination, roll selection, lay planning, cutting and remnant visibility into one optimization approach."
        h1={PAGE_TITLE}
        h2="Reduce fabric loss by improving the decisions made before, during and after cutting."
      />

      <FabricSections imageAlt={imgAltText[0]} />
      <div className="mx-auto max-w-6xl px-6 pb-20 sm:px-8 lg:px-10">
        <FaqComponent faqs={faqs} />
      </div>
 <LegacyInternalLinks
        title="Explore Related Services"
        links={[
          { label: 'AI-Enabled Manufacturing Intelligence', href: '/ai-manufacturing-intelligence' },
          { label: 'Production Planning & Scheduling', href: '/production-planning-scheduling' },
          { label: 'Home Textiles', href: '/industries/home-textiles' },
          { label: 'Apparel', href: '/industries/apparel' },
        ]}
      />
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
