"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import BaseUrl from '@/components/BaseUrl';
// import { getImagesAltText } from './CommonData';

interface PurposeVisionMissionsValuesProps {
    color: string;
    title: string;
    description: string;
    imgSrc: string;
    direction: string;
    paddingDirection: string;
    altText?: string
}

const PurposeVisionMissionsValues = ({ color, title, description, imgSrc, direction, paddingDirection, altText }: PurposeVisionMissionsValuesProps) => {
    // const [altText, setAltText] = useState("");

    const image = imgSrc


    // useEffect(() => {
    //     const fetchAltText = async () => {
    //         const alt = await getImagesAltText(image); // Resolve the Promise
    //         console.log("aaaa", alt)
    //         setAltText(alt); // Update state with the resolved value
    //     };

    //     fetchAltText();
    // }, []);
    return (
        <div style={{ backgroundColor: color }} className='w-full h-auto p-20 max-md:p-3 max-md:py-[8vh]'>
            <div className={`flex ${direction} border-[1.5px] border-gray-500 rounded-[25px] w-[90%] bg-white h-full mx-auto overflow-hidden justify-around max-md:flex-col max-md:justify-center max-md:items-center max-md:w-full`}>
                <div className='w-[45%] py-5 max-md:w-[100%]'>
                    <div className='relative w-[70%] max-md:w-full  mx-auto h-[425px]'>
                        {/* 
                        <Image src={imgSrc && imgSrc.trim() !== "" ? imgSrc : "/assets/images/logo2.png"} alt={"Madasky"} layout='fill' className='pt-10 mx-auto max-md:w-full max-md:h-auto' /> */}
                        {imgSrc && (
                            <Image
                                src={`${BaseUrl().imgurl}${imgSrc}`}
                                alt={`altText ? altText : 'Madasky'`}
                                layout="fill"
                                className="pt-10 mx-auto max-md:w-full max-md:h-auto"
                            />
                        )}

                    </div>
                </div>
                <div className={`w-[55%] ${paddingDirection} mt-10 max-md:w-full max-md:flex max-md:flex-col max-md:justify-center max-md:items-center max-md:p-0`}>
                    <h2 className='text-6xl font-semibold text-black font-times max-md:text-center'>{title}</h2>
                    <div className="w-[33%] h-[5px] bg-[#bce1fd] mt-3" style={{
                        background: 'linear-gradient(to right, #05528a 50%, #d02c22 50%)',

                    }}></div>

                    <p className='font-times text-gray-500 text-xl mt-10 text-justify font-medium leading-8 max-md:p-3 max-md:text-center max-md:w-full max-md:pb-[10vh]'>{description}</p>
                    {/* <img src="" alt="" /> */}
                </div>
            </div>
        </div>
    )
}

export default PurposeVisionMissionsValues