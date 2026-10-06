"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
// import { getImagesAltText } from './CommonData';
interface details1 {
    title: string;
    img: string;
    altText: string,
    h1: string,
}
export default function Banner2({ img, title, altText, h1 }: details1) {
    // console.log(img);
    // const [altText, setAltText] = useState("");
    // const image = img


    // useEffect(() => {
    //     const fetchAltText = async () => {
    //         const alt = await getImagesAltText(image); // Resolve the Promise
    //         // console.log("aaaa", alt)
    //         setAltText(alt); // Update state with the resolved value
    //     };

    //     fetchAltText();
    // }, []);
    return (
   

        <div className="relative w-full h-[90vh] max-md:h-[40vh]">
            <div className={`absolute top-0 left-0 w-full h-full bg-[#0006] z-20`}></div>
            <div className="relative w-full h-full">
                <Image
                    className="object-fill w-full max-md:h-auto"
                    src={img}
                    fill

                    // alt="Aspiration"
                    alt={altText ? altText : title}


                />
            </div>
            <div className="absolute top-[4vh] left-0 z-30 flex flex-col items-start justify-end w-full h-full p-20 text-white max-md:p-3 ">
                <span className={`text-3xl max-md:text-xl white`}>{title}</span>
                <h1 className={`text-3xl font-baskervville text-white white font-bold max-md:text-xl max-md:w-full max-md:font-thin max-md:pt-4 max-md:pb-8`}>
                    {h1 ? h1 : ""}
                </h1>
            </div>
        </div>
    );
}

