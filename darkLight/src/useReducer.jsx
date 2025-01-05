import { useReducer, useState } from "react";

export function ReducerComp() {
  const reducer = (state, action) => {
    console.log(state, action);
    if (action.type == "INC") {
      return state + 1;
    } else {
      return state - 1;
    }
  };
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <div className="p-4 h-lvh flex flex-col justify-center items-center">
        <h1>{count}</h1>
        <button onClick={() => dispatch({ type: "INC" })}>Increment</button>
        <button onClick={() => dispatch({ type: "DEC" })}>Decrement</button>
      </div>
    </>
  );
}
