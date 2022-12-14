import React, { useReducer } from "react";

//using usereducer in an object
const initialState = {
    firstCounter: 0,
    secondCounter: 10,
}
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {...state,firstCounter: state.firstCounter + action.value};
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>first counter- {count.firstCounter}</div>
      <div>second counter- {count.secondCounter}</div>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "increment2", value: 1 })}>
        increment counterTwo
      </button>
      <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
        Decrement counterTwo
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        increment by 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Decrement by 5
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default CounterTwo;
