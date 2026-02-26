import React from "react";
import Sidebar from "./components/Sidebar";
import "./App.css";
import Navbar from "./components/Navbar";
import ControlBar from "./components/ControlBar";
import UserCard from "./components/UserCard";

// Import user images
import user1 from "./assets/user1.png";
import user2 from "./assets/user2.png";
import user3 from "./assets/user3.png";
import user4 from "./assets/user4.png";
import user5 from "./assets/user5.png";
import user6 from "./assets/user6.png";
import myProfile from "./assets/my-profile.png";


// Import icons
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
  }
];


function App() {
  return (
    <div className="app-container h-screen p-4 flex bg-gray-100">
      <Sidebar />
      <div className="content w-full pl-4 h-screen">
        <Navbar />
        <div className="main-content mt-4 h-full">
          <ControlBar />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-evenly p-4 mt-4 bg-white">
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

      </div>
    </div>
  );
}

export default App;
