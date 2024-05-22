import { createContext, memo, useContext, useState } from "react";
import "./app.css";

const CounterContext = createContext("abcd"); // { Provider: FunctionalComponent }

const B = memo(() => {
  console.log("B rerendered");
  const { count, setCount } = useContext(CounterContext);
  const decrementCount = () => {
    setCount((p) => p - 1);
  };

  return (
    <div className="box">
      <h2>Count: {count}</h2>
      <p>Inside component B</p>
      <button onClick={decrementCount}>Decrement</button>
    </div>
  );
});

const A = () => {
  const { count, setCount } = useContext(CounterContext);
  // if A is outside the Provider then, useContext returns default context value

  const incrementCount = () => {
    setCount((p) => p + 1);
  };

  return (
    <div className="box">
      <h2>Count: {count}</h2>
      <p>Inside component A</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};

// const Obj = {
//   Provider: () => {
//     return <p>Provider component</p>;
//   },
// };

const App = () => {
  const [count, setCount] = useState(10);

  return (
    <div className="box">
      <CounterContext.Provider value={{ count, setCount }}>
        <h1>Count: {count}</h1>
        <p>Inside App component</p>
        <B />
        <CounterContext.Provider value={{ count: count + 3, setCount }}>
          <A />
        </CounterContext.Provider>
      </CounterContext.Provider>
    </div>
  );
};

export default App;
