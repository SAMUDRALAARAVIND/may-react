import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    // increment is not a life cycle method.
    this.setState({ count: this.state.count + 1 });
  };

  navigate = (event) => {
    const targetId = event.target.getAttribute("data-href"); // "#test"
    const element = document.querySelector(`#${targetId}`);
    element.scrollIntoView({ behavior: "smooth" });
  };

  render() {
    console.log("in render");
    return (
      <div style={{ padding: "10px", border: "1px solid blue" }}>
        <h1>Class Component, {this.state.count}</h1>
        <button data-href="test" onClick={this.navigate}>
          Scroll to test element
        </button>

        <button onClick={this.increment}>Increment</button>
        <div>
          In this example There's a button that when clicked calls the
          smoothScrollTo() function. This function takes the ID of the target
          element as an argument. It finds the target element using
          document.querySelector(). Then it calls scrollIntoView() on the target
          element option to make the scroll smooth. You can adjust the
          smoothness by changing the options passed to scrollIntoView() In this
          example There's a button that when clicked calls the smoothScrollTo()
          function. This function takes the ID of the target element as an
          argument. It finds the target element using document.querySelector().
          Then it calls scrollIntoView() on the target element option to make
          the scroll smooth. You can adjust the smoothness by changing the
          options passed to scrollIntoView() In this example There's a button
          that when clicked calls the smoothScrollTo() function. This function
          takes the ID of the target element as an argument. It finds the target
          element using document.querySelector(). Then it calls scrollIntoView()
          on the target element option to make the scroll smooth. You can adjust
          the smoothness by changing the options passed to scrollIntoView() In
          this example There's a button that when clicked calls the
          smoothScrollTo() function. This function takes the ID of the target
          element as an argument. It finds the target element using
          document.querySelector(). Then it calls scrollIntoView() on the target
          element option to make the scroll smooth. You can adjust the
          smoothness by changing the options passed to scrollIntoView() In this
          example There's a button that when clicked calls the smoothScrollTo()
          function. This function takes the ID of the target element as an
          argument. It finds the target element using document.querySelector().
          Then it calls scrollIntoView() on the target element option to make
          the scroll smooth. You can adjust the smoothness by changing the
          options passed to scrollIntoView() In this example There's a button
          that when clicked calls the smoothScrollTo() function. This function
          takes the ID of the target element as an argument. It finds the target
          element using document.querySelector(). Then it calls scrollIntoView()
          on the target element option to make the scroll smooth. You can adjust
          the smoothness by changing the options passed to scrollIntoView() In
          this example There's a button that when clicked calls the
          smoothScrollTo() function. This function takes the ID of the target
          element as an argument. It finds the target element using
          document.querySelector(). Then it calls scrollIntoView() on the target
          element option to make the scroll smooth. You can adjust the
          smoothness by changing the options passed to scrollIntoView() In this
          example There's a button that when clicked calls the smoothScrollTo()
          function. This function takes the ID of the target element as an
          argument. It finds the target element using document.querySelector().
          Then it calls scrollIntoView() on the target element option to make
          the scroll smooth. You can adjust the smoothness by changing the
          options passed to scrollIntoView() In this example There's a button
          that when clicked calls the smoothScrollTo() function. This function
          takes the ID of the target element as an argument. It finds the target
          element using document.querySelector(). Then it calls scrollIntoView()
          on the target element option to make the scroll smooth. You can adjust
          the smoothness by changing the options passed to scrollIntoView()
          <b id="test">Bold text</b>
        </div>
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    // this method gets executed after every update.
    console.log(prevProps, prevState);
  }

  componentDidMount() {
    console.log("after component gets mounted");
  }

  componentWillUnmount() {
    console.log("component is about to die");
  }
}

/*
Life cycle phases: 
Mouting, Updating and Unmounting
Birth, Life, Death
1. In every life cycle phase a set of methods gets executed.

Mouting Phase: Component creation phase.
    constructor => this gets executed only during mounting phase.
    render
    componentDidMount => gets executed when the component is mounted.
Updating Phase: 
    Updating a component can be done either by changing the state of the component or props passed into the component.
    render
    componentDidUpdate(prevProps, prevState)
Unmounting Phase:
    componentWillUnMount
*/

export default App;
