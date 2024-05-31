import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./auth/Login";
import { Signup } from "./auth/signup";
import { NotFound } from "./auth/NotFound";
import Auth from "./auth/Auth";
import { useRef } from "react";
import { useSelector } from "react-redux";
import PostApp from "./home";

function App() {
  const authRef = useRef(new Auth());
  const loginStatus = useSelector((state) => state.auth.isLoggedIn);

  if (!loginStatus) {
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path="login"
            element={
              <div>
                <Login auth={authRef.current} />
              </div>
            }
          />
          <Route
            path="signup"
            element={
              <div>
                <Signup auth={authRef.current} />
              </div>
            }
          />
          <Route path="*" Component={NotFound} />
        </Routes>
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="home" Component={PostApp} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
