// // import React from 'react'
// "use client";
// import React, { useEffect, useRef, useState } from 'react';
// import Image from 'next/image';
// // import { getImagesAltText } from './CommonData';
// interface ShortScreenHistoryProps {
//     title: string;
//     description: string;
//     date: string;
//     img: string;
//     margin: string;
//     bg: string;
// }
// const ShortScreenHistory = ({
//     title,
//     description,
//     date,
//     img,
//     margin,
    
// }: ShortScreenHistoryProps) => {
//     const [isVisible, setIsVisible] = useState(false);
//     const ref = useRef(null);

//     const image = img

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     setIsVisible(true);
//                 } else {
//                     setIsVisible(false);
//                 }
//             },
//             {
//                 threshold: 0.2, // Element appears when 50% of it is in the viewport (middle of the screen)
//             }
//         );

//         if (ref.current) {
//             observer.observe(ref.current);
//         }

//         return () => {
//             if (ref.current) {
//                 observer.unobserve(ref.current);
//             }
//         };
//     }, []);

//     const [altText, setAltText] = useState("");


//     //   useEffect(() => {
//     //     const fetchAltText = async () => {
//     //       const alt = await getImagesAltText(image); // Resolve the Promise
//     //       console.log("aaaa", alt)
//     //       setAltText(alt); // Update state with the resolved value
//     //     };

//     //     fetchAltText();
//     //   }, []);

//     return (
//         // <div className='w-full h-auto md:hidden'>
//         //     <div className='w-[90%] flex'>
//         //         <div className='h-auto w-[5px] bg-gray-700 ml-4'></div>
//         //         <div className='flex flex-col mb-20'>
//         //             <div className='mb-4 ml-4 text-4xl font-bold text-black'>
//         //                 {date}
//         //             </div>
//         //             <div className='flex flex-row'>
//         //                 <div>__</div>
//         //                 <h2 className='w-[100%] text-gray-700 font-bold text-2xl mb-3'>{title}</h2>
//         //             </div>

//         //             <p className='w-[98%] text-gray-700 font-medium text-2xl ml-4 mb-3 text-wrap max-md:text-xl max-md:text-justify'>{description}</p>
//         //             <div className='ml-4'>
//         //                 <img src={img} alt="" />
//         //             </div>

//         //         </div>
//         //     </div>

//         // </div>
//         <div className='w-full h-auto md:hidden' ref={ref}>
//             <div className='w-[90%] flex'>
//                 <div className='h-auto w-[5px] bg-gray-700 ml-4'></div>
//                 <div
//                     className={`flex flex-col mb-20 transition-transform duration-500 ${isVisible ? 'animate-move-left' : 'opacity-0'
//                         }`}
//                 >
//                     <div className='mb-4 ml-4 text-4xl font-bold text-black'>
//                         {date}
//                     </div>
//                     <div className='flex flex-row'>
//                         <div>__</div>
//                         <h2 className='w-[100%] text-gray-700 font-bold text-2xl mb-3'>{title}</h2>
//                     </div>
//                     <p className='w-[98%] text-gray-700 font-medium text-2xl ml-4 mb-3 text-wrap max-md:text-xl max-md:text-justify'>
//                         {description}
//                     </p>
//                     <div className='relative w-full h-[40vh] ml-4'>
//                         {/* <img src={img} alt={altText ? altText : title} /> */}
//                         <Image
//                             src={img}
//                             alt={title}
//                             fill
                            
//                             className='object-cover'
                            
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>



//     )
// }

// export default ShortScreenHistory



// *****************************************************************


"use client";
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import BaseUrl from '@/components/BaseUrl';

interface ShortScreenHistoryProps {
  title: string;
  description: string;
  date: string;
  img: string;
  margin: string;
  bg: string;
  altText?: string;
}

const ShortScreenHistory = ({
  title,
  description,
  date,
  img,
  margin,
  altText
}: ShortScreenHistoryProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentElement = ref.current; // Capture current ref
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <div className="w-full h-auto md:hidden" ref={ref}>
      <div className="w-[90%] flex">
        <div className="h-auto w-[5px] bg-gray-700 ml-4"></div>
        <div
          className={`flex flex-col mb-20 transition-transform duration-500 ${
            isVisible ? 'animate-move-left' : 'opacity-0'
          }`}
        >
          <div className="mb-4 ml-4 text-4xl font-bold text-black">
            {date}
          </div>
          <div className="flex flex-row">
            <div>__</div>
            <h2 className="w-[100%] text-gray-700 font-bold text-2xl mb-3">
              {title}
            </h2>
          </div>
          <p className="w-[98%] text-gray-700 font-medium text-2xl ml-4 mb-3 text-wrap max-md:text-xl max-md:text-justify">
            {description}
          </p>
          <div className="relative w-full h-[40vh] ml-4">
            <Image
              src={`${BaseUrl().imgurl}${img}`}
              alt={altText ? altText : title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortScreenHistory;
