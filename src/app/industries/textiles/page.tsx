import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';
import TextilesCompo from '@/components/TextilesCompo';
import HelpYou from '@/components/HelpYou';
import FaqComponent from '@/components/FaqComponent';
import Button from '@/components/Button';
import GallerySliderWrapper from '@/components/GallerySliderWrapper';
import BlogSliderWrapper from '@/components/BlogSliderWrapper';
import VideoSliderWrapper from '@/components/VideoSliderWrapper';
import { getDataByPageName } from '@/common/api';
import BaseUrl from '@/components/BaseUrl';

type Faq = {
  question: string;
  answer: string;
};

const pageTitle = 'Extended Manufacturing Capability Across Textiles';

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = BaseUrl().mainurl.replace(/\/+$/, '');

  return {
    title: 'Textile Manufacturing Consultants India | Madasky',
    description:
      'Manufacturing consulting for selected textile projects covering factory setup, operations excellence, capacity, planning, MES and digitalization.',
    keywords: [
      'textile manufacturing consultants India',
      'textile factory setup',
      'operations excellence textiles',
      'textile production planning',
      'MES and digitalization textiles',
      'textile manufacturing consulting',
    ],
    authors: [{ name: 'Madasky', url: 'https://madasky.com' }],
    alternates: {
      canonical: `${baseUrl}/industries/textiles`,
    },
  };
}

export default async function TextilesPage() {
  let blogData: any = { data: [] };
  let videoData: any = { data: [] };
  let galleryData: any = { data: [] };

  // Slider content is optional; keep the main page available if the CMS is unavailable.
  try {
    [blogData, videoData, galleryData] = await Promise.all([
      getDataByPageName(['Home', 'blogs']),
      getDataByPageName(['Home', 'videos']),
      getDataByPageName(['Home', 'gallery']),
    ]);
  } catch (error) {
    console.error('Unable to load Textiles page slider data:', error);
  }

  const faqs: Faq[] = [
    {
      question: 'Does Madasky work in spinning/weaving/processing?',
      answer:
        'Capabilities can apply to selected assignments, but process-specific depth is assessed case by case and specialist experts are integrated where required.',
    },
    {
      question: 'Can Madasky work with existing process consultants?',
      answer:
        'Yes. Madasky can coordinate manufacturing/project interfaces with client-appointed specialists.',
    },
  ];

  const internalLinks = [
    {
      label: 'Turnkey Factory Projects',
      href: '/turnkey-factory-projects',
    },
    {
      label: 'Operations Excellence',
      href: '/operations-excellence-consulting',
    },
    {
      label: 'AI-Enabled Manufacturing Intelligence',
      href: '/ai-enabled-manufacturing-intelligence',
    },
  ];

  return (
    <div>
      <TextilesCompo h1={pageTitle} />

      <section className="mx-auto w-[80vw] py-14 max-md:w-full max-md:px-5">
        <div className="flex flex-col gap-5 border-b border-gray-300 pb-10">
          <h2 className="text-4xl font-bold text-black max-md:text-3xl">
            Why Madasky in This Industry
          </h2>
          <p className="text-[18px] leading-relaxed text-gray-700">
            The positioning is deliberately selective rather than claiming equal
            depth in every spinning, weaving, processing or specialty process.
            Scope is confirmed after technical fit assessment.
          </p>
        </div>

        <div className="flex flex-col gap-5 border-b border-gray-300 py-10">
          <h2 className="text-4xl font-bold text-black max-md:text-3xl">
            Have a Textile manufacturing project that crosses engineering and operations?
          </h2>
          <p className="text-[18px] leading-relaxed text-gray-700">
            Share the process and project requirement. Madasky will confirm scope
            and specialist needs before proposing the engagement.
          </p>
          <div className="mt-2">
            <Button text="Discuss Your Manufacturing Challenge" />
          </div>
        </div>

        <div className="flex flex-col gap-5 border-b border-gray-300 py-10">
          <h2 className="text-4xl font-bold text-black max-md:text-3xl">
            Explore Related Services
          </h2>
          <div className="flex flex-wrap gap-4">
            {internalLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex items-center border border-gray-300 px-5 py-3 font-semibold text-[#0E2C53] transition-colors hover:border-[#0E2C53] hover:bg-gray-50"
              >
                {item.label}{' '}
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="py-10">
          <FaqComponent faqs={faqs} />
        </div>
      </section>

      <div className="flex h-auto w-full flex-col items-center justify-center bg-[#bce1fd75] bg-[url('/assets/images/homeblogbg.png')] bg-cover bg-center bg-no-repeat py-[1vh]">
        {Array.isArray(videoData?.data) && videoData.data.length > 0 && (
          <VideoSliderWrapper videos={videoData.data} />
        )}
        {Array.isArray(videoData?.data) &&
          videoData.data.length > 0 &&
          Array.isArray(blogData?.data) &&
          blogData.data.length > 0 && <div className="h-[2px] w-[90%] bg-gray-300" />}
        {Array.isArray(blogData?.data) && blogData.data.length > 0 && (
          <BlogSliderWrapper blogs={blogData.data} />
        )}
        {Array.isArray(blogData?.data) &&
          blogData.data.length > 0 &&
          Array.isArray(galleryData?.data) &&
          galleryData.data.length > 0 && <div className="h-[2px] w-[90%] bg-gray-300" />}
        {Array.isArray(galleryData?.data) && galleryData.data.length > 0 && (
          <GallerySliderWrapper gallery={galleryData.data} />
        )}
      </div>

      <HelpYou />
      <Footer />
    </div>
  );
}
