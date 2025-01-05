import { forwardRef, useRef } from "react";

export function ForwrdRef() {
  const username = useRef(null);
  const handleFromSubmit = (e) => {
    e.preventDefault();
    console.log(username.current.value);
  };
  return (
    <form onSubmit={handleFromSubmit}>
      <BeforeReact19Input username="username" ref={username} />
    </form>
  );
}
const BeforeReact19Input = forwardRef(({ username }, ref) => {
  return <input type="text" placeholder={username} ref={ref} />;
});
