// import React from 'react';
import { Metadata } from "next";
import AboutNavbar from '@/components/Header/AboutNavbar';
// import Banner from '@/components/Banner';
import Jewellery from '@/components/Jewellery';
import CapabilitiesMainCard from '@/components/CapabilitiesMainCard';
import CapabilitiesMainCardSecond from '@/components/CapabilitiesMainCardSecond';
import AboutVideo from '@/components/AboutVideo';
import BaseUrl from '@/components/BaseUrl'
import GallerySliderWrapper from "@/components/GallerySliderWrapper";
import BlogSliderWrapper from "@/components/BlogSliderWrapper";
import VideoSliderWrapper from "@/components/VideoSliderWrapper";
import Footer from '@/components/Footer';
import HelpYou from '@/components/HelpYou';
import { getImageAltText, fetchMetaDataByPageName, getWebBlogs, getDataByPageName, filterByWebImage, getImageData, getTestimonialsByPageName, getEventByPageName } from "@/common/api";
import type { PageMetaDataResponse } from "@/common/types";


const title = "Cunstruction";
let PageMetadata : PageMetaDataResponse;

export async function generateMetadata(): Promise<Metadata> {
  PageMetadata = await fetchMetaDataByPageName({ pageName: "Construction" });
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
        `${BaseUrl().mainurl}construction-consulting`
      },

  };
}

export default async function ConstuctionCompo() {
    const arr = ["308.png", "Keychallenges4.png", "Constuction(How we help our clients_).jpg"];


    let images;
    let blogData;
    let videoData;
    let galleryData;
    let testimonialData;
    let eventData;
    let serverError = false;

    try {
        images = await getImageAltText(arr);
        blogData = await getDataByPageName(["Construction", "blogs"]);
        videoData = await getDataByPageName(["Construction", "videos"]);
        galleryData = await getDataByPageName(["Construction", "gallery"]);
        testimonialData = await getTestimonialsByPageName("Construction");
        eventData = await getEventByPageName("Construction");

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
    const industries = [
        'Residential Construction',
        'Commercial Construction',
        'Industrial Construction',
        'Infrastructure Construction',
        'Sustainable and Green Construction',
    ];
    return (
        <div>
            <AboutNavbar />
            <AboutVideo vid1={'/assets/videos/315.mp4'} title={"Construction"} des={"Building Excellence: Innovative Construction Solutions"} pageName={"Construction"} h1={PageMetadata?.data?.h1tag}/>

            <div className="px-4 mx-auto max-w-8xl max-md:px-0">
                <Jewellery
                    details1={{
                        title: 'Construction',
                        img: `${BaseUrl().imgurl}/308.png`,
                        altText: imgAltText[0],
                    }}
                    industries={industries}
                />
                <CapabilitiesMainCard
                    details1={{
                        title: 'Key Challanges Faced By The Industry',
                        des: 'Ensuring efficient production processes while controlling costs, innovation and flexibility, informed by thorough market research, maintain a competitive advantage, Efficient strategic planning, Managing global supply chains for materials and equipment, quality management systems, maintain timelines and budgets,  precise business strategy, Integrating existing production processes. ',
                        img: `${BaseUrl().imgurl}/Keychallenges4.png`,
                        altText: imgAltText[1]
                    }}
                />
                <CapabilitiesMainCardSecond
                    details1={{
                        title: 'How We Help Our Clients? ',
                        des: 'Our consulting services address these challenges through tailored programs focused on business strategy and strategic planning. Implementing robust quality management systems maintains high standards in products and services, We support clients with financial management tools, including P&L reviews, cashflow forecasting, and profit margin analysis. We help in developing Business Strategies.',
                        img: `${BaseUrl().imgurl}/Constuction(How we help our clients_).jpg`,
                        altText: imgAltText[2]
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
    )
}
