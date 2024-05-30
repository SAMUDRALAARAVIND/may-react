import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { ReduxMiddlewareExample } from "./redux-middleware";
import { ReduxToolkitExample } from "./rtk";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ReduxToolkitExample />);
