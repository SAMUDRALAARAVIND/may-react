/*
  <button class="btn">Click Me</button>
*/

import React from "react";
import { createRoot } from "react-dom/client";

// const button = <button className="btn">Click Me</button>;
// Extendend markup language
// <tag>data</tag>
// <button className="btn">Click Me</button> + Babel => React.createElement();

// JSX syntax:

// const inputLabel = "Enter Username";
// const inputId = "abc";
const name = "Amit";

const sum = (a, b) => {
  console.log(a + b);
  return a + b;
};

const names = ["Vivek", "Aravind", "Rajesh"];

const elements = names.map((name, index) => <p key={index}>{name}</p>);
//  [ <li key={0}>Vivek</li>, <li key={1}>Aravind</li>, <li key={2}>Rajesh</li> ]

const container = (
  <div id="container" className="abc xyz mno" data-name="aravind">
    {/* <label htmlFor={inputId}>{inputLabel}</label>
    <input placeholder="email" id={inputId} /> */}
    {/* <b>{[10, "Aravind"]}</b>
    <p>Some {<b>Bold text</b>}</p> */}

    {/* <p>
      {[
        "Aravind",
        <b>{"Amit"}</b>,
        <span>{10 % 2 === 1 ? "Aravind" : "Rajesh"}</span>,
      ]}
    </p> */}
    {/* {sum(10, 2)} */}
    <ul>{elements}</ul>
  </div>
);

// to embed data inside JSX we use {data}
// Booleans, null, undefined values will not be displayed in the JSX
// Objects are not valid react children.
// Arrays can be rendered as a children to react elements.
const app = document.getElementById("root");
const root = createRoot(app);
root.render(container);
