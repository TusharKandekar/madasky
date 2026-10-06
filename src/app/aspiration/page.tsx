
import Footer from '@/components/Footer';
import AboutNavbar from '@/components/Header/AboutNavbar';
import AspirationItem from '@/components/AspirationItem';
import HelpYou from '@/components/HelpYou';
import Image from 'next/image';
import BaseUrl from '@/components/BaseUrl';
import { Metadata } from "next";

// import SlidingBlogs from '../components/SlidingBlogs';
// import VideoPlayer from '../components/VideoPlayer';
// import Imagetemplate from '../components/Imagesliders';
// import React, { useState, useEffect } from 'react';
// import { getImagesAltText } from '../components/CommonData';
import GallerySliderWrapper from "@/components/GallerySliderWrapper";
import BlogSliderWrapper from "@/components/BlogSliderWrapper";
import VideoSliderWrapper from "@/components/VideoSliderWrapper";
import { getImageAltText,fetchMetaDataByPageName, getWebBlogs, getDataByPageName, filterByWebImage, getImageData, getTestimonialsByPageName, getEventByPageName } from "@/common/api";
import type { PageMetaDataResponse } from "@/common/types";


const title = "Our Aspiration";
let PageMetadata : PageMetaDataResponse;

export async function generateMetadata(): Promise<Metadata> {
  PageMetadata = await fetchMetaDataByPageName({ pageName: "Our Aspiration" });
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
        `${BaseUrl().mainurl}aspiration`
      },

  };
}


export default async function OurAspiration() {
const arr = ["OurAspiration.png", "Strategic Goals.png", "Client success.png", "Telent Development.png"];


   let images;
   let blogData;
    let videoData;
    let galleryData;
    let testimonialData;
    let eventData;
  let serverError = false;

  try {
    images = await getImageAltText(arr);
    blogData = await getDataByPageName(["Our Aspiration", "blogs"]);
    videoData = await getDataByPageName(["Our Aspiration", "videos"]);
    galleryData = await getDataByPageName(["Our Aspiration", "gallery"]);
    testimonialData = await getTestimonialsByPageName("Our Aspiration");
    eventData = await getEventByPageName("Our Aspiration");

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
    // const [altText, setAltText] = useState("");
    const image = "/OurAspiration.png"


    // useEffect(() => {
    //   const fetchAltText = async () => {
    //     const alt = await getImagesAltText(image); // Resolve the Promise
    //     // console.log("aaaa", alt)
    //     setAltText(alt); // Update state with the resolved value
    //   };

    //   fetchAltText();
    // }, []);

    return (
        <>
            <AboutNavbar />
            {/* <div className="relative h-[80vh] max-md:h-auto">
            
                <Image src={"/assets/images/OurAspiration.png"} alt={"Aspiration"} layout='fill' objectFit='cover'></Image>

            </div> */}

            <div className="relative h-[80vh] max-md:h-[40vh]">
                <Image
                    src={`${BaseUrl().imgurl}/OurAspiration.png`}
                    alt={imgAltText[0]}
                    fill
                    priority
                    className='object-cover object-center'
                />
            </div>



            <div className="flex flex-col items-center justify-center w-full py-8">
                <h2 className='text-5xl font-semibold text-center max-md:text-4xl'>{PageMetadata?.data?.h1tag || "Our Aspiration"}</h2>
                <div className="w-[15%] h-[3px] bg-blue-300 mt-4 max-md:w-[60%]" style={{
                    background: 'linear-gradient(to right, #05528a 50%, #d02c22 50%)',

                }}></div>
            </div>
            <div className='flex items-center justify-center w-full py-8 bg-fixed bg-center bg-no-repeat bg-cover'>
                <div className='w-[90%] flex flex-col items-center justify-center p-[10vh] bg-white border-gray-300 border-2 rounded-3xl max-md:p-3'>

                    <p className='text-xl text-gray-500 text-justify py-4 w-[90%]'> At Madasky Consulting, our aspiration is to be the gold
                        At MADASKY Consulting, our aspiration is to become the go-to partner for businesses looking to achieve exceptional growth and long-term success. We aim to provide unmatched expertise and innovative solutions that help organizations overcome challenges and seize new opportunities. Our goal is not just to solve immediate problems but to help businesses reach their full potential and sustain that success over time.
                    </p>
                    <p className='text-xl text-gray-500 text-justify py-4 w-[90%]'>We are partnered with ActionCOACH, the world&apos;s
                        We are committed to a bold vision: to transform 20,000 businesses and create 100,000 jobs. This reflects our dedication to making a tangible, positive impact on the organizations we work with, as well as on the broader economy. By offering top-tier consulting services, we aim to help companies streamline their operations, solve complex problems, and achieve their long-term goals.</p>

                </div>
            </div>

            <div className="flex flex-col w-full items-center justify-center gap-[7vh] max-md:w-full py-[10vh]">
                <div className="flex flex-col w-[90%]  bg-[#e0f1fe] overflow-hidden items-center  border-gray-300 border-2 rounded-3xl justify-center gap-[7vh] max-md:w-full max-md:rounded-none">

                    <AspirationItem
                        img={'/Strategic Goals.png'}
                        altText={imgAltText[1]}
                        bgcolor={'bg-[#e0f1fe]'}
                        title={'Strategic Goals'}
                        order={'flex-row'}
                        items={{
                            'Global Leadership':
                                'Position Madasky Consulting as a global leader in business consulting, recognized for our innovative solutions and exceptional service.',
                            'Sustainable Growth':
                                'Drive sustainable growth for our clients by providing strategies that ensure long-term success and resilience in a dynamic market environment.',
                            'Operational Excellence':
                                'Continuously refine our processes and methodologies to deliver unmatched efficiency and effectiveness in all our engagements.',
                        }}
                    />




                    <AspirationItem
                        img={'/Client success.png'}
                        altText={imgAltText[2]}

                        bgcolor={'bg-white'}
                        title={'Client Success'}
                        order={'flex-row-reverse'}
                        items={{
                            'Measurable Impact':
                                'Deliver quantifiable results and tangible improvements for our clients, ensuring they achieve their business objectives.',
                            'Long-term Partnerships':
                                'Build enduring relationships with our clients based on trust, transparency, and mutual success.',
                            'Comprehensive Support':
                                'Provide comprehensive support and guidance to our clients throughout the entire journey.',
                        }}
                    />


                    <AspirationItem
                        bgcolor={'bg-[#e0f1fe]'}
                        img={'/Telent Development.png'}
                        altText={imgAltText[3]}

                        title={'Talent Development'}
                        order={'flex-row'}
                        items={{
                            'Empowering Our Team':
                                'Investing in the continuous growth and development of our team members, fostering a culture of learning, innovation, and excellence.',
                            'Attracting Top Talent':
                                'Ensuring we attract and retain the best talent in the industry, providing them with opportunities to grow and excel within our organization.',
                            'Leadership Development':
                                ' Cultivating the next generation of leaders within Madasky Consulting, who will drive our mission forward and uphold our standards of excellence.',
                        }}
                    />
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
        </>
    );
}
