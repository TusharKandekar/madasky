"use client";
import React, { useState, useEffect } from 'react';
import BaseUrl from '@/components/BaseUrl';
// import { getImagesAltText } from './CommonData';
import Image from 'next/image';
interface AspirationItemProps {
    title: string;
    items: Record<string, string>;
    order: string;
    img: string;
    bgcolor: string;
    altText?: string
}

export default function AspirationItem({ title, items, order, img, bgcolor, altText }: AspirationItemProps) {

    // const [altText, setAltText] = useState("");
    const image = img

    // useEffect(() => {
    //     const fetchAltText = async () => {
    //       const alt = await getImagesAltText(image); // Resolve the Promise
    //     //   console.log("aaaa", alt)
    //       setAltText(alt); // Update state with the resolved value
    //     };

    //     fetchAltText();
    //   }, []);
    return (
        <div className={`flex w-[100%]  ${bgcolor} ${order} gap-10 max-md:p-2 max-md:flex-col-reverse p-[10vh] max-md:py-[7vh]`}>
            <div className="lg:w-1/2 flex items-start flex-col justify-center lg:pr-8 mb-8 lg:mb-0 max-md:w-[90%]">
                <div className="flex items-center mb-4">
                    {/* <img
                        className="w-12 h-12 mr-4"
                        src="/assets/images/51.jpg"
                        alt="Goal icon"
                    /> */}
                    <div className='relative w-12 h-12 mr-4'>


                        <Image
                            fill
                            alt={`${altText}`}
                            src={`/assets/images/51.jpg`}


                            className="object-cover rounded-xl max-md:object-fill"
                        />
                    </div>

                    <h3 className="py-4 text-3xl font-semibold text-black">
                        {title}
                    </h3>
                </div>
                <div className=" w-[50%] hidden lg:w-1/2 max-md:flex items-center justify-center rounded-2xl overflow-hidden max-md:w-full max-md:pb-[5vh]">
                    {/* <img className="rounded-2xl w-[80%] overflow-hidden max-md:w-full" src={img} alt={altText ? altText : title} /> */}
                    <div className='relative w-[80%] overflow-hidden max-md:w-full'>


                        <Image
                            fill
                            alt=''
                            src={`/assets/images/51.jpg`}


                            className="object-cover rounded-xl max-md:object-fill"
                        />
                    </div>
                </div>
                <ul className="pl-5 space-y-4 text-black list-disc">
                    {Object.keys(items).map((key, index) => (
                        <li key={index}>
                            <strong className="text-2xl text-dark-blue">{key}:</strong>
                            <p className='text-xl text-justify text-gray-500'>{items[key]}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className=" w-[50%] lg:w-1/2 flex items-center justify-center rounded-2xl overflow-hidden max-md:w-full max-md:hidden">
                {/* <img className="rounded-2xl w-[80%] overflow-hidden max-md:w-full" src={img} alt={altText ? altText : title} /> */}
                <div className='relative w-[80%] h-[30rem] max-md:w-full'>


                    <Image
                        fill
                        alt=''
                        src={`${BaseUrl().imgurl}${img}`}


                        className="object-fil rounded-xl max-md:object-fill"
                    />
                </div>
            </div>
        </div>
    );
}

