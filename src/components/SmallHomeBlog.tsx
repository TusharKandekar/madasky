
import { truncateText } from '@/common/api';
import Image from "next/image";
import BaseUrl from "./BaseUrl";

interface SmallHomeBlogProps {
    image?: string;
    title: string;
    description: string;
    date?: string;
    comments?: string;
    readMoreLink?: string;
    altText?: string;
}

const SmallHomeBlog = ({ image, title, description, date, comments, readMoreLink, altText }: SmallHomeBlogProps) => {



    return (
        <div className="w-[30vw] max-md:w-full flex items-center justify-center bg-white rounded-2xl  overflow-hidden">
            <div className="flex h-[80vh] flex-col items-center justify-center w-full max-md:h-auto ">
                {/* <img className="object-cover w-full h-full " src={image} alt={altText || title} /> */}

                {/* <Image src={`${BaseUrl().baseurl}/${image}`} alt={altText || "Madasky"} fill className="object-cover" /> */}
                {
                    image ? (
                        <div className="w-full relative h-[30vh]">

                            <Image src={`${BaseUrl().baseurl}/${image}`} alt={altText || "Madasky"} fill className="object-cover" />

                        </div>
                    ) : null
                }


                <div className="p-8 w-full h-[45%]">
                    <div className="uppercase tracking-wide text-sm  text-[#152869] font-bold">{date}</div>
                    <h3 className="block mt-1 text-lg font-bold leading-tight text-black">{title}</h3>
                    <p className="mt-2 text-gray-500">{truncateText(description)}</p>

                    <div className="mt-4">
                        <a href={readMoreLink} className="text-[#152869]  hover:text-indigo-900 font-bold">
                            Read more
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SmallHomeBlog;

