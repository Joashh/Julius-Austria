'use client';
import { themecontext } from "@/app/themecontext";
import { CgDarkMode } from "react-icons/cg";
import React, { useState, useContext, useEffect } from 'react';
import { motion } from "framer-motion";
export default function ThemeChanger() {


    const { theme, setTheme } = useContext(themecontext);
    function toggleTheme() {
        if (theme === "light") {
            setTheme("dark");
            localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
        }
        else {
            setTheme("light")
            localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark");
        }
    }

    return (
        <li
  className="flex items-center cursor-pointer"
  onClick={toggleTheme}
>
  <motion.div
    whileTap={{ rotate: 360, scale: 0.8 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    {theme === "light" ? (
      <CgDarkMode className="h-6 w-6 md:h-7 md:w-7 text-white md:text-gray-600 dark:text-white hover:text-blue-900 active:text-blue-900 dark:hover:text-blue-300 dark:active:text-blue-500" />
    ) : (
      <CgDarkMode className="h-6 w-6 md:h-7 md:w-7 dark:text-amber-400 hover:text-blue-900 active:text-blue-900 dark:hover:text-blue-300 dark:active:text-blue-500" />
    )}
  </motion.div>
</li>
    );
}