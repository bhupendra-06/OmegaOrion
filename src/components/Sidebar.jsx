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

const Sidebar = () => {
  return (
    <div className="sidebar rounded-[20px]">
      <div className="sidebar-logo">
        <img src={logo} alt="Logo" />
        <img src={leftArrowDouble} alt="-" />
      </div>
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
      <div className="sidebar-footer">
        <a href="#">
          <img src={settingsIcon} alt="Settings" />
          <span>Settings</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
