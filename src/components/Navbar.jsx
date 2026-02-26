import React from 'react';
import pageEditIcon from '../assets/page-edit.svg';
import clockIcon from '../assets/clock.svg';
import inboxIcon from '../assets/inbox.svg';
import myProfile from '../assets/my-profile.png';

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-3 bg-white rounded-[20px]">
      {/* Left Section: Title */}
      <h1 className="text-xl font-semibold text-gray-800">People</h1>

      {/* Right Section: Actions & Profile */}
      <div className="flex items-center space-x-3">
        
        {/* Timezone Badge */}
        <div className="flex items-center justify-center p-3 text-sm font-medium text-gray-700 border border-gray-200 rounded-full">
          MST
        </div>

        {/* Timer / Status Pill */}
        <div className="flex items-center p-1 gap-3 border border-gray-200 rounded-full">
          <div className="m-2 flex items-center gap-2 text-gray-700">
            <img src={clockIcon} alt="Clock" />
            <span className="font-mono text-lg">02:03:02</span>
          </div>
          <button className="p-2 bg-gray-100 rounded-full hover:bg-ray-200 transition-colors">
            <img src={pageEditIcon} alt="Edit" />
          </button>
        </div>

        {/* Notification/Inbox Icon */}
        <button className="relative p-3 border border-gray-200 rounded-full hover:bg-gray-50">
          <img src={inboxIcon} alt="Inbox" />
          <span className="absolute top-2.5 right-3 w-2 h-2 bg-orange-500 border-2 border-white rounded-full"></span>
        </button>

        {/* Profile Avatar */}
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