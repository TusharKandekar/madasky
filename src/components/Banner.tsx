import CustomButton from './CustomButton';
import Image from 'next/image';
export default function Banner() {
    return (
        <div className="w-full bg-custom-gradient h-[90vh] flex items-center justify-center relative">
            {/* <Navbar customStyles="absolute top-0 z-50" /> */}
            <div className="flex flex-col items-start justify-center w-1/2 h-full gap-6 p-20 text-white">
                <h2 className="text-3xl font-bold uppercase">
                    Together, we have what it takes
                </h2>
                <p className="font-semibold">
                    At, Madasky we don&apos;t just point the way—we help you get
                    where you need to go. From transforming your performance to
                    powering new growth, we turn your ambition into action.
                </p>
                <CustomButton
                    title="Learn More ..."
                    customStyles="text-blue-500 bg-white"
                />
            </div>
            <div className="flex flex-col items-center justify-center w-1/2 h-full">
                {/* <img
                    className="w-auto h-full"
                    src="/assets/images/279.png"
                    alt=""
                /> */}
                <div className={`relative w-full h-[80vh] max-md:h-[40vh]`}>
                   
                    <Image src={`/assets/images/279.png`} alt={"Madasky Consulting"} fill className='object-cover max-md:object-fill' />
                </div>
            </div>
        </div>
    );
}
