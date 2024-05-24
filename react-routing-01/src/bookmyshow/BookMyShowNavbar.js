import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { NavBar } from "./navbar";
import { Suspense, lazy } from "react";
// import Movies from "./Movies";
const Movies = lazy(() => import("./Movies.js"));

// <Movies />

const Wrapper = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export const BookmyShowNavBar = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="explore" element={<Wrapper />}>
          <Route
            path="movies"
            element={
              <Suspense fallback={<b>Loading movies component ...</b>}>
                <Movies />
              </Suspense>
            }
          />
          <Route path="stream" element={<h1>Streaming page</h1>} />
          <Route path="events" element={<h1>Events page</h1>} />
          <Route path="plays" element={<h1>Plays Page</h1>} />
          <Route path="sports" element={<h1>Sports Page</h1>} />
          <Route path="activities" element={<h1>Activities Page</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
