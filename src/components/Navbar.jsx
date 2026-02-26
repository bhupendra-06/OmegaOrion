import React from 'react';
import pageEditIcon from '../assets/page-edit.svg';
import clockIcon from '../assets/clock.svg';
import inboxIcon from '../assets/inbox.svg';
import myProfile from '../assets/my-profile.png';

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="w-full flex items-center justify-between px-4 md:px-6 py-3 bg-white rounded-[20px]">
      {/* Left Section: Title and Hamburger for mobile screen */}
      <div className="flex items-center">
        <button className="md:hidden mr-4" onClick={toggleSidebar}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <h1 className="text-xl font-semibold text-gray-800 hidden md:block">
          People
        </h1>
      </div>


      {/* Right Section */}
      <div className="flex items-center space-x-3">
        
        <div className="hidden md:flex items-center justify-center p-3 text-sm font-medium text-gray-700 border border-gray-200 rounded-full">
          MST
        </div>

        {/* Timer */}
        <div className="hidden md:flex items-center p-1 gap-3 border border-gray-200 rounded-full">
          <div className="m-2 flex items-center gap-2 text-gray-700">
            <img src={clockIcon} alt="Clock" />
            <span className="font-mono text-lg">02:03:02</span>
          </div>
          <button className="p-2 bg-gray-100 rounded-full hover:bg-ray-200 transition-colors">
            <img src={pageEditIcon} alt="Edit" />
          </button>
        </div>

        {/* Inbox Icon */}
        <button className="relative p-3 border border-gray-200 rounded-full hover:bg-gray-50">
          <img src={inboxIcon} alt="Inbox" />
          <span className="absolute top-2.5 right-3 w-2 h-2 bg-orange-500 border-2 border-white rounded-full"></span>
        </button>

        {/* Profile */}
        <div className="pl-1">
          <img
            src={myProfile}
            alt="User profile"
            className="w-12 h-12 rounded-full object-cover border border-gray-100"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;