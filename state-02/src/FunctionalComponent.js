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

// const FunctionalComponent = () => {
//   const [count, setCount] = useState(10);
//   console.log(count);

//   const increment = () => {
//     // setCount(count + 1);
//     // setCount(19);
//     // setCount(count + 3);
//     // setCount(count + 2);
//     setCount((prev) => {
//       return prev + 1;
//     });
//     setCount((prev) => {
//       return prev + 2;
//     });
//   };

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// };

// Lazy intialisation: We can pass a function as an argument to useState method so that it will ensure to call that callback during first render only

// function findSum(n = 1000) {
//   // O(n)
//   console.log("inside findSum method");
//   let sum = 0;
//   for (let i = 2; i <= n; i += 2) {
//     sum += i;
//   }
//   return sum;
// }
// // useEffect
// const FunctionalComponent = () => {
//   const [count, setCount] = useState(findSum());

//   const increment = () => {
//     // setState method asynchronous in nature.
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={increment}>Increment State</button>
//     </div>
//   );
// };

function FunctionalComponent() {
  // non primitives as state values
  console.log("rendered");
  // const [user, setUser] = useState({ name: "Aravind", age: 23 });
  const [userNames, setUserNames] = useState(["Aravind", "Rajesh"]);
  // First render: user = #400
  // First render: userNames = #200

  const incrementAge = () => {
    // user.age++; // #400 = {age: 24, name: "Aravind"}
    // setUser({ ...user }); // setUser(#500)
    // setUser({ ...user });
  };

  const addNewUser = () => {
    userNames.push("Vivek"); // userNames = #200
    console.log(userNames);
    setUserNames([...userNames]); // setUserNames(#200)
  };

  return (
    <div>
      <ul>
        {userNames.map((userName, index) => (
          <li key={index}>{userName}</li>
        ))}
      </ul>
      <button onClick={addNewUser}>Add new User</button>
      {/* <button onClick={incrementAge}>Increment Age</button> */}
    </div>
  );
}

export default FunctionalComponent;
