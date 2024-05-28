import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const intialState = {
  count: 10,
  age: 23,
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case "inc_age": {
      return { ...state, age: state.age + 1 };
    }
    case "inc_count": {
      return { ...state, count: state.count + 1 };
    }
    default:
      return state;
  }
};

const store = createStore(reducer, composeWithDevTools());
export default store;
