import React from "react";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";

import { useParams, useNavigate } from "react-router-dom";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

const ProfileCard = () => {
  const { id } = useParams();
  const { users } = useSelector((state) => state.users);
  const navigate = useNavigate();

  const user = users.find((user) => user.id === id);

  if (!user) return <div>User not found</div>;

  const contact =
    typeof user.contact === "object" ? user.contact.phone : user.contact;

  const email =
    typeof user.contact === "object" ? user.contact.mail : user.mail;
  const handleEdit = () => {
    navigate(`/form/${id}`, { state: { user } }); // Pass user data as state
  };

  return (
    <>
      <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
        {/* Sidebar */}
        <SideBar className="w-full md:w-1/4 lg:w-1/5 bg-white" />
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="bg-white shadow-lg rounded-lg w-full max-w-4xl p-8 md:flex">
            {/* Left Section */}
            <div className="flex flex-col items-center md:items-start md:w-1/2 space-y-4">
              <div className="w-32 h-32 bg-purple-200 rounded-lg mb-4"></div>
              <h2 className="text-2xl font-semibold text-gray-800">
                {user.name}
              </h2>
              <p className="text-sm text-gray-500">#id: 3453424</p>
              <button className="flex items-center space-x-2 bg-indigo-500 text-white px-4 py-1 rounded-full" onClick={handleEdit}>
                <FaEdit className="h-4 w-4" />
                <span>Edit</span>
              </button>
              <p className="text-gray-600 text-center md:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            {/* Right Section */}
            <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8 space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-gray-800">About</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-gray-800">Contact</h3>
                <p className="text-gray-600">Address:{user.location}</p>
                <p className="text-gray-600">Contact:{contact}</p>
                <p className="text-gray-600">Email: {email}</p>
                <p className="text-gray-600">Whatsapp: {contact}</p>
              </div>
              <button className="w-full bg-indigo-600 text-white py-2 rounded-lg mt-4">
                VIEW DASHBOARD
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProfileCard;
