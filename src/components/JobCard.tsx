"use client";
import React, { useState } from 'react';
// import PropTypes from 'prop-types'; // Import PropTypes for prop type validation
// import { Link } from 'react-router-dom';
import  Link from 'next/link';
interface JobCardProps {
    title: string;
    description: string;
    border: string;
    keypoints: React.ReactNode[];
    path : string;
}

const JobCard = ({ title, description, border, keypoints } : JobCardProps) => {
  // State to manage the visibility of the content
  const [isExpanded, setIsExpanded] = useState(false);

  // State to manage hover effect
  const [isHovered, setIsHovered] = useState(false);

  // Toggle the visibility
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='w-full'>
      <div
        className='w-[85%] mx-auto flex flex-col gap-3 px-12 hover:shadow-custom-hover max-md:p-0'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`${border} py-10 flex flex-col gap-2 max-md:w-[90%] max-md:flex max-md:flex-col max-md:justify-center max-md:items-center max-md:mx-auto`}
        >
          <div>
            <h2
              className={`text-4xl text-black font-bold hover:text-[#152869] ${isHovered ? 'underline' : ''
                } inline-block max-md:text-justify max-md:text-3xl`}
            >
              {title}
            </h2>
          </div>

          <p className='text-xl font-medium text-black max-md:text-justify max-md:px-2'>
            {description}
          </p>

          <div className='w-[85%]  pb-10'>
            {isExpanded && (
              <div className='flex flex-col gap-4 text-md'>
                {keypoints.map((item, index) => (
                  <div className='text-black' key={index}>{item}</div>
                ))}
              </div>
            )}

            {keypoints.length > 0 && (
              <button
                onClick={handleToggle}
                className='bg-[#152869] text-white px-5 py-2 hover:bg-[#112054] rounded-lg text-sm mt-4'
              >
                {isExpanded ? 'Show Less' : 'Show More'}
              </button>
            )}
            <Link href="https://madasky.zohorecruit.in/careers" target="_blank" rel="noopener noreferrer">
              <button className='bg-[#152869] text-white px-5 py-2 hover:bg-[#112054] rounded-lg text-sm mt-4 ml-4'>Apply Now</button>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};


export default JobCard;
