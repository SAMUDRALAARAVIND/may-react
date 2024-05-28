import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Cart } from "./cart";
import { ShoppingApp } from "./shopping";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* <Cart /> */}
    <ShoppingApp />
  </>
);
