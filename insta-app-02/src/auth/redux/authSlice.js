import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: Boolean(localStorage.getItem("token")),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateAuthStatus: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { updateAuthStatus } = authSlice.actions;

export default authSlice;
