import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import cartSlice from "./cartSlice";

// In RTK reducers are not straight functions

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
