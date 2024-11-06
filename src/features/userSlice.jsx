import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      id: "1",
      name: "Samantha William",
      date: "March 25, 2021",
      services: 2,
      location: "Jakarta",
      contact: { phone: "90**56", mail: "samantha@example.com" },
      status: "N-Active",
    },
    {
      id: "2",
      name: "Tony Soap",
      date: "March 25, 2021",
      services: 8,
      location: "Jakarta",
      contact: { phone: "904757**", mail: "tony@example.com" },
      status: "Active",
    },
  ],
  editingUser: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    editUser: (state, action) => {
      const index = state.users.findIndex((user) => user.id === action.payload.id);
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    setEditingUser: (state, action) => {
      state.editingUser = action.payload;
    },
  },
});

export const { addUser, editUser, deleteUser, setEditingUser } = userSlice.actions;
export default userSlice.reducer;
