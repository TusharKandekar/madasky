import type { Metadata } from "next";

import ConsultingNavbar from "@/components/ConsultingNavbar";
import AboutVideo from "@/components/AboutVideo";
import OperationsExcellenceSections from "@/components/OperationsExcellenceSections";
import LegacyInternalLinks from "@/components/LegacyInternalLinks";
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

const pageName = "Operations Excellence";

const fallbackMeta = {
  title: "Operations Excellence for Textile & Apparel | Madasky",
  description:
    "Improve productivity, OTIF, capacity, manpower, WIP, lead time and cost in Home Textile and Apparel factories with implementation-led operations consulting.",
  keywords:
    "operations excellence textile apparel, manufacturing productivity improvement, textile productivity consultant, apparel efficiency improvement, OTIF improvement, WIP reduction",
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
        canonical: `${BaseUrl().mainurl}/operations-excellence-consulting`,
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
        canonical: `${BaseUrl().mainurl}/operations-excellence-consulting`,
      },
    };
  }
}

const faqs = [
  {
    question: "What is Operations Excellence?",
    answer:
      "Operations Excellence is the disciplined improvement of processes, capacity, people, planning, quality and management routines so the factory produces more reliable output at lower loss.",
  },
  {
    question: "How quickly can results be seen?",
    answer:
      "Timing depends on the constraint. A diagnostic should identify priority opportunities quickly; implementation benefits are then tracked against an agreed baseline rather than promised in advance.",
  },
  {
    question: "Does Operations Excellence require new machinery?",
    answer:
      "Not necessarily. Many losses come from imbalance, planning, flow, downtime, changeovers, quality and operating routines. Capex should follow a verified need.",
  },
  {
    question: "Can Madasky work alongside our internal IE or Lean team?",
    answer:
      "Yes. Madasky can complement internal capability by providing independent diagnosis, cross-functional coordination and implementation support.",
  },
  {
    question: "How do you measure success?",
    answer:
      "KPIs are agreed at the beginning and may include output, capacity utilization, manpower productivity, OTIF, WIP, lead time, quality, downtime and financial impact.",
  },
];

type ImageAltResponse = {
  data?: Array<{ webimage?: string; alt_text?: string }>;
};

export default async function OperationsExcellencePage() {
  let productionImageAlt = "Operations excellence on the manufacturing floor";
  let blogs: Blog[] = [];
  let videos: Video[] = [];
  let gallery: Gallery[] = [];

  try {
    const imageResponse = (await getImageAltText([
      "Operations excellence.png",
    ])) as ImageAltResponse | null;

    const image = (imageResponse?.data || []).find(
      (item) => item.webimage === "Operations excellence.png"
    );
    productionImageAlt = image?.alt_text || productionImageAlt;
  } catch {
    // Keep useful fallback alt text when image metadata is unavailable.
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

  return (
    <>
      <ConsultingNavbar
        url="/operations-excellence-consulting"
        title={pageName}
        navItems={[
          {
            title: "Productivity & Efficiency Improvement",
            link: "/productivity-and-efficiency-improvement",
          },
          { title: "Implementation Support", link: "/implementation-support" },
          {
            title: "Delivery Performance & Lead Time Reduction",
            link: "/delivery-performance-and-lead-time-reduction-program",
          },
          {
            title: "Sampling Lead Time Reduction",
            link: "/sampling-lead-time-reduction",
          },
        ]}
      />

      <AboutVideo
        vid1="/assets/videos/OPERATIONS-PRODUCTIVITY-IMPROVEMENT69.mp4"
        title="Operations Excellence"
        h1="Improve the performance of the factory you already own."
        des="Madasky helps Home Textile and Apparel manufacturers increase output, improve OTIF, reduce WIP and lead time, strengthen manpower productivity and remove operational losses - with implementation on the factory floor."
        pageName={pageName}
      />

      <OperationsExcellenceSections
        productionImageUrl={`${BaseUrl().imgurl}Operations excellence.png`}
        productionImageAlt={productionImageAlt}
      />

      <LegacyInternalLinks
        title="Explore Related Services"
        links={[
          { label: "Factory Diagnostic", href: "/factory-diagnostic" },
          {
            label: "Production Planning & Scheduling",
            href: "/production-planning-scheduling",
          },
          { label: "Digital Factory & MES", href: "/digital-factory-mes" },
          { label: "Plant Layout", href: "/plant-layout-consulting" },
          { label: "Home Textiles", href: "/industries/home-textiles" },
          { label: "Apparel", href: "/industries/apparel" },
        ]}
      />

      <FaqComponent faqs={faqs} />

      {(videos.length > 0 || blogs.length > 0 || gallery.length > 0) && (
        <div className="flex h-auto w-full flex-col items-center justify-center bg-[#bce1fd75] bg-[url('/assets/images/homeblogbg.png')] bg-cover bg-center bg-no-repeat p-6 py-[1vh]">
          {videos.length > 0 && (
            <>
              <VideoSliderWrapper videos={videos} />
              {(blogs.length > 0 || gallery.length > 0) && (
                <div className="h-[2px] w-[90%] bg-gray-300" />
              )}
            </>
          )}

          {blogs.length > 0 && (
            <>
              <BlogSliderWrapper blogs={blogs} />
              {gallery.length > 0 && (
                <div className="h-[2px] w-[90%] bg-gray-300" />
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
