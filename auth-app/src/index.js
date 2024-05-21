import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import AuthApp from "./AuthApp.js";
const root = ReactDOM.createRoot(document.getElementById("root"));

// async function fetchData() {
//   const pageNumber = 3,
//     query = "tiger";
//   try {
//     const response = await axios({
//       url: "https://api.unsplash.com/search/photos",
//       method: "GET",
//       params: {
//         page: pageNumber,
//         query,
//         client_id: "dQMz4d_ImCN5XeO-Ukp_8l1Ch7BpRi4WGFBNUk8eGhw",
//       },
//     });
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

root.render(
  <>
    {/* <App /> */}
    <AuthApp />
  </>
);
