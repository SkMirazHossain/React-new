import { createContext, use, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const handleToggleTheme = () => {
    return setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useCustomHook = () => {
  
    const themeMode = use(ThemeContext);
    if (themeMode === undefined) {
    throw new Error ("Component must be wrapped with BioProvider");
    }
    return themeMode;
  }

// creating a component
export const DarkLight = () => {
  const { theme, handleToggleTheme } = useCustomHook();

  return (
    <div
      className={` p-4 h-lvh flex flex-col justify-center items-center  ${
        theme === "light" ? "bg-white" : "bg-gray-800"
      } `}
    >
      <h1
        className={`my-2 text-4xl  ${
          theme === "light" ? "text-gray-800" : "text-white"
        }`}
      >
        {theme === "light" ? "Hey, You Are in Light Mode ☀️" :  "Hey, You Are in Dark Mode 🌙"}
      </h1>
      <p
        className={`my-4 text-xl  ${
          theme === "light" ? "text-gray-800" : "text-white"
        }`}
      >
        Hello!! It's React v19 👍
      </p>
      <button
        onClick={handleToggleTheme}
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-md mt-4 p-4"
      >
        {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
};