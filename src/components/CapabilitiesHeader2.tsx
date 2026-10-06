import React from 'react'
import Image from 'next/image'
import BaseUrl from '@/components/BaseUrl';
import Button from "./Button";

interface details1 {
    heading1: string
    paragraph1: string
    imgSrc: string,
    altText?: string
    paragraph2?: string
    calendarButton?: boolean;
    btnText?: string;
}
const CapabilitiesHeader2 = ({ details1, border }: { details1: details1, border: string }) => {
    return (
        <div className={`flex w-full pb-8 mt-20 ${border} border-gray-300 max-md:flex-col`}>

            <div className='flex flex-col gap-8 w-[60%] max-md:w-full'>

                <div className='text-black font-bold text-4xl max-md:text-3xl leading-[1]'>
                    <h2>{details1.heading1}</h2>
                </div>

                <div className='hidden w-full rounded-lg max-md:block'>
                    <div className='relative w-[80%] max-md:w-[100%] min-h-[15rem]'>

                        <Image
                            fill
                            alt={`${details1.altText ? details1.altText : details1.heading1}`}
                            // src={`${details1.imgSrc}`}
                            src={details1.imgSrc ? `${BaseUrl().imgurl}${details1.imgSrc}` : "/assets/images/default-featured-image.jpg"}



                            className="rounded-xl w-[80%] object-cover max-md:object-fit max-md:mx-auto"
                        />
                    </div>
                </div>
                {/* style={{ fontFamily: "Helvetica, Arial, sans-serif" }}  */}
                <div className='text-gray-700 text-[20px] font-extralight flex flex-col gap-4'  >

                    <p className='text-justify text-gray-700'>{details1.paragraph1}</p>

                    <p className='text-justify text-gray-700'>{details1.paragraph2}</p>



                </div>

                {/* appointment button  */}
                {details1.calendarButton && (
                    <div className="mt-4">
                        <Button text={details1?.btnText || "Book Your Session"} />
                    </div>
                )}

            </div>

            <div className='w-[40%] rounded-lg flex items-center justify-center max-md:hidden'>


                <div className='relative w-[80%] min-h-[30vh] max-h-[16rem]'>


                    <Image
                        fill
                        // alt=''
                        // src={`${details1.imgSrc}`}
                        alt={`${details1.altText ? details1.altText : "Madasky Consulting"}`}
                        // src={`${BaseUrl().imgurl}${details1.imgSrc}`}
                        src={details1.imgSrc ? `${BaseUrl().imgurl}${details1.imgSrc}` : "/assets/images/default-featured-image.jpg"}




                        className="object-fill rounded-xl max-md:object-fit max-md:"
                    />
                </div>
            </div>





        </div>


    )
}

export default CapabilitiesHeader2