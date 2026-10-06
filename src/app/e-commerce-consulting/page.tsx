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

// import vid1 from "/assets/images/317.mp4";
const title = "E-Commerce";
let PageMetadata: PageMetaDataResponse;

export async function generateMetadata(): Promise<Metadata> {
    PageMetadata = await fetchMetaDataByPageName({ pageName: "E-Commerce" });
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
                `${BaseUrl().mainurl}e-commerce-consulting`
        },

    };
}

export default async function EcommmerceCompo() {

    const arr = ["311.jpg", "Keychallenges5.png", "326.jpg"];


    let images;
    let blogData;
    let videoData;
    let galleryData;
    let testimonialData;
    let eventData;
    let serverError = false;

    try {
        images = await getImageAltText(arr);
        blogData = await getDataByPageName(["Manufacturing", "blogs"]);
        videoData = await getDataByPageName(["Manufacturing", "videos"]);
        galleryData = await getDataByPageName(["Manufacturing", "gallery"]);
        testimonialData = await getTestimonialsByPageName("Manufacturing");
        eventData = await getEventByPageName("Manufacturing");

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
        'Retail E-commerce',
        'Marketplace Platforms',
        'B2B E-commerce',
        'Direct-to-Consumer (DTC) Brands',
        'Wholesale E-commerce Platforms',
        'Growing E-commerce Business',
    ];
    return (
        <div>
            <AboutNavbar />
            <AboutVideo vid1={'assets/videos/317.mp4'} title={"E-Commerce"} des={"Expert E-Commerce Solutions for Growing Your Business"} pageName={"E-commerce Industries"} h1={PageMetadata?.data?.h1tag}
            />

            <div className="px-4 mx-auto max-w-8xl max-md:px-0">
                <Jewellery
                    details1={{
                        title: 'E-Commerce',
                        img: `${BaseUrl().imgurl}/311.jpg`,
                        altText: imgAltText[0]
                    }}
                    industries={industries}
                />
                <CapabilitiesMainCard
                    details1={{
                        title: 'Key Challanges Faced By The Industry',
                        des: 'Developing a robust, scalable, and efficient B2B e-commerce platform that can handle complex business transactions and integrate seamlessly with existing systems; establishing a strong online brand and effective marketing in a competitive market, especially for niches like fashion e-commerce, Managing complex logistics for wholesale e-commerce platforms, involving large-scale and variable orders,  Developing platforms that cater to business to business e-commerce needs, supporting large orders and complex customer management',
                        img: `${BaseUrl().imgurl}/Keychallenges5.png`,
                        altText: imgAltText[1]

                    }}
                />
                <CapabilitiesMainCardSecond
                    details1={{
                        title: 'How We Help Our Clients? ',
                        des: 'Our services include involve strategies to enhance digital presence using SEO, content marketing, and social media tailored for B2B e-commerce companies.Optimizing logistics to streamline supply chains, improve inventory management, and integrate with reliable e-commerce shipping companies.managing daily operations, processing orders efficiently, and maintaining accurate inventory levels to avoid stock issues.',
                        img: `${BaseUrl().imgurl}/326.jpg`,
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
    );
}
