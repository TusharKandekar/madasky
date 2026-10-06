'use client';

// import { ShareIcon } from '@heroicons/react/24/outline'
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import Link from 'next/link';
import Image from 'next/image';
import DomainURL from '@/components/DomainURL';
// import React, { useEffect, useState } from "react";
// import { getImagesAltText3 } from "./CommonData";

interface BlogCardsProps {
    image: string;
    date: string;
    title: string;
    des: string;
    link: string;
    url: string;
    index: number;
}

export default function BlogCards({ image, date, title, des, link, url, index } : BlogCardsProps) {

    // const [altText, setAltText] = useState("");

    // useEffect(() => {
    //   const fetchAltText = async () => {
    //     const alt = await getImagesAltText3(image); // Resolve the Promise
    //     setAltText(alt); // Update state with the resolved value
    //   };
  
    //   fetchAltText();
    // }, []);
  

    const createLink = (link: string) => {
        return `/show-blog/${link}`;
    }


    const handleCopy = (url: string) => {
        const currentUrl = DomainURL();
        return navigator.clipboard.writeText(`${currentUrl}${url}`);
    }

    return (
        <>
            <Link href={`/show-blog/${link}`} key={index} className="max-w-sm  rounded-2xl overflow-hidden hover:scale-105 bg-white shadow-lg transition duration-300 ease-in-out hover:shadow-xl">
                <div className='flex flex-col items-center justify-center h-52 overflow-hidden relative'>
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="w-full h-52 object-cover transition-all duration-300 cursor-pointer hover:scale-110"
                    />
                </div>
                <div className="px-4 flex flex-col items-start justify-start gap-2 py-4">
                    <span className='text-sm text-slate-700'>
                        {date}
                    </span>
                    <h2 className="font-bold text-xl mb-3 text-gray-800  cursor-pointer  hover:text-blue-700 leading-tight">
                        {title}
                    </h2>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {des}
                    </p>
                    <div className="flex items-center justify-between w-full">
                        
                        <button type="button" onClick={() => handleCopy(createLink(url))} className="bg-blue-50 shadow-xl border-1 border-gray-500 p-2 rounded-full text-black transition-all duration-150 ease-in-out hover:scale-110">
                            {/* <ShareIcon className="h-4 w-4" /> */}
                        </button>
                    </div>

                </div>
            </Link>
        </>
    )
}

