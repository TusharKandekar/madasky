import React from 'react'
import Button from "./Button";

interface details {
    heading1?: string
    paragraph1?: string

    Data1: {
        subHeading?: string
        subData: {
            data1?: string
            data2?: string
        }[]
    }

    Data2: {
        subHeading?: string
        subData: {
            data1?: string
            data2?: string
        }[]
    }

    Data3: {
        subHeading?: string
        subData: {
            data1?: string
            data2?: string
        }[]
    }

    Data4: {
        subHeading?: string
        subData: {
            data1?: string
            data2?: string
        }[]
    }

    calendarButton?: boolean;
    btnText?: string;



    imgSrc: string,
    altText?: string
}
const TailoredSolutions = ({ details, border }: { details: details, border: string }) => {
    return (
        <div>
            <div className="px-4 py-12 mx-auto text-gray-800 w-[100%]">
                <h1 className="mb-6 text-3xl font-bold text-center md:text-4xl">
                    {details.heading1}
                </h1>
                <p className="mb-12 text-lg text-center">
                    {details.paragraph1}
                </p>

                <div className="flex flex-col justify-center gap-8">

                    <div className='flex flex-row justify-between w-full gap-10'>



                        <div className="w-[50%] p-6 text-black bg-white shadow-lg cursor-pointer rounded-2xl hover:bg-gray-100">
                            <h2 className="mb-4 text-xl font-semibold">{details.Data1.subHeading}</h2>
                            <ul className="space-y-2 list-disc">


                                {details.Data1.subData.map((item, index) => {
                                    return (
                                        <li className="!text-gray-700" key={index}><strong>{item.data1}:</strong> {item.data2}</li>
                                    )
                                })}
                            </ul>
                        </div>


                        <div className="w-[50%] p-6 text-black bg-white shadow-lg cursor-pointer rounded-2xl hover:bg-gray-100">
                            <h2 className="mb-4 text-xl font-semibold">{details.Data2.subHeading}</h2>
                            <ul className="space-y-2 list-disc">


                                {details.Data2.subData.map((item, index) => {
                                    return (
                                        <li className="!text-gray-700" key={index}><strong>{item.data1}:</strong> {item.data2}</li>
                                    )
                                })}
                            </ul>
                        </div>

                    </div>



                    <div className='flex flex-row justify-between w-full gap-10'>



                        <div className="w-[50%] p-6 text-black bg-white shadow-lg cursor-pointer rounded-2xl hover:bg-gray-100">
                            <h2 className="mb-4 text-xl font-semibold">{details.Data3.subHeading}</h2>
                            <ul className="space-y-2 list-disc">


                                {details.Data3.subData.map((item, index) => {
                                    return (
                                        <li className="!text-gray-700" key={index}><strong>{item.data1}:</strong> {item.data2}</li>
                                    )
                                })}
                            </ul>
                        </div>


                        <div className="w-[50%] p-6 text-black bg-white shadow-lg cursor-pointer rounded-2xl hover:bg-gray-100">
                            <h2 className="mb-4 text-xl font-semibold">{details.Data4.subHeading}</h2>
                            <ul className="space-y-2 list-disc">


                                {details.Data4.subData.map((item, index) => {
                                    return (
                                        <li className="!text-gray-700" key={index}><strong>{item.data1}:</strong> {item.data2}</li>
                                    )
                                })}
                            </ul>
                        </div>




                    </div>


                </div>


                {/* appointment button  */}
                {details.calendarButton && (
                    <div className="mt-10">
                        <Button text={details?.btnText || "Book Your Session"} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default TailoredSolutions