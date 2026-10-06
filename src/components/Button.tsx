import React from "react";


type ButtonProps = {
    text: string;
 
  };
const  Button: React.FC<ButtonProps> = ({text}) => {
  return (
    <>
    
      <a rel="noopener noreferrer" href="https://calendar.app.google/UMVkRH1hG1f5nNcV7" target="_blank">
        <button className="bg-[#E1340D] hover:bg-[#C02A0B] transition text-lg text-white font-semibold px-6 py-3 rounded-md shadow max-md:ml-6 max-md:text-base">
          {text}
        </button>
      </a>
    </>
  );
};

export default Button;
