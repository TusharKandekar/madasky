// import React from 'react'

// const CapabilitiesContent3 = ({ details1, border }) => {
//     return (

//         <div className={`flex w-full pb-8 mt-20 ${border} border-gray-300`}>

//             <div className='flex flex-col w-full gap-8'>

//                 <div className='text-black font-bold text-4xl leading-[1]'>
//                     <h2>{details1.heading1}</h2>

//                 </div>

//                 <div className='text-gray-500 text-[20px] font-extralight flex flex-col gap-4' style={{ fontFamily: "Helvetica, Arial, sans-serif" }} >

//                     {details1.heading2 &&
//                         <p className='text-gray-700'>{details1.heading2}</p>

//                     }



//                     <ul className='flex flex-col pl-5 text-justify list-disc'>


//                         <div className='grid grid-cols-2'>

//                             <div>
//                                 <ul className='list-disc' key="outer-list">
//                                     {
//                                         details1.data.map((item, index) => (
//                                             <li className='' key={index}>
//                                                 <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>{item.data1}: </span>{item.data2}</p>

//                                                 <ul className='list-disc'>
//                                                     {item.data3.map((item2, index1) => (
//                                                         <li key={index1}>
//                                                             <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>{item2.subData1}: </span>{item2.subData2}</p>
//                                                         </li>
//                                                     ))}
//                                                 </ul>
//                                             </li>
//                                         )
//                                         )}

//                                 </ul>
//                             </div>


//                             <div className='w-full'>
//                                 <img
//                                     src={`${details1.imgSrc}`}


//                                     className="rounded-xl w-[80%] h-[100%] mx-auto object-contain max-md:object-fit max-md:"
//                                 />
//                             </div>

//                         </div>




//                         {
//                             details1.data2.map((item, index) => (
//                                 <li className='' key={index}>
//                                     <p className='font-normal text-gray-700'><span className='font-semibold text-gray-600'>{item.data1}: </span>{item.data2}</p>
//                                 </li>
//                             )
//                             )}



//                     </ul>


//                 </div>

//             </div>

//         </div>
//     )
// }

// export default CapabilitiesContent3


// ***************************************************

import React from 'react'
import Image from 'next/image'
interface Details1 {
    imgSrc: string
    heading1: string
    heading2: string
    paragraph1: string
    data: {
        data1: string
        data2: string
        data3: {
            subData1: string
            subData2: string
        }[]
    }[]
    data2: {
        data1: string
        data2: string
        data3: {
            subData1: string
            subData2: string
        }[]
    }[]
}
const CapabilitiesContent3 = ({ details1, border }: { details1: Details1, border: string }) => {
    return (

        <div className={`flex w-full pb-8 mt-20 ${border} border-gray-300`}>

            <div className='flex flex-col w-full gap-8'>

                <div className='text-black font-bold text-4xl max-md:text-3xl leading-[1]'>
                    <h2>{details1.heading1}</h2>

                </div>

                <div className='relative hidden w-full rounded-lg max-md:block'>
                    <Image
                        src={`${details1.imgSrc}`}
                        alt='Capabilities'
                        fill
                        className="rounded-xl w-[80%] h-[100%] mx-auto object-cover max-md:object-fit max-md:"
                    />
                </div>

                <div className='text-gray-500 text-[20px] font-extralight flex flex-col gap-4' style={{ fontFamily: "Helvetica, Arial, sans-serif" }} >

                    <p className='text-gray-700'>{details1.heading2}</p>


                    <ul className='flex flex-col gap-4 pl-5 text-justify list-disc'>


                        <div className='grid grid-cols-2 max-md:grid-cols-1'>

                            <div>
                                <ul className='list-disc' key="outer-list"> {/* Added key prop here */}
                                    {details1.data.map((item, index) => (
                                        <li className='' key={index}>
                                            <p className='font-semibold text-gray-600'>
                                                {item.data1}
                                            </p>
                                            <p className='font-normal text-gray-700'>
                                                {item.data2}

                                            </p>
                                            {/* Sub-List */}
                                            <ul className='pl-8 list-disc'>
                                                {item.data3.map((item2, index1) => (
                                                    <li key={index1}>
                                                        <p className='font-normal text-gray-700'>
                                                            <span className='font-semibold text-gray-600'>{item2.subData1}: </span>
                                                            {item2.subData2}
                                                        </p>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    ))}
                                </ul>
                            </div>


                            <div className='relative w-full max-md:hidden'>
                                <Image
                                    src={`${details1.imgSrc}`}
                                    alt='Capabilities'
                                    fill

                                    className="rounded-xl w-[80%] h-[100%] mx-auto object-contain max-md:object-fit max-md:"
                                />
                            </div>

                        </div>




                        {details1.data2.map((item, index) => (
                            <li className='' key={index}>
                                <p className='font-semibold text-gray-600'>
                                    {item.data1}
                                </p>
                                <p className='font-normal text-gray-700'>
                                    {item.data2}

                                </p>
                                {/* Sub-List */}
                                <ul className='pl-8 list-disc'>
                                    {item.data3.map((item2, index1) => (
                                        <li key={index1}>
                                            <p className='font-normal text-gray-700'>
                                                <span className='font-semibold text-gray-600'>{item2.subData1}: </span>
                                                {item2.subData2}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}



                    </ul>

                    {
                        details1.paragraph1 &&
                        <p className='text-gray-700'>{details1.paragraph1}</p>

                    }




                </div>




            </div>

        </div>
    )
}

export default CapabilitiesContent3