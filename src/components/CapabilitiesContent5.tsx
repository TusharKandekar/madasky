import React from 'react'
import Image from 'next/image'
interface CapabilitiesContent5Props {
    details1: {
        heading1: string;
        paragraph1?: string
        data: {
            data1?: string;
            data2?: string;
        }[];
        paragraph2?: string;
        paragraph3?: string;
        imgSrc: string;
        altText?: string
    };
    border: string;
   
}

const CapabilitiesContent5 = ({ details1, border }: CapabilitiesContent5Props) => {
    return (
        <div className={`flex w-full pb-8 mt-20 ${border} border-gray-300 `}>

            <div className='flex flex-col gap-8 w-[60%] max-md:w-full'>

                <div className='text-black font-bold text-4xl max-md:text-3xl leading-[1]'>
                    <h2>{details1.heading1}</h2>
                </div>

                <div className='hidden w-full rounded-lg max-md:block'>
                    {/* <img
                        src={`${details1.imgSrc}`}


                        className="rounded-xl w-[80%] object-cover max-md:object-fit max-md:mx-auto"
                    /> */}
                    <div className='relative w-[100%] min-h-[15rem]'>


                        <Image
                            fill
                            alt={`altText ? altText : details1.heading1`}
                            src={`${details1.imgSrc}`}


                            className="object-cover rounded-xl max-md:object-fit max-md:"
                        />
                    </div>
                </div>

                <div className='text-gray-500 text-[20px] font-extralight flex flex-col gap-4 text-justify' style={{ fontFamily: "Helvetica, Arial, sans-serif" }} >

                    {
                        details1.paragraph1 &&
                        <p className='text-gray-700'>{details1.paragraph1}</p>

                    }


                    <ul className='pl-5 list-disc'>



                        {
                            details1.data.map((item, index) => (
                                <li className='' key={index}>
                                    <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>{item.data1} </span>{item.data2}</p>
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


                </div>

            </div>

            <div className='w-[40%] rounded-lg flex items-center justify-center max-md:hidden'>
                {/* <img
                    src={`${details1.imgSrc}`}


                    className="rounded-xl w-[80%] object-cover max-md:object-fit max-md:"
                /> */}

                <div className='relative w-[80%] min-h-[15rem]'>


                    <Image
                        fill
                        alt=''
                        src={`${details1.imgSrc}`}


                        className="object-cover rounded-xl max-md:object-fit max-md:"
                    />
                </div>
            </div>


        </div>
    )
}

export default CapabilitiesContent5