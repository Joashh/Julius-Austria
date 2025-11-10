import Lottie from "lottie-react";

import aiAnimation from "@/assets/ai.json";
import languagesAnimation from "@/assets/languages.json";
import toolsAnimation from "@/assets/tools.json";
import awardAnimation from "@/assets/award.json";
import participationAnimation from "@/assets/participation.json";
import awards2Animation from "@/assets/award5.json";

let color = "bg-white/50";

const skillCards = [
  {
    title: "PROGRAMMING LANGUAGES USED",
    animation: languagesAnimation,
    bgColor: color,
    content: (
      <>
        <strong>Advance:</strong> Python, Java, C#, SQL, Arduino and Simulator Languages, HTML & CSS<br />
        <strong>Basic:</strong> Prolog, PHP, ANTLR, JavaScript
      </>
    ),
  },
  {
    title: "TOOLS AND PLATFORMS USED",
    animation: toolsAnimation,
    bgColor: color,
    content:
      "Jupyter Notebook, Google Colab, Pycharm, Android Studio, VS Code and Studio, Netlogo, GAMMA, Arduino IDE, ANTLR, IntelliJ",
  },
  {
    title: "MACHINE/DEEP LEARNING MODEL USED",
    animation: aiAnimation,
    bgColor: color,
    content: (
      <>
        <strong>Machine Learning:</strong> XGBoost, RandomForest, CatBoost, SVM/R, Linear Regression, etc.<br />
        <strong>Deep Learning:</strong> Neural Network (from scratch), CNN, Teachable Machine
      </>
    ),
  },
  {
    title: "PARTICIPATIONS",
    animation: participationAnimation,
    bgColor: color,
    content: "Local Codewars, iSite IT Quizbee, Research Congress, TOPCIT 2024, TOPCIT 2025",
  },
  {
    title: "AWARDS & RECOGNITIONS",
    animation: awards2Animation,
    bgColor: color,
    content: (
      <>
        Best Presenter in Research Congress 2025<br />
        Dean's Lister 2021-2025<br />
        Completion of Various AI Seminars
      </>
    ),
  },
  {
    title: "SKILLS",
    animation: awardAnimation,
    bgColor: color,
    content: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
        <span>
          Model (AI) and Software Development<br />
          Front-end and Back-end Experience<br />
          React JS, Laravel, .NET Framework
        </span>
        <span>
          Next JS, Tailwind, Filament, MySQL<br />
          Basic Networking Systems<br />
          Arduino Development & Simulation Modeling
        </span>
      </div>
    ),
  },
];

export default function Skills() {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className='shadow-md rounded-md bg-white dark:bg-gray-800 flex flex-col justify-center p-4 w-full gap-2'>
                <h1 className="text-center text-xl md:text-2xl font-bold  text-gray-800 dark:text-blue-300 font-sans">
                    Skills and Experience
                </h1>

                <p className="text-gray-600 dark:text-gray-300 text-center text-sm md:text-base">
                    An overview of my professional skills, technical expertise, and practical experience gained through projects, internships, and real-world applications.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6   overflow-auto h-full pb-2">
      
      {skillCards.map((items, index) =>
      (
        <div key={index} className="bg-white dark:bg-cyan-900 rounded-lg shadow-md border-2 border-transparent hover:bg-transparent hover:border-1 hover:border-gray-400 transition-all duration-200 ease-in-out p-4 ">


          <div className="flex h-full">

            <div className=" flex flex-col justify-center h-full ">
              <Lottie animationData={items.animation} loop autoplay className="h-20 w-20 sm:h-30 sm:w-30 md:w-40 md:h-40 lg:w-50 lg:h-50" />
            </div>

            <div className="text-justify text-xs pl-3 flex flex-col justify-center">
              <h1 className="text-left font-bold text-sm sm:text-md lg:text-lg">  {items.title} </h1>
              <div className="sm:text-sm lg:text-md">
                {items.content}
              </div>
            </div>

          </div>

        </div>
      ))}
    </div>
    </div>
    
  );
}