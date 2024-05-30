import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "b",
  initialState: { products: [] },
  reducers: {
    add: (state, action) => {
      state.products.push(action.payload);
      // state.products = state.products.filter(predicate);
    },
  },
});

// "a/increment"

export const { add } = cartSlice.actions;

// add("Tomato") => {type: "b/add", payload:"Tomato" }
// increment() => {type: "a/increment", payload: undefined}

export default cartSlice;

// function creatAction(payload) {
//   return { type: "dkdkd", payload };
// }
