import React from "react";
import { useLocation } from "react-router-dom";

const NewForm = () => {
  const location = useLocation();
  const user = location.state?.user || {};
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-3/4 lg:w-1/2">
        {/* Photo Upload */}
        <div className="flex flex-col items-center mb-8">
          <label className="text-gray-700 font-semibold">Photo *</label>
          <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center text-sm text-gray-500 mt-2 cursor-pointer">
            Drag and drop or click here to select file
          </div>
        </div>

        {/* Form Fields */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" placeholder="Full Name" value={user.name || ''} className="input-field" />
          <input type="text" placeholder="Address" className="input-field" />
          <input
            type="date"
            placeholder="Date of Birth"
            className="input-field"
          />
           <input type="email" placeholder="Email" value={user.contact?.mail || ''} className="input-field" />

          {/* Phone Fields */}
          <div className="col-span-1 md:col-span-2 flex gap-2">
            <input
              type="tel"
              placeholder="+1 123-456-7890"
              className="input-field w-full"
            />
            <input
              type="tel"
              placeholder="+1 123-456-7890"
              className="input-field w-full"
            />
          </div>

          <input
            type="password"
            placeholder="Password"
            className="input-field"
          />
          <input type="text" placeholder="Address" value={user.location || ''} className="input-field" />
          <input type="text" placeholder="Pin code" className="input-field" />
          <input type="text" placeholder="District" className="input-field" />
          <input type="text" placeholder="State" className="input-field" />

          {/* Verification ID Dropdown */}
          <select className="input-field">
            <option>Verification ID</option>
            <option>ID Card</option>
            <option>Passport</option>
            <option>Driver's License</option>
          </select>

          <input
            type="text"
            placeholder="Verification no"
            className="input-field"
          />
          <input
            type="text"
            placeholder="Community Name"
            className="input-field"
          />

          {/* Date and Time Pickers */}
          <div className="col-span-1 md:col-span-2 flex flex-wrap gap-4">
            <div className="flex flex-col w-full md:w-1/2">
              <label className="text-gray-500 text-sm">From Date</label>
              <input type="date" className="input-field" />
            </div>
            <div className="flex flex-col w-full md:w-1/2">
              <label className="text-gray-500 text-sm">Time</label>
              <input type="time" className="input-field" />
            </div>
          </div>
          <div className="col-span-1 md:col-span-2 flex flex-wrap gap-4">
            <div className="flex flex-col w-full md:w-1/2">
              <label className="text-gray-500 text-sm">To Date</label>
              <input type="date" className="input-field" />
            </div>
            <div className="flex flex-col w-full md:w-1/2">
              <label className="text-gray-500 text-sm">Time</label>
              <input type="time" className="input-field" />
            </div>
          </div>

          {/* Amount Display */}
          <div className="col-span-1 md:col-span-2 text-center text-lg font-semibold text-gray-700 mt-4">
            Amount To Pay: 150000 Rs
          </div>

          {/* Buttons */}
          <div className="col-span-1 md:col-span-2 flex justify-between mt-6">
            <button className="bg-red-500 text-white py-2 px-4 rounded-md">
              Delete
            </button>
            <div className="flex gap-2">
              <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md">
                Save as Draft
              </button>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
                Submit & Pay
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewForm;
