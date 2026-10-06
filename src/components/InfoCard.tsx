"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import BaseUrl from './BaseUrl';
// import { getImagesAltText } from './CommonData';
interface InfoCardProps {
    image: string,
    title: string,
    subtitle: string,
    description: string[],
    order: string,
    altText?: string

}
const InfoCard = ({ image, title, subtitle, description, order, altText }: InfoCardProps) => {

    // const [altText, setAltText] = useState("");


    // useEffect(() => {
    //     const fetchAltText = async () => {
    //         const alt = await getImagesAltText(image); // Resolve the Promise
    //         console.log("aaaa",alt)
    //         setAltText(alt); // Update state with the resolved value
    //     };

    //     fetchAltText();
    // }, []);

    return (
        <div className="w-full flex items-start justify-center  py-[6vh] max-md:flex-col max-md:items-center">
            <div
                className={`w-[90%] h-full ${order} flex items-start justify-center overflow-hidden max-md:flex-col`}
            >
                <div className="flex items-center justify-center w-1/2 h-[100%] max-md:h-[100%] max-md:w-full">
                    {/* <img
                        src={image}
                        alt={altText ? altText : 'Madasky'}
                        className="w-full h-[80%] object-cover pb-9  transition-all duration-300 cursor-pointer"
                    /> */}
                    <div className={`relative w-full h-[70vh] max-md:h-[40vh] rounded-lg mt-2 mx-auto`}>

                    <Image src={`${BaseUrl().imgurl}${image}`} alt={altText ? altText : 'Madasky'} fill className='object-fill rounded-2xl max-md:object-contain' />
                    </div>
                </div>
                <div className="flex flex-col items-start justify-center w-1/2 h-full gap-4 p-10 max-md:w-full max-md:items-center max-md:p-0">
                    <h2 className="font-serif text-5xl font-bold max-md:text-center max-md:text-4xl max-md:w-full">{title}</h2>
                    {subtitle && (
                        <p className="text-4xl text-gray-600">{subtitle}</p>
                    )}
                    <div className="w-40 h-0.5 bg-blue-500" style={{
                        background: 'linear-gradient(to right, #05528a 50%, #d02c22 50%)',

                    }} />
                    <div className="mt-5 space-y-4">
                        {description.map((item, index) => (
                            <p key={index} className="text-xl text-justify text-gray-500 max-md:text-justify">
                                {item}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};


export default InfoCard;
