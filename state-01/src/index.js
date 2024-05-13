import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import "material-icons/iconfont/material-icons.css";

/**
  1. VDOM & RDOM
  2. Class Components & Life cycle methods.
  3. Introduction to useState
 */

const root = ReactDOM.createRoot(document.getElementById("root"));

// const ul = document.getElementById("names");
// function updateUI(names) {
//   ul.innerHTML = "";
//   names.forEach((name) => {
//     const li = document.createElement("li");
//     li.innerText = name;
//     ul.appendChild(li);
//   });
// }
// updateUI(["Aravind", "Rajesh", "Akhil"]);
// // after update
// updateUI(["Rajesh", "Akhil"]);
// intially => names = [ "Aravind", "Rajesh", "Akhil" ]
// update : => names = ["Rajesh", "Akhil"]

/*
 1. In React all the react elements will be structured to a Tree structure ( Virtual DOM => VDOM1 )

 2. Whenever there's a state change (data) , React will re construct another virtual DOM tree with the updated state. (VDOM2)

 3. React compares the old tree (VDOM1) & the new tree (VDOM2) and then figures out the differences. this comparision algorithm is called as `diffing` algorithm as it finds out the differences.

 4. After finding the differences the updated virtual DOM (VDOM2) will be made in sync with the RDOM, this process is called as reconciliation.

 5. After reconiciliation process the VDOM1 gets deleted from the memory and VDOM2 will be the new VDOM1.
 */

// let age = 23,
//   name = "aravind";

// const inc = () => {
//   age++;
//   root.render(getUI());
// };

// function getUI() {
//   console.log("Age: ", age);
//   return (
//     <div>
//       <p>{age}</p>
//       <b>{name}</b>
//       <button onClick={inc}>Increment Age</button>
//     </div>
//   );
// }

// class component is

// life cycle phases and methods

// Counter is now a class component
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 10 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    // render method should always return jsx.
    // const increment = () => {
    //   console.log("clicked on button");
    //   // don't do this  :::  this.state.count += 10;
    //   this.setState({ count: this.state.count + 1 });
    //   this.setState({ count: this.state.count + 2 });
    //   console.log(this.state.count);
    // };

    return (
      <div>
        {/* <p>Count: {this.state.count} </p>
        <button onClick={increment}>Increment</button> */}
        {this.state.count === 0 ? (
          <button onClick={this.increment}>ADD</button>
        ) : (
          <div>
            <button onClick={this.decrement}>-</button>
            <span>{this.state.count}</span>
            <button onClick={this.increment}>+</button>

            <span className="material-icons">add</span>
            <span className="material-icons">menu</span>
            <span className="material-icons">add_shopping_cart</span>
          </div>
        )}
      </div>
    );
  }
}

class Test extends Component {
  // we are acheiving the state here with two things
  // this.state => holds data
  // this.setState => function which can mutate the state
  constructor(props) {
    super(props);
    this.state = { age: 23 };
    // Test({age: 23}) => Test({age: 14})
    // React Queue: [  ]
  }

  incAge = () => {
    // this.state = {age: 23}
    this.setState({ age: this.state.age + 3 }); // {age: 23 + 3}
    this.setState({ age: 14 }); // {age: 14}
    console.log(this.state); // this.state = {age: 23}
  };

  render() {
    // first render: state = { age: 23 }
    // second render: this.state = {age: 14}
    return (
      <div>
        <h1>{this.state.age}</h1>
        <button onClick={this.incAge}>Increment Age</button>
      </div>
    );
  }
}

root.render(<Test />);

// props always needs to immutable
// state is the data which is mutable (changable).
// state shouldn't be mutated directly.
