
interface FooterItemHeaderProps {
    title: string;
}
export default function FooterItemHeader({ title }: FooterItemHeaderProps) {
    return (
        <h3 className="inline-block px-4 py-1 mb-4 text-lg font-semibold text-white rounded-full bg-custom-gradient-3">
            {title}
        </h3>
    );
}