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
    title: "Manufacturing Insights & Case Studies | Madasky Consulting",
    description: "Manufacturing insights on factory performance, Home Textiles, Apparel, digital manufacturing and execution-led transformation.",
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

    const allBlogs: BlogItem[] = Array.isArray(blogs?.data) ? blogs.data : [];
    const manufacturingTopic = /manufactur|factory|textile|apparel|garment|fabric|sewing|production|industrial|MES|shopfloor|material flow|operations excellence|planning|quality|capacity/i;
    const featuredBlogs = allBlogs.filter((blog) => manufacturingTopic.test(`${blog.blog_title} ${blog.blog_desc}`));
    const otherBlogs = allBlogs.filter((blog) => !manufacturingTopic.test(`${blog.blog_title} ${blog.blog_desc}`));
    const blogGroups = [
      { heading: "Manufacturing Insights", items: featuredBlogs },
      { heading: featuredBlogs.length > 0 ? "More Insights" : "Latest Insights", items: otherBlogs },
    ].filter((group) => group.items.length > 0);

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

                    <h1 className="font-serif font-extrabold text-[#0E2C53] text-6xl mb-7 max-md:text-4xl">
                        Manufacturing Insights & Case Studies
                    </h1>
                    <p className="mb-8 text-xl text-gray-600">
                        Ideas, factory-floor learning and verified project outcomes for Home Textile, Apparel and wider manufacturing teams.
                    </p>
                    <div className="mb-8 flex flex-wrap gap-4">
                        <Link href="/case-studies" className="rounded-md bg-[#0E2C53] px-5 py-3 font-semibold text-white hover:bg-[#193f72]">View Case Studies</Link>
                        <Link href="/factory-diagnostic" className="rounded-md border border-[#0E2C53] px-5 py-3 font-semibold text-[#0E2C53] hover:bg-white">Factory Diagnostic</Link>
                    </div>
                    <div className="border-2 border-slate-300"></div>
                    {blogGroups.map((group) => (
                      <section key={group.heading} className="py-9">
                        <h2 className="mb-6 font-baskervville text-3xl font-bold text-[#0E2C53]">{group.heading}</h2>
                        <div className='grid grid-cols-3 gap-8 max-md:grid-cols-1'>
                        {group.items.map((blog: BlogItem, index: number) => (

                                
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
                      </section>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}
