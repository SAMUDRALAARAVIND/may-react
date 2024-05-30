/**
 * Drawbacks with redux 
 * 
 *  1. For every action dispatch all the reducers
        get informed.
    2. while dispatching the actions {type: "inc" }
        we should action string very causiously.
    3. While updating the state we have use
        spread operator multiple time to let it's
        listeners informed.
    4. setting up store, devtools, middlewars is a 
        headache for developer.

    RTK solves the above three problems



1. Using RTK we can dispatch an action to a specific 
  slice / reducer instead of informing all reducers.

2. You don't need to create action type string, RTK
  will automatically generate some unique strings for us.

3. With RTK we don't need to use spread to update 
    redux state, instead it uses immer library internally which 
    will automatically informs about the updates to all
    listeners.
4. thunk middlware and devtools setup will come by default with RTK.
 */

import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./store";
import { increment } from "./counterSlice";
import { useState } from "react";
import { add } from "./cartSlice";
import { asyncAddProduct } from "./thunk";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const inc = () => {
    dispatch(increment(3));
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={inc}>Increment</button>
      <button>Decrement</button>
    </div>
  );
};

const Cart = () => {
  const [value, setValue] = useState("");
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const addProduct = () => {
    dispatch(asyncAddProduct(value));
  };

  return (
    <div style={{ padding: 20, border: "1px solid blue" }}>
      <input
        placeholder="Enter product name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={addProduct}>Add Product</button>

      <ul>
        {products.map((p) => {
          return <li key={p}>{p}</li>;
        })}
      </ul>
    </div>
  );
};

export const ReduxToolkitExample = () => {
  return (
    <div>
      <Provider store={store}>
        <h1>Redux toolkit Introduction</h1>
        <Counter />
        <Cart />
      </Provider>
    </div>
  );
};
