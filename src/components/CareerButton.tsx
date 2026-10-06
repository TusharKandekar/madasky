// import React from 'react'
// import { Link } from 'react-router-dom';
import Link from 'next/link'
interface NavitemProps {
    path: string;
    text: string
}
const CareerButton = ({path, text} : NavitemProps) => {
    return (
        <div className="flex w-full justify-center items-center">
            <Link
                href={path}
                className="bg-[#152869] text-white font-bold py-4 px-6 rounded max-md:py-2 max-md:px-3"
            >
                {text}
            </Link>
        </div>
    )
}

export default CareerButton