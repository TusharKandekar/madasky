// import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import BaseUrl from '@/components/BaseUrl';
// import { getImagesAltText } from './CommonData';

interface NewCapabilities2Props {
    title: string;
    description: string[];
    readMoreLink: string;
    order: string;
    image: string;
    bgcolor: string;
    altText?: string;
}
const NewCapabilities2 = ({ title, description, readMoreLink, order, image, bgcolor, altText }: NewCapabilities2Props) => {
    //   const [altText, setAltText] = useState("");


    //   useEffect(() => {
    //     const fetchAltText = async () => {
    //       const alt = await getImagesAltText(image); // Resolve the Promise
    //       // console.log("aaaa", alt)
    //       setAltText(alt); // Update state with the resolved value
    //     };

    //     fetchAltText();
    //   }, []);
    return (
        <div className={`flex items-center justify-center bg-[#f8fafc] w-[100%]  ${bgcolor} max-md:flex-col max-md:w-[90%]`}>
            {/* Left Section */}
            <div className={`w-full flex items-center justify-center ${order} h-auto max-md:flex-col max-md:h-auto`}>
                <div className="w-1/2 flex flex-col items-start justify-center p-[10vh] max-md:w-full max-md:p-0 max-md:py-[7vh] max-md:items-center">
                    <h2 className="text-5xl font-bold mb-4 max-md:text-center max-md:w-full max-md:text-2xl">{title}</h2>
                    <div className="w-40 h-[3px] bg-blue-500" style={{
                        background: 'linear-gradient(to right, #05528a 50%, #d02c22 50%)',

                    }} />
                    <div className="mt-5 space-y-4">
                        {description.map((item, index) => (
                            <p key={index} className="text-justify text-[#75787b] text-xl max-md:text-justify">
                                {item}
                            </p>
                        ))}
                    </div>
                    <a
                        href={readMoreLink}
                        className="px-6 py-2 border-2 border-gray-800 text-gray-500 font-semibold rounded hidden"
                    >
                        Read More
                    </a>
                </div>

                {/* Right Section */}
                <div className="w-1/2  flex items-center justify-center h-[85vh] max-md:w-full max-md:py-6 relative max-md:h-[40vh]">
                    <Image
                       src={`${BaseUrl().imgurl}${image}`}
                       // alt="Business Discussion"
                       alt={altText ? altText : "Madasky Consulting"}
                        fill
                        // alt="Business Discussion"
                        className="w-full h-full object-cover"
                    />

                </div>
            </div>
        </div>
    );
};



export default NewCapabilities2;
