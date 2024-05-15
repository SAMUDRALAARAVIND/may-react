import { useEffect, useState } from "react";

/**
    Signature of useEffect: 
        useEffect takes two arguments 
            1. callback function.
            2. dependency list (optional).
        useEffect do not return anything.

    useEffect(function) => componentDidMount + componentDidUpdate
    useEffect(function, []) => componentDidMount
    useEffect(function, [a, b, c]) => componentDidMount + componentDidUpdate( whenever the list changes )
 */

let x = 19;

// const EffectsExample = () => {
//   const [count, setCount] = useState(10);

//   useEffect(() => {
//     console.log("some message");
//   }, [count]);

//   // 1st render: [ 10 ]
//   // 2nd render: [ 11 ]
//   // 3rd render: [ 12 ]

//   return (
//     <div>
//       <p>useEffect example</p>
//       <h1>{count}</h1>
//       <button onClick={() => x++}>Increment X</button>
//       <button onClick={() => setCount((p) => p + 1)}>Increment</button>
//     </div>
//   );
// };

// disposer or cleanup gets executed after the component is unmounted.
const ChildComponent = () => {
  useEffect(() => {
    // effect/side effect
    console.log("inside effect");

    return function () {
      // cleanup/disposer function => componentWillUnMount
      console.log("clean up function");
    };
  }, []);

  return (
    <div style={{ padding: "20px", border: "1px solid blue" }}>
      <h1>Child component</h1>
    </div>
  );
};

const EffectsExample = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      Component will unmount
      {toggle && <ChildComponent />}
      <button onClick={() => setToggle(!toggle)}>toggle child compoennt</button>
    </div>
  );
};

export default EffectsExample;

/**
    componentDidMount
    componentDidUpdate
    componentWillUnMount

    The above three life cycle methods can be acheived in functional components as well.
    By using a hook `useEffect`
 */

// Menu App Hint::

// const foodItems = [];

// function filterByCategory(category) {
//   return foodItems.filter((foodItems) => foodItems.type === category);
// }

// filterByCategory("lunch")
// filterByCategory("shakes");

// function Menu() {
//   const [category, setCategory] = useState("all");

//   return (
//     <>
//       {filterByCategory(category).map((foodItem) => (
//         <></>
//       ))}
//     </>
//   );
// }
