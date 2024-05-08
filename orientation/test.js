export function sum(a, b) {
  return a + b;
}

export const num = 1299;

export const num2 = 1000;

export class Car {
  constructor() {
    console.log("car constructor");
  }
}

// default export
// there should be atmost only one default export in a module .
export default "aravind";

export async function messageDelay() {
  await new Promise((r) => setTimeout(r, 3000));
  console.log("after 3 seconds");
  await new Promise((r) => setTimeout(r, 2000));
  console.log("after 2 more seconds");
}

// named exports : 5
// default exports: 1
