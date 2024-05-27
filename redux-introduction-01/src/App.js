import { useEffect, useState } from "react";
import "./App.css";
import store from "./store.js";

// redux Introduction

// useSelector => react-redux
const useSubscribe = () => {
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    store.subscribe(() => {
      setState(store.getState());
    });
  }, []);

  return state;
};

const Counter = () => {
  const state = useSubscribe();

  const increment = () => {
    store.dispatch({ type: "increment" });
  };
  const decrement = () => {
    store.dispatch({ type: "decrement" });
  };

  return (
    <div>
      <button onClick={increment}>increment</button>
      <h1>{state.count}</h1>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
