import { useContext } from "react";
import { BioContext } from "./useContext";

export default function Home() {
  const value = useContext(BioContext);
  return <h1>hello {value}</h1>;
}
