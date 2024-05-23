import { useContext } from "react";
import { ThemeContext } from "./AuthApp";
import { Link } from "react-router-dom";

// we can't use Link component and useNavigate hook from outside of BrowserRouter component

export const NavBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={`navbar ${theme === "dark" ? "dark-navbar" : ""}`}>
      <button className="theme material-icons" onClick={toggleTheme}>
        dark_mode
      </button>
      {/* <Link to="/signup">Signup</Link>
      <Link to="/login">Signup</Link> */}
    </nav>
  );
};
