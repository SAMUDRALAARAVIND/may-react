import { add } from "./cartSlice";

export function asyncAddProduct(productName) {
  return async function (dispatch, getState) {
    await new Promise((r) => setTimeout(r, 3000));
    dispatch(add(productName));
    // dispatch({ type: "b/add", payload: productName });
  };
}

// dispatch({type: "b/add"})
