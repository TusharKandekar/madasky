"use client";
// import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import BaseUrl from './BaseUrl';

interface IndustriesProps {
    image: string;
    title: string;
    titletext: string;
    link: string[];
    order: string;
    subtitle: string[];
    altText?: string;
}

export default function Industries({ image, title, titletext, link, order, subtitle, altText }: IndustriesProps) {

    // const [altText, setAltText] = useState("");



    return (
        <div
            className={`w-full h-[85vh] flex ${order} items-center justify-center bg-slate-50 max-md:flex-col max-md:h-auto max-md:gap-6`}
        >
            <Image
                src={`${BaseUrl().imgurl}${image}`}
                alt={altText ? altText : "Madasky Consulting"}
                className="object-cover w-1/2 h-full max-md:w-full max-md:h-auto"
                width={500}
                height={300}

            />
            <div className="flex flex-col items-center justify-start w-1/2 h-full max-md:w-full py-9 max-md:justify-center">
                <div className="w-[80%] h-auto flex flex-col items-start justify-start gap-5 max-md:w-[90%] max-md:justify-center max-md:items-center max-md:text-xl">
                    <h2 className="w-full text-6xl font-bold font-baskervville max-md:text-4xl max-md:text-center">
                        {title}
                    </h2>
                    <div className="w-[40%] h-[3px] bg-blue-300" style={{
                        background: 'linear-gradient(to right, #05528a 50%, #d02c22 50%)',

                    }}></div>
                    <p className="text-xl font-normal text-left text-gray-500 max-md:text-justify">{titletext}</p>

                    <div className="grid w-full grid-cols-2 gap-5 max-md:grid-cols-1">
                        {subtitle.map((sub, index) => (
                            <a href={link[index]} key={index} target="_blank" rel="noopener noreferrer" className='w-full'>
                                <div className="flex items-center justify-start gap-5 shadow-sm p-3 className='w-full' border-l-4 border-[#bce1fd]">

                                    <div className="flex flex-col items-start justify-start gap-1">
                                        <h3 className="text-2xl font-semibold text-gray-900 font-baskervville">
                                            {sub}
                                        </h3>

                                    </div>
                                </div>

                            </a>


                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}


