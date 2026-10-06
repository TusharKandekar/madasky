// import React from 'react';
import { Metadata } from "next";

import Image from 'next/image';
import AboutNavbar from '@/components/Header/AboutNavbar';
import Jewellery from '@/components/Jewellery';
import CapabilitiesMainCard from '@/components/CapabilitiesMainCard';
import AboutVideo from '@/components/AboutVideo';
import Footer from '@/components/Footer';
import HelpYou from '@/components/HelpYou';
import CapabilitiesMainCardSecond from '@/components/CapabilitiesMainCardSecond';
import BaseUrl from '@/components/BaseUrl'
import GallerySliderWrapper from "@/components/GallerySliderWrapper";
import BlogSliderWrapper from "@/components/BlogSliderWrapper";
import VideoSliderWrapper from "@/components/VideoSliderWrapper";
import Banner2 from "@/components/Banner2";
import { getImageAltText, fetchMetaDataByPageName, getWebBlogs, getDataByPageName, filterByWebImage, getImageData, getTestimonialsByPageName, getEventByPageName } from "@/common/api";
import type { PageMetaDataResponse } from "@/common/types";

const title = "Tourism";
let PageMetadata: PageMetaDataResponse;

export async function generateMetadata(): Promise<Metadata> {
    PageMetadata = await fetchMetaDataByPageName({ pageName: "Tourism" });
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
            `${BaseUrl().mainurl}tourism`
          },

    };
}

export default async function TourisumCompo() {
    const arr = ["Tourism999.png", "304.png", "Keychallenges4.png", "Tourism(How we help our clients_).jpg"];


    let images;
    let blogData;
    let videoData;
    let galleryData;
    let testimonialData;
    let eventData;
    let serverError = false;

    try {
        images = await getImageAltText(arr);
        blogData = await getDataByPageName(["Tourism", "blogs"]);
        videoData = await getDataByPageName(["Tourism", "videos"]);
        galleryData = await getDataByPageName(["Tourism", "gallery"]);
        testimonialData = await getTestimonialsByPageName("Tourism");
        eventData = await getEventByPageName("Tourism");

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
        'Hospitality (Hotels and Resorts)',
        'Travel Agencies and Tour Operators',
        'Food and Beverage (Restaurants and Catering Services)',

    ];

    return (
        <div>
            <AboutNavbar />
            {/* 
            <div className="relative w-full h-[90vh] max-md:h-[40vh]">
                <div className={`absolute top-0 left-0 w-full h-full bg-[#0006] z-20`}></div>
                <div className="relative w-full h-full">
                    <Image
                        className="object-cover w-full max-md:h-auto"
                        src={`${BaseUrl().imgurl}/Tourism999.png`}
                        fill

                        // alt="Aspiration"
                        alt={imgAltText[0]}


                    />
                </div>
                <div className="absolute top-[4vh] left-0 z-30 flex flex-col items-start justify-end w-full h-full p-20 text-white max-md:p-3 ">
                    <span className={`text-3xl max-md:text-xl white`}>{title}</span>
                    <h1 className={`text-3xl font-baskervville text-white white font-bold max-md:text-xl max-md:w-full max-md:font-thin max-md:pt-4 max-md:pb-8`}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae numquam nam nostrum culpa, eos officia quaerat quasi repellendus inventore adipisci!
                    </h1>
                </div>
            </div> */}

            <Banner2
                // img="bg-[url('/assets/images/Solutionheader.png')]"
                img={`${BaseUrl().imgurl}/Tourism999.png`}
                altText={imgAltText[0]}
                title={title}
                h1={PageMetadata?.data?.h1tag}
            // position="bg-top"
            />




            <div className="px-4 mx-auto max-w-8xl max-md:px-0">
                <Jewellery
                    details1={{
                        title: 'Tourism',
                        img: `${BaseUrl().imgurl}/304.png`,
                        altText: imgAltText[1]
                    }}
                    industries={industries}
                />
                <CapabilitiesMainCard
                    details1={{
                        title: 'Key Challanges Faced By The Industry',
                        des: 'Managing inventory levels, maintaining, quality management systems, Seasonal Demand Fluctuations, Lead Times, Intense competition, Ensuring smooth day to day operations while minimizing costs is a significant challenge, Managing high operational costs, a culture of continuous improvement, monthly P&L reviews, cashflow forecasting, and profit margin analysis.',
                        img: `${BaseUrl().imgurl}/Keychallenges4.png`,
                        altText: imgAltText[2]
                    }}
                />
                <CapabilitiesMainCardSecond
                    details1={{
                        title: 'How We Help Our Clients? ',
                        des: 'Our consulting services address these challenges through tailored programs focused on business strategy and strategic planning, helping clients navigate competition and market changes effectively. Our expertise in supply chain management (SCM) helps optimize inventory and logistics, ensuring efficiency and cost-effectiveness. Conducting thorough marketing research allows us to inform decisions and adapt to consumer trends, ensuring clients remain competitive and relevant. Using KPI dashboards and gap analysis, we track and improve performance, providing insights for continuous improvement. ',
                        img: `${BaseUrl().imgurl}/Tourism(How we help our clients_).jpg`,
                        altText: imgAltText[3]
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
