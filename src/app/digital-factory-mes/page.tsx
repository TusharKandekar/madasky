import type { Metadata } from "next";
import DigitalFactorySections from "@/components/DigitalFactorySections";
import ConsultingNavbar2 from "@/components/ConsultingNavbar2";
import Footer from "@/components/Footer";
import AboutVideo from "@/components/AboutVideo";
import HelpYou from "@/components/HelpYou";
import GallerySliderWrapper from "@/components/GallerySliderWrapper";
import BlogSliderWrapper from "@/components/BlogSliderWrapper";
import VideoSliderWrapper from "@/components/VideoSliderWrapper";
import FaqComponent from "@/components/FaqComponent";
import BaseUrl from "@/components/BaseUrl";
import LegacyInternalLinks from "@/components/LegacyInternalLinks";
import { fetchMetaDataByPageName, getDataByPageName, getImageAltText, getImageData } from "@/common/api";

const PAGE_NAME = "Digital Factory & MES";
const PAGE_PATH = "/digital-factory-mes";
const PAGE_TITLE = "Digital Factory & MES";
const SEO_TITLE = "MES for Textile & Apparel Manufacturing | Madasky";
const META_DESCRIPTION = "MES and Digital Factory implementation for Home Textile and Apparel: real-time production, downtime, quality, material, WIP and delivery visibility.";
const FACTORY_IMAGE = "assets/images/digital-factory-mes.png";
const HERO_VIDEO = "/assets/videos/digital-factory-mes-client.mp4";

type Faq = { question: string; answer: string };

export async function generateMetadata(): Promise<Metadata> {
  try {
    const pageMetadata = await fetchMetaDataByPageName({ pageName: PAGE_NAME });
    const baseUrl = BaseUrl().mainurl.replace(/\/$/, "");
    return {
      title: pageMetadata?.data?.meta_title || SEO_TITLE,
      description: pageMetadata?.data?.meta_desc || META_DESCRIPTION,
      keywords: pageMetadata?.data?.meta_keyword || "MES for textile and apparel manufacturing, digital factory textile, Industry 4.0 textile, shopfloor digitalization, production monitoring apparel, IoT textile manufacturing",
      authors: { name: pageMetadata?.data?.author || "Madasky", url: "https://madasky.com" },
      alternates: { canonical: `${baseUrl}${PAGE_PATH}` },
      openGraph: { title: pageMetadata?.data?.meta_title || SEO_TITLE, description: pageMetadata?.data?.meta_desc || META_DESCRIPTION, url: `${baseUrl}${PAGE_PATH}`, type: "website" },
    };
  } catch {
    const baseUrl = BaseUrl().mainurl.replace(/\/$/, "");
    return {
      title: SEO_TITLE,
      description: META_DESCRIPTION,
      keywords: "MES for textile and apparel manufacturing, digital factory textile, Industry 4.0 textile, shopfloor digitalization, production monitoring apparel, IoT textile manufacturing",
      alternates: { canonical: `${baseUrl}${PAGE_PATH}` },
      openGraph: { title: SEO_TITLE, description: META_DESCRIPTION, url: `${baseUrl}${PAGE_PATH}`, type: "website" },
    };
  }
}

