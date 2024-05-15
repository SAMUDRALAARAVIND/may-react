import { useState } from "react";

const Test = ({ count, updateCount }) => {
  console.log("test rendered");

  const increment = () => {
    updateCount((prev) => prev + 1);
  };

  return (
    <div>
      <h1>Count in child : {count}</h1>
      <button onClick={increment}>Increment Count from child</button>
    </div>
  );
};

const Uplifting = () => {
  const [count, setCount] = useState(19);

  return (
    <div>
      <Test count={count} updateCount={setCount} />
      <button onClick={() => setCount(count + 1)}>Increment count</button>
    </div>
  );
};

export default Uplifting;
// MoviesApp => making an API call
// Class Components

// componentDidMount

// componentDidUpdate
// props/state change
// componentWillUnMount

/*
State uplifting: 

const A = () => {
  const [count, setCount] = useState(10);
  return (
    <div>
      <B count={count} setCount={setCount} />
      <E count={count} />
    </div>
  );
};

const B = ({ count, setCount }) => {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(x => x + 1)}>Increment</button>
    </div>
  );
};

const E = ({ count }) => {
  return (
    <div>
      <h2>{count}</h2>
    </div>
  );
};
*/
