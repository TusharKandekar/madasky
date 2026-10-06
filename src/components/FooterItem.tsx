interface FooterItemProps {
    title: string;
    link: string;
}

export default function FooterItem({ title, link }: FooterItemProps) {
    return (
        <a href={link} className="flex items-center text-lg text-gray-600 hover:text-gray-400">
            <span className="mr-3 text-sm text-gray-600">▶</span> {title}
        </a>
    );
}