export default async function DigitalFactoryMESPage() {
  let blogData: any = { data: [] };
  let videoData: any = { data: [] };
  let galleryData: any = { data: [] };
  let imgAltText: string[] = [];

  try {
    const imageData = await getImageAltText([FACTORY_IMAGE]);
    const altText = await getImageData(imageData);
    if (Array.isArray(altText)) imgAltText = altText;
  } catch (error) {
    console.error("Unable to load Digital Factory image alt text:", error);
  }

  try {
    [blogData, videoData, galleryData] = await Promise.all([
      getDataByPageName([PAGE_NAME, "blogs"]),
      getDataByPageName([PAGE_NAME, "videos"]),
      getDataByPageName([PAGE_NAME, "gallery"]),
    ]);
  } catch (error) {
    console.error("Unable to load Digital Factory & MES page media:", error);
  }

  const faqs: Faq[] = [
    { question: "What is the difference between ERP and MES?", answer: "ERP typically manages business transactions and enterprise planning; MES focuses on execution and real-time shopfloor status. The exact division depends on the client’s systems." },
    { question: "Can MES connect to machines?", answer: "Yes, where machine interfaces, sensors or gateways support connectivity. Manual, barcode or IoT data capture can also be used where direct machine integration is not practical." },
    { question: "Should the whole factory be digitized at once?", answer: "Usually no. Madasky recommends a contained pilot with measurable decisions and adoption before scaling." },
    { question: "Can Madasky use our existing MES platform?", answer: "Yes. Madasky can work with an existing client-selected platform if it can meet the manufacturing requirement." },
    { question: "How is ROI measured?", answer: "ROI should connect to specific use cases such as productivity, downtime, quality, manpower, WIP, decision time or delivery improvement rather than only number of screens deployed." },
  ];

  const hasVideos = Array.isArray(videoData?.data) && videoData.data.length > 0;
  const hasBlogs = Array.isArray(blogData?.data) && blogData.data.length > 0;
  const hasGallery = Array.isArray(galleryData?.data) && galleryData.data.length > 0;
  const hasMedia = hasVideos || hasBlogs || hasGallery;

  return (
    <>
      <ConsultingNavbar2 url={PAGE_PATH} title={PAGE_TITLE} />
      <AboutVideo
        vid1={HERO_VIDEO}
        des=""
        h1={PAGE_TITLE}
        h2="Turn shopfloor data into faster action."
      />

      {/* Client feedback (Point 7): show the approved supporting copy BELOW the hero video. */}
      <section className="relative overflow-hidden border-b border-[#e1e8ef] bg-gradient-to-br from-[#f5f8fc] via-white to-[#edf3f9] py-12 sm:py-16">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border-[40px] border-[#0E2C53]/[0.035]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="max-w-5xl border-l-4 border-[#D72B0D] pl-5 sm:pl-8">
            <p className="font-baskervville text-[clamp(1.4rem,2.5vw,2.1rem)] font-semibold leading-snug text-[#0E2C53]">
              Madasky helps manufacturers implement real-time production visibility, MES, IoT and digital operating routines around the decisions plant teams need to make during the shift.
            </p>
          </div>
        </div>
      </section>

      <DigitalFactorySections imageAlt={imgAltText[0]} />
      <div className="mx-auto w-[80vw] max-md:w-[90vw]">
        <section className="border-t border-gray-200 py-14">
          <div className="mb-8">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#D72B0D]">Explore more</p>
            <h2 className="font-baskervville text-3xl font-bold text-[#0E2C53] max-md:text-2xl">Related Manufacturing Capabilities</h2>
          </div>
          <LegacyInternalLinks
            title="Explore Related Services"
            links={[
              { label: 'AI-Enabled Manufacturing Intelligence', href: '/ai-manufacturing-intelligence' },
              { label: 'Production Planning &amp; Scheduling', href: '/production-planning-scheduling' },
              { label: 'Operations Excellence', href: '/operations-excellence-consulting' },

            ]}
          />
        </section>


        <div className="pb-14"><FaqComponent faqs={faqs} /></div>
      </div>

      {hasMedia && (
        <div className="flex h-auto w-full flex-col items-center justify-center bg-[#bce1fd75] bg-[url('/assets/images/homeblogbg.png')] bg-cover bg-center p-6 py-[1vh]">
          {hasVideos && <VideoSliderWrapper videos={videoData.data} />}
          {hasVideos && hasBlogs && <div className="h-[2px] w-[90%] bg-gray-300" />}
          {hasBlogs && <BlogSliderWrapper blogs={blogData.data} />}
          {(hasVideos || hasBlogs) && hasGallery && <div className="h-[2px] w-[90%] bg-gray-300" />}
          {hasGallery && <GallerySliderWrapper gallery={galleryData.data} />}
        </div>
      )}
      <HelpYou />
      <Footer />
    </>
  );
}
