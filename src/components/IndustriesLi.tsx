import React from 'react';
interface IndustriesLiProps {
    industries: string[];
}
export default function IndustriesLi({ industries = [] } : IndustriesLiProps) {
    if (!industries || industries.length === 0) {
        return null;
    }

    return (
        <>
            {industries.map((industry, index) => (
                <li key={index} className="text-xl text-gray-500 font-thin  list-disc py-2 max-md:text-sm">
                    {industry}
                </li>

            ))}

            {/* {industries.map((industry, index) => (
                <li
                    key={industry} // use a unique identifier if possible
                    className={`text-xl text-gray-500 font-thin list-disc py-2 max-md:${industry === "construction" ? "text-md" : "text-sm"
                        }`}
                >
                    {industry}
                </li>
            ))} */}
        </>
    );
}

