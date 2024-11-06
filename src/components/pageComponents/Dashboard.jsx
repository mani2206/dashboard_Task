import React from "react";
import SideBar from "../layerComponents/SideBar";
import Main from "../layerComponents/Main";

export default function Dashboard() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <SideBar className="w-full md:w-1/4 lg:w-1/5 bg-white" />

      {/* Main Content */}
      <div className="flex flex-col w-full">
        <Main className="flex-grow p-4" />
      </div>
    </div>
    
  );
}
