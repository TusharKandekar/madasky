// "use client";
// import { useState } from 'react';
import { Metadata } from "next";

import ConsultingNavbar from '@/components/ConsultingNavbar';
import Footer from '@/components/Footer';
// import vid1 from "/assets/images/People Skilling Header Video.mp4";
import AboutVideo from '@/components/AboutVideo';
import CapabilitiesMainCard2 from '@/components/CapabilitiesMainCard2';
// import TechnicalConsulting from '@/components/TechnicalConsulting';
// import ManpowerPlanning from '@/components/ManpowerPlanning';
// import ProcessFlow from '@/components/ProcessFlow';
// import MaterialFlow from '@/components/MaterialFlow';
// import WarehouseSolutions from '@/components/WarehouseSolutions';
import HelpYou from '@/components/HelpYou';
import { GoDotFill } from "react-icons/go";
import Link from 'next/link';
import BaseUrl from '@/components/BaseUrl'
import GallerySliderWrapper from "@/components/GallerySliderWrapper";
import BlogSliderWrapper from "@/components/BlogSliderWrapper";
import VideoSliderWrapper from "@/components/VideoSliderWrapper";
import { getImageAltText, fetchMetaDataByPageName, getWebBlogs, getDataByPageName, filterByWebImage, getImageData, getTestimonialsByPageName, getEventByPageName } from "@/common/api";
import type { PageMetaDataResponse } from "@/common/types";


// import { getImageAltText, fetchMetaDataByPageName, getWebBlogs, getDataByPageName, filterByWebImage, getImageData } from "@/common/api";
const title = "People";
let PageMetadata: PageMetaDataResponse;

export async function generateMetadata(): Promise<Metadata> {
    PageMetadata = await fetchMetaDataByPageName({ pageName: "People" });
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
                `${BaseUrl().mainurl}people`
        },

    };
}

