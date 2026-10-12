import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';
import HomeTextilesCompo from '@/components/HomeTextilesCompo';
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

const pageTitle = 'Manufacturing Transformation for Home Textiles';

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = BaseUrl().mainurl.replace(/\/+$/, '');

  return {
    title: 'Home Textile Manufacturing Consultants India | Madasky',
    description:
      'Home Textile manufacturing consulting for turnkey factory projects, productivity, fabric optimization, planning, MES and workforce readiness.',
    keywords: [
      'home textile manufacturing consultants India',
      'home textile factory consulting',
      'fabric optimization',
      'production planning',
      'MES for home textiles',
      'workforce readiness',
    ],
    authors: [{ name: 'Madasky', url: 'https://madasky.com' }],
    alternates: {
      canonical: `${baseUrl}/industries/home-textiles`,
    },
  };
}

export default async function HomeTextilesPage() {
  let blogData: any = { data: [] };
  let videoData: any = { data: [] };
  let galleryData: any = { data: [] };

  // Keep the main industry page usable if optional CMS slider data is unavailable.
  try {
    [blogData, videoData, galleryData] = await Promise.all([
      getDataByPageName(['Home', 'blogs']),
      getDataByPageName(['Home', 'videos']),
      getDataByPageName(['Home', 'gallery']),
    ]);
  } catch (error) {
    console.error('Unable to load Home Textiles page slider data:', error);
  }

  const faqs: Faq[] = [
    {
      question: 'What Home Textile categories do you work with?',
      answer:
        'Bedding, made-ups, towels/bath, soft furnishings, quilts/comforters and related integrated manufacturing, subject to the specific process requirement.',
    },
    {
      question: 'Can Madasky manage a new Home Textile plant from design to handover?',
      answer:
        'Yes, through the Turnkey Factory Projects model.',
    },
    {
      question: 'Can you improve an operating factory without major capex?',
      answer:
        'Yes. Operations Excellence begins by testing where existing capacity and processes are being lost before recommending new investment.',
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
      <HomeTextilesCompo h1={pageTitle} />

      <section className="mx-auto w-[80vw] py-14 max-md:w-full max-md:px-5">
        <div className="flex flex-col gap-5 border-b border-gray-300 pb-10">
          <h2 className="text-4xl font-bold text-black max-md:text-3xl">
            Why Madasky in This Industry
          </h2>
          <p className="text-[18px] leading-relaxed text-gray-700">
            Madasky combines long Home Textile manufacturing experience with
            project implementation and operating improvement. That makes it
            possible to discuss layout, fabric, planning, packing, utilities,
            manpower and digital systems in one manufacturing language.
          </p>
        </div>

        <div className="flex flex-col gap-5 border-b border-gray-300 py-10">
          <h2 className="text-4xl font-bold text-black max-md:text-3xl">
            Planning a Home Textile facility or trying to improve an existing one?
          </h2>
          <p className="text-[18px] leading-relaxed text-gray-700">
            Engage Madasky around the business outcome — capacity, cost, fabric,
            delivery or project execution — and we will define the right starting
            point.
          </p>
          <div className="mt-2">
            <Button text="Discuss Your Manufacturing Challenge" />
          </div>
        </div>

        <div className="border-b border-gray-300 py-10">
          <h2 className="mb-6 text-4xl font-bold text-black max-md:text-3xl">
            Explore Related Services
          </h2>
          <div className="flex flex-wrap gap-4">
            {internalLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex items-center border border-gray-300 px-5 py-3 font-semibold text-[#0E2C53] transition-colors hover:border-[#0E2C53] hover:bg-gray-50"
              >
                {item.label} <span className="ml-2" aria-hidden="true">→</span>
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
        {Array.isArray(videoData?.data) && videoData.data.length > 0 &&
          Array.isArray(blogData?.data) && blogData.data.length > 0 && (
            <div className="h-[2px] w-[90%] bg-gray-300" />
          )}
        {Array.isArray(blogData?.data) && blogData.data.length > 0 && (
          <BlogSliderWrapper blogs={blogData.data} />
        )}
        {Array.isArray(blogData?.data) && blogData.data.length > 0 &&
          Array.isArray(galleryData?.data) && galleryData.data.length > 0 && (
            <div className="h-[2px] w-[90%] bg-gray-300" />
          )}
        {Array.isArray(galleryData?.data) && galleryData.data.length > 0 && (
          <GallerySliderWrapper gallery={galleryData.data} />
        )}
      </div>

      <HelpYou />
      <Footer />
    </div>
  );
}
