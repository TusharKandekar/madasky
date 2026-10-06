"use client";

// import React, { useEffect, useState } from "react";
import Image from "next/image";
import BaseUrl from "@/components/BaseUrl";

interface MeetTheFounderProps {
    altText: string;
}
export default function Founder({altText} : MeetTheFounderProps) {
    // const [altText, setAltText] = useState("");
    // const image = "/assets/images/mr.amitmittal.png";

    // useEffect(() => {
    //     const fetchAltText = async () => {
    //         const alt = await getImagesAltText(image); // Resolve the Promise
    //         console.log("aaaa",alt)
    //         setAltText(alt); // Update state with the resolved value
    //     };

    //     fetchAltText();
    // }, []);

    // console.log("ALt Our people image: ", altText)
    return (
        <div className="w-full py-[10vh]  flex  items-center justify-center max-md:flex-col">
            <div className="flex items-center justify-center w-1/2 max-md:w-full">
                <div className="relative w-[63%] max-md:w-[90%] min-h-[80vh] max-md:min-h-[62vh]"> {/* Adjust height as needed */}
                    <Image
                        src={`${BaseUrl().imgurl}mr.amitmittal.png`}
                        alt={altText ? altText : "Amit Mittal - Founder"}
                        fill
                  
                        className="object-cover"
                    />
                </div>

                {/* <Image src="assets/images/mr.amitmittal.png" alt="Amit Mittal - Founder" layout="fill" className="w-[63%] max-md:w-[90%]" /> */}
            </div>
            <div className="w-1/2 items-left justify-left flex flex-col max-md:w-[90%] max-md:items-center max-md:justify-center">
                <h2 className='w-full font-bold text-6xl text-left max-md:text-4xl max-md:text-center max-md:pt-[7vh]'>Meet the Founder</h2>
                <p className="w-full py-2 text-2xl font-thin text-justify max-md:text-center">
                    Amit Mittal</p>
                <div className='w-[50%] h-[2px] text-xl bg-blue-500 max-md:w-full' style={{
                    background: 'linear-gradient(to right, #05528a 50%, #d02c22 50%)',

                }}></div>
                <p className='text-justify text-gray-500 py-4 text-xl w-[85%] max-md:text-justify max-md:w-full'>Amit has more than 25 years of experience in growing business and delivering consistent results. He is a business coach who has helped many businesses achieve their goals and accomplished tremendous growth in sales, marketing, team training, strategic planning, and much more. Amit has a result-driven approach and focuses on the development of the business and it's owner as well. He uses defined business strategies that boost business growth. As an accomplished business coach and proven track record for transforming business and lives, Amit is all set to assist eager business owners to achieve their desired dreams and goals.</p>
                <p className='text-justify text-gray-500 py-4 text-xl w-[85%] max-md:text-justify max-md:w-full'>Amit served the family business before moving out and finding success in the business world. Amit is a proud husband and father of two amazing daughters. He is a business accelerator with critical business knowledge and tools from ActionCoach, and has an MBA from a top-ranked global business schools - NYU-Stern, LSE, and HEC Paris. Amit is on a mission to create wealth and grow 20,000 enterprises and touch 100,000 lives in the next 20 years..</p>

            </div>
        </div>
    );
}
