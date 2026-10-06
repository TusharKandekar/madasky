import React from 'react'
import { Metadata } from "next";
// import { Link } from 'react-router-dom';
import AboutNavbar from '@/components/Header/AboutNavbar';
import AboutVideo from '@/components/AboutVideo';
// import JobCard from '../components/JobCard';
import Footer from '@/components/Footer';
import CareerButton from '@/components/CareerButton';
// import vid1 from "/assets/images/Careers69.mp4";
// import SlidingBlogs from '../components/SlidingBlogs';
// import VideoPlayer from '../components/VideoPlayer';
// import Imagetemplate from '../components/Imagesliders';
import HelpYou from '@/components/HelpYou';
import NewCapabilities from '@/components/NewCapabilities';
import GallerySliderWrapper from "@/components/GallerySliderWrapper";
import BlogSliderWrapper from "@/components/BlogSliderWrapper";
import VideoSliderWrapper from "@/components/VideoSliderWrapper";
import { getImageAltText, getWebBlogs, fetchMetaDataByPageName, getDataByPageName, filterByWebImage, getImageData, getTestimonialsByPageName, getEventByPageName } from "@/common/api";
import type { PageMetaDataResponse } from "@/common/types";

import BaseUrl from '@/components/BaseUrl';
const title = "";
let PageMetadata : PageMetaDataResponse;

export async function generateMetadata(): Promise<Metadata> {
  PageMetadata = await fetchMetaDataByPageName({ pageName: "Our Experts - Pro Xperts" });
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
        `${BaseUrl().mainurl}pro-experts`
      },

  };
}

const CareerProexpert = async () => {

    const arr = ["Experience.png", "Freelancer.png", "ourexpert.png"];


    let images;
    let blogData;
    let videoData;
    let galleryData;
    let testimonialData;
    let eventData;
    let serverError = false;

    try {
        images = await getImageAltText(arr);
        blogData = await getDataByPageName(["Our Experts - Pro Xperts", "blogs"]);
        videoData = await getDataByPageName(["Our Experts - Pro Xperts", "videos"]);
        galleryData = await getDataByPageName(["Our Experts - Pro Xperts", "gallery"]);
        testimonialData = await getTestimonialsByPageName("Our Experts - Pro Xperts");
        eventData = await getEventByPageName("Our Experts - Pro Xperts");

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
        <div>
            {/* <Link to="/careers/jobs"> */}
            <AboutNavbar />
            <AboutVideo vid1={'assets/videos/Careers69.mp4'} title={title} des={""} pageName={"Our Experts - ProXperts"} />



            <div className='w-full bg-[#e0f1fe] pb-20 pt-10 mb-14 flex flex-col items-center justify-center'>
                <h1 className='mb-5 text-5xl font-bold text-center text-black max-md:text-3xl'>{PageMetadata?.data?.h1tag || "ProXperts"}</h1>

                <div className="w-[15%] h-[5px] bg-[#bce1fd] mt-0" style={{
                    background: 'linear-gradient(to right, #05528a 50%, #d02c22 50%)',

                }}></div>

                <div className='w-[90%] mx-auto flex flex-col items-center mt-6 text-xl'>
                    <h2>At Madasky Consulting, ProXperts is our elite team of carefully selected and groomed professionals who are dedicated to delivering transformative solutions to our clients. Our ProXperts consist of both seasoned industry veterans and dynamic freelancers who bring diverse expertise and innovative perspectives to the table.</h2>
                </div>

                <div className='w-[90%] mx-auto border-2 bg-white border-gray-200 rounded-3xl flex flex-col items-center overflow-hidden  h-auto mt-[4vh] mb-6'>

                    <NewCapabilities
                        readMoreLink="#"
                        bgcolor="bg-[#f8fafc]"
                        altText={imgAltText[0]}
                        image="/Experience.png"
                        order=""
                        title="Experienced Professionals"
                        description={[
                            "The backbone of our consulting services, experienced professionals bring years of industry knowledge, strategic insight, and leadership to every project. Their deep understanding of market trends, operational challenges, and business strategies enables them to provide clients with actionable solutions that lead to measurable improvements and sustained success.",

                        ]} />


                    <NewCapabilities
                        readMoreLink="#"
                        bgcolor="bg-[#f8fafc]"
                        altText={imgAltText[1]}

                        image="/Freelancer.png"
                        order="flex-row-reverse"
                        title="Freelancers"
                        description={[
                            "Our freelancers are carefully selected for their specialized skills and flexibility. They complement our core team by providing additional capacity and niche expertise, allowing us to scale quickly and adapt to the unique demands of each project. Freelancers bring fresh perspectives and innovative ideas, contributing to the overall success of our client engagements.",

                        ]} />

                    <NewCapabilities
                        readMoreLink="#"
                        bgcolor="bg-[#f8fafc]"
                        altText={imgAltText[2]}

                        image="/ourexpert.png"
                        order="flex-row"
                        title="Advisor"
                        description={[
                            "The advisor provides strategic guidance and high-level expertise to clients and internal teams. They are typically seasoned industry professionals with extensive experience and a deep understanding of business strategy, market trends, and industry-specific challenges.",

                        ]} />







                </div>


                <CareerButton text={"Get in Touch With Us"} path={"/careers-jobs"}></CareerButton>

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

export default CareerProexpert