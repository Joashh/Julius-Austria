'use client';
import { HomeIcon, InformationCircleIcon, BoltIcon, ComputerDesktopIcon, DocumentIcon, Bars3Icon, BuildingOffice2Icon, ArrowUpCircleIcon, ArrowDownCircleIcon, TrophyIcon } from '@heroicons/react/24/solid';
import { FaAward, FaLightbulb, FaSun, FaMoon } from 'react-icons/fa';
import React, { useState, useContext, useEffect } from 'react';
import { themecontext } from "@/app/themecontext";
import { motion, AnimatePresence } from 'framer-motion';


export default function Navigation({ goToSlide, currentProject, setCurrentProject, scrollDirection }) {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = (value) => {
    setIsVisible(value);
  }

  const setstate = (set) => {
    setStateNav(set);
  }

  const [statenav, setStateNav] = useState(false);
  const { theme, setTheme } = useContext(themecontext);
  const handleNext = () => {
  setCurrentProject((prev) => Math.min(prev + 1, 8)); 
};

const handlePrev = () => {
  setCurrentProject((prev) => Math.max(prev - 1, 0)); 
};


  const [clickstate, setclickstate] = useState(0);
 

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

    useEffect(() => {
  const handleKeyDown = (event) => {
    if (event.key === 'ArrowDown') {
      handleNext();
    }
    if (event.key === 'ArrowUp') {
      handlePrev();
    }
  };

  window.addEventListener('keydown', handleKeyDown);

  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  };
}, []);


  return (

    <>

      <div className='h-full  flex flex-col  ' data-theme={theme || "light"}>
        <AnimatePresence>
  
          <motion.nav
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="transition-all duration-500 ease-in-out bg-white/50 shadow-2xl dark:bg-gray-800 p-0  w-20   max-sm:backdrop-blur-xs  max-sm:w-full max-sm:h-auto rounded-xl">
            <div className="flex flex-row  items-center justify-center h-auto max-sm:w-full ">

              <ul className="flex flex-col space-y-8 cursor-pointer py-4 max-sm:flex-row  max-sm:gap-x-10 max-sm:w-full max-sm:justify-center  max-sm:h-auto max-sm:py-3 max-sm:space-y-0">
                <li className="flex items-center">
                    <BuildingOffice2Icon className={clickstate === 0 ? "text-blue-900 dark:text-blue-300 h-7 w-7" : "h-7 w-7 text-gray-600 dark:text-white hover:text-blue-900 active:text-blue-900 dark:hover:text-blue-300 dark:active:text-blue-500"} onClick={() => { goToSlide('showcase'); toggleVisibility(false); setclickstate(0); }} />
                </li>
                <li className="flex items-center">
                  
                    <TrophyIcon className={clickstate === 1 ? "text-blue-900 dark:text-blue-300 h-7 w-7" : "h-7 w-7 text-gray-600 dark:text-white hover:text-blue-900 active:text-blue-900 dark:hover:text-blue-300 dark:active:text-blue-500"} onClick={() => { goToSlide('certifications'); toggleVisibility(false); setclickstate(1); }}/>
                 
                </li>
                <li className="flex items-center">
                
                    <BoltIcon className={clickstate === 2 ? "text-blue-900 dark:text-blue-300 h-7 w-7" : "h-7 w-7 text-gray-600 dark:text-white hover:text-blue-900 active:text-blue-900 dark:hover:text-blue-300 dark:active:text-blue-500"} onClick={() => { goToSlide('skills'); toggleVisibility(false); setclickstate(2); }}/>
                  
                </li>
                <li className="flex items-center">
                  
                    <ComputerDesktopIcon className={clickstate === 3 ? "text-blue-900 dark:text-blue-300 h-7 w-7" : "h-7 w-7 text-gray-600 dark:text-white hover:text-blue-900 active:text-blue-900 dark:hover:text-blue-300 dark:active:text-blue-500"} onClick={() => { goToSlide('projects'); toggleVisibility(true); setclickstate(3); }}/>
                  
                </li>
                 <li className="flex items-center" onClick={toggleTheme}>
                 
                    {theme == "light" ? 
                  <FaMoon className="h-7 w-7 text-gray-600 dark:text-white hover:text-blue-900 active:text-blue-900 dark:hover:text-blue-300 dark:active:text-blue-500 " />  
                  :
                  <FaSun className="h-7 w-7  dark:text-amber-400 hover:text-blue-900 active:text-blue-900 dark:hover:text-blue-300 dark:active:text-blue-500 " />
                }
                    
                  
                </li>
              </ul>
            </div>
          </motion.nav>
           
        </AnimatePresence>
        
        <AnimatePresence>
          {isVisible && (
            
            <motion.div
              className="flex flex-col items-center justify-center mt-auto gap-3 pb-5  max-md:hidden  "
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              >

              <button
                className="bg-gray-300 dark:bg-gray-800 w-12 h-12 rounded-full shadow-lg hover:bg-gray-400 dark:hover:bg-gray-700 active:bg-gray-900 flex items-center justify-center"
                onClick={handlePrev}
                disabled={currentProject === 0}
              >
                <ArrowUpCircleIcon className="h-8 w-8 text-gray-500 dark:text-white hover:text-gray-700 dark:hover:text-blue-300" />
              </button>
              <button
                className="bg-gray-300  dark:bg-gray-800 w-12 h-12 rounded-full shadow-lg hover:bg-gray-400 dark:hover:bg-gray-700 active:bg-gray-900 flex items-center justify-center"
                onClick={handleNext}
                disabled={currentProject === 8}
              >
                <ArrowDownCircleIcon className="h-8 w-8 text-gray-500 dark:text-white hover:text-gray-700 dark:hover:text-blue-300" />
              </button>

            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
