"use client";
import React, { useState } from "react";
// import { getImagesAltText } from './CommonData';
import Image from "next/image";
import BaseUrl from "@/components/BaseUrl";
import Button from "@/components/Button";

interface Details1 {
  hdes?: React.ReactNode[];
  updes?: React.ReactNode[];
  title?: string;
  des?: string;
  img?: string;
  direction?: string;
  des2?: string;
  udes?: string;
  altText?: string;
  calendarButton?: boolean;
  btnText?: string;
  compact?: boolean;
  contentTopAlign?: boolean;
  inlineExpanded?: boolean;
  inlineButton?: boolean;
}
export default function CapabilitiesMainCard2({
  details1,
}: {
  details1: Details1;
}) {
  // Ensure hdes and updes are always arrays
  const { hdes = [], updes = [] } = details1;

  // State to manage the visibility of the content
  const [isExpanded, setIsExpanded] = useState(false);

  // // Toggle the visibility
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  // const [altText, setAltText] = useState("");

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
      <div className={`relative w-full h-auto bg-no-repeat bg-cover ${details1.compact ? "py-[3.5vh]" : "py-[9vh]"}`}>
        <div className="absolute inset-0 bg-[url('/assets/images/industrybg.png')] bg-no-repeat bg-cover opacity-20 max-md:bg-none max-md:flex max-md:items-center max-md:justify-center"></div>
        <div className="flex justify-center items-center w-full">
          <div className="relative z-10  h-auto w-[85%] border-gray-200  bg-white shadow-2xl rounded-2xl border-solid border-1 flex items-center flex-col justify-center max-md:w-[90%] max-md:py-[2vh]">
            <div
              className={`h-auto flex w-full p-0 justify-start ${details1.direction} ${details1.contentTopAlign ? "items-start" : "items-center"} gap-[2vw] max-md:p-0 max-md:justify-center max-md:items-center max-md:flex-col-reverse max-xl:flex-col`}
            >
              <div className={`w-[55%] h-full pl-14 text-4xl font-bold max-md:w-[90%] max-md:pl-0 max-md:flex max-md:justify-center max-md:items-center max-md:flex-col max-xl:w-full max-xl:pl-0 ${details1.compact ? "mb-0 pt-8 pb-8" : "mb-6"}`} >
                <h2 className="my-5 text-5xl leading-tight text-gray-800 max-md:w-full max-md:text-4xl max-md:text-center max-md:pt-8 max-md:hidden">
                  {details1.title}
                </h2>
                <p className="mb-0 text-xl font-normal text-justify text-gray-500 max-md:text-xl max-xl:text-2xl">
                  {details1.des}
                  {details1.des2 ? details1.des2 : ""}

                  {/* if(details1.des2){details1.des} */}
                </p>
                <div className="flex flex-col gap-4 text-md">
                  {updes.map((item, index) => (
                    <div key={index}>{item}</div>
                  ))}
                </div>

                {details1.inlineExpanded && isExpanded && (
                  <div className="flex flex-col gap-4 mt-4 text-md">
                    {hdes.map((item, index) => (
                      <div key={index}>{item}</div>
                    ))}
                    {details1.udes ? (
                      <p className="mb-2 text-xl font-normal text-left text-gray-500">
                        {details1.udes}
                      </p>
                    ) : null}
                  </div>
                )}

                {details1.inlineExpanded && hdes.length > 0 && (
                  <button
                    onClick={handleToggle}
                    className="bg-[#152869] text-white px-5 py-2 hover:bg-[#112054] rounded-lg text-sm mt-5 self-start"
                  >
                    {isExpanded ? "Show Less" : "Show More"}
                  </button>
                )}

                {details1.inlineButton && details1.calendarButton && (
                  <div className="mt-6 self-start">
                    <Button text={details1?.btnText || "Book Your Session"} />
                  </div>
                )}
              </div>
              <div className="w-[45%] mt-8 mb-4 h-full flex items-center justify-center max-md:w-[95%] max-md:h-auto max-xl:w-full">
                {/* <img
                                    src={details1.img}
                                    // alt={details1.imgAlt || "Image description"}
                                    alt={details1.title}

                                    className="rounded-xl w-[80%] h-[100%] mx-auto object-cover max-md:object-fit max-md:"
                                /> */}
                <div className="relative w-[80%] h-[40vh] max-md:h-[15rem] mx-auto max-md:w-[95%]">
                  <Image
                    fill
                    // src={details1?.img || ''}
                    //  alt={details1?.title || ''}
                    alt={`${
                      details1.altText ? details1.altText : "Madasky Consulting"
                    }`}
                    //  src={`${BaseUrl().imgurl}${details1.img} ? ${BaseUrl().imgurl}${details1.img} : "/assets/images/default-featured-image.jpg"`}

                    src={
                      details1.img
                        ? `${BaseUrl().imgurl}${details1.img}`
                        : "/assets/images/default-featured-image.jpg"
                    }
                    className="object-cover rounded-lg max-md:object-fill"
                  />
                </div>
              </div>
            </div>
            <div className={`w-[90%] max-md:w-[100%] mt-[-3.5vh] pb-10 `}>
              {isExpanded && (
                <div className="flex flex-col gap-4 text-md">
                  {hdes.map((item, index) => (
                    <div key={index}>{item}</div>
                  ))}
                  <p className="mb-7 text-xl font-normal text-justify text-gray-500">
                    {details1.udes}
                  </p>
                </div>
              )}

                {!details1.inlineExpanded && hdes.length > 0 && (
                  <button
                    onClick={handleToggle}
                    className="bg-[#152869] text-white px-5 py-2 hover:bg-[#112054] rounded-lg text-sm mt-4"
                  >
                    {isExpanded ? "Show Less" : "Show More"}
                  </button>
                )}

                {!details1.inlineButton && details1.calendarButton && (
                  <div className="mt-4">
                    <Button text={details1?.btnText || "Book Your Session"} />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* <div className="relative w-full h-auto bg-no-repeat bg-cover py-[9vh]">
                <div className="absolute inset-0 bg-[url('/assets/images/industrybg.png')] bg-no-repeat bg-cover opacity-20"></div>
                <div className="relative z-10 font-sans max-w-[85%] border-gray-200 mx-auto bg-white">
                    <div className='h-full p-5 w-[40%] float-right'>
                <img
                                src={details1.img}
                                alt={details1.imgAlt || "Image description"}
                                className="rounded-lg w-[100%]  object-contain float-right"
                            />
                            </div>
                            <h2 className="mb-5 text-5xl leading-tight text-gray-800">
                                {details1.title}
                            </h2>
                            <p className="mb-7 text-xl font-normal text-justify text-gray-500">
                                {details1.des}
                            </p>
                            <div className="flex flex-col gap-4 text-md">
                                {updes.map((item, index) => (
                                    <div key={index}>{item}</div>
                                ))}
                            </div>

                            {isExpanded && (
                                <div className="flex flex-col gap-4 text-md">
                                    {hdes.map((item, index) => (
                                        <div key={index}>{item}</div>
                                    ))}
                                    <p className="mb-7 text-xl font-normal text-justify text-gray-500">
                                        {details1.udes}
                                    </p>
                                </div>
                            )}

                            {hdes.length > 0 && (
                                <button
                                    onClick={handleToggle}
                                    className="px-5 py-2 mt-4 text-sm text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                                >
                                    {isExpanded ? 'Show Less' : 'Show More'}
                                </button>
                            )}                            
                            
                </div>
                </div>
             */}
    </>
  );
}
