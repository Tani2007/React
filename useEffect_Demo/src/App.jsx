import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { NewApi } from "./newApi";
import { Api } from "./Api";
import "./App.css";
import { Pikachu } from "./pikachu";
import { OldApi } from "./oldApi";

function App() {
  // const [count, setCount] = useState(0);
  // const [name, setName] = useState("");
  // useEffect(
  //   function () {
  //     console.log(name);
  //     document.title = `count ${count}`;
  //   },
  //   [name, count]
  // );
  // return (
  //   <div>
  //     <h1>count : {count}</h1>
  //     <button onClick={() => setCount(count + 1)}>Increment</button>
  //     <h2>
  //       <input
  //         type="text"
  //         value={name}
  //         onChange={(e) => setName(e.target.value)}
  //       />
  //     </h2>
  //   </div>
  // );
  // useEffect(() => {
  //   const timer = setTimeout(function () {
  //     setCount((prev) => prev + 1);
  //   }, 1000);

  //   return () => clearInterval(timer);
  // });
  // return (
  //   <>
  //     <h1>{count}</h1>
  //   </>
  // );
  return <OldApi />;
}

export default App;
