import React from 'react';
import { Metadata } from "next";

import AboutNavbar from '@/components/Header/AboutNavbar';
import Jewellery from '@/components/Jewellery';
// import ServiceTabs from '../components/ServiceTabs';
import CapabilitiesMainCard from '@/components/CapabilitiesMainCard';
import AboutVideo from '@/components/AboutVideo';
// import Opportunity from '@/components/Opportunity.jsx';
import Footer from '@/components/Footer';
import HelpYou from '@/components/HelpYou';
// import SlidingBlogs from '@/components/SlidingBlogs';
// import VideoPlayer from '@/components/VideoPlayer';
// import Imagetemplate from '@/components/Imagesliders';
import CapabilitiesMainCardSecond from '@/components/CapabilitiesMainCardSecond';
import BaseUrl from '@/components/BaseUrl'
import GallerySliderWrapper from "@/components/GallerySliderWrapper";
import BlogSliderWrapper from "@/components/BlogSliderWrapper";
import VideoSliderWrapper from "@/components/VideoSliderWrapper";
import { getImageAltText, fetchMetaDataByPageName, getWebBlogs, getDataByPageName, filterByWebImage, getImageData, getTestimonialsByPageName, getEventByPageName } from "@/common/api";
import type { PageMetaDataResponse } from "@/common/types";


const title = "Fashion and Jewellery";
let PageMetadata: PageMetaDataResponse;

export async function generateMetadata(): Promise<Metadata> {
    PageMetadata = await fetchMetaDataByPageName({ pageName: "Fashion and Jewellery" });
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
                `${BaseUrl().mainurl}fashion-jewellery`
        },

    };
}

export default async function Industries() {
    const arr = ["360.png", "Keychallenges2.png", "Fashion & Jwellery(How we help our clients_).jpg"];


    let images;
    let blogData;
    let videoData;
    let galleryData;
    let testimonialData;
    let eventData;
    let serverError = false;

    try {
        images = await getImageAltText(arr);
        blogData = await getDataByPageName(["Home", "blogs"]);
        videoData = await getDataByPageName(["Home", "videos"]);
        galleryData = await getDataByPageName(["Home", "gallery"]);
        testimonialData = await getTestimonialsByPageName("Home");
        eventData = await getEventByPageName("Home");

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
        ' High Fashion and Luxury Brands ',
        'Fast Fashion',
        'Jewelry Design and Manufacturing',
        'Retail and E-commerce',
        'Custom and Bespoke Jewelry',
    ];

    return (
        <div>
            <AboutNavbar />
            <AboutVideo
                vid1={'assets/videos/319.mp4'}
                title={'Fashion & Jewellery'}
                des={'Discover the Latest Trends in Fashion and Fine Jewelry'}
                pageName={"Fashion & Jewellery"}
                h1={PageMetadata?.data?.h1tag}
            />

            <div className="mx-auto max-w-8xl">
                <Jewellery
                    details1={{
                        title: 'Fashion And Jewellery',
                        img: `${BaseUrl().imgurl}/360.png`,
                        altText: imgAltText[0],
                    }}
                    industries={industries}
                />
                <CapabilitiesMainCard
                    details1={{
                        title: 'Key Challanges Faced By The Industry',
                        des: 'Maintaining brand exclusivity, Ensuring efficient global supply chains, Intense competition, Maintaining Quality, Managing inventory levels, dealing with returns and exchanges, Enhancing customer experience, managing production timelines, maintaining high service levels,  integrating new technologies, and developing long-term strategies',
                        img: `${BaseUrl().imgurl}/Keychallenges2.png`,
                    }}
                />
                <CapabilitiesMainCardSecond
                    details1={{
                        title: 'How We Help Our Clients? ',
                        des: 'Our services help in setting clear, achievable goals and creating a roadmap that aligns with the company s vision. Training teams on prioritization, effective scheduling, and eliminating inefficiencies can enhance productivity, enabling them to handle complex financial transactions and client demands more efficiently.  Our programs focus on process optimization and automation.',
                        img: `${BaseUrl().imgurl}/Fashion & Jwellery(How we help our clients_).jpg`,
                    }}
                />
                {/* <div className="px-4 py-12 mx-auto bg-gray-100 max-w-7xl sm:px-6 lg:px-8">
                    <h1 className="mb-4 text-5xl font-bold text-gray-800 from-neutral-500">
                      Blogs
                    </h1>
                    <p className="mb-8 text-xl text-gray-600 ">
                        Accelerating sustainable and inclusive growth is vital
                        for people and economies to prosper. This can only
                        happen if every person, regardless of their background
                        or level of education, has an opportunity to thrive in
                        the economy and workforce.
                    </p>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 ">
                        {opportunityItems1.map((item, index) => (
                            <Opportunity {...item} key={index} />
                        ))}
                    </div>
                </div>{' '} */}
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
        </div>
    );
}
