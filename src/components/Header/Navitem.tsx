import Link from 'next/link';

interface NavitemProps {
    title: string;
    path: string;
   
}

export default function Navitem({ title, path }:NavitemProps) {
    return (
        <a
            className="text-white border-none rounded-2xl px-5 h-[50%] text-sm bg-[#e63410] border-2 flex items-center justify-center "
            href={path}
        >
            {title}
        </a>
    );
}


