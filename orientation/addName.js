const app = document.getElementById("app");

// document => DOM
export function addNameUnderApp(name) {
  const element = document.createElement("p");
  element.innerText = name;
  app.appendChild(element);
}

// React is a javascript library.

//
