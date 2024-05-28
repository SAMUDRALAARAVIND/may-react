import { Provider, useSelector, useDispatch } from "react-redux";
import store from "./store";
import "./index.css";
import { createSelector } from "reselect";
// useSelector => useState + useContext(getState, subscribe) + useEffect(subscribe/unsubscribe)

// createSelector(inputSelectors, outputSelector);

// inputSelectors = [ f1, f2, f3, f4 ] => each inputSelector should extract some piece of data from the redux

// outputSelector = function(p1, p2, p3, p4) { return {p1, p2, p3, p4 } }

const ageSelector = createSelector([(state) => state.age], function (age) {
  return { age: age };
});

const Age = () => {
  console.log("Age is rendered");
  //   const age = useSelector((state) => state.age);
  //   const count = useSelector((state) => state.count);
  // const { age, count } = useSelector((state) => {
  //   return { age: state.age + 1, count: state.count + 1 };
  // });
  // useSelector(selector)

  const { age } = useSelector(ageSelector);

  // first render: {age: 23} => #200
  // upon update in redux state: { age: 23 } => #300
  // since #200 !== #300 component will go for a re render
  console.log(age);

  return (
    <div className="box">
      <h3>Age : {age}</h3>
    </div>
  );
};

function Counter() {
  console.log("counter rendered");
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const incAge = () => {
    dispatch({ type: "inc_age" });
  };

  const incCount = () => {
    dispatch({ type: "inc_count" });
  };

  return (
    <div className="box">
      <h1>Count: {count}</h1>
      <button onClick={incAge}>Increment age</button>
      <button onClick={incCount}>Increment count</button>
    </div>
  );
}

export const Cart = () => {
  console.log("cart rendered");
  return (
    <Provider store={store}>
      <Age />
      <Counter />
    </Provider>
  );
};
