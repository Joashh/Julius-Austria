import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { themecontext } from '@/app/themecontext';
import { useContext } from "react";

export default function Quotation() {

    
    return (
        <div className="flex flex-row items-center w-full gap-4 flex-1 ">
            {/* Column 1: Text */}
            <div className="transition-all duration-500 ease-in-out flex flex-1 flex-col  pr-4 min-h-32 max-h-32 h-32 bg-white backdrop-blur-xs shadow-md dark:bg-gray-800 rounded-md justify-center  ">
                <div className='text-black dark:text-blue-200 text-left leading-relaxed pl-4  font-semibold  sm:text-xs  '>
                <TypeAnimation
                className='text-sm md:text-lg lg:text-xl text-justify max-sm:font-light  sm:font-bold   md:font-bold'
                    sequence={[
                        "Hi! I'm a developer and programmer with a passion for Intelligent Systems. I've had the privilege of working on some impactful projects and would love to share my achievements so far.",
                        1000, // optional pause at end
                    ]}
                    speed={50}
                    wrapper="h1"
                
                    repeat={0}
                />
                </div>
                <p className='text-gray-500 pl-4  pt-2 2xl:text-lg 2xl:pt-0 max-sm:hidden sm:pt-0  sm:text-xs lg:text-sm md:text-xs'>
                    Navigate through the icons to see all my works, certificates, and skills.
                </p>
            </div>

            {/* Column 2: Icons */}
            <div className="transition-all duration-500 ease-in-out flex flex-col items-center justify-center space-y-4 min-h-32 max-h-32 bg-white shadow-md dark:bg-gray-800 rounded-md max-w-15 w-full">
                <a href="https://www.facebook.com" target="_blank" title="Facebook" rel="noopener noreferrer">
                    <FaFacebook className="h-6 w-6 text-blue-600 hover:text-blue-700" />
                </a>
                <a href="https://www.linkedin.com/in/julius-asher-p-austria-889473333/" title="Facebook" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn className="h-6 w-6 text-blue-400 hover:text-blue-500" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"  aria-label="Instagram" >
                    <FaInstagram className="h-6 w-6 text-pink-500 hover:text-pink-600" alt="Instagram" />
                </a>
            </div>
        </div>
    );
}
