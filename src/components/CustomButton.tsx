interface CustomButtonProps {
    title: string;
    customStyles: string;
}

export default function CustomButton({ title, customStyles }: CustomButtonProps) {
    return (
        <button
            className={`${customStyles} w-auto h-auto px-5 py-2 font-semibold rounded-lg`}
        >
            {title}
        </button>
    );
}

