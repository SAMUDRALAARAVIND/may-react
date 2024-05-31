import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../auth/redux/authSlice";
import postSlice from "../home/redux/postSlice";

const store = configureStore({
  // devTools: true,
  reducer: {
    auth: authSlice.reducer,
    post: postSlice.reducer,
  },
});

export default store;
