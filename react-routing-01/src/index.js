import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RoutingApp } from "./RoutingApp";
import { BookmyShowNavBar } from "./bookmyshow/BookMyShowNavbar";
import FetchUsers from "./FetchUsers";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* <App /> */}
    {/* <RoutingApp /> */}
    {/* <BookmyShowNavBar /> */}
    <FetchUsers />
  </>
);

// BrowserRouter
// Routes
// Route
// Link
// useNavigate()
// Dynamic routing
// useParams
