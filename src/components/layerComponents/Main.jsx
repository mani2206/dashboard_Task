import React, { useState } from "react";
import DashboardCards from "./DashboardCards";
import Pagination from "../../components/baseComponents/Pagination";
import Form from "./Form";
import DynamicTables from "./DynamicTables";
import { useDispatch } from "react-redux";
import { setEditingUser } from "../../features/userSlice";

export default function Main() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const toggleFormVisibility = (show = false) => {
    setIsFormVisible(show);
    if (!show) {
      dispatch(setEditingUser(null));
    }
  };

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };


  return (
    <div className="flex-none">
      <header className="p-4 lg:w-[98%]">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-[12px] md:text-[20px] font-bold text-purple-700">
            User Management
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <button className="relative flex items-center justify-center w-10 h-10 bg-white text-purple-600 rounded-full shadow hover:bg-gray-100 transition">
              <i className="bi bi-bell"></i>
            </button>
            <button className="relative flex items-center justify-center w-10 h-10 bg-white text-purple-600 rounded-full shadow hover:bg-gray-100 transition">
              <i className="bi bi-gear"></i>
            </button>
            <div className="relative flex items-center gap-2 ml-4">
              <img
                src="https://via.placeholder.com/40x40"
                alt="User Avatar"
                className="rounded-full"
              />
              <div>
                <p className="text-sm font-semibold">Nabila</p>
                <p className="text-xs text-gray-500">Admin</p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <DashboardCards />
      <div className="flex justify-between items-center mb-4 mx-2 mt-2">
        <input
          type="text"
          placeholder="Search here..."
          className="border rounded p-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={() => toggleFormVisibility(!isFormVisible)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {isFormVisible ? "Cancel" : "+ New User"}
        </button>
      </div>
      {isFormVisible && <Form onClose={() => toggleFormVisibility(false)} />}
      <DynamicTables
        onEdit={() => toggleFormVisibility(true)}
        setSearchTerm={setSearchTerm}
        toggleFormVisibility={toggleFormVisibility}
        searchTerm={searchTerm}
        onUserSelect={handleUserSelect}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={3}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
