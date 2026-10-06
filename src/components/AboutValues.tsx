
"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
// import { getImagesAltText } from './CommonData';
import { BiSolidRightArrow } from "react-icons/bi";
import BaseUrl from '@/components/BaseUrl';
interface AboutValuesProps {
    color: string;
    title: string;
    description: string;
    imgSrc: string;
    direction: string;
    paddingDirection: string;
    altText?: string
}
const AboutValues = ({ color, title, description, imgSrc, direction, paddingDirection, altText }: AboutValuesProps) => {
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
        <div style={{ backgroundColor: color }} className='w-full h-auto p-20 max-md:w-full max-md:p-3 max-md:py-[7vh]'>
            <div className={`flex ${direction} border-[1.5px] border-gray-500 rounded-[25px] w-[90%] bg-white h-full mx-auto overflow-hidden justify-around max-md:flex-col max-md:w-full max-md:justify-center max-md:items-center`}>
                <div className='w-[45%] py-5 max-md:w-[90%]'>
                    {/* <img className='w-[70%] h-[425px] mx-auto pt-10 max-md:w-full max-md:h-auto' src={imgSrc} alt={altText ? altText : 'Madasky'}
                    /> */}
                    <div className='relative w-[70%] max-md:w-full min-h-[26rem] mx-auto pt-10'>


                        <Image
                            fill
                            alt= {altText ? altText : 'Madasky'}
                            src={`${BaseUrl().imgurl}${imgSrc}`}


                            className="object-cover rounded-xl max-md:object-fit max-md:"
                        />
                    </div>
                </div>
                <div className={`w-[55%] ${paddingDirection} mt-20 max-md:w-full max-md:flex max-md:flex-col max-md:justify-center max-md:items-center max-md:p-0`}>
                    <div className='flex gap-4'>
                        <BiSolidRightArrow className='text-2xl text-[#152869] mt-4 max-md:hidden' />
                        <h2 className='text-[#152869] text-6xl font-semibold font-times'>{title}</h2>

                    </div>
                    <div className="w-[33%] h-[5px] bg-[#bce1fd] mt-3" style={{
                        background: 'linear-gradient(to right, #05528a 50%, #d02c22 50%)',

                    }}></div>
                    {/* <div className="w-[33%] h-[5px] bg-blue-300 mt-3" style={{
                        background: 'linear-gradient(to right, #05528a 50%, #d02c22 50%)',

                    }}></div> */}
                    <div className='ml-10'>
                        <p className={`font-times text-[#3f3735] text-3xl mt-6 font-bold leading-8`}>{description}</p>
                        <div className='flex flex-row gap-16 mt-6 ml-6 max-md:gap-7 max-md:p-5 max-md:m-0'>
                            <div>
                                <ul className='text-xl leading-9 text-black list-disc font-times'>
                                    <li>Customer Centricity</li>
                                    <li>Integrity</li>
                                    <li>Leadership</li>
                                    <li>Accountability</li>
                                    <li>Transparency</li>
                                    <li>Communication</li>

                                </ul>
                            </div>
                            <div>
                                <ul className='text-xl leading-9 text-black list-disc font-times'>
                                    <li>Teamwork</li>
                                    <li>Vision</li>
                                    <li>Empowerment</li>
                                    <li>Persistence</li>
                                    <li>Resilience</li>

                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutValues