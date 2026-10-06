import React from 'react'
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
}
const CapabilitiesContent7 = ({ details1, border }: { details1: details1, border: string }) => {
    return (
        <div className={`flex w-full pb-8 mt-20 ${border} border-gray-300 max-md:flex-col`}>

            <div className='flex flex-col gap-8 w-[100%] max-md:w-full'>

                <div className='text-black font-bold text-4xl max-md:text-3xl leading-[1]'>
                    <h2>{details1.heading1}</h2>
                </div>

                {/* <div className='hidden w-full rounded-lg max-md:block'>
                    <img
                        src={`${details1.imgSrc}`}


                        className="rounded-xl w-[80%] object-cover max-md:object-fit max-md:mx-auto"
                    />
                </div> */}

                <div className='text-gray-500 text-[20px] font-extralight flex flex-col gap-4 text-justify' style={{ fontFamily: "Helvetica, Arial, sans-serif" }} >

                    {
                        details1.paragraph1 &&
                        <p className='text-gray-700'>{details1.paragraph1}</p>

                    }


                    <ul className='pl-5 list-disc'>



                        {
                            details1.data.map((item, index) => (
                                <li className='' key={index}>
                                    <p className='font-normal text-gray-700'><span className='font-normal text-gray-600'>{item.data1} </span>{item.data2}</p>
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

            {/* <div className='w-[40%] rounded-lg flex items-center justify-center max-md:hidden'>
                <img
                    src={`${details1.imgSrc}`}


                    className="rounded-xl w-[80%] object-cover max-md:object-fit max-md:"
                />
            </div> */}


        </div>
    )
}

export default CapabilitiesContent7