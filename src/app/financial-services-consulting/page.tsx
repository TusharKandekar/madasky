import React from "react";
import { Metadata } from "next";

import AboutNavbar from "@/components/Header/AboutNavbar";
// import Banner from '@/components/Banner';
import Jewellery from "@/components/Jewellery";
import CapabilitiesMainCard from "@/components/CapabilitiesMainCard";
import CapabilitiesMainCardSecond from "@/components/CapabilitiesMainCardSecond";
import AboutVideo from "@/components/AboutVideo";
import BaseUrl from "@/components/BaseUrl";
import GallerySliderWrapper from "@/components/GallerySliderWrapper";
import BlogSliderWrapper from "@/components/BlogSliderWrapper";
import VideoSliderWrapper from "@/components/VideoSliderWrapper";
import Footer from "@/components/Footer";
import HelpYou from "@/components/HelpYou";
import {
  getImageAltText,
  fetchMetaDataByPageName,
  getWebBlogs,
  getDataByPageName,
  filterByWebImage,
  getImageData,
  getTestimonialsByPageName,
  getEventByPageName,
} from "@/common/api";
import type { PageMetaDataResponse } from "@/common/types";

const title = "Financial Services";
let PageMetadata: PageMetaDataResponse;

export async function generateMetadata(): Promise<Metadata> {
  PageMetadata = await fetchMetaDataByPageName({ pageName: "Financial Services" });
  console.log("Metaas: ", PageMetadata);

  return {
    title: PageMetadata.data.meta_title,
    description: PageMetadata.data.meta_desc,
    keywords: PageMetadata.data.meta_keyword,
    authors: {
      name: `${PageMetadata?.data?.author || "Madasky"}`,
      url: "https://madasky.com",
    },
    alternates: {
      canonical: `${BaseUrl().mainurl}financial-services-consulting`,
    },
  };
}

export default async function FinancialServicesCompo() {
  const arr = [
    "Financialervices.png",
    "Keychallenges2.png",
    "Financial Services(How we help our clients_).jpg",
  ];

  let images;
  let blogData;
  let videoData;
  let galleryData;
  let testimonialData;
  let eventData;
  let serverError = false;

  try {
    images = await getImageAltText(arr);
    blogData = await getDataByPageName(["Financial Services", "blogs"]);
    videoData = await getDataByPageName(["Financial Services", "videos"]);
    galleryData = await getDataByPageName(["Financial Services", "gallery"]);
    testimonialData = await getTestimonialsByPageName("Financial Services");
    eventData = await getEventByPageName("Financial Services");
  } catch (error) {
    // console.error("Server Error:", error);
    serverError = true;
  }

  // console.log("Images", images);
  if (serverError) {
    return <div>Server Error</div>;
  }

  const imgAltText = await getImageData(images);

  const industries = ["Accounting Firms", "Audit & Compliance Firms"];
  return (
    <div>
      {" "}
      <AboutNavbar />
      <AboutVideo
        vid1={"/assets/videos/313.mp4"}
        title={"Financial Services"}
        des={"Empowering Your Business with Strategic Insights"}
        color=""
        pageName={"Financial Services"}
        h1={PageMetadata?.data?.h1tag}
      />
      <div className="mx-auto max-w-8xl max-md:px-0">
        <Jewellery
          details1={{
            title: "Financial Services",
            img: `${BaseUrl().imgurl}/Financialervices.png`,
            altText: imgAltText[0],
          }}
          industries={industries}
        />
        <CapabilitiesMainCard
          details1={{
            title: "Key Challanges Faced By The Industry",
            des: "Strategic misalignment between long-term goals and daily operations is common in financial services. Poor time management can lead to bottlenecks, delays in service delivery, and ultimately, customer dissatisfaction, making it difficult to maintain financial health amidst varying market conditions, streamlining operations to reduce costs and improve service delivery, attracting and retaining skilled professionals in a highly competitive and specialized industry, and ensuring team collaboration and efficiency, particularly when dealing with cross-functional teams. Operational inefficiencies in can escalate costs and reduce effectiveness.",
            img: "/assets/images/Keychallenges2.png",
          }}
        />
        <CapabilitiesMainCardSecond
          details1={{
            title: "How We Help Our Clients? ",
            des: "Our services help in setting clear, achievable goals and creating a roadmap that aligns with the company s vision. Training teams on prioritization, effective scheduling, and eliminating inefficiencies can enhance productivity, enabling them to handle complex financial transactions and client demands more efficiently.  Our programs focus on process optimization and automation.",
            img: "/assets/images/Financial Services(How we help our clients_).jpg",
          }}
        />
      </div>
      <div className="p-6 flex h-auto flex-col w-full py-[1vh] bg-[#bce1fd75] bg-[url('/assets/images/homeblogbg.png')] bg-center bg-no-repeat bg-cover  items-center justify-center">
        <VideoSliderWrapper videos={videoData.data} />
        <div className="w-[90%] h-[2px] bg-gray-300"></div>

        <BlogSliderWrapper blogs={blogData.data} />
        <div className="w-[90%] h-[2px] bg-gray-300"></div>

        <GallerySliderWrapper gallery={galleryData.data} />
      </div>
      <HelpYou />
      <Footer />
    </div>
  );
}
