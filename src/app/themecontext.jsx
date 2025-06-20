"use client";
import { createContext, useEffect, useState, ReactNode } from "react";

// 1. Define a proper type for the context


// 2. Create context with default value matching the type
export const themecontext = createContext({
  theme: "light",
  setTheme: () => {},
});

// 3. Create the ThemeProvider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // 4. Access localStorage only on client (after mount)
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) setTheme(storedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <themecontext.Provider value={{ theme, setTheme }}>
      {children}
    </themecontext.Provider>
  );
};
