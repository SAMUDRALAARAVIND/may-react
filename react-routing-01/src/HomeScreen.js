import { Link, useNavigate } from "react-router-dom";
const n = 5;

export const HomeScreen = () => {
  const navigate = useNavigate();
  // navigate function can be used to dynamically navigate to other pages

  const findSumAndNavigate = () => {
    let sum = 0;
    for (let i = 1; i <= n; i++) sum += i;
    if (sum % 2 === 0) {
      // TODO: navigate to about page
      navigate("/about");
    }
    console.log(sum);
  };

  return (
    <div>
      <h1>Home screen</h1>
      {/* <a href="http://localhost:3000/about">About page</a> */}
      <Link to="/about">About Page</Link>
      <Link to="/">Entry screen</Link>
      <button onClick={findSumAndNavigate}>Find Sum and Navigate</button>
    </div>
  );
};
