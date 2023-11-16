import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const user =
  localStorage.getItem("user") !== null
    ? JSON.parse(localStorage.getItem("user"))
    : {};

const token =
  localStorage.getItem("token") !== null ? localStorage.getItem("token") : "";

const initialState = {
  user: user,
  token: token,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const user = action.payload;
      state.user.id = user.id;
      state.user.name = user.name;
      state.user.email = user.email;
      state.user.address = user.address;
      state.user.active = user.active;

      localStorage.setItem("user", JSON.stringify(user));
      toast.success(`Usuario logueado correctamente`);
    },
    addToken: (state, action) => {
      const token = action.payload;

      localStorage.setItem("token", token);
    },
  },
});

export const { addUser, addToken } = userSlice.actions;
export default userSlice.reducer;
