// pages/404.js
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import AboutNavbar from '@/components/Header/AboutNavbar';
import HelpYou from "@/components/HelpYou";
import Footer from "@/components/Footer";

export default function Custom404() {
    return (
        <>
            <Head>
                <title>404 - Page Not Found | Your Business Name</title>
                <meta name="description" content="The page you are looking for cannot be found." />
            </Head>
            <AboutNavbar></AboutNavbar>
            <div className="flex flex-col min-h-screen bg-gray-50">
                {/* Header with Logo */}
               
                {/* Main Content */}
                <main className="flex items-center flex-grow">
                    <div className="container px-4 py-12 mx-auto">
                        <div className="flex flex-col items-center justify-between max-w-6xl mx-auto md:flex-row">
                            {/* Text Content */}
                            <div className="mb-12 md:w-1/2 md:mb-0 md:pr-12">
                                <h1 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl">So Sorry!</h1>
                                <h2 className="mb-8 text-2xl font-bold text-gray-700 md:text-3xl">
                                    The page you are looking for cannot be found
                                </h2>

                                <div className="mb-8">
                                    <h3 className="mb-4 text-lg font-semibold text-gray-700">Possible Reasons</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start">
                                            <span className="mt-1 mr-2 text-green-500">•</span>
                                            <span>The address may have been typed incorrectly;</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mt-1 mr-2 text-green-500">•</span>
                                            <span>It may be a broken or outdated link.</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="flex flex-wrap gap-4">
                                   {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                                    <a href="/" className="px-6 py-3 font-medium text-white transition-colors bg-gray-800 rounded-md hover:bg-gray-700">
                                        Home Page
                                    </a>
                                   
                                </div>
                            </div>

                            {/* Illustration */}
                            <div className="md:w-1/2">
                                <div className="relative">
                                    <EnvelopeIllustration />
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <HelpYou />
            <Footer />

        </>
    );
}


// Envelope Illustration Component
function EnvelopeIllustration() {
    return (
        <div className="relative">
            {/* Green Circle */}
            <div className="mx-auto bg-green-400 rounded-full w-80 h-80"></div>

            {/* Clouds */}
            <div className="absolute top-16 left-10">
                <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 25C1 25 20 5 40 25C40 25 60 5 80 25C80 25 100 5 120 25" stroke="#1E293B" strokeWidth="2" />
                </svg>
            </div>

            {/* Envelope */}
            <div className="absolute transform -translate-x-1/2 top-1/2 left-1/2 -translate-y-1/4">
                <div className="relative">
                    {/* Envelope Body */}
                    <div className="flex items-center justify-center transform bg-white border-2 border-gray-800 w-44 h-36 rotate-3">
                        {/* Envelope Face */}
                        <div className="flex flex-col items-center">
                            {/* Eyes */}
                            <div className="flex mb-4 space-x-10">
                                <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                                <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                            </div>
                            {/* Frown */}
                            <div className="w-12 h-6 border-b-2 border-gray-800 rounded-b-full"></div>
                        </div>
                    </div>

                    {/* Scattered Papers */}
                    <div className="absolute -bottom-20 -left-20">
                        <div className="w-20 h-16 transform bg-white border-2 border-gray-800 rotate-12"></div>
                    </div>
                    <div className="absolute -bottom-16 left-20">
                        <div className="w-20 h-16 transform bg-white border-2 border-gray-800 -rotate-6"></div>
                    </div>
                    <div className="absolute right-0 -bottom-12">
                        <div className="w-20 h-16 transform bg-white border-2 border-gray-800 rotate-24"></div>
                    </div>
                </div>
            </div>

            {/* Grass */}
            <div className="absolute w-8 h-12 bg-green-600 rounded-t-full bottom-6 left-16"></div>
            <div className="absolute w-6 h-8 bg-green-600 rounded-t-full bottom-8 right-20"></div>
        </div>
    );
}