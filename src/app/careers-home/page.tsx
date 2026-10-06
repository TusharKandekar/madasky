import React from 'react'
// import { Link } from 'react-router-dom';
import { Metadata } from "next";
import Image from 'next/image';
import AboutNavbar from '@/components/Header/AboutNavbar';
import AboutVideo from '@/components/AboutVideo';
// import CapabilitiesMainCard from '../components/CapabilitiesMainCard'
import Footer from '@/components/Footer';
import CareerButton from '@/components/CareerButton';
// import vid1 from "/assets/images/Careers69.mp4";
// import SlidingBlogs from '@/components/SlidingBlogs';
// import VideoPlayer from '@/components/VideoPlayer';
// import Imagetemplate from '@/components/Imagesliders';
import HelpYou from '@/components/HelpYou';
import CareerCard from '@/components/CareerCard';
import NewCapabilities from '@/components/NewCapabilities';
import GallerySliderWrapper from "@/components/GallerySliderWrapper";
import BlogSliderWrapper from "@/components/BlogSliderWrapper";
import VideoSliderWrapper from "@/components/VideoSliderWrapper";
import { getImageAltText, getWebBlogs, fetchMetaDataByPageName, getDataByPageName, filterByWebImage, getImageData, getTestimonials, getEventData, getTestimonialsByPageName, getEventByPageName } from "@/common/api";
import BaseUrl from '@/components/BaseUrl';
import type { PageMetaDataResponse } from "@/common/types";


const title = "";
let PageMetadata : PageMetaDataResponse;

export async function generateMetadata(): Promise<Metadata> {
  PageMetadata = await fetchMetaDataByPageName({ pageName: "Career-Home" });
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
        `${BaseUrl().mainurl}careers-home`
      },

  };
}


const CareerJobs = async () => {


    const arr = ["career1.png", "career2.png", "career3.png"];
    const testimonial = await getTestimonials({ pageName: "Career-Home" });






    let images;
    let blogData;
    let videoData;
    let galleryData;
    let testimonialData;
    let eventData;
    let serverError = false;

    try {
        images = await getImageAltText(arr);
        blogData = await getDataByPageName(["Career-Home", "blogs"]);
        videoData = await getDataByPageName(["Career-Home", "videos"]);
        galleryData = await getDataByPageName(["Career-Home", "gallery"]);
        testimonialData = await getTestimonialsByPageName("Career-Home");
        eventData = await getEventByPageName("Career-Home");

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

            <AboutVideo vid1={"/assets/videos/Careers69.mp4"} title={title} des={""} pageName={"Career Home"} />

            <div className='w-full bg-[#e0f1fe] pb-20 pt-10 mb-14 flex flex-col  items-center justify-center'>
                <h1 className='mb-5 text-4xl font-bold text-center text-black max-md:text-4xl'>{PageMetadata?.data?.h1tag || "Home"}</h1>
                <div className="w-[33%] h-[5px] bg-[#bce1fd] my-3" style={{
                    background: 'linear-gradient(to right, #05528a 50%, #d02c22 50%)',

                }}></div>
                <div className='w-[90%] mx-auto border-2 bg-white border-gray-200 rounded-3xl flex flex-col items-center mt-[4vh] py-10 gap-20 h-auto max-md:gap-8'>
                    <div className="items-start justify-center hidden w-1/2 max-md:flex max-md:w-[90%] h-[40vh] relative">
                        <Image src={`${BaseUrl().imgurl}career1.png`} fill className="w-full object-cover max-md:w-[90%]" alt={`${imgAltText[0]}`} />
                    </div>
                    <div className='flex flex-col items-center justify-center gap-5'>
                        {/* <h2 className='text-4xl font-bold text-center text-blue-800 max-md:text-2xl'></h2> */}
                        <p className="text-xl  w-[90%] text-gray-500 font-medium text-center px-20 max-md:text-[18px] max-md:px-8 max-md:text-justify">
                            Are you ready to embark on a journey that will challenge and inspire you? Whether you're curious about Madasky Consulting's interview process, eager to learn more about the consulting world, or simply want to discover what it's like to work with us, you've come to the right place.
                        </p>
                    </div>
                    <CareerCard altText={imgAltText[0]} />


                    <div className='flex flex-col items-center justify-center w-full gap-5 '>
                        {/* <img src="/assets/images/career7.png" alt="" className='w-[30%]' /> */}

                        <h2 className='text-center text-black text-4xl font-bold max-md:text-[22px] leading-8 max-md:px-4'>Ready to Take the Next Step ?</h2>
                        <p className="text-2xl text-gray-500 font-medium text-justify px-20 max-md:text-[18px] max-md:px-8">

                            <span className='font-bold'>Explore Our Open Roles: </span> If you're ready to apply, search our available positions.
                        </p>
                        <CareerButton text={"Explore Our Job"} path={"/careers-jobs"}></CareerButton>
                        <p className="text-2xl text-gray-500 font-medium text-justify px-20 max-md:text-[18px] max-md:px-8">
                            <span className='font-bold text-black'>Discover Life at Madasky Consulting: </span> Find out what it's like to work with us
                        </p>
                        <CareerButton text={"More Info"} path={"/careers-explore"}></CareerButton>





                    </div>
                    <div className='flex flex-col items-center justify-center w-full'>
                        <NewCapabilities
                            readMoreLink="#"
                            altText={imgAltText[1]}
                            bgcolor="bg-[#f8fafc]"

                            image="/career2.png"
                            order="flex-row-reverse"
                            title="We're Here to Answer Your Questions"
                            description={[
                                'We know you have questions, and we’re eager to answer them—especially the tough ones. At Madasky Consulting, we pride ourselves on our authenticity and transparency. Our team members love sharing their stories and insights, and we encourage you to ask us anything.',

                            ]} />
                        <NewCapabilities
                            readMoreLink="#"
                            altText={imgAltText[2]}
                            bgcolor="bg-white"

                            image="/career3.png"
                            order="flex-row-revese"
                            title="Make a Difference With Us"
                            description={[
                                "When you join Madasky Consulting, you'll have the opportunity to reshape industries and institutions through innovation and technology. Whether you’re working directly with clients or support from behind the scenes, your contributions will be vital to our success. Every member of our team plays a critical role in driving our mission forward.",

                            ]} />

                    </div>









                </div>
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
            {/* </Link> */}
        </div>
    )
}

export default CareerJobs