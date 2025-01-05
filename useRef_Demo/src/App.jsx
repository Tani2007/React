import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { UseRef } from "./UseRef";
import { ForwrdRef } from "./forwardRef";
import { UseId } from "./useId";
import { Simpons } from "./Smipson";
import { PropsDrilling } from "./propsDrilling";
import { BioProvider } from "./useContext";
import Home from "./Home";

function App() {
  return (
    <BioProvider>
      <Home />
    </BioProvider>
  );
}

export default App;
``;
