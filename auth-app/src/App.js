/**
 * useRef hook
 *
 * Authorization app (realtime login & signup flow)
 */

import { useEffect, useRef, useState } from "react";

// useRef => creates an object in the first render(mouting) of the components and serves the same object across all other re renders.
// useRef(v) => { current: v }
// `useRef` do not considers the value passed from second render onwards.

// useState => useState can be used when the data is mutable and we need render for every change in the data.

// useRef => useRef can be used to maintain single memory reference accross multiple renders of the component.

// using useRef we can get the references of native HTMl elements after component get's mounted.

// after the component get's mounted , print the innerText of a button.

class Auth {
  constructor() {
    this.isLoggedIn = false;
  }

  login() {}

  logout() {}

  signup() {}
}

function App() {
  const [count, setCount] = useState(10);
  // let obj = { name: "aravind" }; // #200
  const user = useRef({ name: "aravind", age: 23 });
  // 1st render: #200 = useRef() => {current: { name: "aravind", age: 23 } }
  // 2nd render: #200
  // 3rd render: #200 ... so on..

  const btnRef = useRef(null);
  // btnRef = #500 => { current: null }

  const authRef = useRef(new Auth()); // #500

  const incrementAge = () => {
    user.current.age++;
    console.log(user);
  };

  const onClickLoginBtn = () => {
    authRef.current.login();
  };

  const onClickSignup = () => {
    authRef.current.signup();
  };

  useEffect(() => {
    console.log(btnRef);
    console.log(btnRef.current.innerText);
    btnRef.current.innerText = "Custom Text";
  }, []);

  return (
    <div className="App">
      <p>
        Name: <b>{user.current.name}</b> Age: <i>{user.current.age}</i>
      </p>
      <h1>count : {count}</h1>
      <button ref={btnRef} onClick={incrementAge}>
        Increment Age
      </button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;
