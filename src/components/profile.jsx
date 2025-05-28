'use client';
import { useState } from "react";
import { TypeAnimation } from 'react-type-animation';
import { FaGithub } from 'react-icons/fa';
import { motion, AnimatePresence } from "framer-motion";

export default function Profile() {
  const [isExpanded, setIsExpanded] = useState(false);

  
  return (
    <>
      <div
        
        className={`transition-all duration-500 ease-in-out 
          ${isExpanded ? "fixed inset-0 z-50 flex items-center justify-center bg-gray-900" : "min-h-32 max-h-32  bg-gray-800 rounded-md p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 flex flex-col gap-2 overflow-hidden max-sm:max-h-200 max-sm:p-5  max-sm:justify-center "}
        `}
      >

        {!isExpanded ? (
          <div className="max-sm:flex-col flex  ">
            <img
              className="mx-auto block h-24 w-24 rounded-full sm:mx-0 sm:shrink-0 cursor-pointer max-sm:items-center"
              src="../images/testprof.jpeg"
              alt=""
              onClick={() => setIsExpanded(!isExpanded)}
            />
            <div className="space-y-2 text-center pl-5 sm:text-left cursor-pointer max-sm:text-left  max-sm:space-y-0 max-sm:justify-center max-sm:flex max-sm:pl-0" onClick={() => setIsExpanded(!isExpanded)}>
              <div className="space-y-0.5 max-sm:space-y-0  max-sm:flex max-sm:flex-col max-sm:items-center max-sm:pt-3 ">
                <p className="text-lg font-semibold text-white max-sm:text-2xl ">Julius Asher P. Austria</p>
                <p className="font-medium text-gray-500 text-md max-sm:text-lg ">Computer Science Degree</p>
                <a
                href="https://github.com/Joashh"
                className="border-purple-200 text-blue-400 hover:border-transparent max-md:text-xs hover:text-white max-sm:hidden "
              >
                Github
              </a>
              </div>
              
            </div>
          </div>
        ) : (
          <>
           <div className="fixed z-50 flex flex-col items-center justify-center bg-gray-950 rounded-lg p-10 shadow-lg max-sm:w-full md:flex-row">
           
            <img
              className="w-60 h-60  rounded-full shadow-lg max-md:w-30 max-md:h-30"
              src="../images/testprof.jpeg"
              alt=""
            />
           
            <div className=" flex flex-col justify-center md:justify-left md:pl-7">
               <h1 className="text-white text-xl font-bold md:text-3xl pt-4 md:pt-0 text-center md:text-left">I'm Julius</h1>
               <p className="text-lg font-light min-w-100 max-sm:text-md md:text-2xl text-center md:text-left">Software and AI Developer</p>
            <TypeAnimation
                    className="pt-3 min-h-20  md:text-justify text-sm font-light min-w-100 max-w-30 max-md:text-xs text-center px-10 md:px-0"
                    sequence={[
                        "Welcome to my portfolio — a space where I showcase the projects, skills, and experiences that reflect my journey in tech. Feel free to explore and connect with me. Let’s build something amazing together! 🚀",
                        1000, // optional pause at end
                    ]}
                    speed={70}
                    wrapper="h1"
                
                    repeat={0}
                />
            

            <div className=" pt-5 gap-3 flex max-sm:justify-center ">
            <button className="bg-gray-700 rounded-md shadow-lg h-10 px-5 font-medium hover:bg-gray-600 active:bg-gray-800 max-md:text-xs" onClick={() => setIsExpanded(!isExpanded)}>View Portfolio</button>
            <a href="/Julius_Resume.pdf" download="Resume_Julius.pdf">
            <button className="bg-gray-700 rounded-md shadow-lg h-10 px-5 font-medium hover:bg-gray-600 active:bg-gray-800 max-md:text-xs">Download Resume</button>
            </a>
            </div>
            </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
