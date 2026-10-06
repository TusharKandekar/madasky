import Image from "next/image";
import { Metadata } from "next";
import AboutNavbar from "@/components/Header/AboutNavbar";
// import { FaGreaterThan } from 'react-icons/fa';
// import { FaLessThan } from 'react-icons/fa';
import Footer from "@/components/Footer";
// import { formatDate, getGallery, getBaseURL } from '/components/CommonData';
import HelpYou from "@/components/HelpYou";
// import React, { useEffect, useState } from "react";
// import { getImagesAltText3 } from "/components/CommonData";
import { ImageCard } from "@/components/ImageCard";
import BaseUrl from "@/components/BaseUrl";
import {
  getAllBlogs,
  fetchMetaDataByPageName,
  getImageAltText,
  getImageData,
} from "@/common/api";
import type { PageMetaDataResponse } from "@/common/types";

const title = "Gallery";
let PageMetadata: PageMetaDataResponse;

export async function generateMetadata(): Promise<Metadata> {
  PageMetadata = await fetchMetaDataByPageName({ pageName: "Gallery" });
  //   console.log("Metaas: ", PageMetadata);

  return {
    title: PageMetadata.data.meta_title,
    description: PageMetadata.data.meta_desc,
    keywords: PageMetadata.data.meta_keyword,
    authors: {
      name: `${PageMetadata?.data?.author || "Madasky"}`,
      url: "https://madasky.com",
    },
    alternates: {
      canonical: `${BaseUrl().mainurl}gallery`,
    },
  };
}

// const PageMetadata = await fetchMetaDataByPageName({ pageName: "Gallery" });

// // console.log(PageMetadata);
// const rawKeywords: string = PageMetadata?.data?.meta_keyword || '';
// const formattedKeywords: string[] = rawKeywords
//     .split(',')
//     .map((kw: string) => kw.trim());

// export const metadata: Metadata = {
//     title: `Madasky | ${PageMetadata?.data?.meta_title || 'Gallery'}`,
//     description: `${PageMetadata?.data?.meta_desc || 'Driving transformation and innovation across industries.'}`,
//     keywords: formattedKeywords,

// }
export default async function Gallery() {
  const arr = ["259.jpg"];

  let backimages;

  let serverError = false;

  try {
    backimages = await getImageAltText(arr);
  } catch (error) {
    // console.error("Server Error:", error);
    serverError = true;
  }

  // console.log("Images", images);
  if (serverError) {
    return <div>Server Error</div>;
  }

  const imgAltText = await getImageData(backimages);
  const title = "gallery";
  const images = await getAllBlogs({ pageName: title });

  // console.log(images);
  interface ImageItem {
    gallery_title: string;
    gallery_image: string;
    id: string;
    gallery_desc: string;
  }
  return (
    <>
      <AboutNavbar />
      <div className="bg-[#f0f0f0]">
        <div className="mx-auto ">
          <div className=" overflow-hidden h-[60vh] mb-8 relative">
            <Image
              src={`${BaseUrl().imgurl}/259.jpg`}
              alt="Gallery Header"
              fill
              className="h-full object-cover shadow-md object-[center_40%] animate-fade-in"
            />

            <div
              className="absolute inset-0 bg-gradient-to-br from-black/0 via-black/30 to-black/70"
              aria-hidden="true"
            ></div>
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"
              aria-hidden="true"
            ></div>
            <h2 className="absolute font-serif text-4xl font-semibold text-center text-white transform -translate-x-1/2 -translate-y-1/2 md:text-5xl lg:text-6xl left-1/2 top-2/3 drop-shadow-lg animate-fade-in">
              Photo Gallery
            </h2>
            <nav className="absolute transform -translate-x-1/2 bottom-10 left-1/2">
              <ol className="inline-flex items-center space-x-1 text-white md:space-x-3">
                <li className="inline-flex items-center">
                  <a
                    href="#"
                    className="text-sm font-medium hover:text-blue-400"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <a
                      href="#"
                      className="ml-1 text-sm font-medium hover:text-blue-400"
                    >
                      Gallery
                    </a>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1 text-sm font-medium text-gray-300">
                      Photo Gallery
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>

          <div className="flex flex-col items-center w-full">
            {/* <div className="w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[200px] gap-4"> */}
            <div className="w-[90%] grid grid-cols-1 max-md:flex max-md:flex-col lg:grid-cols-3 auto-rows-[200px] gap-4">
              {Array.isArray(images?.data) &&
                images.data.map((image: ImageItem, index: number) => (
                  <div
                    className="relative overflow-hidden transition-all duration-300 rounded-lg shadow-md group hover:shadow-lg"
                    style={{
                      gridRowEnd: `span ${Math.ceil(Math.random() * 2) + 1}`,
                    }}
                    key={index}
                  >
                    {/* <img
                                        src={`${getBaseURL()}/uploads/${image.blogImage}`}
                                        alt={`Photo ${index + 1}`}
                                        
                                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                                    /> */}

                    <ImageCard
                      image={
                        image.gallery_image
                          ? `${BaseUrl().baseurl}/${image.gallery_image}`
                          : "/assets/images/default_image.png"
                      }
                      title={image.gallery_title}
                    />

                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                      <h3 className="font-serif text-lg text-white">
                        {image.gallery_title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-300">
                        {image.gallery_desc}
                      </p>
                    </div>
                    <div className="absolute flex space-x-2 transition-opacity duration-300 opacity-0 top-2 right-2 group-hover:opacity-100">
                      <button className="p-2 transition-colors duration-200 bg-white rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 text-gray-800"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
            </div>
            <hr className="w-full mt-8 border-t-2 border-gray-300" />
          </div>
        </div>
      </div>
      <HelpYou />
      <Footer />
    </>
  );
}
