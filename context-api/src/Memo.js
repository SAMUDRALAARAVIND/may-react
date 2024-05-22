import { memo, useState } from "react";

// MemoizedVersion = memo(OriginalComp)
const A = memo(({ a }) => {
  console.log("A rendered");
  return (
    <div>
      <p>Inside component A</p>
      <p>Value of a is: {a}</p>
    </div>
  );
});

const MemoExample = () => {
  console.log("MemoExample rendered");
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      <A a={10} />
      {/* A is a memoized component, will get triggered only when props changes */}
      <button onClick={() => setToggle(!toggle)}>
        Re render MemoExample component
      </button>
    </div>
  );
};

export default MemoExample;

/**
 1. Get solid understanding of programming langugae ()
 2. Data structures 
    Math, binary, Array, String
    Stack, Queue
    LinkedList
    Trees

    Graph
    Dynamic Programming

    UI2

    Medium Leetcode

    FAAANG
    MANGAA
 */
