"use client";
import { useState, useEffect } from "react";
import LogoCombo from "@/components/Header/LogoCombo";
import DropdownIcon from "@/components/DropdownIcon";
import Sidebar from "@/components/Header/Sidebar";
import AboutItems from "@/components/AboutItems";
import Navitem from "@/components/Header/Navitem";
import IndustriesNav from "@/components/IndustriesNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BiSolidRightArrow } from "react-icons/bi";
import Image from "next/image";
import router from "next/router";
// import logo2 from "@/assets/images/logo2.png"

import {
  // faRankingStar,
  // faFilterCircleDollar,
  // faCheckToSlot,
  // faBarsProgress,
  faArrowRightLong,

  // faStackExchange,
} from "@fortawesome/free-solid-svg-icons";
import // faProjectDiagram,
  // faCog,
  // faBusinessTime,
  // faUsers,

  "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
export default function AboutNavbar({ position = "fixed" }) {
  useEffect(() => {
    const handleScroll = () => {
      handleMouseLeave();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setActiveMenu(index);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const navItems = [
    { title: "Home", link: "/", dropdown: false },
    { title: "About Us", link: "#", dropdown: true },
    { title: "Capabilities", link: "#", dropdown: true },
    { title: "Audits Series", link: "/audit", dropdown: false },
    { title: "Industries", link: "#", dropdown: true },
    { title: "Career", link: "#", dropdown: true },
    { title: "Insights", link: "#", dropdown: true },
  ];

  // const industries = [
  //     { title: 'Manufacturing Industries', link: '/manufacturing', Image: "/assets/images/339.png" },
  //     { title: 'E-Commerce Industries', link: '/e-commerce', Image: "/assets/images/manufacturing.png" },
  //     { title: 'Tourism', link: '/tourisum', Image: "/assets/images/manufacturing.png" },
  //     { title: 'Construction', link: '/construction', Image: "/assets/images/manufacturing.png" },
  //     { title: 'Real Estate', link: '/real-state', Image: "/assets/images/manufacturing.png" },
  //     { title: 'Fashion & Jewellery', link: '/industries', Image: "/assets/images/manufacturing.png" },
  //     { title: 'Financial Services', link: '/financial-services', Image: "/assets/images/manufacturing.png" },
  //     { title: 'Trading & Wholesale', link: '/tranding-wholesale', Image: "/assets/images/manufacturing.png" },
  // ];

  // const sortedIndustries = industries.sort(
  //     (a, b) => a.title.length - b.title.length
  // );

  // console.log(sortedIndustries);

  const renderDropdown = (index: number) => {
    switch (index) {
      case 1: // About
        return (
          <div className="fixed left-0 z-50 flex items-center justify-center w-screen h-auto top-20">
            <div className="w-[50%] flex flex-row items-start justify-start bg-white shadow-xl border-2 border-slate-200 h-[50vh] py-5">
              {/* <div className="w-[25%]">
                                <div className="relative flex flex-row mt-8">
                                    <div className="">
                                        <a href={'/about'} className="flex text-xl font-semibold text-center">
                                            <h2>About Us Overview</h2>
                                        </a>
                                    </div>
                                    <div className="bg-[#e9e8e8] h-[25vh] w-[1px] ml-10 absolute right-0 rounded-full"></div>
                                </div>
                            </div> */}
              <div className="w-[50%] px-6">
                <div className="relative flex flex-row pl-4">
                  <div className="flex flex-col items-start justify-start gap-6">
                    <div className="flex text-xl font-semibold text-center">
                      <h2>Who We Are</h2>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-3">
                      <AboutItems
                        link="/our-people"
                        title="Our Leadership and People"
                      />
                      <AboutItems
                        link="/purpose-vision"
                        title="Purpose, Mission, Vision and Values"
                      />
                      <AboutItems link="/history" title="Our History" />
                      <AboutItems link="/aspiration" title="Our Aspiration" />
                      {/* <AboutItems
                                                link="/leadership"
                                                title="Our Leadership"
                                            />
                                            <AboutItems
                                                link="/purpose-vision"
                                                title="Purpose, Mission, Vision and Values"
                                            /> */}
                    </div>
                  </div>

                  <div className="bg-[#e9e8e8] rounded-full h-auto w-[1px] ml-10 absolute right-0"></div>
                </div>
              </div>
              <div className="w-[2px] h-[100%] bg-slate-200"></div>
              <div className="w-[50%]">
                <div className="pl-[2.8rem] flex-col items-start justify-center">
                  <div className="flex items-start justify-start">
                    <a
                      href={"/how-we-work"}
                      className="flex items-center justify-start gap-3 text-xl font-semibold text-center"
                    >
                      <h2>How We Work</h2>
                      <FontAwesomeIcon
                        icon={faArrowRightLong}
                        className="mr-3 text-xl text-blue-500"
                      />
                    </a>
                  </div>
                  <span className="text-sm text-gray-400">Overview</span>
                  <a href={"/how-we-work"}>
                    <div className="relative mt-4 ml-[-0.5rem]">
                      <Image
                        className="brightness-75 mt-2 rounded-lg w-[70%]"
                        src="/assets/images/howewoek1.png"
                        width={100}
                        height={100}
                        alt=""
                      />
                      <p className="mt-4 w-[90%]">
                        We are partner of many IT Companies and provide digital
                        solutions to our clients
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      case 4: // Industries
        return (
          <div className="fixed left-0 z-50 flex items-center justify-center w-screen h-auto top-20">
            <div className="w-[75%] flex flex-row items-start justify-center bg-white shadow-xl border-2 border-slate-200 h-[25vh] p-6">
              <div className="flex items-center justify-center w-full h-full">
                <IndustriesNav />
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="fixed left-0 z-50 flex items-center justify-center w-screen h-auto top-20">
            <div className="w-[90%] flex flex-row items-start justify-center group bg-white shadow-xl border-2 border-slate-200 h-auto">
              <div className="w-[20%]">
                <div className="relative flex flex-col w-full mt-8 mb-8">
                  <div className="flex flex-row">
                    <a
                      href="./advisory-consulting"
                      className="flex items-center justify-center gap-3 text-xl font-semibold text-center"
                    >
                      {/* <a
                                                to="/advisory"
                                                className="flex items-center justify-center gap-3 text-xl font-semibold text-center"
                                            > */}
                      <h2>Advisory</h2>
                      <FontAwesomeIcon
                        icon={faArrowRightLong}
                        className="mr-3 text-xl font-thin text-blue-500"
                      />

                      {/* </a> */}
                    </a>
                  </div>
                  <span className="text-sm text-gray-400">Overview</span>
                  <div className="w-full">
                    <a href="./advisory-consulting">
                      {/* <a
                                                    to="/advisory"> */}
                      <div className="relative mt-10">
                        {/* <img className='w-auto mx-auto h-[24vh] text-blue-600 mt-2 rounded-lg' src="/assets/images/advisory2.png" alt="" /> */}
                        <div
                          className={`relative mx-auto mt-2 w-full rounded-lg h-[24vh]`}
                        >
                          <Image
                            src={`/assets/images/advisory2.png`}
                            alt={"Madasky Consulting"}
                            fill
                            className="object-fill rounded-2xl max-md:object-fill"
                          />
                        </div>
                        <p className="w-[90%] mt-4 text-justify">
                          We provide trusted advisory services, delivering
                          tailored digital strategies to help IT companies
                          achieve their goals
                        </p>
                      </div>
                      {/* </a> */}
                    </a>
                  </div>

                  {/* <div className="bg-[#e9e8e8] h-[100%] w-[1px] ml-10 absolute right-0 rounded-full"></div> */}
                </div>
              </div>

              <div className="w-[30%]">
                <div className="relative flex flex-row w-full pl-4 mt-8 mb-8">
                  <div className="bg-[#e9e8e8] h-[100%] w-[1px] ml-10 absolute left-[-3.5rem] rounded-full"></div>

                  <div className="flex flex-col items-start justify-start w-full gap-6">
                    <div className="flex text-xl font-semibold text-center">
                      <h2>Consulting</h2>
                    </div>

                    <div className="flex flex-col items-start justify-start w-full space-y-2">
                      <a href="./business-strategy-consulting">
                        {/* <a href={'/business-strategy'}> */}

                        <div className="flex items-center">
                          <span>Business Strategy</span>
                        </div>
                        {/* </a> */}
                      </a>

                      {/* growth, marketing & sales  */}

                      <div className="flex items-center w-full">
                        <div className="relative w-full max-h-[1.5rem] hover:max-h-[12rem] overflow-hidden transform transition-all duration-500 ease-in-out">
                          {/* <p>Growth, Marketing & Sales</p> */}
                          <a href="/growth-marketing-consulting">
                            Growth, Marketing & Sales
                          </a>
                          <div className="bg-white w-[20vw]">
                            <div className="w-full transition-all duration-500 ease-out transform text-md">
                              <a href="/go-to-market-strategy">
                                <p className="flex items-center gap-2 px-4 hover:text-gray-700 hover:underline hover:underline-offset-4">
                                  <span>
                                    <BiSolidRightArrow className="text-[10px]" />
                                  </span>
                                  Go-to-Market Strategy
                                </p>
                              </a>
                              <a href="/new-age-marketing">
                                <p className="flex items-center gap-2 px-4 hover:text-gray-700 hover:underline hover:underline-offset-4">
                                  <span>
                                    <BiSolidRightArrow className="text-[10px]" />
                                  </span>
                                  New Age Marketing
                                </p>
                              </a>

                              <a href="/sales-accelerator-program">
                                <p className="flex items-center gap-2 px-4 hover:text-gray-700 hover:underline hover:underline-offset-4">
                                  <span>
                                    <BiSolidRightArrow className="text-[10px]" />
                                  </span>
                                  Sales Accelerator Program
                                </p>
                              </a>

                              <a href="/5x-business-multiplier-program">
                                <p className="flex items-center gap-2 px-4 hover:text-gray-700 hover:underline hover:underline-offset-4">
                                  <span>
                                    <BiSolidRightArrow className="text-[10px]" />
                                  </span>
                                  The 5X Business Multiplier Program
                                </p>
                              </a>

                              <a href="/growth-marketing-e-commerce">
                                <p className="flex items-center gap-2 px-4 hover:text-gray-700 hover:underline hover:underline-offset-4">
                                  <span>
                                    <BiSolidRightArrow className="text-[10px]" />
                                  </span>
                                  E-commerce
                                </p>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* </a> */}

                      {/* 
                                                <a href={'/india-business-strategy'}>
    
                                                    <div className="flex items-center">
    
                                                        <div className="relative group">
    
    
                                                            <p>India Business Strategy</p>
                                                            <div className='bg-white h-0 overflow-hidden group-hover:h-auto w-[20vw] transition-all duration-500 ease-out transform'>
                                                                <div className='w-full transition-all duration-500 ease-out transform text-md'>
    
                                                                    <a href='/go-to-market-strategy'>
                                                                        <p className='flex items-center gap-2 px-4'><span><BiSolidRightArrow className='text-[10px]' /></span>Go-to-Market Strategy</p>
    
                                                                    </a>
                                                                    <a href='/new-age-marketing'>
    
                                                                        <p className='flex items-center gap-2 px-4'><span><BiSolidRightArrow className='text-[10px]' /></span>New Age Marketing</p>
                                                                    </a>
    
                                                                    <p className='flex items-center gap-2 px-4'><span><BiSolidRightArrow className='text-[10px]' /></span>Sales Accelerator Program</p>
                                                                    <p className='flex items-center gap-2 px-4'><span><BiSolidRightArrow className='text-[10px]' /></span>The 5X Business Multiplier Program</p>
                                                                    <p className='flex items-center gap-2 px-4'><span><BiSolidRightArrow className='text-[10px]' /></span>E-commerce</p>
    
    
    
                                                                </div>
                                                            </div>
    
    
                                                        </div>
                                                    </div>
                                                </a> */}

                      {/* <a href={'/india-business-strategy'}>
    
                                                    <div className="flex items-center h-auto hover:h-auto">
    
                                                        <div className="">
    
    
                                                            <p>India Business Strategy</p>
    
    
                                                            <div className='bg-white overflow-hidden w-[20vw] transition-all duration-500 ease-out transform'>
                                                                <div className='w-full transition-all duration-500 ease-out transform text-md'>
    
                                                                    <a href='/go-to-market-strategy'>
                                                                        <p className='flex items-center gap-2 px-4'><span><BiSolidRightArrow className='text-[10px]' /></span>Go-to-Market Strategy</p>
    
                                                                    </a>
                                                                    <a href='/new-age-marketing'>
    
                                                                        <p className='flex items-center gap-2 px-4'><span><BiSolidRightArrow className='text-[10px]' /></span>New Age Marketing</p>
                                                                    </a>
    
                                                                    <p className='flex items-center gap-2 px-4'><span><BiSolidRightArrow className='text-[10px]' /></span>Sales Accelerator Program</p>
                                                                    <p className='flex items-center gap-2 px-4'><span><BiSolidRightArrow className='text-[10px]' /></span>The 5X Business Multiplier Program</p>
                                                                    <p className='flex items-center gap-2 px-4'><span><BiSolidRightArrow className='text-[10px]' /></span>E-commerce</p>
    
    
    
                                                                </div>
                                                            </div>
    
    
                                                        </div>
                                                    </div>
                                                </a> */}

                      {/* Project - Factory technical design  */}

                      <div className="flex items-center w-full">
                        <div className="relative w-full max-h-[1.5rem] hover:max-h-[12rem] overflow-hidden transform transition-all duration-500 ease-in-out">
                          <a href="/factory-technical-design-consulting">
                            Project - Factory Technical Design
                          </a>

                          <div className="bg-white w-[20vw]">
                            <div className="w-full transition-all duration-500 ease-out transform text-md">
                              <a href="/plant-layout-consulting">
                                <p className="flex items-center gap-2 px-4 hover:text-gray-700 hover:underline hover:underline-offset-4">
                                  <span>
                                    <BiSolidRightArrow className="text-[10px]" />
                                  </span>
                                  Plant Layout
                                </p>
                              </a>
                              <a href="/technical-consulting">
                                <p className="flex items-center gap-2 px-4 hover:text-gray-700 hover:underline hover:underline-offset-4">
                                  <span>
                                    <BiSolidRightArrow className="text-[10px]" />
                                  </span>
                                  Technical Consulting
                                </p>
                              </a>

                              <a href="/manpower-planning-consulting">
                                <p className="flex items-center gap-2 px-4 hover:text-gray-700 hover:underline hover:underline-offset-4">
                                  <span>
                                    <BiSolidRightArrow className="text-[10px]" />
                                  </span>
                                  Manpower Planning
                                </p>
                              </a>

                              <a href="/process-and-material-flow-consulting">
                                <p className="flex items-center gap-2 px-4 hover:text-gray-700 hover:underline hover:underline-offset-4">
                                  <span>
                                    <BiSolidRightArrow className="text-[10px]" />
                                  </span>
                                  Process & Material Flow
                                </p>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center w-full">
                        <div className="relative w-full max-h-[1.5rem] hover:max-h-[12rem] overflow-hidden transform transition-all duration-500 ease-in-out">
                          <a href="/warehousing-solutions-consulting">
                            Warehousing Solutions
                          </a>
                          <div className="bg-white w-[25vw]">
                            <div className="w-full transition-all duration-500 ease-out transform text-md">
                              <a href="/facility-design">
                                <p className="flex items-center gap-2 px-4 hover:text-gray-700 hover:underline hover:underline-offset-4">
                                  <span>
                                    <BiSolidRightArrow className="text-[10px]" />
                                  </span>
                                  Facility Design - Different types of
                                  Warehouses
                                </p>
                              </a>
                              <a href="/material-handling-equipment">
                                <p className="flex items-center gap-2 px-4 hover:text-gray-700 hover:underline hover:underline-offset-4">
                                  <span>
                                    <BiSolidRightArrow className="text-[10px]" />
                                  </span>
                                  Material Handling Equipment
                                </p>
                              </a>

                              <a href="/logistics-and-supply-chain-services">
                                <p className="flex items-center gap-2 px-4 hover:text-gray-700 hover:underline hover:underline-offset-4">
                                  <span>
                                    <BiSolidRightArrow className="text-[10px]" />
                                  </span>
                                  Logistics and Supply Chain Services
                                </p>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* operations excellence  */}
                      <div className="flex items-center w-full">
                        <div className="relative w-full max-h-[1.5rem] hover:max-h-[12rem] overflow-hidden transform transition-all duration-500 ease-in-out">
                          <a href="/operations-excellence-consulting">
                            Operations Excellence
                          </a>

                          <div className="w-full bg-white">
                            <div className="w-full transition-all duration-500 ease-out transform text-md">
                              <a href="/productivity-and-efficiency-improvement">
                                <p className="flex items-center gap-2 px-4 hover:text-gray-700 hover:underline hover:underline-offset-4">
                                  <span>
                                    <BiSolidRightArrow className="text-[10px]" />
                                  </span>
                                  Productivity & Efficiency Improvement
                                </p>
                              </a>
                              <a href="/implementation-support">
                                <p className="flex items-center gap-2 px-4 hover:text-gray-700 hover:underline hover:underline-offset-4">
                                  <span>
                                    <BiSolidRightArrow className="text-[10px]" />
                                  </span>
                                  Implementation Support
                                </p>
                              </a>

                              <a href="/delivery-performance-and-lead-time-reduction-program">
                                <p className="flex items-center gap-2 px-4 hover:text-gray-700 hover:underline hover:underline-offset-4">
                                  <span>
                                    <BiSolidRightArrow className="text-[10px]" />
                                  </span>
                                  Delivery Performance & Lead Time Reduction
                                  Program
                                </p>
                              </a>

                              <a href="/sampling-lead-time-reduction">
                                <p className="flex items-center gap-2 px-4 hover:text-gray-700 hover:underline hover:underline-offset-4">
                                  <span>
                                    <BiSolidRightArrow className="text-[10px]" />
                                  </span>
                                  Sampling - Lead Time Reduction
                                </p>
                              </a>

                              <a href="/leverage-technology-for-innovation-and-efficiency">
                                <p className="flex items-center gap-2 px-4 hover:text-gray-700 hover:underline hover:underline-offset-4">
                                  <span>
                                    <BiSolidRightArrow className="text-[10px]" />
                                  </span>
                                  Leverage Technology For Innovation &
                                  Efficiency
                                </p>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <a href="/automation-in-manufacturing-consulting">
                        {/* <a href={'/automation-in-manufacturing'}> */}
                        <div className="flex items-center">
                          <span>Automation In Manufacturing</span>
                        </div>
                        {/* </a> */}
                      </a>

                      <a href="./supply-chain-management-consulting">
                        {/* <a href={'/supply-chain-management'}> */}

                        <div className="flex items-center">
                          <span>Supply Chain Management</span>
                        </div>
                        {/* </a> */}
                      </a>

                      {/* People & Organisational Performance */}
                      <div className="flex items-center w-full">
                        <div className="relative w-full max-h-[1.5rem] hover:max-h-[12rem] overflow-hidden transform transition-all duration-500 ease-in-out">
                          {/* <span >People & Organisational Performance</span> */}
                          <a href="/people-and-organisational-performance-consulting">
                            People & Organisational Performance
                          </a>
                          <div className="w-full bg-white">
                            <div className="w-full transition-all duration-500 ease-out transform text-md">
                              <a href="/leadership-development-and-talent-management">
                                <p className="flex items-center gap-2 px-4 hover:text-gray-700 hover:underline hover:underline-offset-4">
                                  <span>
                                    <BiSolidRightArrow className="text-[10px]" />
                                  </span>
                                  Leadership Development & Talent Management
                                </p>
                              </a>
                              <a href="/organization-design">
                                <p className="flex items-center gap-2 px-4 hover:text-gray-700 hover:underline hover:underline-offset-4">
                                  <span>
                                    <BiSolidRightArrow className="text-[10px]" />
                                  </span>
                                  Organization Design - Position, Reporting
                                </p>
                              </a>

                              <a href="/culture-transformation">
                                <p className="flex items-center gap-2 px-4 hover:text-gray-700 hover:underline hover:underline-offset-4">
                                  <span>
                                    <BiSolidRightArrow className="text-[10px]" />
                                  </span>
                                  Culture Transformation - Executive Coaching
                                </p>
                              </a>

                              <a href="/performance-management-and-rewards">
                                <p className="flex items-center gap-2 px-4 hover:text-gray-700 hover:underline hover:underline-offset-4">
                                  <span>
                                    <BiSolidRightArrow className="text-[10px]" />
                                  </span>
                                  Performance Management & Rewards
                                </p>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <a href="./sustainability-consulting">
                        {/* <a href={'/sustainability'}> */}

                        <div className="flex items-center">
                          <span>Sustainability</span>
                        </div>
                        {/* </a> */}
                      </a>

                      {/* financial strategy  */}
                      <div className="flex items-center w-full">
                        <div className="relative w-full max-h-[1.5rem] hover:max-h-[12rem] overflow-hidden transform transition-all duration-500 ease-in-out">
                          {/* <span>Financial Strategy</span> */}
                          <a href="/financial-strategy-consulting">
                            Financial Strategy
                          </a>
                          <div className="w-full bg-white">
                            <div className="w-full transition-all duration-500 ease-out transform text-md">
                              <a href="/rapid-cash-generation-consulting">
                                <p className="flex items-center gap-2 px-4 hover:text-gray-700 hover:underline hover:underline-offset-4">
                                  <span>
                                    <BiSolidRightArrow className="text-[10px]" />
                                  </span>
                                  Rapid Cash Generation
                                </p>
                              </a>
                              <a href="/performance-transformation-consulting">
                                <p className="flex items-center gap-2 px-4 hover:text-gray-700 hover:underline hover:underline-offset-4">
                                  <span>
                                    <BiSolidRightArrow className="text-[10px]" />
                                  </span>
                                  Performance Transformation
                                </p>
                              </a>

                              <a href="/cost-transformation-consulting">
                                <p className="flex items-center gap-2 px-4 hover:text-gray-700 hover:underline hover:underline-offset-4">
                                  <span>
                                    <BiSolidRightArrow className="text-[10px]" />
                                  </span>
                                  Cost Transformation
                                </p>
                              </a>

                              <a href="/working-capital-optimisation-consulting">
                                <p className="flex items-center gap-2 px-4 hover:text-gray-700 hover:underline hover:underline-offset-4">
                                  <span>
                                    <BiSolidRightArrow className="text-[10px]" />
                                  </span>
                                  Working Capital Optimisation
                                </p>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <a href="./msme-growx-consulting">
                        {/* <a href={'/msme-growx'}> */}

                        <div className="flex items-center">
                          <span>MSME GrowX</span>
                        </div>
                        {/* </a> */}
                      </a>
                    </div>
                  </div>

                  <div className="bg-[#e9e8e8] rounded-full h-[100%] w-[1px] ml-10 absolute right-0"></div>
                  <div className="bg-[#e9e8e8] rounded-full h-[100%] w-[1px] ml-10 absolute right-[-80%]"></div>
                </div>
              </div>

              <div className="w-[24%]">

                {/* Audit  */}
                <div className="pl-[0.8rem] flex flex-col gap-6 mt-8">
                  <div className="flex flex-col items-start justify-start">
                    <a
                      href="./people"
                      className="flex items-start justify-start gap-3 text-xl font-semibold"
                    >

                      <h2>Profitablity & Growth <br /> Audit Series</h2>
                      {/* <FontAwesomeIcon
                        icon={faArrowRightLong}
                        className="text-xl text-blue-500"
                      /> */}

                    </a>

                   
                  </div>

                  <div className="pl-[0.8rem] flex flex-col gap-1">
                    <a href="./audit#automation-audit">
                      {/* <a href={'/business-strategy'}> */}

                      <div className="flex items-center">
                        <span>Sales Process Audit</span>
                      </div>
                      {/* </a> */}
                    </a>

                    <a href="./audit#business-health">
                      {/* <a href={'/business-strategy'}> */}

                      <div className="flex items-center">
                        <span>Business Health Check</span>
                      </div>
                      {/* </a> */}
                    </a>

                     <a href="./audit#finance-cashflow">
                      {/* <a href={'/business-strategy'}> */}

                      <div className="flex items-center">
                        <span>Finance & Cashflow Audit</span>
                      </div>
                      {/* </a> */}
                    </a>


                     <a href="./audit#operations-excellence">
                      {/* <a href={'/business-strategy'}> */}

                      <div className="flex items-center">
                        <span>Operations Excellence Audit</span>
                      </div>
                      {/* </a> */}
                    </a>

                     <a href="./audit#people-skilling-consulting">
                      {/* <a href={'/business-strategy'}> */}

                      <div className="go-to-market">
                        <span>Go-To-Market (GTM) Audit</span>
                      </div>
                      {/* </a> */}
                    </a>


                     <a href="./audit#people-performance">
                      {/* <a href={'/business-strategy'}> */}

                      <div className="flex items-center">
                        <span>Automation Diagnosis</span>
                      </div>
                      {/* </a> */}
                    </a>


                     <a href="./audit#productivity">
                      {/* <a href={'/business-strategy'}> */}

                      <div className="flex items-center">
                        <span>People & Organization Performance Audit</span>
                      </div>
                      {/* </a> */}
                    </a>


                     <a href="./audit#sales-process">
                      {/* <a href={'/business-strategy'}> */}

                      <div className="flex items-center">
                        <span>Productivity Audit</span>
                      </div>
                      {/* </a> */}
                    </a>

                    
                  </div>


                   {/* <div className="text-sm text-gray-800 w-[90%] mx-auto">
                      <p>
                        These are not social or compliance audits like BSCI/WRAP - they are business performance audits focused on margin, throughput, and growth.”
                      </p>

                      <p>
                        Compliance audits check whether you follow rules; our audits check whether your factory and business model are designed to make money efficiently.
                      </p>
                    </div> */}


                </div>
              </div>

              <div className="w-[22%]">


                {/* People  */}
                <div className="flex flex-col gap-6 mt-8">
                  <div className="pl-[0.8rem] flex items-center justify-start">
                    <a
                      href="./people"
                      className="flex items-center justify-start gap-3 text-xl font-semibold text-center"
                    >

                      <h2>People</h2>
                      <FontAwesomeIcon
                        icon={faArrowRightLong}
                        className="mr-3 text-xl text-blue-500"
                      />
                      {/* </a> */}
                    </a>
                  </div>

                  <div className="pl-[0.8rem] flex flex-col gap-2">
                    <a href="./talent-acquisition-consulting">
                      {/* <a href={'/business-strategy'}> */}

                      <div className="flex items-center">
                        <span>Talent Acquisition</span>
                      </div>
                      {/* </a> */}
                    </a>

                    <a href="./people-skilling-consulting">
                      {/* <a href={'/business-strategy'}> */}

                      <div className="flex items-center">
                        <span>People - Skilling</span>
                      </div>
                      {/* </a> */}
                    </a>
                  </div>


                </div>

                {/* Digital Transformation  */}
                <div className="flex flex-col mt-8">
                  <div className="pl-[0.8rem] flex items-center justify-start">
                    <a
                      href="./digital-transformation"
                      className="flex items-center justify-start gap-3 text-xl font-semibold text-center"
                    >

                      <h2>Digital Transformation</h2>
                      <FontAwesomeIcon
                        icon={faArrowRightLong}
                        className="mr-3 text-xl text-blue-500"
                      />

                    </a>
                  </div>

                  <div className="pl-[0.8rem] flex flex-col">

                    <span className="text-sm text-gray-400">Overview</span>
                    <a href="./digital-transformation">

                      <div className="relative mt-4">

                        {/* <div
                          className={`relative mx-auto mt-2 w-full rounded-lg h-[24vh]`}
                        >
                          <Image
                            src={`/assets/images/Digital Transformation.png`}
                            alt={"Madasky Consulting"}
                            fill
                            className="object-fill rounded-2xl max-md:object-fill"
                          />
                        </div> */}
                        <p className="mt-4">
                          We are partner of many IT Companies and provide
                          digital solutions to our clients
                        </p>
                      </div>

                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        );
      case 5: // Career
        return (
          <>
            <div className="absolute z-50 transform -translate-x-1/2 bg-white border-2 shadow-xl top-full left-1/2 w-52 border-slate-200">
              <ul className="py-2">
                <DropdownItem title="Home" href="/careers-home" />
                <DropdownItem title="Explore" href="/careers-explore" />
                <DropdownItem
                  title="Our Experts - ProXperts"
                  href="/pro-experts"
                />
                <DropdownItem title="Jobs" href="/careers-jobs" />
              </ul>
            </div>
          </>
        );
      case 6: // Insights
        return (
          <div className="absolute z-50 transform -translate-x-1/2 bg-white border-2 shadow-xl top-full left-1/2 w-52 border-slate-200">
            <ul className="py-2">
              <DropdownItem title="Blogs" href="/blog" />
              <DropdownItem title="Events " href="/events " />
              <DropdownItem title="Gallery" href="/gallery" />
              <DropdownItem title="Videos" href="/video" />
              {/* <DropdownItem title="Podcast" href="#" />
                            <DropdownItem title="On Demand Webinar" href="#" /> */}
            </ul>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <header
      className={`flex-col w-full flex justify-center items-center shadow-lg h-20 ${position === "relative"
        ? "relative bg-white"
        : "fixed top-0 left-0 z-[99] bg-white"
        }`}
    >
      <nav className="w-[95%] h-20 flex items-center justify-between relative">
        <div className="w-1/5 h-full flex items-center justify-center gap-0 max-md:w-full max-xl:w-[40vw] ">
          <Sidebar />
          <LogoCombo />
        </div>
        {/* px-14 here for now i have gave here px-0  */}
        <div className="flex items-center h-full gap-4 px-0 justify-evenly w-fit max-md:hidden max-xl:hidden">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative flex items-center justify-center h-full"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href={item.link}
                className="font-semibold flex text-sm items-center gap-0 text-black hover:text-[#e33512] transition-colors"
              >
                {item.title}
                {item.dropdown && <DropdownIcon />}
              </a>
              {activeMenu === index && item.dropdown && renderDropdown(index)}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-end h-full gap-2 w-fit max-md:hidden max-xl:hidden">
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

// const DropdownSection = ({ title, links, additionalCSS }:DropdownSectionProps) => (
//     <div className={`${additionalCSS}`}>
//         <h3 className="mb-2 text-lg font-semibold">{title}</h3>
//         <ul>
//             {links.map((link, index) => (
//                 <li key={index} className="mb-1">
//                     <a
//                         href={link.href}
//                         className="text-base hover:text-primary after:w-0 hover:after:w-full after:h-0.5 after:absolute relative after:bottom-0 after:left-0 after:transition-all after:duration-300 after:bg-primary"
//                     >
//                         {link.title}
//                     </a>
//                 </li>
//             ))}
//         </ul>
//     </div>
// );

const DropdownItem = ({ title, href }: DropdownItemProps) => (
  <li>
    <a
      href={href}
      className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
    >
      {title}
    </a>
  </li>
);

// interface LinkItem {
//     href: string;
//     title: string;
// }

// interface DropdownSectionProps {
//     title: string;
//     links: LinkItem[];
//     additionalCSS?: string;
// }

interface DropdownItemProps {
  title: string;
  href: string;
}
