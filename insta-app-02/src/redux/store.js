import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../auth/redux/authSlice";
import postSlice from "../home/redux/post/postSlice";
import usersSlice from "../home/redux/users/usersSlice";

const store = configureStore({
  // devTools: true,
  reducer: {
    auth: authSlice.reducer,
    post: postSlice.reducer,
    users: usersSlice.reducer,
  },
});

export default store;
