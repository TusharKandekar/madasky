
import AboutNavbar from '@/components/Header/AboutNavbar';
import AboutVideo from '@/components/AboutVideo';
import { Metadata } from "next";

import Footer from '@/components/Footer';
// import FlexBox from '../components/FlexBox';
// import NewCapabilities from '../components/NewCapabilities';
// import Valuesdev from '../components/Valuesdev';
import PurposeVisionMissionsValues from '@/components/PurposeVisionMissionsValues';
import AboutValues from '@/components/AboutValues'
import HelpYou from '@/components/HelpYou';
import GallerySliderWrapper from "@/components/GallerySliderWrapper";
import BlogSliderWrapper from "@/components/BlogSliderWrapper";
import VideoSliderWrapper from "@/components/VideoSliderWrapper";
import { getImageAltText, fetchMetaDataByPageName, getWebBlogs, getDataByPageName, filterByWebImage, getImageData, getTestimonialsByPageName, getEventByPageName } from "@/common/api";
import type { PageMetaDataResponse } from "@/common/types";
import BaseUrl from '@/components/BaseUrl';


// import SlidingBlogs from '../components/SlidingBlogs';
// import VideoPlayer from '../components/VideoPlayer';
// import Imagetemplate from '../components/Imagesliders';


// import vid1 from "/assets/images/purpose-vision.mp4";
const title = "Purpose, Mission, Vision and Values";
let PageMetadata : PageMetaDataResponse;

export async function generateMetadata(): Promise<Metadata> {
  PageMetadata = await fetchMetaDataByPageName({ pageName: "Purpose, Mission, Vision and Values" });
  console.log("Metaas: ", PageMetadata);

  return {
    title: PageMetadata.data.meta_title,
    description: PageMetadata.data.meta_desc,
    keywords: PageMetadata.data.meta_keyword,
    authors: {
      name: `${PageMetadata?.data?.author || 'Madasky'}`,
      url: "https://madasky.com",
    },
    alternates:{
      canonical:
      `${BaseUrl().mainurl}purpose-vision`
    }

  };
}


export default async function PurposeVisionMission() {

  const arr = ["347.png", "348.jpg", "349.jpg", "350.jpg"];


  let images;
  let blogData;
  let videoData;
  let galleryData;
  let testimonialData;
  let eventData;
  let serverError = false;

  try {
    images = await getImageAltText(arr);
    blogData = await getDataByPageName(["Purpose, Mission, Vision and Values", "blogs"]);
    videoData = await getDataByPageName(["Purpose, Mission, Vision and Values", "videos"]);
    galleryData = await getDataByPageName(["Purpose, Mission, Vision and Values", "gallery"]);
    testimonialData = await getTestimonialsByPageName("Purpose, Mission, Vision and Values");
    eventData = await getEventByPageName("Purpose, Mission, Vision and Values");

  }
  catch (error) {
    // console.error("Server Error:", error);
    serverError = true;
  }

  // console.log("Images", images);
  if (serverError) {
    return <div>Server Error</div>
  }





  const imgAltText = await getImageData(images);
  return (
    <>
      <AboutNavbar />
      <AboutVideo vid1={"/assets/videos/purpose-vision.mp4"} title={"Madasky"} des={"Creating and accelerating critical advantages through cutting-edge strategy and operations"} h1={PageMetadata?.data?.h1tag}/>



      <PurposeVisionMissionsValues color={"#e0f1fe"} title={"Purpose"} description={`MADASKY Consulting exists to bridge the gap between ambition and achievement for organizations worldwide. We are committed to harnessing the power of expert knowledge and innovative strategies to tackle complex problems, optimize operations, and unlock the full potential of our clients. Our purpose is to create lasting value and positive impact, ensuring that every client we serve experiences tangible, sustained success.`} imgSrc={"/347.png"} altText={imgAltText[0]} direction={"flex-row"} paddingDirection={"pr-[60px]"}></PurposeVisionMissionsValues>


      <PurposeVisionMissionsValues color={"white"} title={"Vision"} description={`To be the premier provider of industry-leading expertise, empowering organizations to achieve transformative success and sustained excellence through innovative, impactful solutions.`} altText={imgAltText[1]} imgSrc={"/348.jpg"} direction={"flex-row-reverse"} paddingDirection={"pl-[60px]"}></PurposeVisionMissionsValues>


      <PurposeVisionMissionsValues color={"#e0f1fe"} title={"Mission"} description={`MADASKY Consulting is committed to transforming 20,000 businesses and creating 100,000 jobs by providing unparalleled consulting services. We deploy expert talent to tackle critical challenges, drive measurable improvements, and build long-term partnerships for continuous growth and excellence.`} altText={imgAltText[2]}
        imgSrc={"/349.jpg"} direction={"flex-row"} paddingDirection={"pr-[60px]"}></PurposeVisionMissionsValues>


      <AboutValues color={"white"} title={"Values"} description={``} altText={imgAltText[3]}
        imgSrc={"/350.jpg"} direction={"flex-row-reverse"} paddingDirection={"pl-[80px]"}></AboutValues>


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
  );
}
