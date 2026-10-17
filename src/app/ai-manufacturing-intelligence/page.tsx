import type { Metadata } from "next";

import ConsultingNavbar from "@/components/ConsultingNavbar";
import AboutVideo from "@/components/AboutVideo";
import AIManufacturingSections from "@/components/AIManufacturingSections";
import FaqComponent from "@/components/FaqComponent";
import LegacyInternalLinks from "@/components/LegacyInternalLinks";
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

const pageName = "AI-Enabled Manufacturing Intelligence";

const fallbackMeta = {
  title: "AI in Textile & Apparel Manufacturing | Madasky",
  description:
    "AI-enabled fabric optimization, production planning, scheduling and MES for Home Textile and Apparel manufacturing, integrated by Madasky.",
  keywords:
    "AI in textile and apparel manufacturing, AI textile manufacturing, AI apparel manufacturing, manufacturing intelligence, Industry 4.0 textile, digital transformation textile industry",
};

const faqs = [
  {
    question: "Does Madasky build its own AI software?",
    answer:
      "Madasky is the manufacturing transformation and solution-integration partner. We work with appropriate specialist platforms and technology providers based on the client requirement rather than presenting third-party software as proprietary Madasky IP.",
  },
  {
    question: "Where can AI create value in textiles and apparel?",
    answer:
      "High-value areas include fabric utilization, marker and order combinations, production planning, dynamic scheduling, production visibility, exception alerts and selected predictive applications.",
  },
  {
    question: "Will AI replace planners or supervisors?",
    answer:
      "The goal is to improve the quality and speed of decisions, standardize knowledge and help people evaluate more options. Human accountability remains essential.",
  },
  {
    question: "Can these solutions integrate with existing ERP?",
    answer:
      "Usually yes, subject to the ERP, APIs/data access and required integration scope. Integration requirements are defined before implementation.",
  },
  {
    question: "Should we start with a full digital transformation?",
    answer:
      "Usually no. Start with one measurable business problem and scale after the use case is proven.",
  },
];

type ImageAltResponse = {
  data?: Array<{ webimage?: string; alt_text?: string }>;
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
        canonical: `${BaseUrl().mainurl}/ai-manufacturing-intelligence`,
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
        canonical: `${BaseUrl().mainurl}/ai-manufacturing-intelligence`,
      },
    };
  }
}

export default async function AIManufacturingIntelligencePage() {
  const digitalImageName = "Transform Your Production Floor with Digitalization1.png";
  let digitalImageAlt = "Digital manufacturing and production intelligence";
  let blogs: Blog[] = [];
  let videos: Video[] = [];
  let gallery: Gallery[] = [];

  try {
    const imageResponse = (await getImageAltText([
      digitalImageName,
    ])) as ImageAltResponse | null;

    const digitalImage = (imageResponse?.data || []).find(
      (image) => image.webimage === digitalImageName
    );

    digitalImageAlt = digitalImage?.alt_text || digitalImageAlt;
  } catch {
    // Keep useful fallback alt text if the image metadata API is unavailable.
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <ConsultingNavbar
        url="/ai-manufacturing-intelligence"
        title={pageName}
        navItems={[
          {
            title: "Intelligence Areas",
            link: "/ai-manufacturing-intelligence#intelligence-areas",
          },
          {
            title: "Implementation",
            link: "/ai-manufacturing-intelligence#implementation",
          },
          {
            title: "Where AI Fits",
            link: "/ai-manufacturing-intelligence#ai-fit",
          },
          {
            title: "Operations Excellence",
            link: "/operations-excellence-consulting",
          },
        ]}
      />

      <AboutVideo
        vid1="/assets/videos/Digital Tansformation.mp4"
        title={pageName}
        h1="Use AI, optimization and real-time data where they improve manufacturing decisions - not because AI is fashionable."
        des="Madasky focuses on high-value decisions in fabric utilization, production planning, scheduling and shopfloor visibility."
        pageName={pageName}
      />

      <AIManufacturingSections
        digitalImageUrl={`${BaseUrl().imgurl}${digitalImageName}`}
        digitalImageAlt={digitalImageAlt}
      />

      <LegacyInternalLinks
        title="Explore Related Services"
        links={[
          { label: 'Fabric & Raw Material Optimization', href: '/fabric-raw-material-optimization' },
          { label: 'Production Planning & Scheduling', href: '/production-planning-scheduling' },
          { label: 'Digital Factory & MES', href: '/digital-factory-mes' },
          { label: 'Operations Excellence', href: '/operations-excellence-consulting' },
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
