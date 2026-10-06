import CareerButton from './CareerButton';
import Image from 'next/image';
// import React, { useState, useEffect } from 'react';
// import { getImagesAltText } from './CommonData';
import BaseUrl from '@/components/BaseUrl';
export default function CareerCard({altText}: {altText: string}) {
    // const [altText, setAltText] = useState("");
    const image = "/assets/images/career1.png"

    // useEffect(() => {
    //     const fetchAltText = async () => {
    //       const alt = await getImagesAltText(image); // Resolve the Promise
    //     //   console.log("aaaa", alt)
    //       setAltText(alt); // Update state with the resolved value
    //     };
    
    //     fetchAltText();
    //   }, []);
    return (
        <div className="w-full py-[7vh]  flex  items-start justify-center max-md:flex-col max-md:items-center">
            <div className="flex items-start justify-center w-1/2 max-md:w-full max-md:hidden">
            <div className='w-[83%] h-[63vh] relative'>

                <Image src={`${BaseUrl().imgurl}career1.png`} fill   className="w-[100%] object-cover max-md:w-[90%]" alt={altText} /> 
            </div>
            </div>
            <div className="w-1/2 items-left justify-left flex flex-col max-md:w-[90%] max-md:items-center max-md:justify-center">
                <h2 className='w-full font-bold text-6xl text-left max-md:text-2xl max-md:text-center max-md:pt-[7vh]'>Exceptional Talent Can Emerge from Anywhere</h2>

                <div className='w-[50%] h-[2px] text-xl my-5 bg-blue-500 max-md:w-full' style={{
                    background: 'linear-gradient(to right, #05528a 50%, #d02c22 50%)',

                }}></div>
                <p className='text-justify text-gray-500 py-4 text-xl w-[85%] max-md:text-justify max-md:w-full'>At Madasky Consulting, we believe in hiring people for their potential, not just their credentials. There's no single definition of what 'exceptional' looks like, and we understand that talent can emerge from any background. We see value in your capabilities, no matter where you developed them.</p>
                <p className='text-justify text-gray-500 py-4 text-xl w-[85%] max-md:text-justify max-md:w-full'>There is no single path to joining Madasky Consulting. Whether you've gained expertise on the job, acquired new skills through internships, or pursued advanced degrees, your experience matters. We welcome individuals who are just starting their careers, as well as those with decades of proven success. We value big ideas, diverse perspectives, and varied life experiences, and we're looking for people who are excited to take on new challenges.</p>



            </div>
        </div>
    );
}
