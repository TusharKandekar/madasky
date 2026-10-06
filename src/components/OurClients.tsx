"use client";
import Image from "next/image";
export default function OurClient() {
    // Create an array of image paths
    const imagePaths = Array.from({ length: 28 }, (_, i) => `/assets/images/clientLogos/${i + 1}.png`);
    
    return (
      
      <div className="relative flex items-center justify-center py-8 overflow-hidden max-md:py-0">
        <div className="absolute top-0 left-0 h-full w-70 bg-gradient-to-l from-transparent "></div>
        <div className="absolute top-0 right-0 h-full w-70 bg-gradient-to-r from-transparent"></div>
        
        <div className="flex animate-slide space-x-4 w-[100%]">
          {imagePaths.map((src, index) => (
            <Image
              key={`logo-${index}`}
              src={src}
              alt={`Client Logo ${index + 1}`}
              className="h-[35vh] min-w-[250px] object-contain"
              width={800}
              height={400}
            />
          ))}
        </div>
      </div>
    );
  }
  