// import { Link } from 'react-scroll';
// import { Link } from "react-router-dom";
"use client";
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import LogoCombo from '@/components/LogoCombo';
import Navitem from '@/components/Header/Navitem';
import Sidebar from '@/components/Header/Sidebar';
// import dynamic from 'next/dynamic';

// const ScrollLink = dynamic(() => import('react-scroll').then(mod => mod.Link), { ssr: false });

// Now use `ScrollLink` instead of `Link` for scroll functionality

interface NavitemProps {
    title: string;
    url: string;
    position?: string;
    navItems: { title: string; link: string }[];
}
export default function AboutNavbar({ position = 'fixed', navItems, title, url }: NavitemProps) {
    // const [pageName, setPageName] = useState('');
    // useEffect(() => {
    //     infinite();
    // }, [])

    // const infinite = async () => {
    //     const pageName = await getPageName(location.pathname);
    //     console.log("Page Name2", pageName)

    //     setPageName(pageName)

    //     console.log("ppp23", pageName)



    // }



    // useEffect(() => {
    //     const fetchPageName = async () => {
    //         try {
    //             const name = await getPageName(location.pathname);
    //             console.log("Resolved Page Name:", name);
    //             setPageName(name);
    //         } catch (error) {
    //             console.error("Error fetching page name:", error);
    //         }
    //     };

    //     fetchPageName();
    // }, []);

    // console.log("Current Page Name:", pageName);


    return (
        <header
            className={`overflow-hidden flex-col w-full flex justify-center items-center shadow-lg h-20 ${position === 'fixed'
                ? 'fixed top-0 left-0 z-[50] w-full bg-white'
                : 'absolute top-0 left-0 z-[99] bg-white'
                }`}
        >
            <nav className="w-[95%] h-20 flex items-center justify-between gap-[2%] relative">
                <div className="w-[20%] h-full flex items-center justify-center gap-2 max-md:w-full">
                    <Sidebar />
                    <LogoCombo />

                </div>

                <div className="w-[70%] h-full flex flex-col justify-center items-start max-md:hidden">
                    <a href={`${url}`} className='w-full text-[#152869] font-bold hover:cursor-pointer'>
                        <p className='w-full font-thin text-[12px]'>{title}</p>
                    </a>

                    {/* <Link to={`${url}`} className='w-full text-[#152869] font-bold hover:cursor-pointer'>
                        <p className='w-full font-thin text-[12px]'>{title}</p>

                    </Link> */}

                    <div className="w-[10%] h-[3px] bg-blue-300 mb-3" style={{
                        background: 'linear-gradient(to right, #05528a 50%, #d02c22 50%)',
                    }}></div>
                    <div className="flex items-center justify-start w-full gap-8 max-md:hidden">
                        {navItems.map((item, index) => (
                            <div
                                key={index}
                                className="relative flex items-center justify-center h-full"
                            >
                                {/* <Link
                                    to={item.title.replace(/\s+/g, '')}


                                    className={`flex items-center text-sm text-black hover:text-[#e33512] transition-colors ${item.title === pageName ? "text-[#e33512]" : "text-black"
                                        }`}
                                >
                                    {item.title}

                                </Link> */}

                                {/* <a href={`${item.link}`} className={`flex items-center text-sm text-black hover:text-[#e33512] transition-colors`}> */}
                                <ScrollLink
                                    to={item.link}
                                    // to="genericDigitalTransformation"
                                    smooth={true} duration={500}
                                    offset={-150}


                                    className="cursor-pointer hover:text-gray-300"
                                >
                                    <div className={`${item.title === 'pageName' ? "text-[#e33512]" : "text-black"
                                        }`}>

                                        {item.title}
                                    </div>


                                </ScrollLink>

                                {/* </a> */}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-[8%] h-full flex items-center justify-end gap-4 max-md:hidden">
                    <Navitem title="Contact Us" path="/contact-us" />
                </div>
            </nav>
        </header>
    );
}

