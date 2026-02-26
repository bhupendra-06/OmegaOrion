import React from 'react';
import rightArrow from '../assets/right-arrow.svg';


const Pagination = () => {
  return (
    <div className="flex items-center gap-10 p-4 bg-white absolute bottom-0 left-0 right-0 rounded-[20px] border-gray-200">
      <div className="flex items-center">
        <span className="text-gray-600 font-semibold">Rows per page:</span>
        <select className="mx-2 border-gray-300 rounded-lg border p-1 text-gray-600">
          <option>100</option>
        </select>
      </div>
      <div className="flex items-center gap-2">

      <div className="text-gray-600">1-100 of 500</div>
      <div>
        <img src={rightArrow} alt=">" className="ml-auto" />
        <img src={rightArrow} alt=">" className="ml-auto rotate-180" />
      </div>
      </div>
    </div>
  );
};

export default Pagination;
