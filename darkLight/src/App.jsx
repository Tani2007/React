import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./page.css";
import { DarkLight, ThemeProvider } from "./constext";
import { ReducerComp } from "./useReducer";
import { ReactMemo } from "./ReactMemo";
import { MoreParentComponent } from "./UseMemo";
import { UseCallback } from "./UseCallback";
function App() {
  return <UseCallback />;
}

export default App;
