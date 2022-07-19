import React, {useState} from 'react'
import TempLogo from "../assets/github.png"
import {FaBars, FaTimes} from "react-icons/fa"

const Navbar = () => {

  const[nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

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
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
        
      </div>

      {/*Mobile Menu*/}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#31293F] flex flex-col justify-center items-center'}>
          <li className='py-4 text-3xl'>Home</li>
          <li className='py-4 text-3xl'>About</li>
          <li className='py-4 text-3xl'>Skills</li>
          <li className='py-4 text-3xl'>Portfolio</li>
          <li className='py-4 text-3xl'>Contact</li>
      </ul>

    </div>
  )
}

export default Navbar;
