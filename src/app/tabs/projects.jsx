'use client';
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDownCircleIcon, ArrowUpCircleIcon } from '@heroicons/react/24/solid';
import { useRef, useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { AiOutlineShareAlt } from "react-icons/ai";


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
    <div className="w-full  flex flex-col gap-6">
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
        >
          {/* Left: Project image */}
          <div className="md:w-1/3 w-full h-48 md:h-auto flex-shrink-0">

            <img
              src={project.image}
              alt={`project-${index}`}
              className="w-full h-full object-cover rounded-t-xl md:rounded-t-none md:rounded-l-xl"
            />
          </div>

          {/* Right: Project content */}
          <div className="md:w-2/3 w-full p-6 flex flex-col gap-2 justify-between flex-1">
            {/* Title with underline */}
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white border-b-1 border-gray-700 pb-1">
                {project.title}
              </h2>

              {/* Year & Month */}
              <span className="flex gap-3 pt-4 items-center text-gray-500 dark:text-gray-400 text-sm ">
                <span>{project.Date} - </span>
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white text-xs font-semibold py-1 px-2 rounded-full">
                    {project.techstack}
                  </span>
                </div>
              </span>



              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base line-clamp-5 mt-2">
                {project.description}
              </p>
            </div>


            <div>
              <div className="flex flex-wrap gap-2 mt-3  ">
                {project.documentationLink && (
                  <button
                    className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-blue-500 dark:bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded-lg shadow hover:bg-blue-600 dark:hover:bg-blue-700 transition"
                    onClick={() => window.open(project.documentationLink, "_blank")}
                  >
                    <FaBookOpen className="w-4 h-4" />
                    Docs
                  </button>
                )}

                {project.githubLink && (
                  <button
                    className="flex-1 md:flex-none flex cursor-pointer items-center justify-center gap-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white text-sm font-semibold py-2 px-4 rounded-lg shadow hover:bg-gray-300 dark:hover:bg-gray-700 transition"
                    onClick={() => window.open(project.githubLink, "_blank")}
                  >
                    <FaGithub className="w-4 h-4" />
                    GitHub
                  </button>
                )}

                <button
                  className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-gray-800 dark:bg-blue-900 text-white text-sm font-semibold py-2 px-4 rounded-lg shadow hover:bg-gray-700 dark:hover:bg-blue-800 cursor-pointer transition"
                  onClick={() => {
                    navigator.clipboard.writeText(project.link || window.location.href);
                    alert("Project link copied!");
                  }}
                >
                  <AiOutlineShareAlt className="w-4 h-4" />
                  Share
                </button>
              </div>
            </div>

          </div>
        </div>
      ))}
    </div>


  );
}
