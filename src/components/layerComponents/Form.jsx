import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, editUser, setEditingUser } from "../../features/userSlice";

const Form = ({ onClose }) => {
  const dispatch = useDispatch();
  const editingUser = useSelector((state) => state.users.editingUser);

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    date: "",
    services: 0,
    location: "",
    contact: { phone: "", mail: "" },
    status: "Active",
  });

  useEffect(() => {
    if (editingUser) {
      setFormData(editingUser);
    } else {
      setFormData({
        id: "",
        name: "",
        date: "",
        services: 0,
        location: "",
        contact: { phone: "", mail: "" },
        status: "Active",
      });
    }
  }, [editingUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingUser) {
      dispatch(editUser(formData));
    } else {
      dispatch(addUser({ ...formData, id: Date.now().toString() }));
    }
    dispatch(setEditingUser(null));
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative p-6 bg-white shadow-lg rounded-lg space-y-4 max-w-md w-full mx-4">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            placeholder="Date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="number"
            placeholder="Total Completed Services"
            value={formData.services}
            onChange={(e) =>
              setFormData({ ...formData, services: +e.target.value })
            }
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            placeholder="Location"
            value={formData.location}
            onChange={(e) =>
              setFormData({ ...formData, location: e.target.value })
            }
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            placeholder="Phone"
            value={formData.contact.phone}
            onChange={(e) =>
              setFormData({
                ...formData,
                contact: { ...formData.contact, phone: e.target.value },
              })
            }
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.contact.mail}
            onChange={(e) =>
              setFormData({
                ...formData,
                contact: { ...formData.contact, mail: e.target.value },
              })
            }
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <select
            value={formData.status}
            onChange={(e) =>
              setFormData({ ...formData, status: e.target.value })
            }
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="Active">Active</option>
            <option value="Not Active">Not Active</option>
          </select>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md"
          >
            {editingUser ? "Edit User" : "Add User"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
