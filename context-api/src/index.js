import ReactDOM from "react-dom/client";
import "./index.css";
import ContextApi from "./context.js";
import App from "./App.js";
import MemoExample from "./Memo.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ContextApi />);

/**
 * Context API
 * React.memo
 *
 * Components
 * Utility class
 *
 * Global state:
 *  The state (data) which can be consumed/modified from anywhere in the application.
 */
