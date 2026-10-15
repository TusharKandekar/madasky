import type { Metadata } from "next";

import ConsultingNavbar from "@/components/ConsultingNavbar";
import AboutVideo from "@/components/AboutVideo";
import TurnkeyFactorySections from "@/components/TurnkeyFactorySections";
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

const pageName = "Turnkey Factory Projects";

const fallbackMeta = {
  title: "Turnkey Factory Setup Consultant India | Madasky",
  description:
    "Turnkey Home Textile and Apparel factory projects: capacity, layout, engineering, vendor selection, PMC, commissioning, workforce readiness and handover.",
  keywords:
    "turnkey factory setup consultant India, home textile factory setup, apparel factory setup, greenfield factory setup, brownfield expansion, factory PMC, manufacturing plant setup consultant",
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
        canonical: `${BaseUrl().mainurl}/turnkey-factory-projects`,
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
        canonical: `${BaseUrl().mainurl}/turnkey-factory-projects`,
      },
    };
  }
}

const faqs = [
  {
    question: "What is included in a Madasky turnkey factory project?",
    answer:
      "Scope can include product and capacity planning, process flow, factory layout, architecture and engineering coordination, utilities, machinery specifications, vendor selection support, PMC, digital readiness, workforce readiness, commissioning and operational handover.",
  },
  {
    question: "Is Madasky an EPC contractor?",
    answer:
      "Madasky’s recommended model is turnkey project management and integration rather than balance-sheet-heavy EPC. Major vendor contracts may remain directly between the client and approved vendors while Madasky manages design, integration, project controls and handover.",
  },
  {
    question: "Can Madasky work with our existing architect or engineers?",
    answer:
      "Yes. Madasky can work with client-appointed consultants or bring its own specialist network. The key requirement is one agreed design basis, responsibility matrix and decision process.",
  },
  {
    question: "How early should Madasky be involved?",
    answer:
      "Ideally before layout, machinery and utilities are frozen. Changes made after civil or equipment orders are released are slower and more expensive.",
  },
  {
    question: "Do you support ramp-up after commissioning?",
    answer:
      "Yes. Scope can include trial production, bottleneck identification, operating routines, workforce readiness and stabilization after mechanical completion.",
  },
];

type ImageAltResponse = {
  data?: Array<{ webimage?: string; alt_text?: string }>;
};

export default async function TurnkeyFactoryProjectsPage() {
  let projectAlt = "Turnkey factory project design and planning";
  let blogs: Blog[] = [];
  let videos: Video[] = [];
  let gallery: Gallery[] = [];

  try {
    const imageResponse = (await getImageAltText([
      "Project.png",
    ])) as ImageAltResponse | null;

    const projectImage = (imageResponse?.data || []).find(
      (image) => image.webimage === "Project.png"
    );
    projectAlt = projectImage?.alt_text || projectAlt;
  } catch {
    // Keep a useful fallback alt when image metadata is unavailable.
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
        url="/turnkey-factory-projects"
        title={pageName}
        navItems={[
          { title: "Plant Layout", link: "/plant-layout-consulting" },
          { title: "Technical Consulting", link: "/technical-consulting" },
          { title: "Manpower Planning", link: "/manpower-planning-consulting" },
          {
            title: "Process & Material Flow",
            link: "/process-and-material-flow-consulting",
          },
        ]}
      />

      <AboutVideo
        vid1="/assets/videos/Projects.mp4"
        title={pageName}
        h1="From concept to operational handover."
        des="Madasky manages the complete manufacturing project so product, process, capacity, layout, engineering, utilities, machines, vendors, people and systems are designed as one factory - not as disconnected packages."
        pageName={pageName}
      />

      <TurnkeyFactorySections
        projectImageUrl={`${BaseUrl().imgurl}Project.png`}
        projectImageAlt={projectAlt}
      />

      <LegacyInternalLinks
        title="Explore Related Services"
        links={[
          { label: 'Plant Layout', href: '/plant-layout-consulting' },
          { label: 'Process & Material Flow', href: '/process-and-material-flow-consulting' },
          { label: 'Digital Factory & MES', href: '/digital-factory-mes' },
          { label: 'Workforce Readiness & Key Talent Support', href: '/workforce-readiness-talent-support' },
          { label: 'Home Textiles', href: '/industries/home-textiles' },
          { label: 'Apparel', href: '/industries/apparel' },
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
