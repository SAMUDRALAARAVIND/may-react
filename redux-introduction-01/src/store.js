// create store

import { legacy_createStore } from "redux";

/**
 * state => globalState => store

    1. action: it's a plain javascript object. { type: "do_something" }
    2. reducer: it's a plain javascript function that takes the `previousState` & action then returns the updated `state`.
    3. subscriber: it's a plain javascript function that will get executed whenever there's a change in the `state`.
 */

import { composeWithDevTools } from "redux-devtools-extension";

const reducer = function (state = { count: 10 }, action) {
  if (action.type === "increment") {
    return { count: state.count + 1 };
  }
  if (action.type === "decrement") {
    state.count--;
    //   console.log(state); // {count: 9}
    return { ...state };
    // return { count: state.count - 1 }; // {count: 9}
  }
  return state;
};

const store = legacy_createStore(reducer, composeWithDevTools());

// for every dispatch the subscribers are getting executed even if there's no state change
// store.subscribe(function () {
//   console.log("inside subscriber 0");
// });
// console.log(store.getState()); // {count: 10}
// store.dispatch({ type: "decrement" });
// console.log(store.getState()); // {count: 9}

export default store;
