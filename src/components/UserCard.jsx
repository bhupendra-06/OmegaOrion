import React from 'react';

const UserCard = ({ name, designation, imageUrl, iconUrl }) => {
  return (
    <div className="bg-white rounded-[20px] aspect-square border border-gray-200 shadow-sm p-2 flex flex-col items-center font-sans">
      
      {/* Profile Image Container */}
      <div className="relative my-3">
        <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-gray-50">
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Floating Badge/Icon */}
        <div className="absolute bottom-2 right-0">
          <img src={iconUrl} alt="icon" className='w-6 h-6 sm:w-10 sm:h-10'/>
        </div>
      </div>

      {/* Content */}
      <div className="text-center">
        <h2 className="font-semibold text-[#424242] mb-1">
          {name}
        </h2>
        <p className="text-[#a68a5bc9] text-sm font-medium mb-2">
          {designation}
        </p>
      </div>

      {/* Color Indicators */}
      <div className="flex gap-1 mb-6">
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-blue-400"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-orange-400"></span>
      </div>
      
    </div>
  );
};

export default UserCard;