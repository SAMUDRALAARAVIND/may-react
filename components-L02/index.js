/**
    React elements 
    DOM elements
 */

// DOM element
// const bold = document.createElement("b");
// // bold is an object (DOM element)
// bold.id = "abc";
// bold.className = "xyz";
// bold.innerText = "Aravind";
// console.log({ bold });

const app = document.getElementById("app");
const container = ReactDOM.createRoot(app);
// app.appendChild(bold);

// React element => These are the light weight representation of the actual DOM elements.

// createElement(type, props, children)
// <b id="abc" class="xyz">Aravind</b>
// const bold1 = React.createElement(
//   "b",
//   { id: "abc", className: "xyz" },
//   "Aravind"
// );
// // bold1 is an object
// // app.appendChild(bold1);
// const container = ReactDOM.createRoot(app);
// // container is wrapper element under which we can render any react elements
// container.render(bold1);
// render(reactElement)

/*
DOM element                 | React Element
 1. These can be created by   1. These elements can be created by React.
    document API.           
 2. these are real elements   2. these virutal(In memory) represetation of the real dom elenents.
    which we see on the UI.


ReactDOM is a bridge between the React and DOM
*/

// Create a subtree and append inside div#app by using React

/**
 * <div id="container">
 *    text node
 *    <p class="para">
 *       <b>Some text</b>
 *    </p>
 *    <span>Span text</span>
 * </div>
 */

// const bold = React.createElement("b", null, "Some text");
// const para = React.createElement("p", { className: "para" }, bold);
// const span = React.createElement("span", null, "Span text");
// const div = React.createElement(
//   "div",
//   { id: "container" },
//   "text node",
//   para,
//   span
// );

const div = (
  <div id="container">
    text node
    <p class="para">
      <b>Some text</b>
    </p>
    <span>Span text</span>
  </div>
);

// JSX

// render method is from react-dom library. this method takes a react element as an argument and converts that into
// a native DOM element and then appends in the container.
container.render(div);
