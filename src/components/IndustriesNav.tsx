import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { faIndustry, faShirt, faLayerGroup, faGears } from '@fortawesome/free-solid-svg-icons';


const IndustriesNav = () => {
  const industries = [
    { icon: faIndustry, text: 'Home Textiles', link: '/industries/home-textiles', description: 'Factory transformation for Home Textile manufacturers' },
    { icon: faShirt, text: 'Apparel', link: '/industries/apparel', description: 'Complete apparel manufacturing systems' },
    { icon: faLayerGroup, text: 'Textiles', link: '/industries/textiles', description: 'Selected broader textile manufacturing projects' },
    { icon: faGears, text: 'Technical Textiles', link: '/industries/technical-textiles', description: 'Specialized manufacturing, engineering and operations' },
  ];

  return (
    <div className="grid w-full grid-cols-2 gap-4 lg:grid-cols-4">
      {industries.map((item) => (
        <Link
          href={item.link}
          key={item.link}
          className="flex min-h-28 flex-col gap-2 rounded-lg border border-slate-200 p-4 transition-colors hover:border-[#D72B0D] hover:bg-slate-50"
        >
          <span className="flex items-center gap-2 text-sm font-semibold text-[#0E2C53]">
            <FontAwesomeIcon icon={item.icon} className="h-5 w-5 text-[#D72B0D]" />
            {item.text}
          </span>
          <span className="text-xs leading-5 text-slate-600">{item.description}</span>
        </Link>
      ))}
    </div>
  );
};

export default IndustriesNav;
