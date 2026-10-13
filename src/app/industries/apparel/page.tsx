import type { Metadata } from "next";

import ConsultingNavbar from "@/components/ConsultingNavbar";
import AboutVideo from "@/components/AboutVideo";
import ApparelIndustrySections from "@/components/ApparelIndustrySections";
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
  getImageAltText,
} from "@/common/api";

import type { Blog, Gallery, Video } from "@/common/types";

const pageName = "Apparel";

const fallbackMeta = {
  title: "Apparel Manufacturing Consultants India | Madasky",
  description:
    "Apparel manufacturing consulting for factory setup, productivity, cutting, planning, MES, workforce and AI-enabled optimization.",
  keywords:
    "apparel manufacturing consultants India, apparel factory setup, garment manufacturing consulting, apparel production planning, apparel productivity improvement, MES apparel, apparel workforce readiness",
};

const faqs = [
  {
    question: "Can Madasky help with garment factory layout?",
    answer:
      "Yes. Layout and material flow can be handled within Turnkey Factory Projects or as a focused supporting assignment.",
  },
  {
    question: "Can fabric optimization work with our current CAD?",
    answer:
      "Often yes; the optimization scope can sit around or integrate with the current CAD depending on requirements.",
  },
  {
    question: "Do you provide MES for apparel?",
    answer:
      "Madasky can define requirements and implement an appropriate MES/digital shopfloor platform through its solution ecosystem.",
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
        canonical: `${BaseUrl().mainurl}/industries/apparel`,
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
        canonical: `${BaseUrl().mainurl}/industries/apparel`,
      },
    };
  }
}

export default async function ApparelIndustryPage() {
  const apparelImageName = "360.png";
  let apparelImageAlt = "Apparel manufacturing and fashion production";
  let blogs: Blog[] = [];
  let videos: Video[] = [];
  let gallery: Gallery[] = [];

  try {
    const imageResponse = (await getImageAltText([
      apparelImageName,
    ])) as ImageAltResponse | null;

    const apparelImage = (imageResponse?.data || []).find(
      (image) => image.webimage === apparelImageName
    );

    apparelImageAlt = apparelImage?.alt_text || apparelImageAlt;
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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${BaseUrl().mainurl}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Industries",
        item: `${BaseUrl().mainurl}/manufacturing-consulting`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Apparel",
        item: `${BaseUrl().mainurl}/industries/apparel`,
      },
    ],
  };

  return (
    <>
      <ConsultingNavbar
        url="/industries/apparel"
        title={pageName}
        navItems={[
          {
            title: "Manufacturing Context",
            link: "/industries/apparel#manufacturing-context",
          },
          {
            title: "Challenges",
            link: "/industries/apparel#apparel-challenges",
          },
          {
            title: "Solutions",
            link: "/industries/apparel#apparel-solutions",
          },
          {
            title: "Operations Excellence",
            link: "/operations-excellence-consulting",
          },
        ]}
      />

      <AboutVideo
        vid1="/assets/videos/319.mp4"
        title="Apparel"
        h1="Manufacturing Transformation for Apparel"
        des="Improve the complete Apparel operating system - from cutting and sewing to planning, digital visibility, workforce and factory projects."
        pageName={pageName}
      />

      <ApparelIndustrySections
        apparelImageUrl={`${BaseUrl().imgurl}${apparelImageName}`}
        apparelImageAlt={apparelImageAlt}
      />

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
