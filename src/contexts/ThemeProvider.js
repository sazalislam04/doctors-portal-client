import React, { createContext, useState } from "react";

export const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
  const [themes, setThemes] = useState(false);

  const toggleFunction = () => {
    setThemes(!themes);
  };

  return (
    <ThemeContext.Provider value={{ themes, toggleFunction }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
