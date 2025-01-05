import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { BioProvider } from "./context";
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
