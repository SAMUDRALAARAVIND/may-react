import React, { useState } from "react";
import "./App.css";

// const FetchUsers = () => {
//   const [data, setData] = useState(null);

//   const fetchUsers = async () => {
//     try {
//       const response = await fetch("https://reqres.in/api/users");
//       const data = await response.json();
//       setData(data.data);
//     } catch (error) {}
//   };

//   return (
//     <div>
//       <div className="header">
//         <h2>Blue Whale</h2>
//         <button className="btn" onClick={fetchUsers}>
//           Get User List
//         </button>
//       </div>
//       <table>
//         <thead>
//           <tr>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Email</th>
//             <th>Avatar</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data ? (
//             data.map((user) => {
//               return (
//                 <tr key={user.id}>
//                   <td>{user.first_name}</td>
//                   <td>{user.last_name}</td>
//                   <td>{user.email}</td>
//                   <td>
//                     <img src={user.avatar} />
//                   </td>
//                 </tr>
//               );
//             })
//           ) : (
//             <tr>
//               <td>No data found</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

function useCustomCounter(intialValue = 0) {
  const [count, setCount] = useState(intialValue);
  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return [count, increment, decrement];
}

const FetchUsers = () => {
  const [count, inc, dec] = useCustomCounter(10);

  return (
    <div>
      <button onClick={inc}>Increment</button>
      <h1>{count}</h1>
      <button onClick={dec}>Decrement</button>
    </div>
  );
};

export default FetchUsers;
