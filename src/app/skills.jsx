import Lottie from "lottie-react";

import aiAnimation from "../assets/ai.json";
import languagesAnimation from "../assets/languages.json";
import toolsAnimation from "../assets/tools.json";
import awardAnimation from "../assets/award.json";
import participationAnimation from "../assets/participation.json";
import awards2Animation from "../assets/award5.json";

let color = "bg-white/50";

const skillCards = [
  {
    title: "PROGRAMMING LANGUAGES & STRUCTURES",
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
    <div className="flex justify-center   md:bg-white/50 backdrop-blur-xs dark:md:bg-gray-800 flex-col max-w-full h-full w-full ">
     
      <h1 className=" md:hidden  w-full font-bold p-0 sm:p-5  md:text-2xl max-sm:text-sm   text-black dark:text-blue-300 max-sm:pl-0 md:pl-5  text-center ">
        SKILLS AND EXPERIENCE
      </h1>

      <div className="hidden lg:flex justify-center w-full ">
        <h1 className="bg-transparent md:bg-white dark:md:bg-gray-900 text-center rounded-3xl font-bold w-100 p-4 shadow-2xl z-5">SKILLS AND EXPERIENCE</h1>
      </div>

      <div className="flex  w-full p-0 md:p-7   ">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4 justify-center  ">
          {skillCards.map((card, index) => (
            <div
              key={index}
              className={` rounded-md shadow-lg transition-colors duration-300 hover:bg-transparent hover:border-2 ${card.bgColor}  dark:bg-gray-700 backdrop-blur-xs flex w-full  md:h-70 xs:max-w-full`}
            >
              <div className="flex  w-full">
                <div className="w-1/2 p-4 max-sm:w-50 xs:w-40 md:w-70 max-xs:w-40 ">
                  <Lottie animationData={card.animation} loop autoplay />
                </div>
                <div className="w-1/2 p-4 flex flex-col">
                  <h1 className="font-bold text-black dark:text-white text-lg max-md:text-md max-sm:text-md mb-2 xs:text-xs lg:text-lg max-xs:text-xs">
                    {card.title}
                  </h1>
                  <div className="text-sm text-black dark:text-white text-justify md:text-md max-sm:text-md xs:text-xs lg:text-sm max-xs:text-xs">
                    {card.content}
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}