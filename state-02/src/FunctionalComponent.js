import { useState } from "react";

//

// Using useState hook we can acheive the component state just as in Class Components
// Hook: A react hook is plain javascript function which can be used only inside functional components or in other functions .
// React hooks by convention starts with `use`

/*
 useState => 
    1. can take a single argument which defines the intial state of the component.
    2. useState returns an array of two elements. [stateValue, setterFunction]

    the setterFunction is used for updating the state.

    setterFunction takes the newState as an argument and then informs react about the update.
    setterFunction can take a callback as well to update the state.
*/

const FunctionalComponent = () => {
  const [count, setCount] = useState(10);
  console.log(count);

  const increment = () => {
    // setCount(count + 1);
    // setCount(19);
    // setCount(count + 3);
    // setCount(count + 2);
    setCount((prev) => {
      return prev + 1;
    });
    setCount((prev) => {
      return prev + 2;
    });
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default FunctionalComponent;
