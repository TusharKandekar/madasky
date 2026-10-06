import React from 'react'
import Image from 'next/image'
import BaseUrl from '@/components/BaseUrl'
interface details1 {
    heading1?: string
    heading2?: string
    mainHeading1?: string
    mainSubheading1?: string
    mainHeading2?: string
    mainSubheading2?: string
    data: {
        data1?: string
        data2?: string
    }[]
    data2: {
        data1?: string
        data2?: string
    }[]
    imgSrc?: string
    altText?: string
}
const CapabilitiesContent4 = ({ details1, border }: { details1: details1, border: string }) => {
    return (

        <div className={`flex w-full pb-8 mt-20 ${border} border-gray-300`}>

            <div className='flex flex-col w-full gap-8'>

                <div className='text-black font-bold text-4xl max-md:text-3xl leading-[1]'>
                    <h2>{details1.heading1}</h2>

                </div>


                <div className='hidden w-full rounded-lg max-md:block'>
                    <div className='relative w-[95%] mx-auto h-[15rem]'>

                        <Image
                            src={details1.imgSrc ? `${BaseUrl().imgurl}${details1.imgSrc}` : "/assets/images/default-featured-image.jpg"}


                            fill
                            alt={`${details1.altText ? details1.altText : "Madasky Consulting"}`}

                            className="rounded-xl w-[80%] object-cover max-md:object-fit max-md:mx-auto"
                        />
                    </div>

                </div>
                {/* style={{ fontFamily: "Helvetica, Arial, sans-serif" }} */}
                <div className='text-gray-500 text-[20px] font-extralight flex flex-col gap-4'  >

                    <p className='text-gray-700'>{details1.heading2}</p>


                    <ul className='flex flex-col pl-5 text-left list-disc'>


                        <div className='grid grid-cols-2 max-md:grid-cols-1'>

                            <div className='flex flex-col gap-4'>

                                <ul className='flex flex-col gap-2' key='outer-list'>

                                    <li className=''>
                                        <p className='text-2xl font-bold text-gray-800'>{details1.mainHeading1}</p>
                                        {
                                            details1.mainSubheading1 &&
                                            <p className='font-normal text-gray-700'>{details1.mainSubheading1}</p>

                                        }
                                    </li>
                                    <ul className='pl-8 leading-[24px] list-disc'>
                                        {
                                            details1.data.map((item, index) => (
                                                <li className='' key={index}>
                                                    <p className='mb-2 font-normal text-gray-700'><span className='font-semibold text-gray-600'>{item.data1}: </span>{item.data2}</p>
                                                </li>
                                            )
                                            )}

                                    </ul>
                                </ul>

                            </div>




                            <div className='flex items-center justify-center w-full rounded-lg max-md:hidden'>
                                <div className='relative w-[80%] h-
                                [40vh]'>

                                    <Image
                                        fill
                                        src={details1.imgSrc ? `${BaseUrl().imgurl}${details1.imgSrc}` : "/assets/images/default-featured-image.jpg"}
                                        alt={`${details1.altText ? details1.altText : "Madasky Consulting"}`}



                                        className="rounded-xl w-[80%] object-cover max-md:object-fit max-md:"
                                    />
                                </div>
                            </div>

                        </div>


                        <div className='mt-4'>



                            {
                                details1.mainHeading2 &&
                                <ul className='flex flex-col gap-2' key='outer-list'>

                                    <li className=''>
                                        <p className='text-2xl font-semibold text-gray-800'>{details1.mainHeading2}</p>
                                        {
                                            details1.mainSubheading2 &&
                                            <p className='font-normal text-gray-700'>{details1.mainSubheading2}</p>

                                        }
                                    </li>
                                    <ul className='pl-8 leading-[24px] list-disc'>
                                        {
                                            details1.data2.map((item, index) => (
                                                <li className='' key={index}>
                                                    <p className='mb-2 font-normal text-gray-700'><span className='font-semibold text-gray-600'>{item.data1}: </span>{item.data2}</p>
                                                </li>
                                            )
                                            )}

                                    </ul>
                                </ul>

                            }

                        </div>




                        {/* {
                            details1.data2.map((item, index) => (
                                <li className='' key={index}>
                                    <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>{item.data1}: </span>{item.data2}</p>
                                </li>
                            )
                            )} */}



                    </ul>


                </div>

            </div>

        </div>
    )
}

export default CapabilitiesContent4