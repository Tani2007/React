import { use, useContext } from "react";
import { createContext, useState } from "react";

export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  function handleDark() {
    return setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  }
  return (
    <ThemeContext.Provider value={{ theme, handleDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function DarkLight() {
  const { theme, handleDark } = useContext(ThemeContext);
  return (
    <div
      className={` h-lvh flex flex-col justify-center items-center ${
        theme === "dark" ? "bg-gray-800" : "bg-white"
      }`}
    >
      <h1>Dark Light Mode Website</h1>

      <button
        onClick={handleDark}
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-md mt-4 p-4"
      >
        {theme === "dark" ? "Switch to Dark" : "Switch to Light"}
      </button>
    </div>
  );
}
