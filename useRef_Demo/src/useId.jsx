import { useId } from "react";

export function UseId() {
  const id = useId();
  return (
    <form>
      <div>
        <label htmlFor={id + "username"}>userName</label>
        <input type="text" id={id + "username"} />
      </div>
      <div>
        <label htmlFor={id + "username"}>Password</label>
        <input type="text" id={id + "username"} />
      </div>
    </form>
  );
}
