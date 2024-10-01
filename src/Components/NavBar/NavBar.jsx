import React from 'react';

const NavBar = () => {
  return (
    <nav className="w-full p-4 flex justify-center"> {/* Center the nav on the screen */}
      <ul className="flex list-none gap-4 md:gap-10"> {/* Adjusted gap for smaller devices */}
        <li className="item group">
          <a
            href="https://www.instagram.com/sahil_shinde13/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-blue-100 rounded-full flex justify-center items-center relative z-10 border-3 border-blue-100 overflow-hidden before:content-[''] before:absolute before:w-full before:h-full before:bg-gradient-to-br before:from-yellow-500 before:via-pink-500 before:to-purple-600 before:z-0 before:scale-y-0 before:origin-bottom before:transition-transform before:duration-500 group-hover:before:scale-y-100"
          >
            <i className="fa-brands fa-instagram text-gray-800 text-3xl z-20 transition-transform duration-500 group-hover:text-white group-hover:animate-flip"></i>
          </a>
        </li>

        <li className="item group">
          <a
            href="https://www.linkedin.com/in/sahil-shinde-793800207/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-blue-100 rounded-full flex justify-center items-center relative z-10 border-3 border-blue-100 overflow-hidden before:content-[''] before:absolute before:w-full before:h-full before:bg-blue-600 before:z-0 before:scale-y-0 before:origin-bottom before:transition-transform before:duration-500 group-hover:before:scale-y-100"
          >
            <i className="fa-brands fa-linkedin text-gray-800 text-3xl z-20 transition-transform duration-500 group-hover:text-white group-hover:animate-flip"></i>
          </a>
        </li>

        <li className="item group">
          <a
           href="https://github.com/Sahil-Shinde-13"
           target="_blank"
           rel="noopener noreferrer"
            className="w-12 h-12 bg-blue-100 rounded-full flex justify-center items-center relative z-10 border-3 border-blue-100 overflow-hidden before:content-[''] before:absolute before:w-full before:h-full before:bg-black before:z-0 before:scale-y-0 before:origin-bottom before:transition-transform before:duration-500 group-hover:before:scale-y-100"
          >
            <i className="fa-brands fa-github text-gray-800 text-3xl z-20 transition-transform duration-500 group-hover:text-white group-hover:animate-flip"></i>
          </a>
        </li>

        <li className="item group">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-blue-100 rounded-full flex justify-center items-center relative z-10 border-3 border-blue-100 overflow-hidden before:content-[''] before:absolute before:w-full before:h-full before:bg-black before:z-0 before:scale-y-0 before:origin-bottom before:transition-transform before:duration-500 group-hover:before:scale-y-100"
          >
            <i className="fa-brands fa-x-twitter text-gray-800 text-3xl z-20 transition-transform duration-500 group-hover:text-white group-hover:animate-flip"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
