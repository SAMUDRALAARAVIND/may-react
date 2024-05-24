import {
  BrowserRouter,
  Link,
  NavLink,
  Outlet,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import "./navbar.css";

const NavBar = () => {
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

const Layout = () => {
  const location = useLocation();
  console.log(location);

  return (
    <div>
      {/* <nav>
        <div>
          <Link
            to="/user/home"
            style={{
              color: location.pathname === "/user/home" ? "red" : "",
            }}
          >
            Home
          </Link>
        </div>
        <div>
          <Link
            to="/user/about"
            style={{
              color: location.pathname === "/user/about" ? "red" : "",
            }}
          >
            About
          </Link>
        </div>
      </nav> */}
      <nav>
        <NavLink
          to="/user/about"
          className={({ isActive }) => (isActive ? "active-link" : "link")}
        >
          About
        </NavLink>
        <br />
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to="/user/home"
        >
          Home{" "}
        </NavLink>
      </nav>
      <Outlet />
      {/* Outlet defines the nested route  component*/}
    </div>
  );
};

export const RoutingApp = () => {
  return (
    <>
      {/* <NavBar /> */}
      <BrowserRouter>
        <Routes>
          <Route path="user" element={<Layout />}>
            <Route path="" element={<h1>Entry for user</h1>} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<p>Too early to the pary </p>} />
          </Route>
          {/* user/ */}
          {/* /user/home =>  Outlet: Home component */}
          {/* /user/about => Outlet: About component */}
          <Route path="*" element={<h3>Invalid user route</h3>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

// Nested routing.

/**
    /user
        /home
        /about
        /blog
        /contact


    /explore
        /events
        /plays
        /sports
        /movies


    <Route path="user/home" element={} />
    <Route path="user/blog" element={} />
 */
