import { createContext, useRef, useState } from "react";
import { Signup } from "./Signup";
import "./auth-app.scss";
import Auth from "./auth";
import { Login } from "./Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./NavBar";
import { NotFound } from "./NotFound";

export const ThemeContext = createContext();

const AuthApp = () => {
  const authRef = useRef(new Auth());
  // const [showLogin, setShowLogin] = useState(false);
  const [theme, setTheme] = useState("light"); // "light" | "dark"

  // const toggleForm = () => setShowLogin(!showLogin);
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const container = "container " + (theme === "dark" ? "dark-container" : "");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route
            path="login"
            element={
              <div className={container}>
                <Login auth={authRef.current} />
              </div>
            }
          />
          <Route
            path="signup"
            element={
              <div className={container}>
                <Signup auth={authRef.current} />
              </div>
            }
          />
          <Route path="*" Component={NotFound} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );

  // return (
  //   <div className="container">
  //     {showLogin ? (
  //       <Login auth={authRef.current} toggleForm={toggleForm} />
  //     ) : (
  //       <Signup auth={authRef.current} toggleForm={toggleForm} />
  //     )}
  //   </div>
  // );
};

export default AuthApp;
