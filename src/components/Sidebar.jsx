import React from "react";
import "./Sidebar.css";
import homeIcon from "../assets/home-icon.svg";
import pageIcon from "../assets/page-icon.svg";
import peopleIcon from "../assets/people-icon.svg";
import teamIcon from "../assets/team-icon.svg";
import logo from "../assets/logo.svg";
import rightArrow from "../assets/right-arrow.svg";
import leftArrowDouble from "../assets/left-arrow-double.svg";
import settingsIcon from "../assets/settings-icon.svg";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <>
      <div>
        <div
          className={`fixed md:relative top-0 left-0 h-screen md:h-full w-72 bg-[#3D3936] rounded-r-[20px] md:rounded-[20px] transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"} transition-transform  duration-300 ease-in-out z-50`}
        >
          <div className="sidebar-logo">
            <img src={logo} alt="Logo" />
            {/* Close Button for mobile only */}
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-lg hover:bg-gray-100/10 transition"
            >
              <img
                src={leftArrowDouble}
                alt="Close Sidebar"
                className="w-5 h-5"
              />
            </button>
          </div>
          {/* ====== Navigations ====== */}
          <ul className="sidebar-nav">
            <li>
              <a href="#">
                <img src={homeIcon} alt="Home" />
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={pageIcon} alt="My Info" />
                <span>My Info</span>
                <img src={rightArrow} alt=">" className="ml-auto" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={peopleIcon} alt="People" />
                <span>People</span>
                <img src={rightArrow} alt=">" className="ml-auto" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={teamIcon} alt="Team Management" />
                <span>Team Management</span>
                <img src={rightArrow} alt=">" className="ml-auto" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={pageIcon} alt="Project Setup" />
                <span>Project Setup</span>
                <img src={rightArrow} alt=">" className="ml-auto" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={peopleIcon} alt="Hiring" />
                <span>Hiring</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={pageIcon} alt="Report" />
                <span>Report</span>
              </a>
            </li>
          </ul>
          <div className="sidebar-footer absolute bottom-4 left-4 w-[calc(100%-2rem)] align-self-end">
            <a href="#">
              <img src={settingsIcon} alt="Settings" />
              <span>Settings</span>
            </a>
          </div>

          {/* ==== Overlay for sidebar open ==== */}
        </div>
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 md:hidden z-40"
            onClick={toggleSidebar}
          ></div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
