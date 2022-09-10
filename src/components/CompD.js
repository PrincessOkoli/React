import React, { useContext } from "react";
import { CountContext } from "../App";

function CompD() {
  const countContext = useContext(CountContext);
  return (
    <div>
      componentD - {countContext.countState}
      <button onClick={() => countContext.countDispatch("increment")}>
        increment
      </button>
      <button onClick={() => countContext.countDispatch("decrement")}>
        Decrement
      </button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
    </div>
  );
}

export default CompD;
