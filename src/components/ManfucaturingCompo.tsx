import React from 'react'
import Banner from '@/components/Banner'
import AboutNavbar from '@/components/Header/AboutNavbar'
import Jewellery from '@/components/Jewellery'
import CapabilitiesMainCard from '@/components/CapabilitiesMainCard'
import CapabilitiesMainCardSecond from '@/components/CapabilitiesMainCardSecond'
import AboutVideo from '@/components/AboutVideo'
import BaseUrl from '@/components/BaseUrl'
import { getImageAltText, getWebBlogs, getDataByPageName, filterByWebImage, getImageData } from "@/common/api";


export default async function ManfucaturingCompo({h1}:{h1:string}) {

    const arr = ["INDIAN MANFACTURING INDUSTRIES.png", "Keychallenges3.png", "326.jpg"];


   let images;
  let serverError = false;

  try {
    images = await getImageAltText(arr);

  }
  catch (error) {
    // console.error("Server Error:", error);
    serverError = true;
  }

  // console.log("Images", images);
  if (serverError) {
    return <div>Server Error</div>
  }





    const imgAltText = await getImageData(images);

    const industries = [
        'Automotive Manufacturing',
        'Apparel Industry',
        'Home Textile Industry',
        'Electronics Manufacturing',
        'Food and Beverage Manufacturing',
        'Pharmaceutical Manufacturing',
        'Chemical Manufacturing',
        'Textile Manufacturing',
        ' Footwear',
        'Beauty and Care',

    ];
    return (
        <div>

            <AboutNavbar />
            <AboutVideo vid1={'assets/videos/364.mp4'} title={"Manufacturing"} des={"Driving Innovation and Quality in Manufacturing"} pageName={"Manufacturing Industries"} h1={h1}/>
            

            <div className="mx-auto max-w-8xl max-md:px-0">
                <Jewellery
                    details1={{
                        title: 'Manufacturing',
                        img: `${BaseUrl().imgurl}/INDIAN MANFACTURING INDUSTRIES.png`,
                        description: '',
                        altText: imgAltText[0]
                    }}
                    industries={industries}
                />

                <CapabilitiesMainCard
                    details1={{
                        title: 'Key Challanges Faced By The Industry',
                        des: 'Manufacturers, including clothing manufacturers for startups and plastic manufacturers often face disruptions due to raw material shortages, geopolitical tensions, or global health crises. These disruptions can halt production lines and inflate costs.The pace of technological innovation requires manufacturers to continuously adapt and integrate new technologies like smart factory solutions and manufacturing technology to stay competitive. There is a skills gap, particularly acute in areas like smart manufacturing and plastic molding company operations, hindering growth and innovation. Fluctuating market demands, such as those faced by clothing manufacturers for startups, require quick adaptation to prevent inventory issues. Managing production costs,  ensuring quality control, and handling competitive pricing pressures.',
                        img: `${BaseUrl().imgurl}/Keychallenges3.png`,
                        altText: imgAltText[1]

                    }}
                />
                <CapabilitiesMainCardSecond
                    details1={{
                        title: 'How We Help Our Clients? ',
                        des: 'Our services focused on creating resilient supply chains through advanced forecasting, diversified sourcing, and enhanced logistics management, adopting and integrating cutting-edge technologies like smart factory setups and manufacturing technology innovations,  Focused on improving product quality across manufacturing processes, we provide cost reduction strategies, resource optimization, and financial planning to improve profitability and manage production expenses,  strategies to streamline operations, enhance workforce productivity, and improve overall manufacturing efficiency',
                        img: `${BaseUrl().imgurl}/326.jpg`,
                        altText: imgAltText[2]
                    }}
                />

            </div>
        </div>
    )
}
