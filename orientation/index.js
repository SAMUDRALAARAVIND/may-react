/*
JS topics: 
  DOM
  closures, scope chain, this keyword, OOPs, promises, async/await

  React:
    1. VDOM & RDOM, Diffing & reconciliation
    2. React elements , JSX . Babel, Bundlers, loaders. 
    3. Components (Functioanl & Class based), Component life cycle methods and their importance.
    4. Hooks ( useState, useEffect, useRef, useContext, useMemo, useCallback ), custom hooks.
    5. Auth App
    6. react-router-dom => client side routing
    7. Global State Management (redux, react-redux, thunk)
    8. Instagram clone => Posts management , Connections
*/
// ES6 -> Modules => we can reuse the variables present in one module(js file) into another module(js file)

// console.log(this); // this => undefined
// module scope => this(undefined)
// module scope is by default in strict mode.
// global scope => window

// By default all the js files included in html file will get executed in global scope.

/*
 In a module: export and import javascript variables 
  We need export variables if we want to use them elsewhere.
  1. Named export 
  2. Default export
 */

/**
 * for named exports
 *    import {v1, v2, v3} from "./module2.js"
 */
// import abc, { num, num2 as age, Car, messageDelay } from "./test.js";
// *

// import * as x from "./test.js";
// console.log(x.num);
// console.log(x.num2);
// x.messageDelay();

// console.log(sum(10, 20), num, age);
// console.log(new Car());

// console.log(name); // "aravind"

// console.log(num, age, Car);
// messageDelay();

import { addNameUnderApp } from "./addName.js";
// import d1 from "./module.js";
// import d2 from "./module2.js";
// import d3 from "./module3.js";

const button = document.querySelector("#btn");
button.addEventListener("click", () => addNameUnderApp("Aravind"));

button.addEventListener("click", () => {
  // to create HTML element document.createElement();
  // to create React element React.createElement();
  // <p id="abc" class="xyz">Aravind</p>

  // React elements can't be appended under DOM nodes.
  const element = React.createElement(
    "p",
    { id: "abc", className: "xyz" },
    "Aravind"
  );
  const root = ReactDOM.createRoot(document.getElementById("app"));
  root.render(element);
});

console.log(React);
