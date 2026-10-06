import { useState } from 'react';
import { RiArrowDownSLine } from "react-icons/ri";

type SubItem = {
    title: string;
    link: string;
};

type SidebarNav2Props = {
    title: string;
    link?: string;
    isHeading?: boolean;
    subItems?: SubItem[];
};

export default function SidebarNav2({ title, link, isHeading, subItems }: SidebarNav2Props) {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        if (subItems) {
            setIsOpen(!isOpen);
        }
    };

    let navClass = "w-full text-xl font-bold text-white cursor-pointer hover:underline";
    if (isHeading) {
        navClass = "w-full text-xl font-bold text-white cursor-pointer";
    }

    return (
        <div className="w-full">
            <div className={`${navClass} flex flex-row`} onClick={handleToggle}>
                {link ? <a href={link}>{title}</a> : title}
                {!link && (
                    <RiArrowDownSLine
                        className={`ml-2 ${isOpen ? 'rotate-180' : 'rotate-0'} transition-transform mt-[5px]`}
                        size={24}
                    />
                )}
            </div>

            {isOpen && subItems && (
                <div className="pl-4 mt-2">
                    {subItems.map((item, index) => (
                        <div key={index} className="w-full text-[16px] leading-10 text-white hover:text-gray-400 cursor-pointer ml-4">
                            <ul className="list-disc">
                                <li><a href={item.link}>{item.title}</a></li>
                            </ul>
                            <hr className="opacity-20" />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
