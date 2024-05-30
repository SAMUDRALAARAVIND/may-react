import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "a",
  initialState: { count: 10, value: 1 },
  reducers: {
    increment: (state, action) => {
      state.count += action.payload;
    },
    decrement: (state, action) => {
      state.count--;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

// increment & decrement above are action creators as calling them will return action objects
// increment() => returns {type: "a/increment"}
// decrement() => return {type: "a/decrement"}

// increment("aravind") => return {type: "a/increment", payload:"aravind" }

export default counterSlice;
