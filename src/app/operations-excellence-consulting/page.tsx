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
  let meta;
  try {
    const response = await fetchMetaDataByPageName({ pageName });
    meta = response?.data;
  } catch {
    // Use approved copy when the CMS is unavailable.
  }

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

export default async function OperationsExcellencePage() {
  let productionImageAlt = "Operations excellence on the manufacturing floor";
  let blogs: Blog[] = [];
  let videos: Video[] = [];
  let gallery: Gallery[] = [];

  try {
    const response = await getImageAltText(["factory-floor.png"]);
    const imageData = Array.isArray(response?.data) ? response.data : [];
    const match = imageData.find(
      (item: { webimage?: string; alt_text?: string }) =>
        item.webimage === "factory-floor.png"
    );
    productionImageAlt = match?.alt_text || productionImageAlt;
  } catch {
    // Keep fallback alt text if image metadata is not available.
  }

  // CMS failures must not block the page itself. Keep each content type independent.
  const [blogResult, videoResult, galleryResult] = await Promise.allSettled([
    getDataByPageName([pageName, "blogs"]),
    getDataByPageName([pageName, "videos"]),
    getDataByPageName([pageName, "gallery"]),
  ]);

  if (blogResult.status === "fulfilled" && Array.isArray(blogResult.value?.data)) {
    blogs = blogResult.value.data;
  }
  if (videoResult.status === "fulfilled" && Array.isArray(videoResult.value?.data)) {
    videos = videoResult.value.data;
  }
  if (galleryResult.status === "fulfilled" && Array.isArray(galleryResult.value?.data)) {
    gallery = galleryResult.value.data;
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
        title=""
        h1="Operations Excellence"
        h2="Improve the performance of the factory you already own."
        des="Madasky helps Home Textile and Apparel manufacturers increase output, improve OTIF, reduce WIP and lead time, strengthen manpower productivity and remove operational losses - with implementation on the factory floor."
      />

      <OperationsExcellenceSections
        productionImageUrl={`${BaseUrl().imgurl}factory-floor.png`}
        productionImageAlt={productionImageAlt}
      />

      <LegacyInternalLinks
        title="Explore Related Services"
        links={[
          { label: "Factory Diagnostic", href: "/factory-diagnostic" },
          { label: "Production Planning & Scheduling", href: "/production-planning-scheduling" },
          { label: "Digital Factory & MES", href: "/digital-factory-mes" },
          { label: "Plant Layout", href: "/plant-layout-consulting" },
          { label: "Home Textiles", href: "/industries/home-textiles" },
          { label: "Apparel", href: "/industries/apparel" },
        ]}
      />
      <FaqComponent faqs={faqs} />

      {(blogs.length > 0 || videos.length > 0 || gallery.length > 0) && (
        <div className="flex h-auto flex-col items-center justify-center bg-[#bce1fd75] bg-[url('/assets/images/homeblogbg.png')] bg-cover bg-center bg-no-repeat px-6 py-8">
          {videos.length > 0 && <VideoSliderWrapper videos={videos} />}
          {blogs.length > 0 && <BlogSliderWrapper blogs={blogs} />}
          {gallery.length > 0 && <GallerySliderWrapper gallery={gallery} />}
        </div>
      )}

      <HelpYou />
      <Footer />
    </>
  );
}
