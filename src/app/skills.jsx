import Lottie from "lottie-react";

import aiAnimation from "../assets/ai.json";
import languagesAnimation from "../assets/languages.json";
import toolsAnimation from "../assets/tools.json";
import awardAnimation from "../assets/award.json";
import participationAnimation from "../assets/participation.json";
import awards2Animation from "../assets/award5.json";


export default function Skills() {
  return (
    <div className="flex-col flex-grow max-w-full h-[calc(100vh-200px)]   w-full max-sm:h-auto">
      <h1 className="w-full font-bold  pl-6 pt-3  md:text-2xl max-sm:text-sm max-sm:text-center text-blue-300 max-sm:pl-0 md:pl-5 md:pt-5">SKILLS AND EXPERIENCE</h1>

      <div className="flex justify-center max-h-full w-full pl-7 max-sm:pl-0">
        <div className="flex-col  max-w-full w-full ">
          <div className="flex gap-6 p-6 pb-2 pt-3 2xl:p-3 max-sm:flex-col max-sm:pl-0 max-sm:pr-0  max-sm:w-full md:justify-center ">

            <div className="bg-gray-700 min-w-80 rounded-md  transition-colors duration-300 hover:bg-transparent hover:border-2 max-w-120 max-h-80 shadow-lg  2xl:min-h-80 max-sm:w-full max-sm:min-w-full max-sm:max-w-full ">
              <div className="flex max-sm:w-full ">
                <div className="w-1/2 pl-4 max-h-50 pt-4 2xl:p-4 max-sm:w-40 max-sm:h-auto  max-sm:pb-5 max-sm:pr-3 md:h-60 md:w-60">
                  <Lottie animationData={languagesAnimation} loop autoplay />
                </div>
                <div className="w-1/2 pr-6 max-sm:pr-0  ">
                  <h1 className="p-4 pb-1 font-bold text-xl md:text-md  max-sm:text-xs max-sm:w-full max-sm:p-0 max-sm:py-5 ">PROGRAMMING LANGUAGES & STRUCTURES</h1>
                  <p className="p-4 pt-0 text-sm text-justify md:text-md max-sm:text-xs max-sm:w-full max-sm:p-0">
                    Advance: Python, Java, C#, SQL, Arduino and Simulator Languages, and HTML & CSS
                    <br />
                    Basic: Prolog, PHP, ANTLR, and JavaScript
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 min-w-80 rounded-md  transition-colors duration-300 hover:bg-transparent hover:border-2 max-w-120 max-h-80 shadow-lg  2xl:min-h-80 max-sm:w-full max-sm:min-w-full max-sm:max-w-full">
              <div className="flex max-sm:w-full ">
                <div className="w-1/2 pl-4 max-h-50 pt-4 2xl:p-4 max-sm:w-40 max-sm:h-auto  max-sm:pb-5 max-sm:pr-3 md:h-60 md:w-60">
                  <Lottie animationData={toolsAnimation} loop autoplay />
                </div>
                <div className="w-1/2 pr-6 max-sm:pr-0  ">
                  <h1 className="p-4 pb-1 font-bold text-xl md:text-md max-sm:text-xs max-sm:w-full max-sm:p-0 max-sm:py-5 ">TOOLS AND PLATFORMS USED</h1>
                  <p className="p-4 pt-0 text-sm text-justify md:text-md max-sm:text-xs max-sm:w-full max-sm:p-0">
                    Advance: Python, Java, C#, SQL, Arduino and Simulator Languages, and HTML & CSS
                    <br />
                    Basic: Prolog, PHP, ANTLR, and JavaScript
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-700 min-w-80 rounded-md  transition-colors duration-300 hover:bg-transparent hover:border-2 max-w-120 max-h-80 shadow-lg  2xl:min-h-80 max-sm:w-full max-sm:min-w-full max-sm:max-w-full">
              <div className="flex max-sm:w-full ">
                <div className="w-1/2 pl-4 max-h-50 pt-4 2xl:p-4 max-sm:w-40 max-sm:h-auto  max-sm:pb-5 max-sm:pr-3 md:h-60 md:w-60">
                  <Lottie animationData={aiAnimation} loop autoplay />
                </div>
                <div className="w-1/2 pr-6 max-sm:pr-0  ">
                  <h1 className="p-4 pb-1 font-bold text-xl md:text-md max-sm:text-xs max-sm:w-full max-sm:p-0 max-sm:py-5 ">MACHINE/DEEP LEARNING MODEL USED</h1>
                  <p className="p-4 pt-0 text-sm text-justify md:text-md  max-sm:text-xs max-sm:w-full max-sm:p-0">
                    Advance: Python, Java, C#, SQL, Arduino and Simulator Languages, and HTML & CSS
                    <br />
                    Basic: Prolog, PHP, ANTLR, and JavaScript
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-6 p-6 pb-2 pt-3 2xl:p-3 max-sm:flex-col max-sm:pl-0 max-sm:pr-0  max-sm:w-full md:justify-center">

            <div className="bg-cyan-900 min-w-80 rounded-md  transition-colors duration-300 hover:bg-transparent hover:border-2 max-w-120 max-h-80 shadow-lg  2xl:min-h-80 max-sm:w-full max-sm:min-w-full max-sm:max-w-full">
              <div className="flex max-sm:w-full ">
                <div className="w-1/2 pl-4 max-h-50 pt-4 2xl:p-4 max-sm:w-40 max-sm:h-auto  max-sm:pb-5 max-sm:pr-3 md:h-60 md:w-60 ">
                  <Lottie animationData={participationAnimation} loop autoplay />
                </div>
                <div className="w-1/2 pr-6 max-sm:pr-0  ">
                  <h1 className="p-4 pb-1 font-bold text-xl md:text-md  max-sm:text-xs max-sm:w-full max-sm:p-0 max-sm:py-5 ">PARTICIPATIONS</h1>
                  <p className="p-4 pt-0 text-sm text-justify md:text-md  max-sm:text-xs max-sm:w-full max-sm:p-0">
                    Competetions: Local Codewars, iSite IT Quizbee, Research Congress
                    <br />
                    Program Globally: TOPCIT 2024, TOPCIT 2025
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-cyan-900 min-w-80 rounded-md  transition-colors duration-300 hover:bg-transparent hover:border-2 max-w-120 max-h-80 shadow-lg  2xl:min-h-80 max-sm:w-full max-sm:min-w-full max-sm:max-w-full">
              <div className="flex max-sm:w-full ">
                <div className="w-1/2 pl-4 max-h-50 pt-4 2xl:p-4 max-sm:w-40 max-sm:h-auto   max-sm:pb-0 max-sm:px-2 md:h-60 md:w-60">
                  <Lottie animationData={awards2Animation} loop autoplay />

                </div>
                <div className="w-1/2 pr-6 max-sm:pr-0  ">
                  <h1 className="p-4 pb-1 font-bold text-xl  md:text-md  max-sm:text-xs max-sm:w-full max-sm:p-0 max-sm:py-5 ">AWARDS</h1>
                  <p className="p-4 pt-0 text-sm text-justify md:text-md  max-sm:text-xs max-sm:w-full max-sm:p-0">
                    Best Presenter in Research Congress 2025
                    <br />
                    Dean's Lister 2021-2025
                    Completion of Various AI Seminars
                  </p>
                </div>
              </div>
            </div>

           <div className="bg-cyan-900 min-w-80 rounded-md  transition-colors duration-300 hover:bg-transparent hover:border-2 max-w-120 max-h-80 shadow-lg  2xl:min-h-80 max-sm:w-full max-sm:min-w-full max-sm:max-w-full">
              <div className="flex max-sm:w-full ">
                <div className="w-1/2 pl-4 max-h-50 pt-4 2xl:p-4 max-sm:w-40 max-sm:h-auto   max-sm:pb-0 max-sm:px-2 md:h-60 md:w-60">
                  <Lottie animationData={awardAnimation} loop autoplay />

                </div>
                <div className="w-1/2 pr-6 max-sm:pr-0  ">
                  <h1 className="p-4 pb-1 font-bold text-xl md:text-md  max-sm:text-xs max-sm:w-full max-sm:p-0 max-sm:py-5 ">TECHNICAL SKILLS</h1>
                  <p className="p-4 pt-0 text-sm text-justify md:text-md  max-sm:text-xs max-sm:w-full max-sm:p-0 max-sm:pb-5">
                    Machine Learning, Deep Learning, and Reinforcement Learning. Laravel, React JSX, Filament, WordPress, Google Sites, Apps Script.
                    Desktop Application Development, Basic Networking Systems, System Simulations.
                    Association Rule Mining, Basic Clustering, Technical Documentation.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
