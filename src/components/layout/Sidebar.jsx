import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white fixed top-0 left-0 flex flex-col items-center py-4">
      <Link to="/home" className="text-2xl mb-6">
        &lt;Charley /&gt;
      </Link>
      <nav>
        <ul className="space-y-4">
          <li>
            <Link to="/home" className="text-lg hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/projects" className="text-lg hover:underline">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/articles" className="text-lg hover:underline">
              Articles
            </Link>
          </li>
          <li>
            <Link to="/open-source" className="text-lg hover:underline">
              Open Source
            </Link>
          </li>
          <li>
            <Link to="/skills" className="text-lg hover:underline">
              Skills
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-lg hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
