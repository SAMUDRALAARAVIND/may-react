// since we installed React and ReactDOM libraries we use the variables exported from these libraries in our project.

import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("app"));
const para = React.createElement(
  "p",
  { id: "abc", className: "xyz" },
  "Some text inside paragraph !!!"
);
root.render(para);

// in this file
// developer's code + React code + ReactDOM code = bundle.js
// then we can include bundle.js inside index.html
