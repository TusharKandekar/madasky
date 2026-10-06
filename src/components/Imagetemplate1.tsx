import Image from "next/image";
import BaseUrl from "./BaseUrl";
interface CardProps {
  image?: string;
  altText?: string;
}

const Card = ({ image, altText }: CardProps) => {

  // const [altText, setAltText] = useState("");

  // useEffect(() => {
  //   const fetchAltText = async () => {
  //     const alt = await getImagesAltText3(image); // Resolve the Promise
  //     setAltText(alt); // Update state with the resolved value
  //   };

  //   fetchAltText();
  // }, []);
  // console.log("Alt Text", altText)
  // console.log("Img Src", image)


  return (
    <div className="w-[30vw] max-md:w-full flex items-center justify-center mx-auto bg-white   overflow-hidden max-md:rounded-2xl">
      <div className="flex flex-col items-center justify-center w-full ">
        <div className="w-full relative h-[45vh]">
          {/* <img className="h-[100%] w-full object-cover" src={image} alt={altText} /> */}

          {/* {
            image ? (

              <Image src={`${BaseUrl().baseurl}/${image} ? ${BaseUrl().baseurl}/${image} : ${BaseUrl().baseurl}/public/uploads/webimage/default.png`} alt={altText || "Madasky"} fill className="object-cover" />
            ) : null
          } */}

          <Image src={`${BaseUrl().baseurl}/${image}`} alt={altText || "Madasky"} fill className="object-cover" />

          {/* <Image src={`${BaseUrl().baseurl}/${image} ? ${BaseUrl().baseurl}/${image} : ${BaseUrl().baseurl}/public/uploads/webimage/default.png`} alt={altText || "Madasky"} fill className="object-cover" /> */}

        </div>

      </div>
    </div>

  );
};

export default Card;
