import React from 'react';
import searchIcon from '../assets/search.svg';
import downloadIcon from '../assets/downloads.svg';
import filterIcon from '../assets/filter.svg';
import plusIcon from '../assets/plus-icon.svg';
import gridIcon from '../assets/grid.svg';
import rowsIcon from '../assets/rows.svg';
import networkIcon from '../assets/network.svg';

const ControlBar = () => {
  return (
    <div className="flex items-center justify-between gap-2 w-full p-4 sm:p-6 rounded-[20px] bg-white">
      {/* ======= Left Section: Search Input ======= */}
      <div className="relative w-full max-w-md">
        <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
          <img src={searchIcon} alt="Search" className="w-5 h-5 text-gray-400" />
        </span>
        <input
          type="text"
          className="block w-full py-3 pl-11 pr-4 text-gray-700 bg-white border border-gray-200 rounded-full focus:ring-2 focus:ring-amber-900/25 focus:outline-none placeholder-gray-400"
          placeholder="Search by Employee Name or Number"
        />
      </div>

      {/* ======= Right Section: Actions & View Toggles ======= */}
      <div className="flex items-center gap-3 sm:mt-4 md:mt-0">
        {/* Download Button */}
        <button className="hidden md:block p-3 text-gray-600 border border-gray-200 rounded-xl hover:bg-gray-50">
          <img src={downloadIcon} alt="Download" className="w-5 h-5" />
        </button>

        {/* Filter Button */}
        <button className="hidden md:block p-3 text-gray-600 border border-gray-200 rounded-xl hover:bg-gray-50">
          <img src={filterIcon} alt="Filter" className="w-5 h-5" />
        </button>

        {/* Add Button */}
        <button className="p-3 text-white bg-[#3d3834] rounded-xl hover:bg-opacity-90 transition-all">
          <img src={plusIcon} alt="Add" className="w-5 h-5" />
        </button>

        {/* View Switch Group */}
        <div className="hidden md:flex items-center p-1 border border-gray-200 rounded-2xl bg-white">
          <button className="p-1 text-white bg-[#3d3834] rounded-xl shadow-sm">
            <img src={gridIcon} alt="Grid View" className="w-7 h-7" />
          </button>
          <button className="p-1 text-gray-500 hover:text-gray-700">
            <img src={rowsIcon} alt="Rows View" className="w-6 h-6" />
          </button>
          <button className="p-1 text-gray-500 hover:text-gray-700">
            <img src={networkIcon} alt="Network View" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ControlBar;