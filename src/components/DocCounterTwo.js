import React from "react";
import useCounter from "../hooks/useCounter";

//custom hooks example 2
function DocCounterTwo() {
    const [count, increment, decrement, reset] = useCounter(10, 7); 

    return (
    <div>
      <h2>count = {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default DocCounterTwo;
