'use client';
import { useState, useContext } from "react";
import { themecontext } from "@/app/themecontext";
import { TypeAnimation } from 'react-type-animation';
import { FaGithub } from 'react-icons/fa';
import { motion, AnimatePresence } from "framer-motion";
import BlurText from '@/components/BlurText.jsx';
import Aurora from '@/components/Aurora.jsx';
import { AiOutlineShareAlt } from "react-icons/ai"
import ThemeChanger from '@/components/themechanger.jsx';
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
export default function Profile() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { theme } = useContext(themecontext);

  return (
    <div>
      <div

        className={`transition-all duration-500 ease-in-out 
          ${isExpanded ? "fixed inset-0 z-50 flex items-center justify-center bg-gray-100 dark:bg-gray-900" : "  bg-gray-100  dark:bg-gray-800 rounded-md sm:flex-row sm:items-center flex flex-col gap-2  "}
        `}
        data-theme={theme || "light"}>

        {!isExpanded ? (
          <div className="flex flex-col sm:flex-row items-center gap-6 p-6 md:px-20 rounded-2xl bg-white dark:bg-gray-800 shadow-lg">
            {/* Profile Image */}
            <img
              className="h-40 w-40 rounded-full object-cover cursor-pointer ring-4 ring-blue-500/20 hover:scale-105 transition"
              src="../images/testprof.jpeg"
              alt="Profile"
              onClick={() => setIsExpanded(!isExpanded)}
            />

            {/* Content */}
            <div
              className="flex-1 space-y-3 text-center sm:text-left cursor-pointer"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    Julius Asher P. Austria
                  </p>
                  <TypeAnimation
                className='text-sm text-gray-600 dark:text-gray-400 md:text-lg lg:text-xl text-center xl:text-justify max-sm:font-light  sm:font-bold   md:font-medium'
                    sequence={[ "Software Developer | Researcher | Computer Science",
                              1000, // optional pause at end
                    ]}
                    speed={50}
                    wrapper="h1"
                
                    repeat={0}
                />
                </div>

                {/* Socials */}
                <div className="flex gap-4 justify-center sm:justify-end">
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="h-6 w-6 text-blue-600 hover:scale-110 transition" />
                  </a>
                  <a href="https://www.linkedin.com/in/julius-asher-p-austria-889473333/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn className="h-6 w-6 text-blue-400 hover:scale-110 transition" />
                  </a>
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="h-6 w-6 text-pink-500 hover:scale-110 transition" />
                  </a>
                </div>
              </div>

              <div className="h-px w-full bg-gray-200 dark:bg-gray-700" />

              {/* Bio */}
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed text-xs sm:text-base md:text-lg text-center sm:text-justify">
                Hi! I'm a developer and programmer with a passion for Intelligent Systems.
                I've had the privilege of working on impactful projects and would love to
                share my achievements so far.
              </p>

             
            </div>
          </div>

        ) : (
          <>
            <div
              className="relative w-screen h-screen overflow-hidden"
              data-theme={theme || "light"}
            >
              {/* Aurora background */}
              <div className="absolute top-0 left-0 w-screen h-screen z-0 hidden md:block">
                <Aurora
                  colorStops={["#00ffd0", "#009dff", "#FF3232"]}
                  blend={0.5}
                  amplitude={1.0}
                  speed={0.5}
                />
              </div>

              {/* Foreground content */}
              <div className="relative z-10 flex items-center justify-center rounded-lg p-10 shadow-md  w-screen min-h-screen max-sm:flex-col ">

                <div className='flex flex-col items-center sm:flex-row sm:bg-white/40 sm:dark:bg-blue-950/30 sm:shadow-md backdrop-blur-xs p-7 rounded-xl'>
                  <div className="absolute top-4 right-4 z-20 hidden md:block">
                    <ThemeChanger />
                  </div>
                  <img
                    className="h-60 w-60 rounded-full shadow-[0_0_10px_#00f0ff] hover:shadow-[0_0_20px_#00f0ff] transition-shadow duration-300 max-sm:w-30 max-sm:h-auto"
                    src="/images/testprof.jpeg"
                    alt=""
                  />
                  <div className="flex flex-col pl-7 max-sm:pl-0  max-sm:pt-5 max-sm:items-center justify-center max-sm:w-full max-sm:text-center">
                    <h1 className="text-blue-900  font-sans dark:text-blue-300 md:text-3xl font-bold text-2xl">
                      I'm Julius
                    </h1>
                    <BlurText
                      text="Software and AI Developer"
                      delay={150}
                      animateBy="words"
                      direction="top"
                      className="text-2xl text-center font-light min-w-100 max-sm:text-lg text-black dark:text-white"
                    />
                    <TypeAnimation
                      className="pt-3 font-sans min-h-20 text-justify text-sm  min-w-100 max-w-30 max-sm:px-10 max-sm:text-center max-sm:text-xs"
                      sequence={[
                        "Welcome to my portfolio — a space where I showcase the projects, skills, and experiences that reflect my journey in tech. Feel free to explore and connect with me. Let’s build something amazing together! ",
                        1000,
                      ]}
                      speed={70}
                      wrapper="h1"
                      repeat={0}
                    />
                    <div className="pt-5 gap-3 flex max-sm:flex-row max-sm:items-center">
                      <button
                        className="items-center flex gap-2 text-white font-sans bg-blue-900 rounded-md shadow-lg h-10 px-5 font-medium max-sm:text-xs hover:bg-gray-600 active:bg-gray-800 cursor-pointer"
                        onClick={() => setIsExpanded(!isExpanded)}
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
                          ></path>
                        </svg>
                        View Portfolio
                      </button>
                      <a href="/Julius_Resume.pdf" download="Resume_Julius.pdf">
                        <button className="flex items-center gap-2 text-white font-sans bg-gray-700 rounded-md shadow-lg h-10 px-5 font-medium max-sm:px-3 hover:bg-gray-600 active:bg-gray-800">
                          {/* Icon visible on all screens */}
                          <ArrowDownTrayIcon className="h-5 w-5 text-white" />

                          {/* Text hidden on small screens */}
                          <span className="hidden sm:inline">Download Resume</span>
                        </button>
                      </a>

                      <button
                        className="cursor-pointer flex items-center justify-center text-white bg-gray-700 rounded-md shadow-lg h-10 px-4 font-medium max-sm:text-xs hover:bg-gray-600 active:bg-gray-800"
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

                      <div className="flex md:hidden cursor-pointer items-center justify-center text-white bg-gray-700 rounded-md shadow-lg h-10 px-4 font-medium max-sm:text-xs hover:bg-gray-600 active:bg-gray-800">
                        <ThemeChanger />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
