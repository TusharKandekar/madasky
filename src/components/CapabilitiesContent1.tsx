import React from 'react'
import Image from 'next/image'
import BaseUrl from './BaseUrl';
import Button from "./Button";

interface details1 {
    heading1?: string,
    paragraph1?: string,
    paragraph2?: string,
    paragraph3?: string,
    imgSrc?: string,
    data: {
        data1: string,
        data2: string,

    }[],
    altText?: string,
    calendarButton?: boolean;
    btnText?: string;
}
const CapabilitiesContent1 = ({ details1, border }: { details1: details1, border: string }) => {

    return (
        <div className={`flex flex-col space-y-8 w-full pb-8 mt-20 ${border} border-gray-300 max-md:flex max-md:flex-col`}>

            <div className='text-black font-bold text-4xl max-md:text-3xl leading-[1]'>
                <h2>{details1.heading1}</h2>
            </div>

            <div className='flex w-full'>


                <div className='flex flex-col gap-8 w-[60%] max-md:w-full'>



                    <div className='w-[40%] max-md:w-[100%] rounded-lg hidden max-md:block max-md:h-[30vh] relative'>
                        <Image
                            // src={`${BaseUrl().imgurl}${details1.imgSrc}`}
                            fill
                            alt={`${details1.altText ? details1.altText : "Madasky Consulting"}`}
                            className="rounded-xl w-[80%] object-cover max-md:object-fit max-md:mx-auto"
                            src={details1.imgSrc ? `${BaseUrl().imgurl}${details1.imgSrc}` : "/assets/images/default-featured-image.jpg"}

                        />
                    </div>

                    {/* style={{ fontFamily: "Helvetica, Arial, sans-serif" }} */}
                    <div className='text-gray-500 text-[20px] font-extralight flex flex-col gap-4 text-justify max-md:text-justify'  >

                        {
                            details1.paragraph1 &&
                            <p className='text-gray-700'>{details1.paragraph1}</p>

                        }


                        <ul className='pl-8 max-md:pl-4 leading-[24px] list-disc'>



                            {
                                details1.data.map((item, index) => (
                                    <li className='' key={index}>
                                        <p className='mb-2 font-normal text-gray-700'><span className='font-semibold text-gray-600'>{item.data1}: </span>{item.data2}</p>
                                    </li>
                                )
                                )}



                        </ul>

                        {
                            details1.paragraph2 &&
                            <p className='text-gray-700'>{details1.paragraph2}</p>

                        }

                        {
                            details1.paragraph3 &&
                            <p className='text-gray-700 mt-[-2vh]'>{details1.paragraph3}</p>

                        }

                        {/* appointment button  */}
                        {details1.calendarButton && (
                            <div className="mt-4">
                                <Button text={details1?.btnText || "Book Your Session"} />
                            </div>
                        )}


                    </div>

                </div>

                <div className='w-[40%] rounded-lg flex justify-center max-md:hidden'>


                    <div className='relative w-[80%] min-h-[30vh] max-h-[16rem]'>


                        <Image
                            fill
                            alt={`${details1.altText ? details1.altText : "Madasky Consulting"}`}
                            src={`${BaseUrl().imgurl}${details1.imgSrc}`}


                            className="object-fill rounded-xl max-md:object-fit max-md:"
                        />
                    </div>

                </div>

            </div>





        </div>
    )
}

export default CapabilitiesContent1