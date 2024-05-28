import { Provider } from "react-redux";
import { Cart } from "./components/Cart";
import { Products } from "./components/Products";
import store from "./store";

export const ShoppingApp = () => {
  return (
    <Provider store={store}>
      <div>
        <Products />
        <Cart />
      </div>
    </Provider>
  );
};

/*
    {count: 10} => #400 => useSelector(state => {
        return {count: state.count};
    })

    {count: 10} => #500

    state: { count: 10, age: 23 } => {count: 10, age: 24}

    Whenever there's state change all the selectors in the application gets executed.
*/
