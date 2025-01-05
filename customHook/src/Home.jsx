import { useContext } from "react";
import { BioContext } from "./context";
import { useBioContext } from "./context";

export default function Home() {
  const value = useBioContext();
  return <h1>hello {value}</h1>;
}
