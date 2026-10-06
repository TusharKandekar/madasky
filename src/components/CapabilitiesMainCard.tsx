"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Button from "./Button";


interface Details1 {
    title: string;
    img: string;
    description?: string;
    hdes?: React.ReactNode[];
    updes?: React.ReactNode[];
    direction?: string;
    des2?: string;
    des?: string;
    udes?: string;
    altText?: string;
    calendarButton?: boolean;
    btnText?: string;

}
export default function CapabilitiesMainCard({ details1 }: { details1: Details1 }) {
    // Ensure hdes and updes are always arrays
    const { hdes = [], updes = [] } = details1;

    // State to manage the visibility of the content
    const [isExpanded, setIsExpanded] = useState(false);

    // Toggle the visibility
    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

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
            <div className="relative w-full h-auto bg-no-repeat bg-cover py-[9vh]">
                <div className="absolute inset-0 bg-[url('/assets/images/industrybg.png')] bg-no-repeat bg-cover opacity-20 max-md:bg-none max-md:flex max-md:items-center max-md:justify-center"></div>
                <div className='flex items-center justify-center w-full'>
                    <div className="relative z-10  h-auto w-[85%] border-gray-200  bg-white shadow-2xl rounded-2xl border-solid border-1 flex items-center flex-col justify-center max-md:w-[90%] max-md:py-[2vh]">
                        <div className={`h-auto flex w-full p-10 justify-start ${details1.direction} items-start gap-[2vw] max-md:p-0 max-md:justify-center max-md:items-center max-md:flex-col-reverse max-xl:flex-col`}>
                            <div className="w-[55%] pl-14 text-4xl font-bold mb-6 max-md:w-[90%] max-md:pl-0 max-md:flex max-md:justify-center max-md:items-center max-md:flex-col max-xl:w-full max-xl:pl-0">
                                <h2 className="mb-5 text-5xl leading-tight text-gray-800 max-md:w-full max-md:text-4xl max-md:text-center max-md:pt-8">
                                    {details1.title}
                                </h2>
                                <p className="text-xl font-normal text-justify text-gray-500 mb-7 max-md:text-xl max-xl:text-2xl">
                                    {details1.des}
                                    {
                                        details1.des2
                                    }




                                    {/* if(details1.des2){details1.des} */}


                                </p>
                                <div className="flex flex-col gap-4 text-md">
                                    {updes.map((item, index) => (
                                        <div key={index}>{item}</div>
                                    ))}
                                </div>



                            </div>
                            <div className="relative w-[45%] h-[60vh] flex items-center justify-center max-md:w-[95%] max-md:h-auto max-xl:w-full">
                                <Image
                                    src={details1.img}
                                    // alt={details1.imgAlt || "Image description"}
                                    alt={details1.altText ? details1.altText : details1.title} fill

                                    className="rounded-xl w-[100%] h-[100%] object-contain max-md:object-fit max-md:"
                                />
                            </div>
                        </div>
                        <div className={`w-[85%] mt-[-6vh] pb-10`}>
                            {isExpanded && (
                                <div className="flex flex-col gap-4 text-md">
                                    {hdes.map((item, index) => (
                                        <div key={index}>{item}</div>
                                    ))}
                                    <p className="text-xl font-normal text-justify text-gray-500 mb-7">
                                        {details1.udes}
                                    </p>
                                </div>
                            )}


                            <div className='flex gap-6'>


                                {hdes.length > 0 && (
                                    <button
                                        onClick={handleToggle}
                                        className="bg-[#152869] text-white px-5 py-2 hover:bg-[#112054] rounded-lg text-sm mt-4"
                                    >
                                        {isExpanded ? 'Show Less' : 'Show More'}
                                    </button>
                                )}

                                {details1.calendarButton && (
                                    <div className="mt-4">
                                        <Button text={details1?.btnText || "Book Your Session"} />
                                    </div>
                                )}

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

