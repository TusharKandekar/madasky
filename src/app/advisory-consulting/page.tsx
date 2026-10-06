import { Metadata } from "next";
import AboutNavbar from '@/components/Header/AboutNavbar'
// import AboutVideo from '../components/AboutVideo';
import Image from 'next/image';
import Footer from '@/components/Footer'
// import vid1 from "/assets/images/342.mp4";
import Banner2 from "@/components/Banner2"
import AdvisoryComponents from '@/components/AdvisoryComponents';
import HelpYou from '@/components/HelpYou';
import BaseUrl from '@/components/BaseUrl'
import GallerySliderWrapper from "@/components/GallerySliderWrapper";
import BlogSliderWrapper from "@/components/BlogSliderWrapper";
import VideoSliderWrapper from "@/components/VideoSliderWrapper";
import { getImageAltText, fetchMetaDataByPageName, getWebBlogs, getDataByPageName, filterByWebImage, getImageData, getTestimonialsByPageName, getEventByPageName } from "@/common/api";
import type { PageMetaDataResponse } from "@/common/types";
import FaqComponent from "@/components/FaqComponent";


// import CapabilitiesMainCard from '../components/CapabilitiesMainCard';
// import SlidingBlogs from '@/components/SlidingBlogs';
// import VideoPlayer from '@/components/VideoPlayer';
// import Imagetemplate from '@/components/Imagesliders';
const title = "Advisory";
let PageMetadata: PageMetaDataResponse;

export async function generateMetadata(): Promise<Metadata> {
  PageMetadata = await fetchMetaDataByPageName({ pageName: "Advisory" });
  console.log("Metaas: ", PageMetadata);

  return {
    title: PageMetadata.data.meta_title,
    description: PageMetadata.data.meta_desc,
    keywords: PageMetadata.data.meta_keyword,
    authors: {
      name: `${PageMetadata?.data?.author || 'Madasky'}`,
      url: "https://madasky.com",
    },
    alternates: {
      canonical:
        `${BaseUrl().mainurl}advisory-consulting`

    },

  };
}

type Faq = {
  question: string;
  answer: string;
};

export default async function Advisory() {
  const arr = ["Advisory999.png", "mobiladvisory.png"];


  let images;
  let blogData;
  let videoData;
  let galleryData;
  let testimonialData;
  let eventData;
  let serverError = false;

  try {
    images = await getImageAltText(arr);
    blogData = await getDataByPageName(["Advisory", "blogs"]);
    videoData = await getDataByPageName(["Advisory", "videos"]);
    galleryData = await getDataByPageName(["Advisory", "gallery"]);
    testimonialData = await getTestimonialsByPageName("Advisory");
    eventData = await getEventByPageName("Advisory");

  }
  catch (error) {
    // console.error("Server Error:", error);
    serverError = true;
  }

  // console.log("Images", images);
  if (serverError) {
    return <div>Server Error</div>
  }

  const faqs: Faq[] = [
    {
      question: 'Who is Amit Mittal and why is he known in management consulting?',
      answer: 'Amit Mittal is a globally recognized advisor and the founder of Madasky Consulting. He is known for his expertise in strategic management consulting and has served as a Senior Advisor to Big Four consulting firms and other leading organizations worldwide.'
    },
    {
      question: 'What kind of advisory services does Madasky Consulting offer?',
      answer: "Madasky Consulting offers management consulting services focused on strategic planning, supply chain transformation, go-to-market strategies, and business growth solutions, all tailored to your company's unique needs."
    },
    {
      question: 'How does Amit Mittal customize consulting strategies for different businesses?',
      answer: "Amit Mittal follows a client-centric approach by understanding each organization's goals and challenges. He then builds customized and actionable strategies using industry best practices to ensure measurable and sustainable results."
    },
    {
      question: `Why should I choose Madasky Consulting over other management consulting firms?`,
      answer: 'Madasky Consulting, led by Amit Mittal, offers globally proven expertise, personalized solutions, and a strong commitment to client success, making it a trusted partner for long-term strategic growth.'
    },
    {
      question: 'Can Madasky Consulting help with complex corporate challenges?',
      answer: 'Yes, Amit Mittal specializes in solving complex corporate and operational issues through strategic advisory services. His experience in managing high-impact international projects ensures practical solutions for critical business problems.'
    },
  ];





  const imgAltText = await getImageData(images);
  return (
    <>
      <AboutNavbar />
      <div className='w-full h-auto max-md:hidden relative mt-[10vh]'>
        <Banner2
          // img="bg-[url('/assets/images/Advisory999.png')]"
          img={`${BaseUrl().imgurl}/Advisory999.png`}
          title={title}
          altText={`${imgAltText[0]}`}
          h1={PageMetadata?.data?.h1tag}
        // position="bg-bottom"

        />
      </div>
      <div className='w-full h-[40vh] hidden max-md:flex relative mt-[10vh]'>

        <Image src={`${BaseUrl().imgurl}/mobiladvisory.png`}
          alt={`${imgAltText[1]}`}
          layout='fill'
          className='object-top w-full h-auto' />
      </div>
      <AdvisoryComponents />
      <FaqComponent faqs={faqs} />




      <div className="p-6 flex h-auto flex-col w-full py-[1vh] bg-[#bce1fd75] bg-[url('/assets/images/homeblogbg.png')] bg-center bg-no-repeat bg-cover  items-center justify-center">

        <VideoSliderWrapper videos={videoData.data} />
        <div className="w-[90%] h-[2px] bg-gray-300"></div>

        <BlogSliderWrapper blogs={blogData.data} />
        <div className="w-[90%] h-[2px] bg-gray-300"></div>

        <GallerySliderWrapper gallery={galleryData.data} />




      </div>
      <HelpYou />
      <Footer />
    </>
  )
}