import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="flex max-w-4xl mx-auto p-4">
      <div className="flex-1">
        <p className="text-lg">Hello, my name is</p>
        <h1 className="text-5xl text-blue-600 font-bold">
          Charley{" "}
          <span role="img" aria-label="waving hand">
            👋
          </span>
        </h1>
        <p className="mt-4 text-xl">
          I'm a <strong>Full Stack Software Developer</strong>
        </p>
        <p className="mt-4 text-lg">
          I specialize in building high-quality websites and applications using modern technologies. I have a passion
          for creating dynamic and responsive web applications. I love solving complex problems and continuously
          learning new technologies to improve my skills.
        </p>
        <div className="flex space-x-4 mt-6">
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
        <div className="flex space-x-4 mt-4">
          <div className="bg-gray-200 p-2 rounded">Movie Nerd</div>
          <div className="bg-gray-200 p-2 rounded">Gamer</div>
          <div className="bg-gray-200 p-2 rounded">Foodie</div>
        </div>
        <div className="mt-6">
          <a
            href="/path/to/your-cv.pdf"
            download
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Download CV
          </a>
        </div>
      </div>
      <div className="flex-1 flex justify-end items-center">
        <img src="https://via.placeholder.com/300" alt="Hero" className="rounded-lg shadow-lg" />
      </div>
    </div>
  );
};

export default Hero;
