// import PropTypes from 'prop-types';
// import { truncateText } from '../components/CommonData';
// import React, { useEffect, useState } from "react";
// import { getImagesAltText3 } from "./CommonData";


import Image from "next/image";
import { truncateText } from "@/common/api";
import Link from "next/link";

interface UpcomingEventsProps {
  image: string;
  title: string;
  description: string;
  date: string;
  comments?: number;
  readMoreLink: string;
  altText?: string;
  popUp?: number;
}

export default function UpcomingEvents({
  image,
  title,
  description,
  date,
  comments,
  readMoreLink,
  altText,
  popUp,
}: UpcomingEventsProps) {
  // const [altText, setAltText] = useState("");

  // useEffect(() => {
  //   const fetchAltText = async () => {
  //     const alt = await getImagesAltText3(image); // Resolve the Promise
  //     setAltText(alt); // Update state with the resolved value
  //   };

  //   fetchAltText();
  // }, []);

  // if (popUp !== 1) {
  //   return null;
  // }

  console.log("Read more link: ", readMoreLink);

  return (
    <div className="w-[70%] h-[50vh] flex rounded-lg items-center justify-center mx-auto bg-white  shadow-md overflow-hidden max-md:h-auto max-md:w-full my-7">
      <div className="flex items-center justify-center w-full h-full max-md:flex-col">
        <div className="w-[50%] h-full max-md:w-full relative max-md:h-[30vh]">
          <Image
            className="object-cover w-full h-full"
            fill
            src={image}
            alt={altText || title}
          />
        </div>
        <div className="p-8 w-[50%] max-md:w-full">
          <div className="uppercase tracking-wide text-sm text-[#152869] font-semibold">
            {date}
          </div>
          <h3 className="block mt-1 text-2xl font-bold leading-tight text-black">
            {title}
          </h3>
          <p className="mt-2 text-gray-500">{truncateText(description)}</p>
          <div className="flex items-center mt-4">
            <span className="text-gray-500">{comments} Comments</span>
          </div>
          <div className="mt-4">
            {/* <a href={`/event-details/${readMoreLink.toLowerCase().replace(/\s+/g, '-')}`} className="text-[#152869] hover:text-indigo-900 font-bold">
              Read Mo
              re
            </a> */}

            <Link
              href={`/event-details/${readMoreLink
                .toLowerCase()
                .replace(/[ ]/g, "-").replace(/[.:&%;,']/g, '')}`}
              className="text-[#152869] hover:text-indigo-900 font-bold"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
