// import React, { useEffect, useState } from 'react';
// import { ArrowLeftIcon } from '@heroicons/react/24/solid';
// import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import { Metadata } from "next";
import AboutNavbar from '@/components/Header/AboutNavbar';
import UpcomingEvents from '@/components/UpcomingEvents';
import Footer from '@/components/Footer';
import Link from 'next/link';// import {  formatDate, getBlogs,getBaseURL } from '../components/CommonData';
import BaseUrl from '@/components/BaseUrl'
import { getAllBlogs, formatDate, fetchMetaDataByPageName, getWebBlogs, getDataByPageName, filterByWebImage, getImageData } from "@/common/api";
import type { PageMetaDataResponse } from "@/common/types";


const title = "Events";

let PageMetadata : PageMetaDataResponse;

export async function generateMetadata(): Promise<Metadata> {
  PageMetadata = await fetchMetaDataByPageName({ pageName: "Events" });
//   console.log("Metaas: ", PageMetadata);

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
        `${BaseUrl().mainurl}events`
      },

  };
}


// const PageMetadata = await fetchMetaDataByPageName({ pageName: "Events" });


// // console.log(PageMetadata);
// const rawKeywords: string = PageMetadata?.data?.meta_keyword || '';
// const formattedKeywords: string[] = rawKeywords
//     .split(',')
//     .map((kw: string) => kw.trim());



// export const metadata: Metadata = {
//     title: `Madasky | ${PageMetadata?.data?.meta_title || 'Events'}`,
//     description: `${PageMetadata?.data?.meta_desc || 'Driving transformation and innovation across industries.'}`,
//     keywords: formattedKeywords,

// }
export default async function Blog() {

    const title = "events";
    const events = await getAllBlogs({ pageName: title });


    // console.log(events);
    interface eventItem {
        id: 1;
      event_title: string;
      event_time: string;
      event_date: string;
      event_register_link: string;
      event_desc: string;
      event_location: string;
      event_content: string;
      event_image: string;
      event_pop_up: string;
      created_date: string;
      created_time: string;
      created_at: string;
      created_by: string;
    }

    return (
        <>
            <AboutNavbar />
            <div className=' bg-[#f0f0f0]'>
                <div className="max-w-6xl px-4 py-8 mx-auto">
                    <div className="mb-8">
                        <Link
                            href="/"
                            className="text-[#333333] hover:text-gray-800 flex items-center"
                        >
                            {/* <ArrowLeftIcon className="w-4 h-4 mr-1" /> */}
                            Back to Home
                        </Link>
                    </div>

                    <h1 className="font-serif font-extrabold text-gray-700 text-7xl mb-7 max-md:text-5xl">
                        New at MADASKY Event
                    </h1>
                    <p className="mb-8 text-xl text-gray-600">
                        A collection of stories about our people, our capabilities,
                        our research, and the ever-changing face of our firm.
                    </p>
                    <div className="mb-8 border-2 border-slate-300"></div>

                    {Array.isArray(events?.data) &&
                            events.data.map((event: eventItem, index: number) => (
                            <UpcomingEvents
                                key={index}
                                image={event.event_image ? `${BaseUrl().baseurl}/${event.event_image}` : "/assets/images/default_image.png"}
                                title={event.event_title}
                                description={event.event_desc}
                                date={formatDate(event.event_date)}
                                readMoreLink={event.event_title}
                                // readMoreLink={`/event-details/${event.event_title.replace(/[.:&%;,']/g, '').replace(/\s+/g, '-').toLowerCase()}`}

                                altText={event.event_title}

                                




                            />
                        ))
                    }

                </div>
            </div>
            <Footer />
        </>
    );
}
