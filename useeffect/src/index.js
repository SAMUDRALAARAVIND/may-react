import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AxiosExample from "./axios-example.js";
import Rating from "./rating.js";

/**
   sass
  axios
  antd
 */

//  sass => it's a pre processor for css.
//  jsx => Babel

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* <App /> */}
    <Rating />
  </>
);
