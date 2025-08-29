'use client';
import Header from '@/components/header.jsx';
import Main from '../main.jsx';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { useState, useContext } from "react";
import Footer from '@/components/footer.jsx';
import { themecontext } from '../themecontext.jsx';
import BlurText from '@/components/BlurText.jsx';
import Aurora from '@/components/Aurora.jsx';

export default function Home2() {
    const { theme } = useContext(themecontext);
    const [isExpanded, setIsExpanded] = useState(false);
    
    return (
        <>
            {!isExpanded ? (
                <div
                    className="relative w-screen h-screen overflow-hidden"
                    data-theme={theme || "light"}
                >
                    {/* Aurora background */}
                    <div className="absolute inset-0 z-0 hidden md:block">
                        <Aurora
                            colorStops={["#00ffd0", "#009dff", "#FF3232"]}
                            blend={0.5}
                            amplitude={1.0}
                            speed={0.5}
                        />
                    </div>

                    {/* Foreground content */}
                    <div className="relative z-10 flex items-center justify-center rounded-lg p-10 shadow-lg w-screen min-h-screen max-sm:flex-col ">
                        
                        <div className='flex flex-col items-center sm:flex-row sm:bg-white/40 sm:dark:bg-blue-950/30 sm:shadow-md backdrop-blur-xs p-7 rounded-xl'>
                             <img
                            className="h-60 w-60 rounded-full shadow-[0_0_10px_#00f0ff] hover:shadow-[0_0_20px_#00f0ff] transition-shadow duration-300 max-sm:w-30 max-sm:h-auto"
                            src="/images/testprof.jpeg"
                            alt=""
                        />
                        <div className="flex flex-col pl-7 max-sm:pl-0  max-sm:pt-5 max-sm:items-center justify-center max-sm:w-full max-sm:text-center">
                            <h1 className="text-blue-700  font-sans dark:text-blue-300 md:text-3xl font-bold text-2xl">
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
                                    className="text-white font-sans bg-gray-700 rounded-md shadow-lg h-10 px-5 font-medium max-sm:text-xs hover:bg-gray-600 active:bg-gray-800"
                                    onClick={() => setIsExpanded(!isExpanded)}
                                >
                                    View Portfolio
                                </button>
                                <a href="/Julius_Resume.pdf" download="Resume_Julius.pdf">
                                    <button className="text-white font-sans bg-gray-700 rounded-md shadow-lg h-10 px-5 font-medium max-sm:text-xs hover:bg-gray-600 active:bg-gray-800">
                                        Download Resume
                                    </button>
                                </a>
                            </div>
                        </div>
                        </div>
                       
                    </div>
                </div>
            ) : (
                <div
                    className="flex flex-col h-screen max-sm:h-auto transition-all duration-500 ease-in-out bg-white dark:bg-gray-900"
                    data-theme={theme || "light"}
                    style={{
                        backgroundImage: theme === "light" ? 'url("images/bggg.jpg")' : "none",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                    >
                        <Header />
                    </motion.div>

                    <div className="flex flex-1 min-h-0 h-full">
                        <motion.main
                            className="flex-1 overflow-y-auto min-h-0 h-full"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Main />
                        </motion.main>
                    </div>
                    <Footer />
                </div>
            )}
        </>
    );
}
