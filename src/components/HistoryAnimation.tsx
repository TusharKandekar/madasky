"use client";
import { VscDash } from "react-icons/vsc";
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import BaseUrl from "@/components/BaseUrl";
// import { getImagesAltText } from './CommonData';
interface HistoryAnimationProps {
    title: string;
    description: string;
    date: string;
    img: string;
    margin: string;
    flexDirection: string;
    animation1: string;
    animation2: string;
    hidden1: string;
    hidden2: string;
    lineMargin: string;
    textAlign: string;
    val1: string;
    bg: string;
    altText?: string
}
const HistoryAnimation = ({
    title,
    description,
    date,
    img,
    margin,
    flexDirection,
    animation1,
    animation2,
    hidden1,
    hidden2,
    lineMargin,
    textAlign,
    val1,
    altText,
}: HistoryAnimationProps) => {

    // const [altText, setAltText] = useState("");

    const image = img


    // useEffect(() => {
    //     const fetchAltText = async () => {
    //         const alt = await getImagesAltText(image); // Resolve the Promise
    //         console.log("aaaa", alt)
    //         setAltText(alt); // Update state with the resolved value
    //     };

    //     fetchAltText();
    // }, []);
    return (


        <div className='w-[70%] mx-auto h-auto max-md:hidden'>
            <div className={`flex flex-col items-center mr-2`}>
                <div className='w-[1.3px] bg-black h-[40px]'></div>
                <div className='mt-2 text-3xl font-semibold text-black font-times'>{date}</div>
            </div>

            <div className={`flex ${flexDirection} ${lineMargin}`}>
                <div className={`w-[50%] ${margin} ${animation1} mt-16`}>
                    <div className={`relative ${val1} w-[94%]`}>
                        <Image width={"500"} height={"300"} src={`${BaseUrl().imgurl}${img}`} alt={altText ? altText : title} layout="responsive" className="object-cover"  />
                    </div>
                  

                </div>
                <div className={`w-[1.4px] bg-black h-auto`}></div>

                <div className={`w-[50%] h-auto flex flex-row ml-2 animate-slide-in-left mt-16 ${animation2}`}>
                    <div className={`text-4xl font-thin h-[1px]`}><VscDash className={`${hidden1}`} /></div>
                    <div className={`flex flex-col`}>
                        <h2 className={`text-3xl text-black font-medium flex-wrap pt-1 text-wrap ${textAlign}`}>{title}</h2>
                        <p className={`my-4 text-wrap text-justify  max-md:text-xl`}>{description}</p>
                    </div>
                    <div className={`text-4xl font-thin h-[1px]`}><VscDash className={`${hidden2}`} /></div>
                </div>
            </div>
        </div>
    );
};


export default HistoryAnimation;
