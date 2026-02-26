import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import "./App.css";
import Navbar from "./components/Navbar";
import ControlBar from "./components/ControlBar";
import UserCard from "./components/UserCard";

// Importing user images
import user1 from "./assets/user1.png";
import user2 from "./assets/user2.png";
import user3 from "./assets/user3.png";
import user4 from "./assets/user4.png";
import user5 from "./assets/user5.png";
import user6 from "./assets/user6.png";

// Importing icons
import v1 from "./assets/v1.svg";
import v2 from "./assets/v2.svg";
import v3 from "./assets/v3.svg";
import v4 from "./assets/v4.svg";
import v5 from "./assets/v5.svg";
import v6 from "./assets/v6.svg";

const users = [
  {
    name: "Ethan Lee",
    designation: "IT Specialist",
    imageUrl: user1,
    iconUrl: v1,
  },
  {
    name: "Emily Baker",
    designation: "Marketing Manager",
    imageUrl: user2,
    iconUrl: v2,
  },
  {
    name: "Micheal Shaun",
    designation: "Sales Director",
    imageUrl: user3,
    iconUrl: v3,
  },
  {
    name: "Liam Carter",
    designation: "Product Designer",
    imageUrl: user4,
    iconUrl: v4,
  },
  {
    name: "Grace Kim",
    designation: "Customer Lead",
    imageUrl: user5,
    iconUrl: v5,
  },
  {
    name: "Noah Williams",
    designation: "Finance Head",
    imageUrl: user6,
    iconUrl: v6,
  },
  {
    name: "Ethan Lee",
    designation: "IT Specialist",
    imageUrl: user1,
    iconUrl: v1,
  },
  {
    name: "Emily Baker",
    designation: "Marketing Manager",
    imageUrl: user2,
    iconUrl: v2,
  },
  {
    name: "Micheal Shaun",
    designation: "Sales Director",
    imageUrl: user3,
    iconUrl: v3,
  },
  {
    name: "Liam Carter",
    designation: "Product Designer",
    imageUrl: user4,
    iconUrl: v4,
  },
  {
    name: "Grace Kim",
    designation: "Customer Lead",
    imageUrl: user5,
    iconUrl: v5,
  },
  {
    name: "Noah Williams",
    designation: "Finance Head",
    imageUrl: user6,
    iconUrl: v6,
  }
];

import Pagination from "./components/Pagination";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="app-container p-2 md:p-4 h-screen flex bg-gray-100">
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="content w-full md:pl-4">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="main-content mt-4 h-[calc(100vh-128px)] rounded-[20px] bg-white flex flex-col relative">
          <ControlBar />
          <div className="overflow-y-auto hide-scrollbar">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-6 pb-16">
              {users.map((user, index) => (
                <UserCard
                  key={index}
                  name={user.name}
                  designation={user.designation}
                  imageUrl={user.imageUrl}
                  iconUrl={user.iconUrl}
                />
              ))}
            </div>
          </div>
          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default App;
