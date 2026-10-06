import Contact from "./Contact";
interface AboutVideoProps {
    vid1: string;
    title: string;
    des: string;
    color?: string;
    pageName?: string;
    h1?: string;


}
export default function AboutVideo({ vid1, title, des, color = "white", h1 }: AboutVideoProps) {
    return (
        <div className="relative flex flex-col items-center justify-center w-full h-auto mt-20">

            <div className="w-full relative max-md:h-[40vh] h-[80vh] flex flex-col items-center justify-center ">
                <div className={`absolute top-0 left-0 w-full h-full bg-[#0006] z-20  ${vid1 === "/assets/images/Careers69.mp4" || vid1 === "/assets/images/Historyheader.mp4" ? 'hidden' : 'visible'}`}></div>

                <div className="absolute top-0 left-0 z-10 flex flex-col items-start justify-start w-full h-full max-md:relative">
                    <video
                        src={vid1}
                        className="object-cover w-full h-full"
                        loop
                        autoPlay
                        muted
                        playsInline
                    />
                </div>
                <div className="absolute top-0 max-md:top-[4vh] left-0 z-30 flex flex-col items-start justify-end w-full h-full p-20 text-white max-md:p-3 ">
                    <span className={`text-3xl max-md:text-5xl ${color}`}>{title}</span>
                    <h1 className={`text-6xl font-baskervville text-white  ${color} font-bold max-md:text-xl max-md:w-full max-md:font-thin max-md:pt-4 max-md:pb-8`}>
                        {/* {des} */}
                        {h1 ? h1 : des}


                    </h1>
                </div>
            </div>


            {/* <div className="w-[300px] h-[400px] bg-white z-[999] fixed top-50 right-0">
                hello
            </div> */}

            <Contact></Contact>

            {/* <div className="flex-col items-center justify-center hidden w-full max-md:flex">
                <div className={`w-full relative h-[80vh] flex flex-col items-center justify-center max-md:h-auto`}>
                    
                    <div className={`absolute top-0 left-0 w-full h-full bg-[#0006] z-20  ${vid1 === "/assets/images/Careers69.mp4" || vid1 === "/assets/images/Historyheader.mp4" ? 'hidden' : 'visible'}`}></div>

                    <div className={`w-full h-[40vh] z-10 flex flex-col items-start justify-start  ${vid1 === '/assets/videos/313.mp4' ? 'max-md:h-[30vh]' : ''} `}>
                        <video
                            src={vid1}
                            className="object-cover w-full h-full"
                            loop
                            autoPlay
                            muted
                            playsInline
                        />
                    </div>
                    <div className="absolute top-[4vh] left-0 z-30 flex flex-col items-start justify-end w-full h-full p-20 text-white max-md:p-3 ">
                        <span className={`text-xl max-md:text-5xl ${color}`}>{title}</span>
                        <h1 className={`text-3xl font-baskervville text-white  ${color} font-bold max-md:text-xl max-md:w-full max-md:font-thin max-md:pt-4 max-md:pb-8`}>
                            {h1 ? h1 : des}
                        </h1>
                    </div>

                </div>

                
            </div> */}


            {/* <div className="absolute top-0 left-0 w-full h-full  z-20 max-md:h-[25vh] bg-[#0006]"></div> */}
        </div>
    );
}
