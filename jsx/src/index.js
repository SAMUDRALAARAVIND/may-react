import React from "react";
import { createRoot } from "react-dom/client";

// const para = React.createElement("p", { id: "abc" }, "Para element");

const para = (
  <p id="abc">
    <b>Bold text</b>
    <span>Span element</span>
  </p>
);

// The XML like code written inside javascript file is called as javascript XML (JSX)
const root = createRoot(document.getElementById("app"));

root.render(para);

// this code will not be sent to the browser as we have written.

// the code inside is combined into bundle.js and then that file will be sent to the browser.
// During bundling the pre processor called `babel` is used to convert the XML like code into the respective react elements, and then adds the compiled elements into bundle.js

// <p id="abc">Para element</p> + Babel => React.createElement("p", { id: "abc" }, "Para element")
