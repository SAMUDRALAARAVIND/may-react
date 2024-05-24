import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import { HomeScreen } from "./HomeScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<p>404 Page not found</p>} />
        <Route path="home" element={<HomeScreen />} />
        <Route
          path="about"
          element={
            <>
              <h1>About Page</h1>
              <Link to="/home">Go to home</Link>
            </>
          }
        />
        <Route path="" element={<h1>Entry screen</h1>} />
        <Route path="product/:productId" element={<h2>Product view</h2>} />
        <Route
          path="cn/:categoryName/cid/:categoryId/:scid"
          element={<p>Categories screen</p>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/**
 *
 * localhost:3000/abc/home
 *
 * blinkit.com => Home Page
 *
 * Product View: blinkit.com/prn/{productName}/prid/{productId}
 * Category screen: blinkit.com/cn/{subCategoryName}/cid/{mainCategoryId}/{categoryId}
 * Resources :  blinkit.com/resources
 * Press: https://blinkit.com/press
 * Careers: https://blinkit.com/careers/
 * Faq: https://blinkit.com/faq
 *
 *
 *
 * Dynamic Routing:
 * http://localhost:3000/product/{productId}
 *
 * http://localhost:3000/product/8292
 * http://localhost:3000/product/29203
 * http://localhost:3000/product/382920
 *
 * blinkit.com/cn/{subCategoryName}/cid/{mainCategoryId}/{categoryId}
 *
 *
 *
 * <Route path="cn/:categoryName/cid/:categoryId/:scid" element={} />
 */
