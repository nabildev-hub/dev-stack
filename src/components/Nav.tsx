import { useState } from 'react';
import Logo from '../assets/logo-text.png';

const Nav = () => {
  const [active, setActive] = useState("Home");

  return (
    <div className='border-b border-gray-300 position sticky top-0 z-50 bg-white'>
      <nav className='flex justify-between gap-4 container mx-auto py-4 bg-white'>
        <img src={Logo} className="h-10 hover:cursor-pointer" alt="Logo" />

        <ul className='flex gap-4 items-center'>
          <li>
            <a href="/"
              onClick={() => setActive("Home")}
              className={`font-medium transition-colors cursor-pointer ${active === "Home" ? "text-pink-600" : "text-black hover:text-pink-600"}`}>
              Home
            </a>
          </li>
          <li> <a href="/technologies"
              onClick={() => setActive("Technologies")}
              className={`font-medium transition-colors cursor-pointer ${active === "Technologies" ? "text-pink-600" : "text-black hover:text-pink-600"}`}>
              Technologies
            </a>
          </li>
          <li> <a href="/projects"
              onClick={() => setActive("Projects")}
              className={`font-medium transition-colors cursor-pointer ${active === "Projects" ? "text-pink-600" : "text-black hover:text-pink-600"}`}>
              Projects
            </a>
          </li>
          <li> <a href="/about"
              onClick={() => setActive("About")}
              className={`font-medium transition-colors cursor-pointer ${active === "About" ? "text-pink-600" : "text-black hover:text-pink-600"}`}>
              About
            </a>
          </li>
          <li> <a href="/contact"
              onClick={() => setActive("Contact")}
              className={`font-medium transition-colors cursor-pointer ${active === "Contact" ? "text-pink-600" : "text-black hover:text-pink-600"}`}>
              Contact
            </a>
          </li>
        </ul>

        <div className='flex gap-4 items-center'>
          <button className='bg-white text-black font-semibold px-4 py-2 rounded-full hover:cursor-pointer hover:shadow-sm duration-300 transition-all'>
            Sign In
          </button>
          <button className='bg-pink-600 text-white font-semibold px-5 py-2 shadow-sm rounded-full hover:bg-pink-700 transition-all duration-300 cursor-pointer'>
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
