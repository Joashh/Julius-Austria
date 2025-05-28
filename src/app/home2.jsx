'use client';
import Header from '../components/header.jsx';
import Main from './main.jsx';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { useState } from "react";
import Footer from '@/components/footer.jsx';
import Lottie from "lottie-react";
import bgstart from '../assets/bg.json';


export default function Home2() {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <> 
        {!isExpanded ? (
             <div className="relative w-screen h-screen overflow-hidden ">
      {/* Background Lottie */}
        <div className="absolute top-0 left-0 w-full h-full z-0 hidden max-xs:block">
            <Lottie animationData={bgstart} loop autoplay className="w-full h-full"  />
        </div>

            <div className="absolute z-50 flex items-center justify-center  rounded-lg p-10 shadow-lg w-screen h-screen max-sm:flex-col">
                <img
                    className="h-60 w-60 rounded-full  shadow-[0_0_10px_#00f0ff] hover:shadow-[0_0_20px_#00f0ff] transition-shadow duration-300 max-sm:w-30 max-sm:h-auto"
                    src="/images/testprof.jpeg"
                    alt=""
                />
                <div className="flex flex-col pl-7 max-sm:pl-0 max-sm:pt-5 max-sm:items-center max-sm:justify-center max-sm:w-full max-sm:text-center ">
    <h1 className="text-white text-3xl font-bold max-sm:text-xl">I'm Julius</h1>
    <p className="text-2xl font-light min-w-100 max-sm:text-lg">Software and AI Developer</p>
    
    <TypeAnimation
        className="pt-3 min-h-20 text-justify text-sm font-light min-w-100 max-w-30  max-sm:px-6 max-sm:text-center max-sm:text-xs"
        sequence={[
            "Welcome to my portfolio — a space where I showcase the projects, skills, and experiences that reflect my journey in tech. Feel free to explore and connect with me. Let’s build something amazing together! ",
            1000,
        ]}
        speed={70}
        wrapper="h1"
        repeat={0}
    />

    <div className="pt-5 gap-3 flex max-sm:flex-row max-sm:items-center">
        <button className="bg-gray-700 rounded-md shadow-lg h-10 px-5 font-medium max-sm:text-xs hover:bg-gray-600 active:bg-gray-800"
        onClick={() => setIsExpanded(!isExpanded)}>
            View Portfolio
        </button>
        <a href="/Julius_Resume.pdf" download="Resume_Julius.pdf">
        <button className="bg-gray-700 rounded-md shadow-lg h-10 px-5 font-medium max-sm:text-xs hover:bg-gray-600 active:bg-gray-800">
            Download Resume
        </button>
        </a>
    </div>
</div>
</div>
            </div>
        ) : (

            <div className='flex flex-col h-screen max-sm:h-auto '>

                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: 'easeOut' }}>

                    <div className=''>
                        <Header />
                    </div>

                </motion.div>

                <div>

                </div>

                <div className='flex flex-1 min-h-0 h-full '>
                    <motion.main
                        className="flex-1 overflow-y-auto min-h-0 h-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}>

                        <Main/>

                    </motion.main>
                </div>
                <Footer/>
            </div>
        )}
        </>
    );
}