export default async function Project() {

    const arr = ["People & Skill.png", "Our Approach.png", "What we do_.png", "Why Choose Madasky Consulting.png"];
    // const arr = ["People & Skill.png", "Our Approach.png", "What we do_.png", "Why Choose Madasky Consulting.png"];


    let images;
    let blogData;
    let videoData;
    let galleryData;
    let testimonialData;
    let eventData;
    let serverError = false;

    try {
        images = await getImageAltText(arr);
        blogData = await getDataByPageName(["People", "blogs"]);
        videoData = await getDataByPageName(["People", "videos"]);
        galleryData = await getDataByPageName(["People", "gallery"]);
        testimonialData = await getTestimonialsByPageName("People");
        eventData = await getEventByPageName("People");

    }
    catch (error) {
        // console.error("Server Error:", error);
        serverError = true;
    }



    // console.log("Images", images);
    if (serverError) {
        return <div>Server Error</div>
    }
    // console.log("Images", images);






    const imgAltText = await getImageData(images);

    return (
        <>
            <ConsultingNavbar
                url='/people'
                title={'People'}
                navItems={[
                    { title: 'Talent Acquisition', link: '/talent-acquisition-consulting' },
                    { title: 'People - Skilling', link: '/people-skilling-consulting' },



                ]}
            />
            <AboutVideo
                vid1={"/assets/videos/People Skilling Header Video.mp4"}
                title={title}
                des={'Creating and accelerating critical advantages through cutting-edge strategy and operations'}
                pageName={"Project"}
                h1={PageMetadata?.data?.h1tag}
            />

            <div>

                <div className="px-4 mx-auto max-w-8xl Plant-Layout">
                    <CapabilitiesMainCard2
                        details1={{

                            updes: [
                                <div key="people-updes" className="text-lg text-justify">



                                    <p className='flex my-5 text-[45px] max-md:text-3xl max-md:flex max-md:justify-center max-md:text-center leading-10 font-bold text-gray-800 text-left'>People</p>

                                    <p className='py-1 pl-5 text-lg font-normal text-gray-500 max-md:px-2'>Empowering the Workforce, Transforming the Future</p>

                                    <p className='py-1 pl-5 text-lg font-normal text-gray-500 max-md:px-2'>At Madasky Consulting, we believe that a skilled workforce is the foundation of business success and economic growth. Madasky People - Skilling is dedicated to equipping individuals with the right skills to meet evolving industry demands while helping businesses build high-performing teams. Through industry-aligned training, workforce development programs, and digital learning solutions, we bridge the gap between education and employment, ensuring sustainable career opportunities and business excellence.</p>







                                </div>

                            ],



                            img: `People & Skill.png`,
                            altText: `${imgAltText[0]}`,
                            direction: '',
                        }}
                    />
                </div>

                <div className="px-4 mx-auto max-w-8xl Plant-Layout">
                    <CapabilitiesMainCard2
                        details1={{

                            updes: [
                                <div key="people-updes" className="text-lg text-justify">



                                    <p className='flex my-5 text-[45px] max-md:text-3xl max-md:flex max-md:justify-center max-md:text-center leading-10 font-bold text-gray-800 text-left'>Our Approach</p>

                                    <p className='py-1 pl-5 text-lg font-normal text-gray-500 max-md:px-2'>At Madasky People - Skilling, we take a strategic and results-driven approach to workforce development, ensuring both individuals and businesses gain long-term value:</p>



                                    <ul className='pl-4 list-disc max-md:px-2'>

                                        {/* <li className='text-xl font-bold text-gray-500'>Our Comprehensive Approach to Plant Layout Design</li> */}

                                        <ul className="pl-5 list-disc ">
                                            <li className='py-1 text-lg font-normal text-gray-500'>

                                                <p><span className='font-semibold'> Industry-Relevant Training: </span>Our programs are developed in collaboration with businesses to meet real-world workforce needs.</p>

                                            </li>

                                            <li className='py-1 text-lg font-normal text-gray-500'>

                                                <p><span className='font-semibold'>Tailored Skilling Solutions: </span>We customize training based on industry demands, business goals, and workforce requirements.</p>

                                            </li>


                                            <li className='py-1 text-lg font-normal text-gray-500'>

                                                <p><span className='font-semibold'>Hands-On Learning: </span>We emphasize practical, application-based training, ensuring learners gain job-ready skills.</p>

                                            </li>


                                            <li className='py-1 text-lg font-normal text-gray-500'>

                                                <p><span className='font-semibold'>Smart Learning & Digital Tools: </span>Our use of digital platforms, LMS, and AR/VR-based training enhances engagement and effectiveness.</p>

                                            </li>

                                            <li className='py-1 text-lg font-normal text-gray-500'>

                                                <p><span className='font-semibold'>End-to-End Workforce Solutions: </span>From skill development to certification and job placement, we support the entire talent lifecycle.</p>

                                            </li>


                                        </ul>
                                    </ul>



                                </div>

                            ],



                            img: `Our Approach.png`,
                            altText: `${imgAltText[1]}`,
                            direction: '',
                            calendarButton: true,
                            btnText: "",
                        }}
                    />
                </div>

                <div className="px-4 mx-auto max-w-8xl Plant-Layout">
                    <CapabilitiesMainCard2
                        details1={{

                            updes: [
                                <div key="people-updes" className="text-lg">



                                    <p className='flex my-5 text-[45px] max-md:text-3xl max-md:flex max-md:justify-center max-md:text-center leading-10 font-bold text-gray-800'>What We Do</p>

                                    <div className='pl-10 flex flex-col w-full gap-4 text-xl text-[24px] font-normal text-[#6B7280] font-times'>

                                        <ul className='flex flex-col gap-4 list-disc'>
                                            <li>
                                                <Link href="/talent-acquisition">
                                                    {/* <Link to='/people-talent-acquisition'> */}
                                                    <p className='flex items-center font-semibold cursor-pointer hover:underline'>People - Talent Acquisition</p>
                                                    {/* </Link> */}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/people-skilling">

                                                    {/* <Link to='/madasky-people-skilling'> */}
                                                    <p className='flex items-center font-semibold cursor-pointer hover:underline'>Madasky People - Skilling</p>
                                                    {/* </Link> */}
                                                </Link>


                                            </li>


                                        </ul>






                                    </div>









                                </div>

                            ],



                            img: `What we do_.png`,
                            altText: `${imgAltText[2]}`,
                            direction: '',
                        }}
                    />
                </div>

                <div className="px-4 mx-auto max-w-8xl Plant-Layout">
                    <CapabilitiesMainCard2
                        details1={{

                            updes: [
                                <div key="people-updes" className="text-lg text-justify">



                                    <p className='flex my-5 text-[45px] max-md:text-3xl max-md:flex max-md:justify-center max-md:text-center leading-10 font-bold text-gray-800 text-left'>Why Choose Madasky?</p>

                                    {/* <p className='py-1 pl-5 text-lg font-normal text-gray-500'>At Madasky People - Skilling, we take a strategic and results-driven approach to workforce development, ensuring both individuals and businesses gain long-term value:</p> */}



                                    <ul className='pl-4 list-disc'>

                                        {/* <li className='text-xl font-bold text-gray-500'>Our Comprehensive Approach to Plant Layout Design</li> */}

                                        <ul className="pl-5 list-disc max-md:px-2">
                                            <li className='py-1 text-lg font-normal text-gray-500'>

                                                <p><span className='font-semibold'>Proven Impact: </span>With 100,000+ individuals trained and 100% placement support, we deliver measurable results.</p>

                                            </li>

                                            <li className='py-1 text-lg font-normal text-gray-500'>

                                                <p><span className='font-semibold'>Industry-Aligned Programs: </span>Designed in partnership with leading businesses across diverse sectors.
                                                </p>

                                            </li>


                                            <li className='py-1 text-lg font-normal text-gray-500'>

                                                <p><span className='font-semibold'>Technology-Driven Learning: </span>Smart tools, digital simulations, and real-world case studies enhance training effectiveness.</p>

                                            </li>


                                            <li className='py-1 text-lg font-normal text-gray-500'>

                                                <p><span className='font-semibold'>Sustainable & Scalable Solutions: </span>Our programs are designed for long-term workforce transformation.</p>

                                            </li>

                                            <li className='py-1 text-lg font-normal text-gray-500'>

                                                <p><span className='font-semibold'>Expert-Led Training: </span> Industry specialists and professional trainers ensure quality learning experiences.</p>

                                            </li>


                                        </ul>
                                    </ul>



                                </div>

                            ],



                            img: `Why Choose Madasky Consulting.png`,
                            direction: '',
                            calendarButton: true,
                            btnText: "Schedule Expert Call",
                        }}
                    />
                </div>










            </div>



            {/* <div className="p-6 flex h-auto flex-col w-full py-[1vh] bg-[#bce1fd75] bg-[url('/assets/images/homeblogbg.png')] bg-center bg-no-repeat bg-cover  items-center justify-center">
               


            </div> */}
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
