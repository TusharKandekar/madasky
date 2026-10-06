// "use client";
// import React, { useState, useRef, useEffect } from 'react';
// import useCountUp from '@/hooks/useCountUp';
// import Image from 'next/image';

// const BusinessAchievements = () => {
//     const [isVisible, setIsVisible] = useState(false);
//     const sectionRef = useRef<HTMLDivElement | null>(null);
//     const happyCustomers = useCountUp({ end: 27, start: isVisible });
//     const workQuality = useCountUp({ end: 252, start: isVisible });
//     const awardWinners = useCountUp({ end: 16280, start: isVisible });
//     const hourslearning = useCountUp({ end: 203642, start: isVisible });

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     setIsVisible(true);
//                     if (sectionRef.current) observer.unobserve(sectionRef.current);
//                 }
//             },
//             { threshold: 0.1 }
//         );
//         if (sectionRef.current) observer.observe(sectionRef.current);

//         return () => {
//             if (observer && sectionRef.current) observer.unobserve(sectionRef.current);
//         };
//     }, []);

//     return (
//         <div
//             ref={sectionRef}
//             className="text-black bg-[#f8fafc] py-16 px-4 flex items-center justify-center text-center w-full h-[80vh] relative max-md:py-0 max-md:h-auto max-md:flex-col"
//         >
//             <div className="flex items-center justify-center w-[50%] max-md:w-full">
//                 {/* <img className="w-full" src="/assets/images/counterbg.webp" alt="Background" /> */}
//                 <div className={`relative w-full h-[54vh] rounded-lg mt-2 mx-auto`}>

//                     <Image src={`/assets/images/counterbg.webp`} alt={"Background"} fill className='object-fill rounded-2xl max-md:object-fill' />
//                 </div>
//             </div>
//             <div className="w-full top-[35%] right-0 absolute z-10 max-md:w-[90%] max-md:flex max-md:flex-col max-md:items-center max-md:justify-center max-md:relative max-md:pb-[10vh]">
//                 <h2 className="mb-6 text-6xl font-bold max-md:text-3xl">Join Us And Achieve Business Goal</h2>
//                 <div className="flex flex-col justify-around py-8 space-y-8 md:flex-row md:space-y-0">
//                     <div>
//                         <h3 className="mb-2 text-5xl font-thin text-blue-500">+{Number(happyCustomers).toLocaleString()}</h3>
//                         <p className="text-xl">Years of Experience</p>
//                     </div>
//                     <div className="w-[1px] bg-gray-300"></div>
//                     <div>
//                         <h3 className="mb-2 text-5xl font-thin text-blue-500">{workQuality}</h3>
//                         <p className="text-xl">Business Impacted</p>
//                     </div>
//                     <div className="w-[1px] bg-gray-300"></div>
//                     <div>
//                         <h3 className="mb-2 text-5xl font-thin text-blue-500">{awardWinners}</h3>
//                         <p className="text-xl">Lives Touched</p>
//                     </div>
//                     <div className="w-[1px] bg-gray-300"></div>
//                     <div>
//                         <h3 className="mb-2 text-5xl font-thin text-blue-500">{hourslearning}</h3>
//                         <p className="text-xl">Hours of Learning</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BusinessAchievements;


// ***********************************************************
"use client";
import React, { useState, useRef, useEffect } from 'react';
import useCountUp from '@/hooks/useCountUp';
import Image from 'next/image';

const BusinessAchievements = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const happyCustomers = useCountUp({ end: 27, start: isVisible });
  const workQuality = useCountUp({ end: 252, start: isVisible });
  const awardWinners = useCountUp({ end: 16280, start: isVisible });
  const hourslearning = useCountUp({ end: 203642, start: isVisible });

  useEffect(() => {
    const currentSection = sectionRef.current; // Capture the current ref
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (currentSection) observer.unobserve(currentSection);
        }
      },
      { threshold: 0.1 }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="text-black bg-[#f8fafc] py-16 px-4 flex items-center justify-center text-center w-full h-[80vh] relative max-md:py-0 max-md:h-auto max-md:flex-col"
    >
      <div className="flex items-center justify-center w-[50%] max-md:w-full">
        <div className="relative w-full h-[54vh] max-md:h-[30vh] rounded-lg mt-2 mx-auto">
          <Image
            src="/assets/images/counterbg.webp"
            alt="Background"
            fill
            className="object-fill rounded-2xl max-md:object-fill"
          />
        </div>
      </div>
      <div className="w-full top-[35%] right-0 absolute z-10 max-md:w-[90%] max-md:flex max-md:flex-col max-md:items-center max-md:justify-center max-md:relative max-md:pb-[10vh]">
        <h2 className="mb-6 text-6xl font-bold max-md:text-3xl">
          Join Us And Achieve Business Goal
        </h2>
        <div className="flex flex-col justify-around py-8 space-y-8 md:flex-row md:space-y-0">
          <div>
            <h3 className="mb-2 text-5xl font-thin text-blue-500">
              +{Number(happyCustomers).toLocaleString()}
            </h3>
            <p className="text-xl">Years of Experience</p>
          </div>
          <div className="w-[1px] bg-gray-300"></div>
          <div>
            <h3 className="mb-2 text-5xl font-thin text-blue-500">{workQuality}</h3>
            <p className="text-xl">Business Impacted</p>
          </div>
          <div className="w-[1px] bg-gray-300"></div>
          <div>
            <h3 className="mb-2 text-5xl font-thin text-blue-500">{awardWinners}</h3>
            <p className="text-xl">Lives Touched</p>
          </div>
          <div className="w-[1px] bg-gray-300"></div>
          <div>
            <h3 className="mb-2 text-5xl font-thin text-blue-500">{hourslearning}</h3>
            <p className="text-xl">Hours of Learning</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessAchievements;
