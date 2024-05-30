import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";
// redux-thunk => gives us the middleware functionality for a redux store.

/*
By default the dispatch function always takes action object as argument 
{ type: "inc" , payload?: optional }

Once we integrate middleware(redux-thunk) , we can pass a function as an argument to the `dispatch` method
dispatch({type: "inc"})
dispatch(function(){})
*/

const intialState = { count: 10, value: 1 };
const counterReducer = (state = intialState, action) => {
  console.log("inside counter reducer");
  if (action.type === "inc") {
    const incrementCount = action.payload;
    return { ...state, count: state.count + incrementCount };
  }
  return state;
};

const cityReducer = (state = { info: null }, action) => {
  console.log("inside city reducer");
  if (action.type === "inc") {
    console.log("inc action inside city reducer");
  }
  if (action.type === "fetched_data") {
    return { ...state, info: action.payload };
  }
  return state;
};

const rootReducer = combineReducers({
  counter: counterReducer,
  city: cityReducer,
});

const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

/**

redux state: 

 {
    counter: { count: 10, value: 1}, 
    city: {info: null}
 }

 useSelector(state => state.counter.count)
 */

export default store;
