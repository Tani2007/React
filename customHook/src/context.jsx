import { createContext, useContext } from "react";

export const BioContext = createContext();

export const BioProvider = ({ children }) => {
  return <BioContext.Provider value="Tanishq">{children}</BioContext.Provider>;
};

export const useBioContext = () => {
  const context = useContext(BioContext);
  return context;
};
