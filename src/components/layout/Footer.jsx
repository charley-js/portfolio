import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaCoffee, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiNetlify, SiVite, SiMui } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-auto">
      <div className="container mx-auto">
        <p className="text-center">This portfolio was made with:</p>
        <div className="flex justify-center space-x-4 my-4">
          <FaReact className="text-2xl hover:text-gray-400" title="React" />
          <SiVite className="text-2xl hover:text-gray-400" title="Vite" />
          <SiTailwindcss className="text-2xl hover:text-gray-400" title="TailwindCSS" />
          <SiMui className="text-2xl hover:text-gray-400" title="MUI" />
          <SiNetlify className="text-2xl hover:text-gray-400" title="Netlify" />
        </div>
        <div className="my-4 text-center">
          <a href="https://www.buymeacoffee.com" target="_blank" rel="noopener noreferrer" className="inline-block">
            <button className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600">
              <FaCoffee className="inline-block mr-2" /> Buy Me a Coffee
            </button>
          </a>
        </div>
        <div className="flex justify-center items-center mt-4">
          <p className="flex-grow text-center ml-20 ">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
          <div className="flex space-x-4 ml-auto">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl hover:text-gray-400" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl hover:text-gray-400" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl hover:text-gray-400" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
