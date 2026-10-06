import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import  Link  from "next/link";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
interface details1 {
    heading1?: string;
    paragraph1?: string;
    paragraph2?: string;
    paragraph3?: string;
    altText?: string;


}
const CapabilitiesHeader = ({ details1, border } : { details1: details1, border: string }) => {
    return (
        <div className={`flex flex-col leading-[24px] w-full gap-8 pb-8 mt-8 ${border} border-gray-300 relative`}>

            {border === 'border-b' &&
                <Link href='/'>
                    <div className='absolute top-[-3rem] flex gap-0 text-md font-normal text-gray-700 left-[-8vh] hover:cursor-pointer hover:text-black hover:font-bold max-md:left-[-5vh]'>
                        <MdOutlineKeyboardArrowLeft className='mt-[3px] text-xl' /> <p className='font-medium'>Back to home</p>
                    </div>
                </Link>
            }


            <div className='text-4xl font-bold text-black max-md:text-3xl'>
                <h2>{details1.heading1}</h2>
            </div>
            {/* style={{ fontFamily: "Helvetica, Arial, sans-serif" }} */}
            <div className='text-gray-700 text-[20px] font-extralight flex flex-col gap-4'  >

                <p className='text-justify text-gray-700'>{details1.paragraph1}</p>

                {
                    details1.paragraph2 &&
                    <p className='text-justify text-gray-700'>{details1.paragraph2}</p>

                }

                {
                    details1.paragraph3 &&
                    <p className='text-justify text-gray-700'>{details1.paragraph3}</p>

                }

               


            </div>

        </div>
    )
}

export default CapabilitiesHeader