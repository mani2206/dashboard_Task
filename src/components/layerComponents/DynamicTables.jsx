import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setEditingUser, deleteUser } from "../../features/userSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const DynamicTables = ({ onEdit, searchTerm, setSearchTerm }) => {
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedUsers, setSelectedUsers] = useState(new Set());

  const handleCheckboxChange = (userId) => {
    setSelectedUsers((prevSelected) => {
      const newSelected = new Set(prevSelected);
      newSelected.has(userId)
        ? newSelected.delete(userId)
        : newSelected.add(userId);
      return newSelected;
    });
  };

  const handleDeleteSelected = () => {
    if (selectedUsers.size > 0) {
      if (window.confirm("Are you sure you want to delete selected users?")) {
        selectedUsers.forEach((userId) => dispatch(deleteUser(userId)));
        setSelectedUsers(new Set());
      }
    } else {
      alert("No users selected!");
    }
  };

  const handleDeleteUser = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      dispatch(deleteUser(userId));
    }
  };

  const handleEdit = (user) => {
    dispatch(setEditingUser(user));
    onEdit();
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRowClick = (user) => {
    navigate(`/user/${user.id}`);
  };

  return (
    <div className="overflow-x-auto mx-2">
      <button
        onClick={handleDeleteSelected}
        className="mb-4 flex items-center bg-red-500 text-white px-4 py-2 rounded-md shadow-md"
      >
        <FontAwesomeIcon icon={faTrash} className="mr-2" />
        Delete All
      </button>

      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th>
              <input
                type="checkbox"
                onChange={() => {
                  const allSelected =
                    selectedUsers.size === filteredUsers.length;
                  setSelectedUsers(
                    allSelected
                      ? new Set()
                      : new Set(filteredUsers.map((user) => user.id))
                  );
                }}
                checked={selectedUsers.size === filteredUsers.length}
              />
            </th>
            <th className="py-2 px-3 border-b">Name</th>
            <th className="py-2 px-3 border-b">ID</th>
            <th className="py-2 px-3 border-b">Date</th>
            <th className="py-2 px-3 border-b">Services</th>
            <th className="py-2 px-3 border-b">Location</th>
            <th className="py-2 px-3 border-b">Contact</th>
            <th className="py-2 px-3 border-b">Status</th>
            <th className="py-2 px-3 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">
                <input
                  type="checkbox"
                  checked={selectedUsers.has(user.id)}
                  onChange={() => handleCheckboxChange(user.id)}
                />
              </td>
              <td className="py-2 px-1 border-b text-sm" onClick={() => handleRowClick(user)}>
                {user.name}
              </td>
              <td className="py-2 px-1 border-b text-sm">{user.id}</td>
              <td className="py-2 px-1 border-b text-sm">{user.date}</td>
              <td className="py-2 px-1 border-b text-sm">{user.services}</td>
              <td className="py-2 px-1 border-b text-sm">{user.location}</td>
              <td className="py-2 px-1 border-b text-sm">
                Phone: {user.contact.phone}<br/>
                Email: {user.contact.mail}
              </td>
              <td className="py-2 px-1 border-b text-sm">{user.status}</td>
              <td className="py-2 px-1 border-b text-sm space-x-2">
                <button onClick={() => handleEdit(user)} className="text-blue-500 hover:text-blue-700">
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button onClick={() => handleDeleteUser(user.id)} className="text-red-500 hover:text-red-700">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTables;
