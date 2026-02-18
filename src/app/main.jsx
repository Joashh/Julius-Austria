'use client';
import Navigation from "../components/navigation";
import Showcase from "./tabs/showcase";
import Tracer from "../components/tracer";
import Home2 from "./tabs/home2";
import React, { useState, useRef, useEffect } from 'react';
import Certifications from './tabs/certifications';
import { motion } from "framer-motion";
import Skills from "./tabs/skills";
import Projects from "./tabs/projects";
import GlassSurface from "@/components/GlassSurface";


export default function Main() {
    const [currentSlide, setCurrentSlide] = useState(0); // State is here now
    const [showNavigation, setShowNavigation] = useState(true);
    const lastScrollY = useRef(0);




    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY.current) {
                // Scrolling down
                setShowNavigation(true);
            } else {
                // Scrolling up
                setShowNavigation(true);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const goToSlide = (slide) => {
        if (slide === 'showcase') setCurrentSlide(0);
        if (slide === 'certifications') setCurrentSlide(1);
        if (slide === 'skills') setCurrentSlide(2);
        if (slide === 'projects') setCurrentSlide(3);
    };



    const [currentProject, setCurrentProject] = useState(0);

    return (
        <>
            <div className="h-full flex flex-col min-h-0  ">
                <div className="w-full flex flex-col justify-center   min-h-0 h-full  ">
                    <motion.div
                        className=" max-sm:rounded-2xl "
                        initial={{ opacity: 1 }}
                        animate={{ opacity: showNavigation ? 1 : 0, y: showNavigation ? 0 : 100 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Navigation
                            goToSlide={goToSlide}
                            currentProject={currentProject}
                            setCurrentProject={setCurrentProject}
                        />
                    </motion.div>





                    <div className="rounded-md scrollbar-custom flex-grow overflow-y-auto  min-h-0">
                        {currentSlide === 0 &&
                            <motion.div

                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}>
                                <Showcase />
                            </motion.div>
                        }
                        {currentSlide === 1 &&

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                className="h-full w-full"
                            >
                                <Certifications />
                            </motion.div>
                        }
                        {currentSlide === 2 &&
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                className="h-full w-full"
                            >

                                <Skills />

                            </motion.div>
                        }
                        {currentSlide === 3 &&
                            <motion.div
                                className=""
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Projects currentProject={currentProject} setCurrentProject={setCurrentProject} />
                            </motion.div>
                        }
                    </div>

                    <div className="md:hidden fixed bottom-4 right-4 z-50">



                    </div>

                    <div className="py-2 ">
                        <Tracer activeSlide={currentSlide} />
                    </div>
                </div>
            </div>


        </>
    );
}


