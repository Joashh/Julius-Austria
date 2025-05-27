import { FaLinkedin, FaInstagram, FaGithubSquare, FaInbox } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-3  text-center max-sm:block md:hidden">
      <div className="max-w-xl mx-auto ">
        <h2 className="text-md font-semibold text-blue-300 ">CONNECT WITH ME</h2>
        
        <div className="flex pt-1 text-xs px-2">
          Feel free to reach out anytime — I’m always open to new projects, collaborations, and opportunities.
Connect with me on LinkedIn or Instagram, or just drop me an email!
          </div>

        <div className="flex flex-row justify-center gap-x-5    pt-5  text-sm">
          
          <div className="flex items-center justify-center gap-2">
            <FaLinkedin className="text-white" />
            <a href="https://www.linkedin.com/in/julius-austria" target="_blank" rel="noopener noreferrer" className="hover:underline">
              LinkedIn
            </a>
          </div>

          <div className="flex items-center justify-center gap-2">
            <FaInstagram className="text-white" />
            <a href="https://www.instagram.com/joash_astr" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Instagram
            </a>
          </div>

          <div className="flex items-center justify-center gap-2">
            <FaInbox className="text-white" />
            <a href="mailto:arnelwowie@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Gmail
            </a>
          </div>

        </div>

        <p className="text-xs text-gray-500 mt-6 ">&copy; {new Date().getFullYear()} Julius Austria. All rights reserved.</p>
      </div>
    </footer>
  );
}
