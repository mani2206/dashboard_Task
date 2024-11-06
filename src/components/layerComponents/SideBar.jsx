import React from "react";
import DataContext from "../../context/DataContext";
import { useContext } from "react";

export default function SideBar() {
    const {tabs,handleTabClick,setActiveTab,activeTab} = useContext(DataContext);
  return (
    <div className="bg-purple-800 text-white p-4 hidden lg:block" style={{width:"28%"}}>
      <div className="flex">
        <button className="w-10 h-10 border-2 border-orange-500 text-orange-500 font-bold rounded bg-white hover:bg-orange-500 hover:text-white transition">
          S
        </button>

        <h2 className="text-2xl font-bold mb-6 px-1">SC</h2>
      </div>

      <nav className="space-y-4">
        {(tabs || []).map((tab, index) => (
          <a
            href={`#${tab.name.toLowerCase().replace(" ", "-")}`}
            key={index}
            onClick={() => handleTabClick(tab.name)}
            className={`flex items-center gap-2 p-2 text-xs lg:text-sm rounded transition-all duration-200
          ${
            activeTab === tab.name
              ? "bg-white text-black w-[107%] rounded-[25px_0_0_23px]"
              : "hover:bg-white hover:text-black hover:w-[107%] hover:rounded-[25px_0_0_23px]"
          }`}
          >
            <i className={`bi ${tab.icon}`}></i>
            {tab.name}
          </a>
        ))}
      </nav> 
    </div>
    
  );
}
