import Link from 'next/link';
import Image from 'next/image';
// import React, { useState, useEffect } from 'react';
// import { getImagesAltText } from './CommonData';
// interface imageSrc{
//     img: string,
// }

export default function LogoCombo() {
    // const [altText, setAltText] = useState("");
    // const image = "/assets/images/logo2.png"
   

    // useEffect(() => {
    //     const fetchAltText = async () => {
    //         const alt = await getImagesAltText(image); // Resolve the Promise
    //         // console.log("aaaa", alt)
    //         setAltText(alt); // Update state with the resolved value
    //     };

    //     fetchAltText();
    // }, []);
    return (
        <a
            href={'/'}
            className="flex items-center justify-start w-full h-auto gap-3"
        >
           

            <div className={`relative w-full h-14 rounded-lg mt-2 mx-auto`}>

                <Image src={`/assets/images/logo2.png`} alt={"Madasky Consulting"} fill className='object-fit rounded-2xl max-md:object-fit' />
                {/* <Image src={img} alt={"Madasky Consulting"} fill className='object-fill rounded-2xl max-md:object-fill' /> */}

            </div>
        </a>
    );
}
