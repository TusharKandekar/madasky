import RightChevron from './RightChevron';
import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

type SidebarNavProps = {
    title: string;
    onClick?: () => void; // Optional function
};

export default function SidebarNav({ title, onClick }: SidebarNavProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button
            className={`text-white text-left flex w-full hover:text-gray-400 font-thin ${
                title === 'Back' ? 'justify-start text-xl' : 'justify-between text-2xl'
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}
        >
            {title === 'Back' && (
                <span className="mt-1 mr-3">
                    <FaArrowLeftLong />
                </span>
            )}

            {title}

            {(title !== 'Back' && title !== 'Home') && (
                <span>
                    <RightChevron color={isHovered ? '#00548F' : 'white'} />
                </span>
            )}
        </button>
    );
}
