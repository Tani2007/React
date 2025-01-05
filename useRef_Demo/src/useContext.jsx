import { createContext } from "react";

export const BioContext = createContext();

export const BioProvider = ({ children }) => {
  return <BioContext.Provider value="Tanishq">{children}</BioContext.Provider>;
};
