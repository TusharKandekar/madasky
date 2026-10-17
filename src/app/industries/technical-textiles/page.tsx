import type { Metadata } from "next";

import ConsultingNavbar from "@/components/ConsultingNavbar";
import AboutVideo from "@/components/AboutVideo";
import TechnicalTextilesIndustrySections from "@/components/TechnicalTextilesIndustrySections";
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

const pageName = "Technical Textiles";

const fallbackMeta = {
  title: "Technical Textile Factory Consultants India | Madasky",
  description:
    "Technical textile consulting for factory setup, project management, capacity planning, layout, operations excellence, automation and MES.",
  keywords:
    "technical textile consultants India, technical textile factory setup, technical textile project management, technical textile capacity planning, technical textile layout, technical textile operations excellence, technical textile automation, technical textile MES",
};

const faqs = [
  {
    question: "Do you cover all Technical Textile segments?",
    answer:
      "No single consultant can credibly claim equal process depth across all Technical Textile categories. Madasky confirms scope and specialist requirements before engagement.",
  },
  {
    question:
      "Can you manage the overall project if specialist technology comes from another supplier?",
    answer:
      "Yes. Madasky can manage interfaces, project coordination and manufacturing integration while the specialist supplier remains accountable for its process technology.",
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
        canonical: `${BaseUrl().mainurl}/industries/technical-textiles`,
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
        canonical: `${BaseUrl().mainurl}/industries/technical-textiles`,
      },
    };
  }
}

export default async function TechnicalTextilesIndustryPage() {
  const industryImageName = "Industryhome.jpg";
  let industryImageAlt = "Technical textile manufacturing and factory operations";
  let blogs: Blog[] = [];
  let videos: Video[] = [];
  let gallery: Gallery[] = [];

  try {
    const imageResponse = (await getImageAltText([
      industryImageName,
    ])) as ImageAltResponse | null;

    const industryImage = (imageResponse?.data || []).find(
      (image) => image.webimage === industryImageName
    );

    industryImageAlt = industryImage?.alt_text || industryImageAlt;
  } catch {
    // Keep a useful fallback alt if the image metadata API is unavailable.
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
        name: "Industries",
        item: `${BaseUrl().mainurl}/manufacturing-consulting`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Technical Textiles",
        item: `${BaseUrl().mainurl}/industries/technical-textiles`,
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
        url="/industries/technical-textiles"
        title="Explore Related Services"
        navItems={[
          {
            title: "Manufacturing Context",
            link: "/industries/technical-textiles#manufacturing-context",
          },
          {
            title: "Challenges",
            link: "/industries/technical-textiles#technical-textile-challenges",
          },
          {
            title: "How We Help",
            link: "/industries/technical-textiles#technical-textile-solutions",
          },
          {
            title: "Operations Excellence",
            link: "/operations-excellence-consulting",
          },
        ]}
      />

      <AboutVideo
        vid1="/assets/videos/Automation in Manufacturing.mp4"
        title="Explore Related Services"
        h1="Factory & Operations Expertise for Technical Textiles"
        des="Integrate facility, engineering, operations and digital systems around specialized Technical Textile processes."
        pageName={pageName}
      />

      <TechnicalTextilesIndustrySections
        industryImageUrl={`${BaseUrl().imgurl}${industryImageName}`}
        industryImageAlt={industryImageAlt}
      />

      <LegacyInternalLinks
        title="Explore Related Services"
        links={[
          { label: 'Turnkey Factory Projects', href: '/turnkey-factory-projects' },
          { label: 'Operations Excellence', href: '/operations-excellence-consulting' },
          { label: 'AI-Enabled Manufacturing Intelligence', href: '/ai-manufacturing-intelligence' },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
