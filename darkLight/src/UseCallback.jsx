import { memo, useCallback, useMemo, useState } from "react";

const Button = memo(({ children, onClick }) => {
  console.log(`Rendering button ${children}`);
  return (
    <>
      <button
        onClick={onClick}
        className={`hover:bg-slate-400 p-5 ${
          children === "Increment" ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {children}
      </button>
    </>
  );
});
export function UseCallback() {
  const [count, setCount] = useState(0);
  const handleInc = useCallback(() => {
    console.log("increment inside");
    setCount((prev) => prev + 1);
  }, []);
  const handleDec = useCallback(() => {
    console.log("decrement inside");
    setCount((prev) => prev + 1);
  }, []);
  return (
    <>
      <h1>Use Callback Demo</h1>
      <h1>{count}</h1>
      <Button onClick={handleInc}>Increment</Button>
      <Button onClick={handleDec}>Decrement</Button>
    </>
  );
}
