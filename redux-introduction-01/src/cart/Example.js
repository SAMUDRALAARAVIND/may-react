// react-redux
import { createContext, useContext } from "react";
import store from "./store";
// store = {dispatch: f, subscribe: f, getState: f}

const ReduxContext = createContext();

function useDispatch() {
  const { dispatch } = useContext(ReduxContext);
  return dispatch;
}

const Age = () => {
  console.log("age component rendered");
  const { getState } = useContext(ReduxContext);

  const dispatch = useDispatch();

  const incrementAge = () => {
    dispatch({ type: "inc_age" });
  };

  return (
    <div>
      <button onClick={incrementAge}>Increment age</button>
      <h3>{getState().age}</h3>
    </div>
  );
};

export const Cart = () => {
  return (
    <ReduxContext.Provider value={store}>
      <Age />
    </ReduxContext.Provider>
  );
};

/**
    react-redux: 

        <Provider store={store}>
            <Age />
        </Provider>

        const dispatch = useDispatch();
        const age = useSelector((state) => state.age)

 */
