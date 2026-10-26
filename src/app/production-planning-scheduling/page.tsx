import type { Metadata } from "next";

import ConsultingNavbar from "@/components/ConsultingNavbar";
import AboutVideo from "@/components/AboutVideo";
import ProductionPlanningSections from "@/components/ProductionPlanningSections";
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

const pageName = "Production Planning & Scheduling";

const fallbackMeta = {
  title: "Apparel & Textile Production Planning | Madasky",
  description:
    "Improve capacity planning, line loading, scheduling and OTIF with AI-enabled production planning for Apparel, Home Textile and Textile manufacturing.",
  keywords:
    "apparel production planning and scheduling, textile production planning, APS apparel, capacity planning garment factory, finite capacity scheduling, OTIF improvement",
};

const faqs = [
  {
    question: "How is advanced planning different from ERP planning?",
    answer:
      "ERP may hold orders, BOMs and transactions, while advanced planning focuses on feasible allocation and sequencing against real capacity and constraints. The exact boundary depends on the systems already in place.",
  },
  {
    question: "Do we need new planning software?",
    answer:
      "Not always. Madasky first determines whether the problem is process, data, capacity logic or tool limitation. Technology is introduced when it materially improves the decision.",
  },
  {
    question: "What are the minimum data requirements?",
    answer:
      "Orders, due dates, routings/processes, capacities/calendars, material status and key constraints are typical starting points.",
  },
  {
    question: "Can planning improve OTIF?",
    answer:
      "Planning alone cannot guarantee OTIF, but it can identify risk earlier, improve feasible commitments and coordinate capacity/material decisions before delays reach dispatch.",
  },
  {
    question: "Will planners still be able to override the system?",
    answer:
      "Yes. Good planning tools support planner judgement while making the consequences of overrides visible.",
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
        canonical: `${BaseUrl().mainurl}/production-planning-scheduling`,
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
        canonical: `${BaseUrl().mainurl}/production-planning-scheduling`,
      },
    };
  }
}

export default async function ProductionPlanningSchedulingPage() {
  const planningImageName = "Transform Your Production Floor with Digitalization1.png";
  let planningImageAlt = "Production planning and manufacturing control visibility";
  let blogs: Blog[] = [];
  let videos: Video[] = [];
  let gallery: Gallery[] = [];

  try {
    const imageResponse = (await getImageAltText([
      planningImageName,
    ])) as ImageAltResponse | null;

    const planningImage = (imageResponse?.data || []).find(
      (image) => image.webimage === planningImageName
    );

    planningImageAlt = planningImage?.alt_text || planningImageAlt;
  } catch {
    // Keep fallback alt text if image metadata is temporarily unavailable.
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
        url="/production-planning-scheduling"
        title={pageName}
        navItems={[
          {
            title: "Planning Capabilities",
            link: "/production-planning-scheduling#planning-capabilities",
          },
          {
            title: "Planning Method",
            link: "/production-planning-scheduling#planning-method",
          },
          {
            title: "Planning KPIs",
            link: "/production-planning-scheduling#planning-kpis",
          },
          {
            title: "Operations Excellence",
            link: "/operations-excellence-consulting",
          },
        ]}
      />

      <AboutVideo
        vid1="/assets/videos/OPERATIONS-PRODUCTIVITY-IMPROVEMENT69.mp4"
        title={pageName}
        h1="Create plans the factory can actually execute."
        des="Madasky helps Home Textile and Apparel manufacturers move from spreadsheet-driven firefighting toward constraint-aware planning, capacity visibility and dynamic scheduling."
        pageName={pageName}
      />

      <ProductionPlanningSections
        planningImageUrl={`${BaseUrl().imgurl}${planningImageName}`}
        planningImageAlt={planningImageAlt}
      />

      <LegacyInternalLinks
        title="Explore Related Services"
        links={[
          { label: 'AI-Enabled Manufacturing Intelligence', href: '/ai-manufacturing-intelligence' },
          { label: 'Digital Factory & MES', href: '/digital-factory-mes' },
          { label: 'Operations Excellence', href: '/operations-excellence-consulting' },
          { label: 'Apparel', href: '/industries/apparel' },
          { label: 'Home Textiles', href: '/industries/home-textiles' },
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
