// import React, { useEffect, useState } from 'react';
// import { ArrowLeftIcon } from '@heroicons/react/24/solid';
// import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import { Metadata } from "next";

import AboutNavbar from '@/components/Header/AboutNavbar';
import BlogCards from '@/components/BlogCards';
import Footer from '@/components/Footer';
import Link from 'next/link';// import {  formatDate, getBlogs,getBaseURL } from '../components/CommonData';
import BaseUrl from '@/components/BaseUrl'
import { getAllBlogs, formatDate, fetchMetaDataByPageName, getWebBlogs, getDataByPageName, filterByWebImage, getImageData } from "@/common/api";
import type { PageMetaDataResponse } from "@/common/types";


const title = "Blogs";
// const PageMetadata = await fetchMetaDataByPageName({ pageName: "Blogs" });
let PageMetadata : PageMetaDataResponse;

export async function generateMetadata(): Promise<Metadata> {
  PageMetadata = await fetchMetaDataByPageName({ pageName: "Blogs" });
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
        `${BaseUrl().mainurl}blog`
      },

  };
}


// console.log(PageMetadata);
// const rawKeywords: string = PageMetadata?.data?.meta_keyword || '';
// const formattedKeywords: string[] = rawKeywords
//     .split(',')
//     .map((kw: string) => kw.trim());



// export const metadata: Metadata = {
//     title: `Madasky | ${PageMetadata?.data?.meta_title || 'Blogs'}`,
//     description: `${PageMetadata?.data?.meta_desc || 'Driving transformation and innovation across industries.'}`,
//     keywords: formattedKeywords,

// }
export default async function Blog() {

    const title = "blogs";
    const blogs = await getAllBlogs({ pageName: title });


    // console.log(blogs);
    interface BlogItem {
        blog_image: string;
        blog_date: string;
        blog_title: string;
        blog_desc: string;
        id: string;
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
                        New at MADASKY Blog
                    </h1>
                    <p className="mb-8 text-xl text-gray-600">
                        A collection of stories about our people, our capabilities,
                        our research, and the ever-changing face of our firm.
                    </p>
                    <div className="border-2 border-slate-300"></div>
                    <div className='grid grid-cols-3 gap-8 pt-8 max-md:grid max-md:grid-cols-1 max-md:h-auto'>


                        {Array.isArray(blogs?.data) &&
                            blogs.data.map((blog: BlogItem, index: number) => (

                                
                                <BlogCards
                                    key={index}
                                    image={blog.blog_image ? `${BaseUrl().baseurl}/${blog.blog_image}` : "/assets/images/default_image.png"}
                                    date={formatDate(blog.blog_date)}
                                    title={blog.blog_title}
                                    url=""
                                    des={blog.blog_desc}
                                    // link={blog.blog_title.replace(/ /g, '-')}
                                    link={blog.blog_title
                                        .replace(/[.:&%;,']/g, '')   // Remove unwanted punctuation
                                        .replace(/\s+/g, '-')      // Replace one or more spaces with hyphen
                                        .toLowerCase()}
                                      
                                    index={index}
                                />
                            ))}

                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
