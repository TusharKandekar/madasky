
// import { truncateText } from '../components/CommonData';

const Card = ({ url, title, description }: { url: string, title: string, description: string }) => {
    function truncateText(text: string, wordLimit = 40) {
        const words = text.split(' ');
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(' ') + '...';
        }
        return text;
    }
    return (
        <div className="w-[30vw] max-md:w-full flex items-center justify-center mx-auto bg-white overflow-hidden max-md:rounded-2xl ">
            <div className="flex flex-col items-center justify-center w-full ">
                <div className="w-full relative h-[60vh] max-md:rounded-2xl">
                    {/* <img className="h-[100%] w-full object-cover brightness-75" src={image}/> */}
                    <div className='w-full h-full max-md:rounded-2xl'>
                        {
                            url ? (
                                <iframe className="w-full h-full max-md:rounded-2xl" src={url || ""} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            ): null
                        }
                    </div>

                    <div className='flex flex-col w-full gap-5 mx-auto mt-10'>
                        <h2 className='text-2xl text-bold'>{title}</h2>
                        {/* <p className='text-lg text-center'>{truncateText(description)}</p> */}
                    </div>


                    {/* <i className="fa-regular fa-circle-play text-gray-300 text-thin text-5xl absolute
           top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></i> */}
                </div>

            </div>
        </div>

    );
};

export default Card;
