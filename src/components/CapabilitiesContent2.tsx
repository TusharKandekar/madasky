import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import BaseUrl from './BaseUrl'
import Button from "./Button";

interface details1 {
    heading1?: string
    heading2?: string
    heading3?: string
    heading4?: string
    subHeading?: string
    paragraph1?: string
    data: {
        data1?: string
        data2?: string
    }[]
    data2?: {
        data1?: string
        data2?: string
    }[]
    imgSrc: string,
    altText?: string
    calendarButton?: boolean;
    btnText?: string;
}
const CapabilitiesContent2 = ({ details1, border }: { details1: details1, border: string }) => {
    return (



        <div className={`flex w-full pb-8 mt-20 ${border} border-gray-300`}>

            <div className='flex flex-col w-full gap-8'>

                <div className='text-black font-bold text-4xl leading-[1] max-md:text-3xl'>
                    <h2 className=''>{details1.heading1}</h2>

                </div>

                <div className='hidden w-full rounded-lg max-md:block'>
                    {/* <img
                        src={`${details1.imgSrc}`}


                        className="rounded-xl w-[80%] object-cover max-md:object-fit max-md:mx-auto"
                    /> */}


                    <div className='w-[40%] max-md:w-[100%] rounded-lg hidden max-md:block max-md:h-[30vh] relative'>
                        <Image
                            // src={`${BaseUrl().imgurl}${details1.imgSrc}`}
                            src={`${BaseUrl().imgurl}${details1.imgSrc}`}

                            fill
                            alt={`${details1.altText ? details1.altText : "Madasky Consulting"}`}
                            className="rounded-xl w-[80%] object-fill max-md:object-fit max-md:mx-auto"
                        />
                    </div>
                </div>
                {/* style={{ fontFamily: "Helvetica, Arial, sans-serif" }}  */}
                <div className='text-gray-500 text-[20px] font-extralight text-justify max-md:text-justify flex flex-col gap-4'  >

                    {/* {
                        details1.heading2 &&

                        <p className='text-gray-700 w-[70%]'>{details1.heading2}</p>
                    } */}

                    {
                        details1.paragraph1 &&

                        <p className='text-2xl font-semibold text-gray-600 max-md:text-left'>{details1.paragraph1}</p>
                    }


                    <ul className='flex flex-col gap-0 pl-5 list-disc max-md:px-0'>

                        <div className='space-y-4'>


                            {
                                details1.heading2 &&

                                <p className='text-gray-700 w-[65%] max-md:w-full'>{details1.heading2}</p>
                            }


                            {
                                details1.subHeading &&

                                <p className='text-gray-700 text-2xl font-semibold w-[65%] max-md:w-full'>{details1.subHeading}</p>
                            }
                        </div>




                        <div className='flex mt-4'>

                            <div className='w-[60%] max-md:w-full max-md:pl-5 h-fit'>

                                <ul className='pl-4 list-disc'>
                                    {
                                        details1.data.map((item, index) => (
                                            <li className='' key={index}>
                                                <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>{item.data1}: </span>{item.data2}</p>
                                            </li>
                                        )
                                        )}

                                </ul>


                            </div>




                            <div className='flex justify-center w-[40%]  rounded-lg max-md:hidden'>
                                {/* <img
                                    src={`${details1.imgSrc}`}


                                    className="object-fit w-[90%] h-[100%] rounded-xl max-md:object-fit max-md:"
                                /> */}


                                <div className='relative w-[80%] min-h-[30vh] max-h-[16rem]'>


                                    <Image
                                        fill
                                        alt={`${details1.altText ? details1.altText : "Madasky Consulting"}`}
                                        // src={`${BaseUrl().imgurl}${details1.imgSrc}`}
                                        src={details1.imgSrc ? `${BaseUrl().imgurl}${details1.imgSrc}` : "/assets/images/default-featured-image.jpg"}



                                        className="object-fill rounded-xl max-md:object-fit max-md:"
                                    />
                                </div>
                            </div>

                        </div>
                        <div className='pl-4 max-md:pl-6'>

                            {
                                details1.data2 && details1.data2.map((item, index) => (
                                    <li key={index}>
                                        <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>{item.data1}: </span>{item.data2}</p>
                                    </li>
                                )
                                )}
                        </div>




                    </ul>

                    {
                        details1.heading3 &&

                        <p className='text-gray-700'>{details1.heading3}</p>
                    }

                    {
                        details1.heading4 &&

                        <p className='text-gray-700'>{details1.heading4}</p>
                    }

                    {details1.calendarButton && (
                        <div className="mt-4">
                            <Button text={details1?.btnText || "Book Your Session"} />
                        </div>
                    )}


                </div>

            </div>

        </div>
    )
}

export default CapabilitiesContent2