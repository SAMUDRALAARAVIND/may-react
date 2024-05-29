import { Link, NavLink } from "react-router-dom";
import "../styles/sidebar.scss";

const activeClassName = ({ isActive }) =>
  `link ${isActive ? "active-link" : ""}`;

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink to="/liked-songs" className={activeClassName}>
        Liked Songs
      </NavLink>
      <NavLink to="/playlists" className={activeClassName}>
        All Playlists
      </NavLink>
    </div>
  );
};
