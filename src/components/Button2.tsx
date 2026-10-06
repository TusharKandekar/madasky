import React from "react";


type ButtonProps = {
    text: string;
    link: string;
 
  };
const  Button2: React.FC<ButtonProps> = ({text, link}) => {
  return (
    <>
    
      <a rel="noopener noreferrer" href={link} target="_blank">
        <button className="bg-[#2c3d78] hover:bg-[#2c3d78]/90 transition text-sm text-white font-semibold px-6 py-3 rounded-md shadow max-md:ml-6 max-md:text-base">
          {text}
        </button>
      </a>
    </>
  );
};

export default Button2;
