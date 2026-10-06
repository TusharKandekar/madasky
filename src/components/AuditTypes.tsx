import React from 'react';

// --- 1. Interface for the list items ---
export interface AuditListItem {
  data1: string; // Corresponds to the text of the bullet point
}

// --- 2. Interface for the main component data prop ---
export interface AuditPropsData {
  title: string;
  heading: string; // The main descriptive text below the title
  imgSrc: string; // The source URL for the image
  list: AuditListItem[]; // The array of bullet points
  outcome: string;
  
  // Optional custom classes and titles
  layoutClass?: string; 
  outcomeClass?: string; 
  whatWeCheckTitle?: string; 
}

// --- 3. Interface for the component props itself ---
export interface AuditTypesProps {
    data: AuditPropsData;
}


const AuditTypes: React.FC<AuditTypesProps> = ({ data }) => {
  const { 
    title, 
    heading, 
    imgSrc, 
    list, 
    outcome, 
    layoutClass = "max-w-6xl mx-auto my-0", // Default layout styling
    outcomeClass = "bg-gray-100 p-4 border-l-4 border-blue-500 text-gray-800", // Default outcome styling
    whatWeCheckTitle = "What We Check" // Default subtitle
  } = data;

  // The rest of your functional component code remains the same, 
  // now fully benefiting from the defined types.
  return (
    // Component Container with Tailwind classes
    <div className={`p-8 bg-gray-200 rounded-xl shadow-2xl ${layoutClass}`}>
      
      {/* Title */}
      <h2 className="pb-2 mb-6 font-serif text-4xl font-bold text-gray-900 border-b">
        {title}
      </h2>

      {/* Main Content Area (Two Columns) */}
      <div className="md:flex md:space-x-12">
        
        {/* Left Column: Text and List */}
        <div className="md:w-1/2">
          
          {/* Sub-Title */}
          <h3 className="mb-4 text-2xl font-bold text-gray-800">
            {whatWeCheckTitle}
          </h3>
          
          {/* Main Description/Heading */}
          <p className="mb-6 leading-relaxed text-gray-600">
            {heading}
          </p>
          
          {/* Bulleted List */}
          <ul className="mb-6 space-y-3 list-none">
            {list.map((item, index) => (
              <li key={index} className="flex items-start text-gray-700">
                {/* Custom bullet point styling */}
                <span className="mt-1 mr-3 text-lg font-bold text-blue-500">•</span>
                <span className="flex-1">{item.data1}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Image */}
        <div className="flex items-start justify-center pt-4 md:w-1/2 md:pt-0">
          <img 
            src={imgSrc} 
            alt={`${title} Image`} 
            className="object-cover w-full h-auto rounded-lg shadow-xl max-h-96"
          />
        </div>
      </div>
      
      <div className="mt-8">
        {/* Outcome Sub-Title */}
        <h3 className="mb-3 text-2xl font-bold text-gray-800">
          Outcome
        </h3>

        {/* Outcome Section with Custom Styling */}
        <div className={`p-4 rounded-lg font-medium ${outcomeClass}`}>
          <p>
             {outcome}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuditTypes;