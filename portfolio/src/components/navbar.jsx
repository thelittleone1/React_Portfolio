import React from 'react'
import TempLogo from "../assets/github.png"
import {FaBars, FaTimes} from "react-icons/fa"

const Navbar = () => {
  return (
    
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#31293F] text-gray-100">
      {/* Logo Styling, temporarily using github icon for logo */}
      <div>
        <img src={TempLogo} alt="Temp Logo Image" style={{width: '50px'}}/>
      </div>

      {/* Styling for Navbar tabs */}
      <div className='hidden md:flex'>
        <ul className='hidden md:flex'>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </div>

      {/*Hamburger Menu*/}
      <div className='md:hidden'>
        <FaBars />
      </div>

      {/*Mobile Menu*/}
      <ul className='absolute top-0 left-0 w-full h-screen bg-[#31293F] flex flex-col justify-center items-center'>
      <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Portfolio</li>
          <li>Contact</li>
      </ul>

    </div>
  )
}

export default Navbar;
