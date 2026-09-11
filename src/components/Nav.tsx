import React from 'react'
import Logo from '../assets/logo-text.png'

const Nav = () => {
  return (
    <div className='border-b border-gray-300'>
    <nav className='flex justify-between gap-4 container mx-auto py-4 bg-white'>
      <img src={Logo} className="h-10 hover:cursor-pointer" alt="Logo" />
      <ul className='flex gap-4 items-center hover:cursor-pointer '>
        <li><a href="/">Home</a></li>
        <li><a href="/">Technologies</a></li>
        <li><a href="/">Projects</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
        <div className='flex gap-4 items-center'>
            <button className='bg-white text-black font-semibold px-4 py-2 rounded-full hover:cursor-pointer hover:shadow-md transition-all duration-300'>
                Sign In
            </button>
            <button className='bg-pink-600 text-white font-semibold px-5 py-2 shadow-sm rounded-full
            hover:bg-pink-700 transition-all duration-300 cursor-pointer'>
                Sign Up
             </button>
        </div>
    </nav>
    </div>
  )
}

export default Nav
