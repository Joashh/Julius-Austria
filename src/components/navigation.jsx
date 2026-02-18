'use client';
import { HomeIcon, InformationCircleIcon, BoltIcon, ComputerDesktopIcon, DocumentIcon, Bars3Icon, BuildingOffice2Icon, ArrowUpCircleIcon, ArrowDownCircleIcon, TrophyIcon } from '@heroicons/react/24/solid';
import { CgDarkMode } from "react-icons/cg";
import React, { useState, useContext, useEffect } from 'react';
import { themecontext } from "@/app/themecontext";
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { AiOutlineShareAlt } from "react-icons/ai"
import { FaGithub } from "react-icons/fa";

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
      if (['ArrowDown', 'ArrowUp'].includes(event.key)) {
        event.preventDefault();
      }
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

      <div className='h-full flex py-4 gap-4 ' data-theme={theme || "light"}>
        <AnimatePresence>

          <motion.nav
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex w-full  md:w-2/3 transition-all duration-500 ease-in-out   bg-white shadow-md dark:bg-gray-800 p-5 max-sm:backdrop-blur-xs   rounded-xl">
            <div className="flex  items-center  h-auto w-full ">

              <ul className="flex gap-auto px-6 md:gap-4 xl:gap-10 justify-between w-full items-center md:justify-center  ease-in-out duration-100  ">
                <li className="flex flex-col gap-1  items-center cursor-pointer">
                  <BuildingOffice2Icon className={clickstate === 0 ? "text-blue-900 dark:text-blue-300 h-7 w-7" : "h-7 w-7 text-gray-600 dark:text-white hover:text-blue-900 active:text-blue-900 dark:hover:text-blue-300 dark:active:text-blue-500"} onClick={() => { goToSlide('showcase'); toggleVisibility(false); setclickstate(0); }} />
                  <h1 className="
  hidden md:block 
  text-sm font-semibold text-gray-400 text-center
  whitespace-nowrap overflow-hidden text-ellipsis
  w-full min-w-0
">
                    Academic Background
                  </h1>
                </li>
                <li className="flex flex-col gap-1  items-center cursor-pointer">

                  <TrophyIcon className={clickstate === 1 ? "text-blue-900 dark:text-blue-300 h-7 w-7" : "h-7 w-7 text-gray-600 dark:text-white hover:text-blue-900 active:text-blue-900 dark:hover:text-blue-300 dark:active:text-blue-500"} onClick={() => { goToSlide('certifications'); toggleVisibility(false); setclickstate(1); }} />
                  <h1 className='hidden md:block text-sm font-semibold text-gray-400 text-center truncate'>Achievements</h1>
                </li>
                <li className="flex flex-col gap-1  items-center cursor-pointer">

                  <BoltIcon className={clickstate === 2 ? "text-blue-900 dark:text-blue-300 h-7 w-7" : "h-7 w-7 text-gray-600 dark:text-white hover:text-blue-900 active:text-blue-900 dark:hover:text-blue-300 dark:active:text-blue-500"} onClick={() => { goToSlide('skills'); toggleVisibility(false); setclickstate(2); }} />
                  <h1 className='hidden md:block text-sm font-semibold text-gray-400 text-center truncate'>Skills & Experience</h1>
                </li>
                <li className="flex flex-col gap-1 items-center cursor-pointer">

                  <ComputerDesktopIcon className={clickstate === 3 ? "text-blue-900 dark:text-blue-300 h-7 w-7" : "h-7 w-7 text-gray-600 dark:text-white hover:text-blue-900 active:text-blue-900 dark:hover:text-blue-300 dark:active:text-blue-500"} onClick={() => { goToSlide('projects'); toggleVisibility(true); setclickstate(3); }} />
                  <h1 className='hidden md:block text-sm font-semibold text-gray-400 text-center truncate'>Projects & Works</h1>
                </li>
                <li className="flex items-center gap-1  flex-col cursor-pointer" onClick={toggleTheme}>

                  <motion.div
                    whileTap={{ rotate: 360, scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {theme === "light" ? (
                      <CgDarkMode className="h-7 w-7 text-gray-600 dark:text-white hover:text-blue-900 active:text-blue-900 dark:hover:text-blue-300 dark:active:text-blue-500" />
                    ) : (
                      <CgDarkMode className="h-7 w-7 dark:text-amber-400 hover:text-blue-900 active:text-blue-900 dark:hover:text-blue-300 dark:active:text-blue-500" />
                    )}
                  </motion.div>
                  <h1 className='hidden md:block text-sm font-semibold text-gray-400 text-center truncate'>Toggle Theme</h1>

                </li>
              </ul>
            </div>
          </motion.nav>

        </AnimatePresence>

        <AnimatePresence>
          {isVisible && (

            <motion.div
              className="hidden flex-col items-center justify-center mt-auto gap-3 pb-5   max-md:hidden  "
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

        <motion.nav
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="hidden  transition-all duration-500 ease-in-out flex-1 sm:flex  gap-4 justify-center items-center bg-white shadow-md dark:bg-gray-800 p-5 max-sm:backdrop-blur-xs   rounded-xl">



          <a
            href="https://github.com/Joashh"
            className="cursor-pointer gap-2 text-sm flex items-center justify-center text-white bg-gray-700 rounded-md  h-10 px-4 font-medium max-sm:text-xs hover:bg-gray-600 active:bg-gray-800"
          >
            <FaGithub />
            <span className=' hidden lg:block
      text-xs xl:text-sm 
      truncate max-w-full'>Visit GitHub</span>

          </a>

          <a href="/Julius_Resume.pdf" download="Resume_Julius.pdf">
            <button className="
    flex items-center gap-2 cursor-pointer font-sans font-medium
    bg-gray-700 text-white rounded-md h-10 px-4 max-sm:px-3
    hover:bg-gray-600 active:bg-gray-800
    
  ">
              <ArrowDownTrayIcon className="h-5 w-5 text-white shrink-0" />

              <span className="
      hidden lg:block
      text-xs xl:text-sm 
    ">
                Download Resume
              </span>
            </button>
          </a>


          <button
            className="cursor-pointer flex items-center justify-center text-white bg-gray-700 rounded-md  h-10 px-4 font-medium max-sm:text-xs hover:bg-gray-600 active:bg-gray-800"
            title="Copy Portfolio Link"
            onClick={() => {
              const link = "https://juliusasheraustria.vercel.app/";
              if (navigator.clipboard) {
                navigator.clipboard.writeText(link);
                alert("Portfolio link copied!");
              } else {
                prompt("Copy this link:", link);
              }
            }}
          >
            <AiOutlineShareAlt className="w-5 h-5" />
          </button>
        </motion.nav>
      </div>
    </>
  );
}
