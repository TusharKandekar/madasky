import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { 
  faMapMarkedAlt, 
  faHome, 
  faGem, 
  faHardHat, 
  faChartLine, 
  faMoneyBillWave, 
  faShoppingCart, 
  faIndustry ,
  faBox,

} from '@fortawesome/free-solid-svg-icons';
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';


const IndustriesNav = () => {
  const industries = [
    [
        { icon: faIndustry, text: 'Manufacturing',link:'/manufacturing-consulting' },
        { icon: faGem, text: 'Fashion & Jewellery',link:'/fashion-jewellery' },
        { icon: faShoppingCart, text: 'E-commerce',link:'/e-commerce-consulting' },
      
    ],
    [
      { icon: faHardHat, text: 'Construction',link:'/construction-consulting' },
      // { icon: faChartLine, text: 'Trading Wholesale',link:'./tranding-wholesale' },
      { icon: faBox, text: 'Packaging & Paper',link:'/packaging-and-paper' },
      { icon: faMapMarkedAlt, text: 'Tourism',link:'/tourism' },

    ],
    [
        // { icon: faHome, text: 'Real Estate',link:'./real-estate' },
        { icon: faProductHunt, text: 'Consumer Products',link:'/consumer-products-consulting' },
        { icon: faMoneyBillWave, text: 'Financial Services',link:'/financial-services-consulting' },
    ],
  ];

  return (
    <div className="flex items-center justify-center w-full p-5">
    <div className="relative flex items-center justify-center w-full p-5 mx-auto ">
      {/* Vertical lines */}
      <div className="absolute top-5 bottom-5 left-[28.33%] w-px bg-gray-300"></div>
      <div className="absolute top-5 bottom-5 right-[39.33%] w-px bg-gray-300"></div>

      {industries.map((column, columnIndex) => (
        <div key={columnIndex} className="flex flex-col items-start justify-center w-1/3">
          {column.map((item, itemIndex) => (
            <a href={item.link} key={itemIndex}>
            <div key={itemIndex} className="flex items-center justify-start mb-5">
              <FontAwesomeIcon icon={item.icon} className="w-6 h-6 mr-2.5 text-blue-600" />
              <span className="text-sm">{item.text}</span>
            </div>
            </a>
          ))}
        </div>
      ))}
    </div>
  </div>
  );
};

export default IndustriesNav;
