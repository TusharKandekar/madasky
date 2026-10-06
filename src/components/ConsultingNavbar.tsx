// // import { Link } from 'react-scroll';
// import Link from 'next/link';
// import LogoCombo from '@/components/Header/LogoCombo';
// import Navitem from '@/components/Header/Navitem';
// // import DropdownIcon from './DropdownIcon';
// import Sidebar from '@/components/Header/Sidebar';


// // import { useEffect, useState } from "react";
// // import { getPageName } from '../components/CommonData.jsx';

// interface NavbarProps {
//     position?: 'fixed' | 'absolute';
//     navItems: { title: string; link: string }[];
//     title: string;
//     url: string;
// }





// export default function AboutNavbar({ position = 'fixed', navItems, title, url }: NavbarProps) {
//     // const [pageName, setPageName] = useState('');
//     // useEffect(() => {
//     //     infinite();
//     // }, [])

//     // const infinite = async () => {
//     //     const pageName = await getPageName(location.pathname);
//     //     console.log("Page Name2", pageName)

//     //     setPageName(pageName)

//     //     console.log("ppp23", pageName)



//     // }



//     // useEffect(() => {
//     //     const fetchPageName = async () => {
//     //         try {
//     //             const name = await getPageName(location.pathname);
//     //             console.log("Resolved Page Name:", name);
//     //             setPageName(name);
//     //         } catch (error) {
//     //             console.error("Error fetching page name:", error);
//     //         }
//     //     };

//     //     fetchPageName();
//     // }, []);

//     // console.log("Current Page Name:", pageName);


//     return (
//         <header
//             className={`overflow-hidden flex-col w-full flex justify-center items-center shadow-lg h-20 ${position === 'fixed'
//                 ? 'fixed top-0 left-0 z-[50] w-full bg-white'
//                 : 'absolute top-0 left-0 z-[99] bg-white'
//                 }`}
//         >
//             <nav className="w-[95%] h-20 flex items-center justify-between gap-[2%] relative">
//                 <div className="w-[20%] h-full flex items-center justify-center gap-2 max-md:w-full">
//                     <Sidebar />
//                     <LogoCombo />

//                 </div>

//                 <div className="w-[70%] h-full flex flex-col justify-center items-start max-md:hidden">
//                     <Link href={`${url}`} className='w-full text-[#152869] font-bold hover:cursor-pointer'>
//                         <p className='w-full font-thin text-[12px]'>{title}</p>
//                     </Link>

//                     {/* <Link to={`${url}`} className='w-full text-[#152869] font-bold hover:cursor-pointer'>
//                         <p className='w-full font-thin text-[12px]'>{title}</p>

//                     </Link> */}

//                     <div className="w-[10%] h-[3px] bg-blue-300 mb-3" style={{
//                         background: 'linear-gradient(to right, #05528a 50%, #d02c22 50%)',
//                     }}></div>
//                     <div className="flex items-center justify-start w-full gap-8 max-md:hidden">
//                         {navItems.map((item, index) => (
//                             <div
//                                 key={index}
//                                 className="relative flex items-center justify-center h-full"
//                             >
//                                 {/* <Link
//                                     to={item.title.replace(/\s+/g, '')}


//                                     className={`flex items-center text-sm text-black hover:text-[#e33512] transition-colors ${item.title === pageName ? "text-[#e33512]" : "text-black"
//                                         }`}
//                                 >
//                                     {item.title}

//                                 </Link> */}

//                                 <Link href={`${item.link}`} className={`flex items-center text-sm text-black hover:text-[#e33512] transition-colors`}>

//                                     {/* <div className={`${item.title === pageName ? "text-[#e33512]" : "text-black"
//                                         }`}>

//                                         {item.title}
//                                     </div> */}


//                                     <div className={"text-black"}>

//                                         {item.title}
//                                     </div>




//                                 </Link>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//                 <div className="w-[8%] h-full flex items-center justify-end gap-4 max-md:hidden">
//                     <Navitem title="Contact Us" path="/contact-us" />
//                 </div>
//             </nav>
//         </header>
//     );
// }

// **************************************************************************


'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import LogoCombo from '@/components/Header/LogoCombo';
import Navitem from '@/components/Header/Navitem';
import Sidebar from '@/components/Header/Sidebar';

interface NavbarProps {
    position?: 'fixed' | 'absolute';
    navItems: { title: string; link: string }[];
    title: string;
    url: string;
}

export default function AboutNavbar({ position = 'fixed', navItems, title, url }: NavbarProps) {
    const pathname = usePathname();

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

                <div className="w-[50%] h-full flex flex-col justify-center items-start max-md:hidden">
                    <Link
                        href={url}
                        className="w-full text-[#152869] font-bold hover:cursor-pointer"
                    >
                        <p className="w-full font-thin text-[12px]">{title}</p>
                    </Link>

                    <div
                        className="w-[10%] h-[3px] bg-blue-300 mb-3"
                        style={{
                            background:
                                'linear-gradient(to right, #05528a 50%, #d02c22 50%)',
                        }}
                    ></div>

                    <div className="flex items-center justify-start w-full gap-8 max-md:hidden">
                        {navItems.map((item, index) => {
                            const isActive = pathname === item.link;

                            return (
                                <div
                                    key={index}
                                    className="relative flex items-center justify-center h-full"
                                >
                                    <Link
                                        href={item.link}
                                        className={`flex items-center text-[12px] transition-colors ${isActive
                                            ? 'text-[#e33512]'
                                            : 'text-black hover:text-[#e33512]'
                                            }`}
                                    >
                                        <div>{item.title}</div>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="flex items-center justify-end h-full gap-4 w-fit max-md:hidden">
                    <Navitem title="Contact Us" path="/contact-us" />
                    
                    <a
                        rel="noopener noreferrer"
                        href="https://calendar.app.google/UMVkRH1hG1f5nNcV7"
                        target="_blank"
                    >
                        <button className="bg-[#152869] hover:bg-[#152869]/90 transition text-sm text-white font-semibold px-4 py-3 rounded-4xl shadow max-md:ml-6 max-md:text-base">
                            Book An Appointment
                        </button>
                    </a>
                </div>
            </nav>
        </header>
    );
}
