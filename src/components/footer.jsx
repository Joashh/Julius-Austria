import { FaLinkedin, FaEnvelopeSquare, FaGithubSquare, FaInbox } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 text-gray-300 py-3  text-center max-sm:block md:hidden sm:hidden">
      <div className="max-w-xl mx-auto ">
        <h2 className="text-md font-semibold text-blue-800 dark:text-blue-300 ">CONNECT WITH ME</h2>
        
        <div className="flex pt-1 text-xs px-2 text-black dark:text-white">
          Feel free to reach out anytime — I’m always open to new projects, collaborations, and opportunities.
Connect with me on LinkedIn or Instagram, or just drop me an email!
          </div>

        <div className="flex flex-row justify-center gap-x-5    pt-5  text-sm">
          
          <div className="flex items-center justify-center gap-2">
            <FaLinkedin className="text-black dark:text-white" />
            <a href="https://www.linkedin.com/in/julius-austria" target="_blank" rel="noopener noreferrer" className="hover:underline text-black dark:text-white">
              LinkedIn
            </a>
          </div>

          <div className="flex items-center justify-center gap-2">
            <FaGithubSquare className="text-black dark:text-white" />
            <a href="https://github.com/Joashh" target="_blank" rel="noopener noreferrer" className="hover:underline text-black dark:text-white">
              Github
            </a>
          </div>

          <div className="flex items-center justify-center gap-2">
            <FaEnvelopeSquare className="text-black dark:text-white" />
            <a href="mailto:arnelwowie@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:underline text-black dark:text-white">
              Gmail
            </a>
          </div>

        </div>

        <p className="text-xs text-gray-800 dark:text-gray-500 mt-6 ">&copy; {new Date().getFullYear()} Julius Austria. All rights reserved.</p>
      </div>
    </footer>
  );
}
