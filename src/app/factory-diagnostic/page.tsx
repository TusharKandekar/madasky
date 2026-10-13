import type { Metadata } from "next";

import ConsultingNavbar from "@/components/ConsultingNavbar";
import AboutVideo from "@/components/AboutVideo";
import FactoryDiagnosticSections from "@/components/FactoryDiagnosticSections";
import FAQ from "@/components/Faq";
import VideoSliderWrapper from "@/components/VideoSliderWrapper";
import BlogSliderWrapper from "@/components/BlogSliderWrapper";
import GallerySliderWrapper from "@/components/GallerySliderWrapper";
import HelpYou from "@/components/HelpYou";
import Footer from "@/components/Footer";
import BaseUrl from "@/components/BaseUrl";

import {
  fetchMetaDataByPageName,
  getDataByPageName,
} from "@/common/api";

import type { Blog, Gallery, Video } from "@/common/types";

const pageName = "Factory Diagnostic";

const fallbackMeta = {
  title: "Textile & Apparel Factory Diagnostic | Madasky",
  description:
    "Identify hidden capacity, productivity, fabric, planning, layout and digital opportunities in Home Textile and Apparel manufacturing.",
  keywords: "textile factory diagnostic",
};

const faqs = [
  {
    question: "How long does a diagnostic take?",
    answer:
      "The scope depends on factory size and problem. Focused diagnostics may be completed quickly, while multi-process factories may require a broader assessment.",
  },
  {
    question: "Do we need to share confidential data?",
    answer:
      "Only data necessary to establish the baseline and evaluate the agreed scope. Confidentiality can be covered contractually.",
  },
  {
    question: "Is a diagnostic compulsory before every project?",
    answer:
      "No. For clearly defined projects a direct scope may be appropriate. The diagnostic is most valuable when the problem or priority is uncertain.",
  },
  {
    question: "Will the diagnostic recommend technology?",
    answer:
      "Only if technology is justified by the business problem and process/data readiness.",
  },
];

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
        canonical: `${BaseUrl().mainurl}/factory-diagnostic`,
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
        canonical: `${BaseUrl().mainurl}/factory-diagnostic`,
      },
    };
  }
}

export default async function FactoryDiagnosticPage() {
  let blogs: Blog[] = [];
  let videos: Video[] = [];
  let gallery: Gallery[] = [];

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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BaseUrl().mainurl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Factory Diagnostic",
        item: `${BaseUrl().mainurl}/factory-diagnostic`,
      },
    ],
  };

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
        url="/factory-diagnostic"
        title="Factory Diagnostic"
        navItems={[
          {
            title: "Why Diagnose",
            link: "/factory-diagnostic#diagnostic-intro",
          },
          {
            title: "Diagnostic Areas",
            link: "/factory-diagnostic#diagnostic-areas",
          },
          {
            title: "Outputs",
            link: "/factory-diagnostic#diagnostic-outputs",
          },
          {
            title: "Operations Excellence",
            link: "/operations-excellence-consulting",
          },
        ]}
      />

      <AboutVideo
        vid1="/assets/videos/OPERATIONS-PRODUCTIVITY-IMPROVEMENT69.mp4"
        title="Factory Diagnostic"
        h1="Factory Performance Diagnostic"
        des="Find the constraint before you invest in the solution. A focused diagnostic identifies where capacity, cost, fabric, planning, manpower, flow or digital visibility is actually being lost - and which opportunities deserve action first."
        pageName={pageName}
      />

      <FactoryDiagnosticSections showValidatedProof={false} />

      <FAQ questions={faqs} />

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
