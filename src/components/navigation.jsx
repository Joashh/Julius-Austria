'use client';
import { HomeIcon, InformationCircleIcon, BoltIcon, ComputerDesktopIcon, DocumentIcon, Bars3Icon, BuildingOffice2Icon, ArrowUpCircleIcon, ArrowDownCircleIcon, TrophyIcon } from '@heroicons/react/24/solid';
import { FaAward } from 'react-icons/fa';
import React, { useState } from 'react';
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

  const handleNext = () => {
    setCurrentProject((prev) => prev + 1);
  };

  const handlePrev = () => {
    setCurrentProject((prev) => Math.max(prev - 1, 0));
  };

  const [clickstate, setclickstate] = useState(0);
  const variants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };


  return (

    <>

      <div className='h-full  flex flex-col  '>
        <AnimatePresence>
  
          <motion.nav
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-800 p-0  w-20   max-sm:bg-gray-800 max-sm:backdrop-blur-xs  max-sm:w-full max-sm:h-auto rounded-xl">
            <div className="flex flex-row  items-center justify-center h-auto max-sm:w-full ">

              <ul className="flex flex-col space-y-8 cursor-pointer py-4 max-sm:flex-row  max-sm:gap-x-10 max-sm:w-full max-sm:justify-center  max-sm:h-auto max-sm:py-3 max-sm:space-y-0">
                <li className="flex items-center">
                  <a href="#" onClick={() => { goToSlide('showcase'); toggleVisibility(false); setclickstate(0); }}>
                    <BuildingOffice2Icon className={clickstate === 0 ? "text-blue-300 h-7 w-7" : "h-7 w-7 text-white hover:text-blue-300 active:text-blue-500"} />
                  </a>
                </li>
                <li className="flex items-center">
                  <a href="#" onClick={() => { goToSlide('certifications'); toggleVisibility(false); setclickstate(1); }}>
                    <TrophyIcon className={clickstate === 1 ? "text-blue-300 h-7 w-7" : "h-7 w-7 text-white hover:text-blue-300 active:text-blue-500"} />
                  </a>
                </li>
                <li className="flex items-center">
                  <a href="#" onClick={() => { goToSlide('skills'); toggleVisibility(false); setclickstate(2); }}>
                    <BoltIcon className={clickstate === 2 ? "text-blue-300 h-7 w-7" : "h-7 w-7 text-white hover:text-blue-300 active:text-blue-500"} />
                  </a>
                </li>
                <li className="flex items-center">
                  <a href="#" onClick={() => { goToSlide('projects'); toggleVisibility(true); setclickstate(3); }}>
                    <ComputerDesktopIcon className={clickstate === 3 ? "text-blue-300 h-7 w-7" : "h-7 w-7 text-white hover:text-blue-300 active:text-blue-500"} />
                  </a>
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
              transition={{ duration: 0.3, ease: 'easeOut' }}>

              <button
                className="bg-gray-800 w-12 h-12 rounded-full shadow-lg hover:bg-gray-700 active:bg-gray-900 flex items-center justify-center"
                onClick={handlePrev}
                disabled={currentProject === 0}
              >
                <ArrowUpCircleIcon className="h-8 w-8 text-white hover:text-blue-300" />
              </button>
              <button
                className="bg-gray-800 w-12 h-12 rounded-full shadow-lg hover:bg-gray-700 active:bg-gray-900 flex items-center justify-center"
                onClick={handleNext}
                disabled={currentProject === 6}
              >
                <ArrowDownCircleIcon className="h-8 w-8 text-white hover:text-blue-300" />
              </button>

            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
