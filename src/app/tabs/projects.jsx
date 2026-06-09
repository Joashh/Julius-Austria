'use client';
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDownCircleIcon, ArrowUpCircleIcon } from '@heroicons/react/24/solid';
import { useRef, useState, useEffect } from "react";
import { FaCross, FaGithub } from "react-icons/fa";
import { AiOutlineShareAlt } from "react-icons/ai";
import { MdExitToApp } from "react-icons/md";
import { X } from "lucide-react";


export default function Projects({ currentProject, setCurrentProject }) {
  const projects = [
    {
      image: "images/golakelab.png",
      title: "GoLAKELab Website",
      description:
        "Been part of the GoLakeLab project. A research project funded by DOST and was assigned to develop their website and responsible for populating the data for some lakes. Responsible for leading the website development project. Collaborating with teams. The website utilized wordpress as backend and some PHP and CSS codes for the frontend.",
      githubLink: "https://golakelab.dev.uplb.edu.ph/",
      techstack: "Wordpress | NextJS",
      Date: "February 2026"
    },
    {
      image: "images/al.png",
      title: "Al Benavente's Portfolio",
      description:
        "I developed a photography portfolio website that showcases high-quality images in a visually engaging layout. The website highlights different photo collections and provides detailed information about the photographer and services offered.",
      githubLink: "albenavente.com",
      techstack: "GoDaddy | NextJS",
      Date: "January 2026"
    },
    {
      image: "images/dysg.png",
      title: "Potential Dysgraphia Detection Tool (Prototype)",
      description:
        "I developed and trained a model that can detect potential dysgraphia using handwriting as input. The model assesses features such as stroke patterns, character recognition, and letter alignment. It was created using PyTesseract and other machine learning techniques.",
      githubLink: "https://github.com/Joashh/Dysgraphia-Detection-Prototype-Python-Pycharm-Project?tab=readme-ov-file",
      techstack: "Open CV | Pytesseract | Streamlit",
      Date: "February 2023"
    },
    {
      image: "images/pandc.png",
      title: "Wedding Website Project",
      description:
        "I developed a commissioned wedding website that showcases event photos, digital invitations, and detailed wedding information. The platform includes an RSVP system that allows guests to confirm attendance online, making event coordination more efficient.",
      githubLink: "pandc.vercel.app",
      techstack: "Vercel | NextJS | Github",
      Date: "August 2025"
    },
    {
      image: "images/cpaflight.png",
      title: "Intranet System College of Public Affairs and Development - UPLB",
      description: "I created a web-based intranet system using Filament in Laravel. The system is designed to manage the college's documents such as researchers, training organizes, awards, and other important documents.",
      githubLink: "https://github.com/Joashh/laravel-cpaf",
      techstack: "Laravel | Filament PHP | Tailwind CSS | MySQL | Node JS",
      Date: "September 2025"
    },
    {
      image: "images/robot.jpg",
      title: "Robot Line Follower Arduino",
      description: "I developed a robot that can follow a line using Arduino. The robot uses a machine learning technique that classify its movement. The project was created using Arduino IDE and C++ programming language with the help of ESP Wifi Module.",
      githubLink: "https://github.com/Joashh/-Robot-Line-Follower?tab=readme-ov-file",
      techstack: "Python | ESP8266 | Arduino UNO | C++ ",
      Date: "March 2025"
    },
    {
      image: "images/appdev.png",
      title: "Adaptive Learning Game for Kids using Android Studio",
      description: "This application is an Android educational game built with Android Studio, designed to help children develop cognitive skills through interactive quizzes that adapt in real time.  The game syncs data with a local backend using XAMPP for storage and tracking.",
      githubLink: "https://github.com/Joashh/Adaptive-Game-Mobile-Application",
      techstack: "Android Studio | JSON | XML",
      Date: "November 2024"
    },
    {
      image: "images/proj1.png",
      title: "E-Guess 8.5",
      description: "E-Guess is a desktop application built with C# and Visual Studio that uses adaptive algorithms to assess and enhance children's strength and skills. Designed for learning and play, it adjusts difficulty in real time based on user performance.",
      githubLink: "https://github.com/Joashh/quiz-game",
      techstack: "C# | Visual Studio | MySQL",
      Date: "February 2022"
    },
    {
      image: "images/aa.jpg",
      title: "Traffic Simulation in GAMMA",
      description: "This project simulates urban traffic flow in the GAMA Platform using Agent-Based Modeling, with agents like vehicles, roads, and traffic lights to study changing traffic patterns.",
      githubLink: "https://github.com/Joashh/Traffic-Simulation",
      techstack: "GAMMA | Open Street Map",
      Date: "November 2024"
    },
    {
      image: "images/chatbot.png",
      title: "NLP-Chatbot: EnrollEase LSPU",
      description: "A simple chatbot built with Streamlit and Natural Language Processing (NLP) to automate and streamline student inquiries for LSPU Enrollment.",
      githubLink: "https://github.com/Joashh/NLP-Chatbot/tree/main",
      techstack: "Python | NLP | Streamlit",
      Date: "November 2024"
    },
    {
      image: "images/chatbot2.png",
      title: "FLEXIBLE Chatbot",
      description: "This is an experimental chatbot project powered by AI, showcasing the capabilities of large language models (LLMs) through natural conversation.",
      githubLink: "https://github.com/Joashh/chatbot",
      techstack: "API ChatBot Model | Streamlit",
      Date: "September 2025"
    },
    {
      image: "images/weather.png",
      title: "BRAINY - Rain Forecast",
      description: "A simple and beautiful weather forecast application built with Next.js, React, and Tailwind CSS, powered by the OpenWeatherMap API. Search any city, country, or address to get the latest 5-day forecast and weather conditions. It is available at https://brainy-weather.vercel.app/",
      githubLink: "https://github.com/Joashh/brainy",
      techstack: "NextJS | API OpenWeather",
      Date: "September 2025"
    },
  ];

  // Track previous project index to get direction (for slide animation)
  const previousIndex = useRef(currentProject);
  const direction = currentProject > previousIndex.current ? 1 : -1;
  previousIndex.current = currentProject;

  // Track if screen is small (max-sm)
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  useEffect(() => {
    function checkScreen() {
      setIsSmallScreen(window.matchMedia("(max-width: 640px)").matches);
    }
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Variants for large screens (slide up/down)
  const slideVariants = {
    initial: (dir) => ({ y: dir * 0, opacity: 0 }),
    animate: { y: 0, opacity: 1 },
    exit: (dir) => ({ y: dir * -100, opacity: 0 }),
  };

  // Variants for small screens (fade only)
  const fadeVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  // Pick variants based on screen size
  const variants = isSmallScreen ? fadeVariants : slideVariants;

  return (
    <>


      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 ">
        {projects.map((project, index) => (
          <article
            key={index}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white dark:bg-gray-900 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* Image */}
            <div className="relative h-72 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Date */}
              <div className="absolute top-4 right-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 text-xs text-white">
                {project.Date}
              </div>

              {/* Tech Stack */}
              <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 text-xs text-white">
                  {project.techstack}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-5 p-6">
              <div>
                <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {project.title}
                </h2>

                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>
              </div>

              {/* Actions */}
              <div className="flex items-center  justify-between border-t border-gray-100 pt-4 dark:border-gray-800">
                <div className="flex gap-2">
                  {project.githubLink && (
                    <button
                      onClick={() =>
                        window.open(project.githubLink, "_blank")
                      }
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 transition hover:scale-105 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <FaGithub />
                    </button>
                  )}

                  {project.documentationLink && (
                    <button
                      onClick={() =>
                        window.open(
                          project.documentationLink,
                          "_blank"
                        )
                      }
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 transition hover:scale-105 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <FaBookOpen />
                    </button>
                  )}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="rounded-xl z-50 cursor-pointer bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:shadow-lg hover:shadow-blue-500/30"
                >
                  View Project →
                </button>
              </div>
            </div>

            {/* Hover Glow */}
            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />
            </div>
          </article>


        ))}
      </div>

      {selectedProject && (

        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 10, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-white shadow-2xl dark:bg-gray-900"
          >
            {/* MAIN LAYOUT */}
            <div className="flex max-h-[90vh] flex-col">

              {/* IMAGE HEADER (fixed height, no scroll) */}
              <div className="relative h-64 md:h-80 w-full shrink-0 overflow-hidden">
                <img
                  src={selectedProject.image ?? ""}
                  alt={selectedProject.title}
                  className="h-full w-full object-cover scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 rounded-full bg-black/40 p-2 text-white backdrop-blur hover:bg-black/60 transition"
                >
                  <X className="size-4" />
                </button>
              </div>

              {/* SCROLLABLE AREA ONLY */}
              <div className="flex-1 overflow-y-auto">

                {/* HEADER */}
                <div className="px-6 md:px-8 pt-6 pb-4 border-b border-gray-200 dark:border-gray-800">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    {selectedProject.title}
                  </h2>

                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    {selectedProject.Date}
                  </p>
                </div>

                {/* CONTENT */}
                <div className="px-6 md:px-8 py-6 space-y-8">

                  {/* About */}
                  <section>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                      About the Project
                    </h3>
                    <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                      {selectedProject.description}
                    </p>
                  </section>

                  {/* Tech Stack */}
                  <section>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                      Technology Stack
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techstack.split(",").map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-200"
                        >
                          {tech.trim()}
                        </span>
                      ))}
                    </div>
                  </section>

                  {/* Actions */}
                  <section className="flex flex-wrap gap-3 pt-2">
                    {selectedProject.githubLink && (
                      <button
                        onClick={() => window.open(selectedProject.githubLink, "_blank")}
                        className="flex items-center gap-2 rounded-xl border px-5 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                      >
                        <FaGithub />
                        Source Code
                      </button>
                    )}

                    {selectedProject.documentationLink && (
                      <button
                        onClick={() =>
                          window.open(selectedProject.documentationLink, "_blank")
                        }
                        className="flex items-center gap-2 rounded-xl border px-5 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                      >
                        <FaBookOpen />
                        Documentation
                      </button>
                    )}

                    <button
                      onClick={() =>
                        navigator.clipboard.writeText(selectedProject.link)
                      }
                      className="rounded-xl bg-black px-5 py-3 text-white dark:bg-white dark:text-black hover:opacity-90 transition"
                    >
                      Share Project
                    </button>
                  </section>

                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
