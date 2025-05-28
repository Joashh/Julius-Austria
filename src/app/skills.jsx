import Lottie from "lottie-react";

import aiAnimation from "../assets/ai.json";
import languagesAnimation from "../assets/languages.json";
import toolsAnimation from "../assets/tools.json";
import awardAnimation from "../assets/award.json";
import participationAnimation from "../assets/participation.json";
import awards2Animation from "../assets/award5.json";

const skillCards = [
  {
    title: "PROGRAMMING LANGUAGES & STRUCTURES",
    animation: languagesAnimation,
    bgColor: "bg-gray-700",
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
    bgColor: "bg-gray-700",
    content:
      "Jupyter Notebook, Google Colab, Pycharm, Android Studio, VS Code and Studio, Netlogo, GAMMA, Arduino IDE, ANTLR, IntelliJ",
  },
  {
    title: "MACHINE/DEEP LEARNING MODEL USED",
    animation: aiAnimation,
    bgColor: "bg-gray-700",
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
    bgColor: "bg-cyan-900",
    content: "Local Codewars, iSite IT Quizbee, Research Congress, TOPCIT 2024, TOPCIT 2025",
  },
  {
    title: "AWARDS & RECOGNITIONS",
    animation: awards2Animation,
    bgColor: "bg-cyan-900",
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
    bgColor: "bg-cyan-900",
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
    <div className="flex flex-col max-w-full h-[calc(100vh-200px)] w-full max-sm:h-auto">
      <h1 className="w-full font-bold pl-6 pt-3 md:text-2xl max-sm:text-sm max-sm:text-center text-blue-300 max-sm:pl-0 md:pl-5 md:pt-5 sm:text-center xs:pt-0">
        SKILLS AND EXPERIENCE
      </h1>

      <div className="flex justify-center w-full px-6 max-sm:px-2 ">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4 justify-center  ">
          {skillCards.map((card, index) => (
            <div
              key={index}
              className={` rounded-md shadow-lg transition-colors duration-300 hover:bg-transparent hover:border-2 ${card.bgColor} flex w-full max-w-[600px] md:h-70 xs:max-w-full`}
            >
              <div className="flex w-full">
                <div className="w-1/2 p-4 max-sm:w-50 xs:w-40 md:w-70 max-xs:w-40 ">
                  <Lottie animationData={card.animation} loop autoplay />
                </div>
                <div className="w-1/2 p-4 flex flex-col">
                  <h1 className="font-bold text-lg max-md:text-md max-sm:text-md mb-2 xs:text-xs lg:text-lg max-xs:text-xs">
                    {card.title}
                  </h1>
                  <div className="text-sm text-justify md:text-md max-sm:text-md xs:text-xs lg:text-sm max-xs:text-xs">
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