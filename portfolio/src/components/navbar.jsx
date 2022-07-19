import React, {useState} from 'react';
import TempLogo from "../assets/github.png";
import {FaBars, FaTimes, FaGithub, FaLinkedin} from "react-icons/fa";
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';

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

      {/*Social Icons*/}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#554D74]'>
            <a className='flex justify-between items-center w-full text-gray-300' 
            href='https://www.linkedin.com/in/qurooj/'>
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#554D74]'>
            <a className='flex justify-between items-center w-full text-gray-300' 
            href='https://github.com/thelittleone1'>
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#554D74]'>
            <a className='flex justify-between items-center w-full text-gray-300' 
            href='/'>
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#554D74]'>
            <a className='flex justify-between items-center w-full text-gray-300' 
            href='../assets/ResumeV11.pdf'>
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar;
