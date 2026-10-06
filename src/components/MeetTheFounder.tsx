import React from 'react'
import Image from 'next/image'
import BaseUrl from './BaseUrl';
interface MeetTheFounderProps {
 
    image: string;
    altText: string

 }
const MeetTheFounder = ({image, altText} : MeetTheFounderProps) => {
    return (
        <div className='w-full flex items-center justify-center py-[20] max-md:py-[7vh]'>
            <div className='w-[90%] h-[75vh] flex items-center rounded-2xl justify-center border-[2px] border-gray-200 max-md:w-[90%] max-md:h-auto max-xl:h-[30vh]'>
                {/* <img src="/assets/images/amitmittal69.png" alt="Amit Mittal" className='w-[85%] h-full rounded-2xl object-cover max-md:object-contain' /> */}
                <div className={`relative w-[85%] h-[100%] max-md:h-[25vh] max-xl:h-[100%]`}>

                    <Image src={`${BaseUrl().imgurl}${image}`} alt={altText ? altText : "Amit Mittal"} fill className='object-fill rounded-2xl max-md:object-fill' />
                </div>
            </div>
        </div>
    )
}

export default MeetTheFounder