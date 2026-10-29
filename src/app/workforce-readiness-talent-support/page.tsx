import type { Metadata } from "next";

import ConsultingNavbar from "@/components/ConsultingNavbar";
import AboutVideo from "@/components/AboutVideo";
import WorkforceReadinessSections from "@/components/WorkforceReadinessSections";
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

const pageName = "Workforce Readiness & Key Talent Support";

const fallbackMeta = {
  title: "Manufacturing Workforce Planning & Skills | Madasky",
  description:
    "Workforce planning, critical-role support, skill mapping and factory ramp-up for Home Textile and Apparel projects, with structured skilling through Ananta Mitra Foundation where required.",
  keywords:
    "manufacturing workforce planning textile apparel, textile manpower planning, apparel skill development, factory workforce readiness, manufacturing talent support",
  h1: "Workforce Readiness & Key Talent Support",
};

const faqs = [
  {
    question: "Is Madasky a recruitment company?",
    answer:
      "No. Madasky’s role is manufacturing workforce planning and critical-role support within factory projects and operations transformation. Recruitment or specialist search may be supported where required, but it is not positioned as a general staffing service.",
  },
  {
    question: "What is the role of Ananta Mitra Foundation?",
    answer:
      "Where structured skilling or workforce-development programs are required, these can be delivered through Ananta Mitra Foundation under an appropriate program while Madasky retains the manufacturing/project role.",
  },
  {
    question: "Can you help hire key factory leaders?",
    answer:
      "Madasky can support role definition, technical evaluation, interview support and identification through suitable channels or specialists as agreed.",
  },
  {
    question: "When should workforce planning begin for a new factory?",
    answer:
      "It should begin during project planning and be linked to commissioning/ramp-up dates. Critical roles often need to join well before production starts.",
  },
  {
    question: "Can you assess our existing skill gaps?",
    answer:
      "Yes. Skill matrix, role requirements, productivity and process needs can be compared to current capability to create a structured development plan.",
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
        canonical: `${BaseUrl().mainurl}/workforce-readiness-talent-support`,
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
        canonical: `${BaseUrl().mainurl}/workforce-readiness-talent-support`,
      },
    };
  }
}

export default async function WorkforceReadinessTalentSupportPage() {
  const imageNames = [
    "People & Skill.png",
    "Our Skilling Solution.png",
    "Key benefits Madasky skilling.png",
  ];

  let imageAltMap: Record<string, string> = {};
  let blogs: Blog[] = [];
  let videos: Video[] = [];
  let gallery: Gallery[] = [];

  try {
    const imageResponse = (await getImageAltText(
      imageNames
    )) as ImageAltResponse | null;

    imageAltMap = Object.fromEntries(
      (imageResponse?.data || []).map((image) => [
        image.webimage || "",
        image.alt_text || "Madasky Consulting",
      ])
    );
  } catch {
    imageAltMap = {};
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

  const alt = (imageName: string, fallback: string) =>
    imageAltMap[imageName] || fallback;

  const imageBase = BaseUrl().imgurl;

  return (
    <>
      <ConsultingNavbar
        url="/workforce-readiness-talent-support"
        title={pageName}
        navItems={[
          { title: "Turnkey Factory Projects", link: "/turnkey-factory-projects" },
          {
            title: "Operations Excellence",
            link: "/operations-excellence-consulting",
          },
          {
            title: "Manpower Planning",
            link: "/manpower-planning-consulting",
          },
          { title: "People - Skilling", link: "/people-skilling-consulting" },
        ]}
      />

      <AboutVideo
        vid1="/assets/videos/People Skilling Header Video.mp4"
        heroImageSrc="/assets/images/Garment Factory Production Floor.png"
        heroImageAlt="Manufacturing production floor and factory workforce"
        compactHeroTitle
        title={pageName}
        h1="A factory is not ready at commissioning if the operating team is not ready."
        des=""
        pageName={pageName}
      />

      {/* Same below-hero paragraph treatment as Digital Factory & MES. */}
      <section className="relative overflow-hidden border-b border-[#e1e8ef] bg-gradient-to-br from-[#f5f8fc] via-white to-[#edf3f9] py-12 sm:py-16">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border-[40px] border-[#0E2C53]/[0.035]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="max-w-5xl border-l-4 border-[#D72B0D] pl-5 sm:pl-8">
            <p className="font-baskervville text-[clamp(1.4rem,2.5vw,2.1rem)] font-semibold leading-snug text-[#0E2C53]">
              Madasky integrates manpower planning, critical-role support, skill requirements and workforce ramp-up into factory projects and operations transformation.
            </p>
          </div>
        </div>
      </section>

      <main>
        <WorkforceReadinessSections
          introImageUrl={`${imageBase}People & Skill.png`}
          introImageAlt={alt(
            "People & Skill.png",
            "Manufacturing workforce readiness and factory skill planning"
          )}
          turnkeyImageUrl={`${imageBase}Our Skilling Solution.png`}
          turnkeyImageAlt={alt(
            "Our Skilling Solution.png",
            "Workforce readiness for turnkey factory projects"
          )}
          existingFactoryImageUrl={`${imageBase}Key benefits Madasky skilling.png`}
          existingFactoryImageAlt={alt(
            "Key benefits Madasky skilling.png",
            "Skill mapping and workforce capability for existing factories"
          )}
        />

        <LegacyInternalLinks
        title="Explore Related Services"
        links={[
          { label: 'Turnkey Factory Projects', href: '/turnkey-factory-projects' },
          { label: 'Operations Excellence', href: '/operations-excellence-consulting' },
          { label: 'Apparel', href: '/industries/apparel' },
          { label: 'Home Textiles', href: '/industries/home-textiles' },
        ]}
        />



        <FaqComponent faqs={faqs} />

        {videos.length > 0 && <VideoSliderWrapper videos={videos} />}
        {blogs.length > 0 && <BlogSliderWrapper blogs={blogs} />}
        {gallery.length > 0 && <GallerySliderWrapper gallery={gallery} />}

        <HelpYou />
      </main>

      <Footer />
    </>
  );
}
