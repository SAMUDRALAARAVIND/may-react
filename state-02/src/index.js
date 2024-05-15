import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import FunctionalComponent from "./FunctionalComponent";
import { Input } from "./Input";
import Uplifting from "./Uplifting";
import EffectsExample from "./Effect";

/**
  1. Life cycle phases/methods of a react component
  2. useState Hook
  3. Assignments 
 */
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }
//   render() {
//     console.log("inside render");
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           Increment
//         </button>
//       </div>
//     );
//   }
// }

const root = ReactDOM.createRoot(document.getElementById("root"));

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  toggleApp = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <>
        <button onClick={this.toggleApp}>Toggle App component</button>
        {this.state.show && <App />}
      </>
    );
  }
}

root.render(<EffectsExample />);
