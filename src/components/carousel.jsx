'use client';
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { IoIosShareAlt } from "react-icons/io";
export default function Carousel() {

    const [currentCert, setPage] = useState(2);
    const intervalRef = useRef(null);

      const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("https://juliusasheraustria.vercel.app/#");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // hide after 2s
  };

   const startAutoSlide = () => {
  intervalRef.current = setInterval(() => {
    setPage((prev) => (prev % 14) + 1);
  }, 5000);
};

useEffect(() => {
  startAutoSlide();
  return () => clearInterval(intervalRef.current); 
}, []);

const handlePageChange = (newPage) => {
  setPage(newPage);
  clearInterval(intervalRef.current); 
  startAutoSlide();                  
};



    return (
        <div className="flex flex-col justify-center w-full h-70 px-3 sm:h-90 md:h-full md:w-full md:justify-start md:pt-10">


           <div className="relative flex dark:bg-gray-900 bg-gray-200 justify-center items-center w-full h-[60vh] rounded-xl overflow-hidden">
 <motion.div
  className="flex transition-transform duration-500 ease-in-out h-full w-full"
  animate={{ x: `-${(currentCert - 1) * 100}%` }}
  transition={{ duration: 0.0}}
>
  {Array.from({ length: 14 }, (_, i) => (
    <div
      key={i}
      className="flex-shrink-0 w-full h-full flex items-center justify-center"
    >
      <img
        src={`images/cert${i + 1}.png`}
        alt={`Certificate ${i + 1}`}
        className="w-full h-full object-contain p-2"
      />
    </div>
  ))}
</motion.div>

  
  <div className="rounded-md absolute bottom-0 right-0 left-0 h-20 dark:from-black from-gray-500 to-transparent bg-gradient-to-t" />

 
  <div className="absolute bottom-0 right-0 items-center left-0 h-full p-3 flex justify-between w-full">
    <FaAngleDoubleLeft
      className="h-5 w-5 cursor-pointer text-black dark:text-white"
      style={{ filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.6))' }}
      onClick={() => handlePageChange(currentCert - 1 === 0 ? 14 : currentCert - 1)}
    />
    <FaAngleDoubleRight
      className="h-5 w-5 cursor-pointer text-black dark:text-white"
      style={{ filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.6))' }}
      onClick={() => handlePageChange((currentCert % 14) + 1)}
    />
  </div>

  
  <div className="absolute bottom-0 right-0 left-0 flex justify-center gap-x-2">
    {Array.from({ length: 14 }, (_, i) => i + 1).map((index) => (
      <h1
        key={index}
        className={`font-bold cursor-pointer  text-md md:text-4xl transition-colors duration-200 ${currentCert === index
          ? "dark:text-blue-500 text-black"
          : "text-gray-300"
          }`}
        onClick={() => handlePageChange(index)}
      >
        •
      </h1>
    ))}
  </div>
</div>

      <div className="p-3 w-full hidden md:block ">
        <h1 className="font-bold text-xl text-black dark:text-blue-300">Certificates and Awards</h1>
        <p className="text-justify pb-2">These are the overall certificates that I received throughout my journey in this industry. It includes seminars, recognitions, acknowledgements, and awards. Swipe left or right to view all or press the page indicators.</p>
        
        <div className="flex gap-x-2">
           <button className="dark:hover:bg-cyan-900 hover:bg-gray-500 bg-gray-400 dark:bg-cyan-800 rounded-full w-10 flex flex-col justify-center " onClick={handleCopy}>
          <IoIosShareAlt className="h-6 w-6 self-center"/>
        </button>
          <button className="dark:hover:bg-cyan-900 hover:bg-gray-500 bg-gray-400 dark:bg-cyan-800 rounded-full w-10 flex justify-center ">
          <MdOutlineMoreHoriz className="h-7 w-7 "/>
        </button>
        
        </div>

        {copied && (
        <div className="absolute text-center font-bold top-0 right-0 left-0 bg-white/50 dark:bg-black/50 backdrop-blur-sm text-gray-600 dark:text-white text-xs px-4 py-4 rounded shadow-md animate-fade-in">
          Copied on clipboard!
        </div>
      )}
        

      </div>
      

        </div>

    );
}