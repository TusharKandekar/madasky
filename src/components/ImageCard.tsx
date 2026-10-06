import Image from "next/image";
interface ImageCardProps {
    image: string;
    title: string;
    altText?: string
}

export const ImageCard = ({ image, title, altText } : ImageCardProps) => {

    return (
        <div className="w-full h-full relative">
            <Image
                src={image}
                fill
                // alt={`Photo ${index + 1}`}
                alt={altText || title}

                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
        </div>
    )
}
