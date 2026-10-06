"use client";
// import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import BaseUrl from "@/components/BaseUrl";

interface ConsultingHomeProps {
  image: string;
  altText?: string;
}

export default function ConsultingHome({
  image,
  altText,
}: ConsultingHomeProps) {
  return (
    <div className="flex justify-center items-center w-full h-auto max-md:py-10 bg-[#f5f5f6] max-md:h-auto max-md:gap-6 max-md:flex-col max-xl:flex-col">
      <h2 className="hidden w-full text-4xl font-bold leading-tight text-gray-900 max-md:block font-baskervville max-xl:text-3xl max-lg:text-3xl max-lg:text-center">
        Our Core Capabilities
      </h2>
      <div className="flex flex-col items-center justify-start w-1/2 h-full py-9 max-xl:w-full max-md:p-0 max-md:w-full max-md:flex-col-reverse max-xl:flex-row">
        <div className="w-[80%] h-[70%] flex flex-col items-start justify-start gap-5 max-md:w-[90%] max-md:justify-center max-md:items-center max-xl:px-6">
          <h2 className="w-full text-4xl font-bold max-md:hidden font-baskervville max-md:text-4xl max-md:text-center">
            Our Core Capabilities
          </h2>
          {/* <div
            className="w-[40%] h-[3px] bg-blue-300"
            style={{
              background: "linear-gradient(to right, #05528a 50%, #d02c22 50%)",
            }}
          ></div> */}

         
          <p className="text-xl font-normal text-left text-gray-500 max-md:text-justify max-md:mt-10">
            We deliver exceptional results through advanced technology and
            innovative solutions. Our expertise enables us to tackle complex
            challenges and meet client needs effectively.
          </p>

          {/* <div className="grid w-full grid-cols-2 gap-5 max-md:grid-cols-1">

                        <Link href="./advisory" target="_blank" rel="noopener noreferrer" className='w-full'>
                            <div className="flex items-center justify-start gap-5 shadow-sm p-3 className='w-full' border-l-4 border-[#bce1fd]">

                                <div className="flex flex-col items-start justify-start gap-1">
                                    <h3 className="text-2xl font-semibold text-gray-900 font-baskervville">
                                        Advisory
                                    </h3>

                                </div>
                            </div>

                        </Link>
                        <Link href="./solutions" target="_blank" rel="noopener noreferrer" className='w-full'>
                            <div className="flex items-center justify-start gap-5 shadow-sm p-3 className='w-full' border-l-4 border-[#bce1fd]">

                                <div className="flex flex-col items-start justify-start gap-1">
                                    <h3 className="text-2xl font-semibold text-gray-900 font-baskervville">
                                        Digital Transformation
                                    </h3>

                                </div>
                            </div>

                        </Link>

                        <Link href="./people" target="_blank" rel="noopener noreferrer" className='w-full'>
                            <div className="flex items-center justify-start gap-5 shadow-sm p-3 className='w-full' border-l-4 border-[#bce1fd]">

                                <div className="flex flex-col items-start justify-start gap-1">
                                    <h3 className="text-2xl font-semibold text-gray-900 font-baskervville">
                                        People
                                    </h3>

                                </div>
                            </div>

                        </Link>
                    </div> */}

          <div className="grid w-full grid-cols-1 gap-5 max-xl:hidden">
            <div className="flex items-center justify-start gap-5 shadow-sm p-3 className='w-full' border-l-4 border-[#bce1fd]">
              <div className="flex flex-col items-start justify-start gap-1">
                {/* <h3 className="text-2xl font-semibold text-gray-900 font-baskervville">
                                        Consulting
                                    </h3> */}
                {/* <div className="w-[20%] h-[3px] bg-[#bce1fd]" ></div> */}
                <ul className="grid grid-cols-2 gap-y-4 list-disc pl-[4vh] gap-x-[8vh] py-3 max-md:grid-cols-1 max-md:hidden">
                  <Link
                    href="./advisory"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full group"
                  >
                    <li
                      className="relative py-0 text-xl font-thin text-gray-500 hover:text-gray-600 
               after:content-[''] after:absolute after:left-0 after:bottom-0 
               after:h-[2px] after:bg-gray-400 after:w-0 
               after:transition-all after:duration-500 after:ease-in-out 
               group-hover:after:w-[30%]"
                    >
                      Advisory
                    </li>
                  </Link>

                  <Link
                    href="./people"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full group"
                  >
                    <li
                      className="relative py-0 text-xl font-thin text-gray-500 hover:text-gray-600 
               after:content-[''] after:absolute after:left-0 after:bottom-0 
               after:h-[2px] after:bg-gray-400 after:w-0 
               after:transition-all after:duration-500 after:ease-in-out 
               group-hover:after:w-[30%]"
                    >
                     People
                    </li>
                  </Link>

                  <Link
                    href="./growth-marketing-and-sales"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full group"
                  >
                    <li
                      className="relative py-0 text-xl font-thin text-gray-500 hover:text-gray-600 
               after:content-[''] after:absolute after:left-0 after:bottom-0 
               after:h-[2px] after:bg-gray-400 after:w-0 
               after:transition-all after:duration-500 after:ease-in-out 
               group-hover:after:w-[90%]"
                    >
                      Growth, Marketing & Sales
                    </li>
                  </Link>
                  <Link
                    href="./sustainability"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full group"
                  >
                    <li
                      className="relative py-0 text-xl font-thin text-gray-500 hover:text-gray-600 
               after:content-[''] after:absolute after:left-0 after:bottom-0 
               after:h-[2px] after:bg-gray-400 after:w-0 
               after:transition-all after:duration-500 after:ease-in-out 
               group-hover:after:w-[50%]"
                    >
                      Sustainability
                    </li>
                  </Link>

                  <Link
                    href="./warehousing-solutions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full group"
                  >
                    <li
                      className="relative py-0 text-xl font-thin text-gray-500 hover:text-gray-600 
               after:content-[''] after:absolute after:left-0 after:bottom-0 
               after:h-[2px] after:bg-gray-400 after:w-0 
               after:transition-all after:duration-500 after:ease-in-out 
               group-hover:after:w-[75%]"
                    >
                      Warehousing Solutions
                    </li>
                  </Link>
                  <Link
                    href="./operations-excellence"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full group"
                  >
                    <li
                      className="relative py-0 text-xl font-thin text-gray-500 hover:text-gray-600 
               after:content-[''] after:absolute after:left-0 after:bottom-0 
               after:h-[2px] after:bg-gray-400 after:w-0 
               after:transition-all after:duration-500 after:ease-in-out 
               group-hover:after:w-[75%]"
                    >
                      Operations Excellence
                    </li>
                  </Link>

                  <Link
                    href="./automation-in-manufacturing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full group"
                  >
                    <li
                      className="relative py-0 text-xl font-thin text-gray-500 hover:text-gray-600 
               after:content-[''] after:absolute after:left-0 after:bottom-0 
               after:h-[2px] after:bg-gray-400 after:w-0 
               after:transition-all after:duration-500 after:ease-in-out 
               group-hover:after:w-[100%]"
                    >
                      Automation In Manufacturing
                    </li>
                  </Link>
                  <Link
                    href="./supply-chain-management"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full group"
                  >
                    <li
                      className="relative py-0 text-xl font-thin text-gray-500 hover:text-gray-600 
               after:content-[''] after:absolute after:left-0 after:bottom-0 
               after:h-[2px] after:bg-gray-400 after:w-0 
               after:transition-all after:duration-500 after:ease-in-out 
               group-hover:after:w-[90%]"
                    >
                      Supply Chain Management
                    </li>
                  </Link>

                  <Link
                    href="./people-and-organisational-performance"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full group"
                  >
                    <li
                      className="relative py-0 text-xl font-thin text-gray-500 hover:text-gray-600 
               after:content-[''] after:absolute after:left-0 after:bottom-0 
               after:h-[2px] after:bg-gray-400 after:w-0 
               after:transition-all after:duration-500 after:ease-in-out 
               group-hover:after:w-[80%]"
                    >
                      People & Organisational Performance
                    </li>
                  </Link>

                  <Link
                    href="./project-factory-technical-design"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full group"
                  >
                    <li
                      className="relative py-0 text-xl font-thin text-gray-500 hover:text-gray-600 
               after:content-[''] after:absolute after:left-0 after:bottom-0 
               after:h-[2px] after:bg-gray-400 after:w-0 
               after:transition-all after:duration-500 after:ease-in-out 
               group-hover:after:w-[90%]"
                    >
                     Project - Factory Technical Design
                    </li>
                  </Link>

                  <Link
                    href="./financial-strategy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full group"
                  >
                    <li
                      className="relative py-0 text-xl font-thin text-gray-500 hover:text-gray-600 
               after:content-[''] after:absolute after:left-0 after:bottom-0 
               after:h-[2px] after:bg-gray-400 after:w-0 
               after:transition-all after:duration-500 after:ease-in-out 
               group-hover:after:w-[60%]"
                    >
                      Financial Strategy
                    </li>
                  </Link>

                  <Link
                    href="./msme-growx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full group"
                  >
                    <li
                      className="relative py-0 text-xl font-thin text-gray-500 hover:text-gray-600 
               after:content-[''] after:absolute after:left-0 after:bottom-0 
               after:h-[2px] after:bg-gray-400 after:w-0 
               after:transition-all after:duration-500 after:ease-in-out 
               group-hover:after:w-[60%]"
                    >
                      MSME GrowX
                    </li>
                  </Link>

                  <Link
                    href="./business-strategy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full group"
                  >
                    <li
                      className="relative py-0 text-xl font-thin text-gray-500 hover:text-gray-600 
               after:content-[''] after:absolute after:left-0 after:bottom-0 
               after:h-[2px] after:bg-gray-400 after:w-0 
               after:transition-all after:duration-500 after:ease-in-out 
               group-hover:after:w-[60%]"
                    >
                       Business Strategy
                    </li>
                  </Link>

                  <Link
                    href="./digital-transformation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full group"
                  >
                    <li
                      className="relative py-0 text-xl font-thin text-gray-500 hover:text-gray-600 
               after:content-[''] after:absolute after:left-0 after:bottom-0 
               after:h-[2px] after:bg-gray-400 after:w-0 
               after:transition-all after:duration-500 after:ease-in-out 
               group-hover:after:w-[80%]"
                    >
                      Digital Transformation
                    </li>
                  </Link>
                </ul>

                {/* in mobile  */}
                <ul className="hidden list-disc pl-[4vh] gap-x-[8vh] py-3 max-md:grid-cols-1 max-md:grid">
                  <Link
                    href="./advisory"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <li className="py-2 text-xl font-thin text-gray-500 hover:text-black">
                      Advisory
                    </li>
                  </Link>

                  <Link
                    href="./business-strategy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <li className="py-2 text-xl font-thin text-gray-500 hover:text-black">
                      Business Strategy
                    </li>
                  </Link>
                  <Link
                    href="./growth-marketing-and-sales"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <li className="py-2 text-xl font-thin text-gray-500 hover:text-black">
                      Growth, Marketing & Sales
                    </li>
                  </Link>
                  <Link
                    href="./project-factory-technical-design"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <li className="py-2 text-xl font-thin text-gray-500 hover:text-black">
                      Project - Factory Technical Design
                    </li>
                  </Link>
                  <Link
                    href="./warehousing-solutions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <li className="py-2 text-xl font-thin text-gray-500 hover:text-black">
                      Warehousing Solutions
                    </li>
                  </Link>
                  <Link
                    href="./operations-excellence"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <li className="py-2 text-xl font-thin text-gray-500 hover:text-black">
                      Operations Excellence
                    </li>
                  </Link>

                  <Link
                    href="./automation-in-manufacturing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <li className="py-2 text-xl font-thin text-gray-500 hover:text-black">
                      Automation In Manufacturing
                    </li>
                  </Link>

                  <Link
                    href="./supply-chain-management"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <li className="py-2 text-xl font-thin text-gray-500 hover:text-black">
                      Supply Chain Management
                    </li>
                  </Link>

                  <Link
                    href="./people-and-organisational-performance"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <li className="py-2 text-xl font-thin text-gray-500 hover:text-black">
                      People & Organisational Performance
                    </li>
                  </Link>

                  <Link
                    href="./sustainability"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <li className="py-2 text-xl font-thin text-gray-500 hover:text-black">
                      Sustainability
                    </li>
                  </Link>

                  <Link
                    href="./financial-strategy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <li className="py-2 text-xl font-thin text-gray-500 hover:text-black">
                      Financial Strategy
                    </li>
                  </Link>

                  <Link
                    href="./msme-growx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <li className="py-2 text-xl font-thin text-gray-500 hover:text-black">
                      MSME GrowX
                    </li>
                  </Link>

                  <Link
                    href="./people"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <li className="py-2 text-xl font-thin text-gray-500 hover:text-black">
                      People
                    </li>
                  </Link>

                  <Link
                    href="./digital-transformation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <li className="py-2 text-xl font-thin text-gray-500 hover:text-black">
                      Digital Transformation
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Image
          src={`${BaseUrl().imgurl}${image}`}
          alt={altText ? altText : "Madasky Consulting"}
          className="hidden object-cover w-1/2 h-[18rem] max-md:w-[100%] mx-auto max-md:block max-xl:block"
          width={500}
          height={300}
        />
      </div>

      <div className="hidden w-full gap-5 max-xl:grid max-xl:grid-cols-1">
        <div className="flex items-center justify-start gap-5 shadow-sm p-3 className='w-full' border-l-4 border-[#bce1fd]">
          <div className="flex flex-col items-start justify-start gap-1">
            {/* <h3 className="text-2xl font-semibold text-gray-900 font-baskervville">
                                        Consulting
                                    </h3> */}
            {/* <div className="w-[20%] h-[3px] bg-[#bce1fd]" ></div> */}
            <ul className="grid grid-cols-2 gap-y-4 list-disc pl-[4vh] gap-x-[8vh] py-3 max-md:grid-cols-1 max-md:hidden">
              <Link
                href="./advisory"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full group"
              >
                <li
                  className="relative py-0 text-xl font-thin text-gray-500 hover:text-gray-600 
               after:content-[''] after:absolute after:left-0 after:bottom-0 
               after:h-[2px] after:bg-gray-400 after:w-0 
               after:transition-all after:duration-500 after:ease-in-out 
               group-hover:after:w-[30%]"
                >
                  Advisory
                </li>
              </Link>

              <Link
                href="./business-strategy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full group"
              >
                <li
                  className="relative py-0 text-xl font-thin text-gray-500 hover:text-gray-600 
               after:content-[''] after:absolute after:left-0 after:bottom-0 
               after:h-[2px] after:bg-gray-400 after:w-0 
               after:transition-all after:duration-500 after:ease-in-out 
               group-hover:after:w-[60%]"
                >
                  Business Strategy
                </li>
              </Link>

              <Link
                href="./growth-marketing-and-sales"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full group"
              >
                <li
                  className="relative py-0 text-xl font-thin text-gray-500 hover:text-gray-600 
               after:content-[''] after:absolute after:left-0 after:bottom-0 
               after:h-[2px] after:bg-gray-400 after:w-0 
               after:transition-all after:duration-500 after:ease-in-out 
               group-hover:after:w-[90%]"
                >
                  Growth, Marketing & Sales
                </li>
              </Link>
              <Link
                href="./project-factory-technical-design"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full group"
              >
                <li
                  className="relative py-0 text-xl font-thin text-gray-500 hover:text-gray-600 
               after:content-[''] after:absolute after:left-0 after:bottom-0 
               after:h-[2px] after:bg-gray-400 after:w-0 
               after:transition-all after:duration-500 after:ease-in-out 
               group-hover:after:w-[90%]"
                >
                  Project - Factory Technical Design
                </li>
              </Link>

              <Link
                href="./warehousing-solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full group"
              >
                <li
                  className="relative py-0 text-xl font-thin text-gray-500 hover:text-gray-600 
               after:content-[''] after:absolute after:left-0 after:bottom-0 
               after:h-[2px] after:bg-gray-400 after:w-0 
               after:transition-all after:duration-500 after:ease-in-out 
               group-hover:after:w-[75%]"
                >
                  Warehousing Solutions
                </li>
              </Link>
              <Link
                href="./operations-excellence"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full group"
              >
                <li
                  className="relative py-0 text-xl font-thin text-gray-500 hover:text-gray-600 
               after:content-[''] after:absolute after:left-0 after:bottom-0 
               after:h-[2px] after:bg-gray-400 after:w-0 
               after:transition-all after:duration-500 after:ease-in-out 
               group-hover:after:w-[75%]"
                >
                  Operations Excellence
                </li>
              </Link>

              <Link
                href="./automation-in-manufacturing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full group"
              >
                <li
                  className="relative py-0 text-xl font-thin text-gray-500 hover:text-gray-600 
               after:content-[''] after:absolute after:left-0 after:bottom-0 
               after:h-[2px] after:bg-gray-400 after:w-0 
               after:transition-all after:duration-500 after:ease-in-out 
               group-hover:after:w-[100%]"
                >
                  Automation In Manufacturing
                </li>
              </Link>
              <Link
                href="./supply-chain-management"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full group"
              >
                <li
                  className="relative py-0 text-xl font-thin text-gray-500 hover:text-gray-600 
               after:content-[''] after:absolute after:left-0 after:bottom-0 
               after:h-[2px] after:bg-gray-400 after:w-0 
               after:transition-all after:duration-500 after:ease-in-out 
               group-hover:after:w-[90%]"
                >
                  Supply Chain Management
                </li>
              </Link>

              <Link
                href="./people-and-organisational-performance"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full group"
              >
                <li
                  className="relative py-0 text-xl font-thin text-gray-500 hover:text-gray-600 
               after:content-[''] after:absolute after:left-0 after:bottom-0 
               after:h-[2px] after:bg-gray-400 after:w-0 
               after:transition-all after:duration-500 after:ease-in-out 
               group-hover:after:w-[80%]"
                >
                  People & Organisational Performance
                </li>
              </Link>

              <Link
                href="./sustainability"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full group"
              >
                <li
                  className="relative py-0 text-xl font-thin text-gray-500 hover:text-gray-600 
               after:content-[''] after:absolute after:left-0 after:bottom-0 
               after:h-[2px] after:bg-gray-400 after:w-0 
               after:transition-all after:duration-500 after:ease-in-out 
               group-hover:after:w-[50%]"
                >
                  Sustainability
                </li>
              </Link>

              <Link
                href="./financial-strategy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full group"
              >
                <li
                  className="relative py-0 text-xl font-thin text-gray-500 hover:text-gray-600 
               after:content-[''] after:absolute after:left-0 after:bottom-0 
               after:h-[2px] after:bg-gray-400 after:w-0 
               after:transition-all after:duration-500 after:ease-in-out 
               group-hover:after:w-[60%]"
                >
                  Financial Strategy
                </li>
              </Link>

              <Link
                href="./msme-growx"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full group"
              >
                <li
                  className="relative py-0 text-xl font-thin text-gray-500 hover:text-gray-600 
               after:content-[''] after:absolute after:left-0 after:bottom-0 
               after:h-[2px] after:bg-gray-400 after:w-0 
               after:transition-all after:duration-500 after:ease-in-out 
               group-hover:after:w-[60%]"
                >
                  MSME GrowX
                </li>
              </Link>

              <Link
                href="./people"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full group"
              >
                <li
                  className="relative py-0 text-xl font-thin text-gray-500 hover:text-gray-600 
               after:content-[''] after:absolute after:left-0 after:bottom-0 
               after:h-[2px] after:bg-gray-400 after:w-0 
               after:transition-all after:duration-500 after:ease-in-out 
               group-hover:after:w-[30%]"
                >
                  People - Skilling & Talent Placement
                </li>
              </Link>

              <Link
                href="./digital-transformation"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full group"
              >
                <li
                  className="relative py-0 text-xl font-thin text-gray-500 hover:text-gray-600 
               after:content-[''] after:absolute after:left-0 after:bottom-0 
               after:h-[2px] after:bg-gray-400 after:w-0 
               after:transition-all after:duration-500 after:ease-in-out 
               group-hover:after:w-[80%]"
                >
                  Digital Transformation
                </li>
              </Link>
            </ul>

            {/* in mobile  */}
            <ul className="hidden list-disc pl-[4vh] gap-x-[8vh] py-3 max-md:grid-cols-1 max-md:grid">
              <Link
                href="./advisory"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <li className="py-2 text-xl font-thin text-gray-500 hover:text-black">
                  Advisory
                </li>
              </Link>

              <Link
                href="./business-strategy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <li className="py-2 text-xl font-thin text-gray-500 hover:text-black">
                  Business Strategy
                </li>
              </Link>
              <Link
                href="./growth-marketing-and-sales"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <li className="py-2 text-xl font-thin text-gray-500 hover:text-black">
                  Growth, Marketing & Sales
                </li>
              </Link>
              <Link
                href="./project-factory-technical-design"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <li className="py-2 text-xl font-thin text-gray-500 hover:text-black">
                  Project - Factory Technical Design
                </li>
              </Link>
              <Link
                href="./warehousing-solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <li className="py-2 text-xl font-thin text-gray-500 hover:text-black">
                  Warehousing Solutions
                </li>
              </Link>
              <Link
                href="./operations-excellence"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <li className="py-2 text-xl font-thin text-gray-500 hover:text-black">
                  Operations Excellence
                </li>
              </Link>

              <Link
                href="./automation-in-manufacturing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <li className="py-2 text-xl font-thin text-gray-500 hover:text-black">
                  Automation In Manufacturing
                </li>
              </Link>

              <Link
                href="./supply-chain-management"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <li className="py-2 text-xl font-thin text-gray-500 hover:text-black">
                  Supply Chain Management
                </li>
              </Link>

              <Link
                href="./people-and-organisational-performance"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <li className="py-2 text-xl font-thin text-gray-500 hover:text-black">
                  People & Organisational Performance
                </li>
              </Link>

              <Link
                href="./sustainability"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <li className="py-2 text-xl font-thin text-gray-500 hover:text-black">
                  Sustainability
                </li>
              </Link>

              <Link
                href="./financial-strategy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <li className="py-2 text-xl font-thin text-gray-500 hover:text-black">
                  Financial Strategy
                </li>
              </Link>

              <Link
                href="./msme-growx"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <li className="py-2 text-xl font-thin text-gray-500 hover:text-black">
                  MSME GrowX
                </li>
              </Link>

              <Link
                href="./people"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <li className="py-2 text-xl font-thin text-gray-500 hover:text-black">
                  People
                </li>
              </Link>

              <Link
                href="./digital-transformation"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <li className="py-2 text-xl font-thin text-gray-500 hover:text-black">
                  Digital Transformation
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>

      <Image
        src={`${BaseUrl().imgurl}${image}`}
        alt={altText ? altText : "Madasky Consulting"}
        className="object-cover w-1/2 h-auto max-md:w-full max-md:hidden max-xl:hidden"
        width={500}
        height={400}
      />
    </div>
  );
}
