import { useMemo, useState } from "react";

function ExpensiveCalculation() {
  const sum = () => {
    let i = 0;
    for (i = 0; i <= 10000000; i++) {
      i = i + 1;
    }
    return i;
  };
  const total = useMemo(() => sum(), []);
  return <h1>sum : {total}</h1>;
}
export const MoreParentComponent = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <ExpensiveCalculation />
      <h1>re-rendered-{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Click to Rerender
      </button>
    </>
  );
};
