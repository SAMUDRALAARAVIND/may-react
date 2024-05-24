import { NavLink } from "react-router-dom";
import "./navbar.css";

const className = ({ isActive }) => `link ${isActive ? "active-link" : ""}`;

export const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink className={className} to="/explore/movies">
        Movies
      </NavLink>
      <NavLink className={className} to="/explore/stream">
        Stream
      </NavLink>
      <NavLink className={className} to="/explore/events">
        Events
      </NavLink>
      <NavLink className={className} to="/explore/plays">
        Plays
      </NavLink>
      <NavLink className={className} to="/explore/sports">
        Sports
      </NavLink>
      <NavLink className={className} to="/explore/activities">
        Activities
      </NavLink>
    </nav>
  );
};
