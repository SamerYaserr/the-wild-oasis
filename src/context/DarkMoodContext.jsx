import { createContext, useContext } from "react";
import { useEffect } from "react";

import { useLocalStorageState } from "../hooks/useLocalStorageState";

const DarkModeContext = createContext();

export default function DarkMoodProvider({ children }) {
  const [isDark, setIsDark] = useLocalStorageState(false);

  const toggleDark = () => {
    setIsDark((isDark) => !isDark);
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  }, [isDark]);

  return (
    <DarkModeContext.Provider value={{ isDark, toggleDark }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export const useDark = () => {
  const context = useContext(DarkModeContext);
  if (!context) throw new Error("the context is not available here");
  return context;
};
