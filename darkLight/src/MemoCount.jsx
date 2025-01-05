import { memo, useRef } from "react";

function Counts() {
  const renderCount = useRef(0);
  console.log(renderCount);
  return (
    <div className="mt-3 font-display text-center">
      <p className="">
        Nothing Changed
        <span>{renderCount.current++} time(s)</span>
      </p>
    </div>
  );
}
export default memo(Counts);
