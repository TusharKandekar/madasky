"use client";

import IndustriesLi from '@/components/IndustriesLi';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
interface JewelleryProps {
    details1: {
        title: string;
        img: string;
        description?: string;
        altText?: string
    };
    industries: string[];
}
export default function Jewellery({ details1, industries = [] }: JewelleryProps) {
    // const [altText, setAltText] = useState("");
    const image = details1?.img


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
            <div className='w-full h-auto bg-[#bce1fd75] py-[8vh]'>
                <div className="font-sans max-w-7xl   mx-auto p-10  max-md:w-full max-md:p-0 max-md:flex max-md:flex-col max-md:justify-center max-md:items-center max-xl:w-full max-xl:flex max-xl:items-center max-xl:justify-center">
                    <div className="h-auto flex p-10 mb-10 bg-white rounded-2xl items-center shadow-2xl max-md:flex-col max-md:h-auto max-md:p-3 max-md:shadow-none max-md:w-[90%] max-xl:flex-col max-xl:w-full max-xl:p-3">
                        <Image
                            src={details1.img} width={500} height={300}
                            // alt="Sustainable growth lightbulb"
                            alt={ details1.altText ? details1.altText : details1.title}
                            className=" h-[50vh] object-cover rounded-lg w-1/2 max-md:w-full max-md:h-auto max-md:rounded-lg max-xl:object-cover max-xl:w-full"
                        />

                        <div className="w-[55%] pl-14 text-4xl font-bold mb-6 max-md:w-full max-md:pl-0 max-md:mt-4 max-xl:w-full">
                            <h2 className="mb-5 text-gray-800 text-5xl w-full text-center  leading-tight max-md:text-[25px] max-xl:text-[55px]">
                                {details1.title}
                            </h2>
                            {industries && industries.length > 0 && (
                                <ul className={`grid gap-x-[10vh] max-md:ml-4 max-md:gap-x-[4vh] ${details1.title === "Financial Services" ? "grid-cols-1" : "grid-cols-2"} `}>
                                    <IndustriesLi industries={industries} />
                                </ul>
                            )}
                            {/* <Link
                            href="#"
                            className="text-blue-600 no-underline text-xl gap-2 font-serif flex hover:gap-6 transition-all duration-300 ease-in"
                        >
                            Explore More<span>→</span>
                        </Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

