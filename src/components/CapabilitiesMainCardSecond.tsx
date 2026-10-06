"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface details1 {
    title: string;
    img: string;
    des: string;
    altText?: string

}
export default function CapabilitiesMainCardSecond({ details1 }: { details1: details1 }) {
    const [altText, setAltText] = useState("");
    const image = details1?.img


    // useEffect(() => {
    //     const fetchAltText = async () => {
    //         const alt = await getImagesAltText(image); // Resolve the Promise
    //         // console.log("aaaa", alt)
    //         setAltText(alt); // Update state with the resolved value
    //     };

    //     fetchAltText();
    // }, []);
    return (
        <>
            <div className="font-sans max-w-[87%] border-gray-200 mx-auto max-md:p-0 max-md:w-[90%]">


                <div className="relative flex items-center h-auto p-10 mb-10 border-gray-200 border-solid shadow-2xl rounded-2xl border-1 max-md:flex-col max-md:w-full max-md:p-3 max-md:rounded-lg max-xl:flex-col">

                    <div className='w-[45%] min-h-[50vh] max-md:w-full max-xl:w-full relative'>
                        <Image
                            src={details1.img}
                            // alt="Sustainable growth lightbulb"
                            alt={details1.altText ? details1.altText : details1.title} fill

                            className="object-cover w-full h-auto max-md:w-full max-md:h-auto max-md:rounded-lg"
                        />
                    </div>

                    <div className="w-[50%] pl-14 text-4xl font-bold mb-6 max-md:w-full max-md:pl-0 max-md:flex max-md:justify-center max-md:items-center max-md:flex-col max-xl:w-full max-xl:pl-0">
                        <h2 className="mb-5 text-5xl leading-tight text-gray-800 max-md:pt-8 max-md:text-3xl max-md:text-center max-xl:pt-8">
                            {details1.title}
                        </h2>
                        <p className="pr-12 text-xl font-normal text-justify text-gray-500  mb-7 max-md:text-justify max-md:text-lg max-md:p-3">
                            {details1.des}
                        </p>
                        {/* <Link
            href="#"
            className="flex gap-2 font-serif text-xl text-blue-600 no-underline transition-all duration-300 ease-in hover:gap-6"
        >
            Explore More<span>→</span>
        </Link> */}
                    </div>

                </div>
            </div>


        </>
    );
}


