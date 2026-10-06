
import Image from 'next/image';
export default function LogoCombo2({ color = 'black' }) {
    return (
        <div className="flex items-center justify-center w-auto h-full gap-3 py-6">
            {/* <img
                src="/assets/images/logo-transparent.png"
                className="w-auto h-[70%]"
                alt=""
            /> */}

            <div className='relative w-10 h-10'>
                <Image src="/assets/images/logo-transparent.png" alt="Madasky" fill />
            </div>

            <p
                className={`flex flex-col items-start justify-start text-${color}`}
            >
                <span className="text-xl font-baskervville">
                    MADASKY Consulting
                </span>
                <span className="italic font-valencia">
                    Redefining Excellence
                </span>
            </p>
        </div>
    );
}
