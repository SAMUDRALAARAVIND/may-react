// Event Listeners

// Components

import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

const onClickBtn = () => {
  alert("Clicked on button");
};

const container = (
  <>
    <div>Container 1</div>
    <div>Container 2</div>
    <button onClick={onClickBtn}>Click Me</button>
  </>
);

// Components => Class components & Functional components

// A functional component is a javascript function which returns jsx and starts with a capital letter.

const User = ({ name, age }) => {
  return (
    <div>
      <p>Name: {name}</p>
      <b>Age: {age}</b>
    </div>
  );
};

root.render(<User name="Aravind" age={23} />);
// To distinguish between native html tags and custom component.
// name and age are props.
// User({ name: "Aravind", age: 23 }) => <User />
// user({ name: "Joydeep", age: 45 }) => <user name="joydeep" age="45" />
