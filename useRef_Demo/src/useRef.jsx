import { useRef } from "react";

export function UseRef() {
  //   let userName = document.getElementById("username");
  const userName = useRef(null);
  const handleFromSubmit = (e) => {
    e.preventDefault();
    console.log(userName.current.value);
  };
  return (
    <>
      <form onSubmit={handleFromSubmit}>
        <h1>useEffect_demo</h1>
        <input type="text" id="username" ref={userName} />

        <button>Submit</button>
      </form>
    </>
  );
}
