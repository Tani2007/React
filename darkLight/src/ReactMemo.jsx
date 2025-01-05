import { useState } from "react";
import Counts from "./MemoCount";

export function ReactMemo() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="p-4 h-lvh flex flex-col justify-center items-center">
        <h1>{count}</h1>
        <button
          className="btn bg-cyan-500 py-1 px-3"
          onClick={() => setCount((prev) => prev + 1)}
        >
          Increment
        </button>
      </div>
      <Counts />
    </>
  );
}
