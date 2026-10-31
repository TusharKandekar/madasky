"use client";
import Image from "next/image";


export default function ProofPoints() {
  return (
    <section className="relative bg-white">
      <h2 className="hidden mt-20 text-4xl font-bold leading-tight text-gray-900 max-md:block font-baskervville max-xl:text-4xl max-lg:text-center">
        Proof That Manufacturing Problems Can Be Measured
      </h2>
      <div className="relative flex items-center justify-between px-6 py-20 mx-auto overflow-hidden max-w-7xl max-md:p-8 max-md:mb-10 max-lg:flex-col max-lg:gap-12">
        {/* Left Content */}

        <div className="flex relative justify-end w-[40%] h-[24rem] max-md:h-[16rem] max-lg:w-full">
          <Image
            src="/assets/images/proof-points2.png"
            alt="Performance Chart"
            fill
            className="z-0 object-cover w-full h-full max-md:rounded-2xl"
          />

           <div className="absolute -bottom-50 left-5 w-[50%] h-[150px]">
            <Image src="/assets/images/shape-3.png" alt="madasky" fill className="object-cover"></Image>

          </div>




          {/* <div className="absolute z-0 bg-[#152869] h-[80%] w-[80%] top-10 -left-70"></div> */}
        </div>

        {/* Right Image Section */}
        <div className="relative z-10 w-1/2 max-lg:w-full max-md:flex max-md:flex-col max-md:items-center">
          <h2 className="mb-10 text-4xl font-bold leading-tight text-gray-900 max-md:mb-20 font-baskervville max-xl:text-4xl max-md:hidden max-lg:text-center">
            Proof That Manufacturing Problems Can Be Measured
          </h2>

          {/* Metrics */}
          <div className="grid grid-cols-2 gap-6 mb-10 text-center max-md:grid-cols-1 max-lg:grid-cols-2">
            {/* Metric 1 */}
            <div>
              <h3 className="mb-2 text-3xl font-bold text-gray-900">₹43 lakh</h3>
              
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
               Annual packaging-line overtime cost eliminated in a Home Textile unit.
              </p>
            </div>

            {/* Metric 2 */}
            <div>
              <h3 className="mb-2 text-3xl font-bold text-gray-900">92%</h3>

              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                Reduction in packaging-line overtime hours after balancing, changeover and planning interventions
              </p>
            </div>

            {/* Metric 3 */}
            <div>
              <h3 className="mb-2 text-3xl font-bold text-gray-900">82% to 97%</h3>
              
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                 OTIF improvement with fewer paid hours, not more.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-3xl font-bold text-gray-900">61% to 88%</h3>
              
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  Improvement in line balancing efficiency
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="max-w-2xl mb-8 text-lg leading-relaxed text-gray-600 max-md:w-full">
            Home Textile packaging-line case study: results from balancing, changeover and planning improvements.
          </p>


          <div className="absolute -top-30 -right-5 rotate-90 w-[150px] h-[200px]">
            <Image src="/assets/images/shape-2.png" alt="madasky" fill className=""></Image>

          </div>

         

          <a
            href="https://madasky.com/show-blog/operations-excellence-case-study-how-a-kolkata-packaging-line-eliminated-43-lakh-in-annual-overtime-cost"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-md bg-[#D72B0D] px-6 py-3 font-bold text-white transition-colors hover:bg-[#b92710]"
          >
            Read Full Case Study
          </a>
        </div>
      </div>


    </section>
  );
}
