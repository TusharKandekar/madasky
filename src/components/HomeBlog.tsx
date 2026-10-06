
import { truncateText } from '@/common/api';
import Image from "next/image";
import BaseUrl from "./BaseUrl";
import Link from 'next/link';

interface CardProps {
    image: string;
    title: string;
    description: string;
    date: string;
    comments: string;
    readMoreLink: string;
    altText: string;
}

const Card = ({ image, title, description, date, comments, readMoreLink, altText }: CardProps) => {

    // console.log("kslfkslkdl;", image)




    return (
        <div className="flex items-center justify-center max-w-md mx-4 overflow-hidden bg-white rounded-2xl">
            <div className="flex h-[80vh] max-2xl:h-[70vh] flex-col items-center justify-start w-full max-md:h-auto ">
                <div className="w-full relative h-[55%] max-md:h-[30vh] max-2xl:h-[30vh]">
                    {/* <img className="object-cover w-full h-full " src={`${BaseUrl().baseurl}/${image}`} alt={altText} /> */}
                    {/* <Image src={`${BaseUrl().baseurl}/${image}`} alt={altText || "Madasky"} fill className="object-cover" /> */}
                    {
                        image ? (
                            <Image src={`${BaseUrl().baseurl}/${image}`} alt={altText || "Madasky"} fill className="object-fill max-2xl:object-fill max-md:object-fill" />
                        ) : null
                    }

                </div>
                <div className="p-8 w-full h-[45%]  max-md:p-4">
                    <div className="uppercase tracking-wide text-sm  text-[#152869] font-bold">{date}</div>
                    {/* <h3 className="block mt-1 text-lg font-bold leading-tight text-black">{title}</h3> */}
                    <h3 className="block mt-1 text-lg font-bold leading-tight text-black">{truncateText(title, 80)}</h3>
                    <p className="mt-2 text-gray-500">{truncateText(description, 80)}</p>

                    <div className="mt-4">
                        {/* <a href={readMoreLink} className="text-[#152869]  hover:text-indigo-900 font-bold">
                            Read more
                        </a> */}

                        <a href={`${readMoreLink}`}>
                            Read more
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Card;

