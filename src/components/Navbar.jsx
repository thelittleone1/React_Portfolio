import React, {useState} from 'react';
import TempLogo from "../assets/github.png";
import {FaBars, FaTimes, FaGithub, FaLinkedin} from "react-icons/fa";
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';

const Navbar = () => {

  const[nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    
    <div id='home' className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#31293F] text-gray-100">
      {/* Logo Styling, temporarily using github icon for logo */}
      <div>
        <img src={TempLogo} alt="Temp Logo" style={{width: '50px'}}/>
      </div>

      {/* Styling for Navbar tabs */}
      <div className='hidden md:flex'>
        <ul className='hidden md:flex'>
          <a href='#home'><li>Home</li></a>
          <a href='#aboutMe'><li>About</li></a>
          <a href='#skillsForm'><li>Skills</li></a>
          <a href='#portfolio_Tag'><li>Portfolio</li></a>
          <a href='#contactForm'><li>Contact</li></a>
        </ul>
      </div>

      {/*Hamburger Menu*/}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/*Mobile Menu*/}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#31293F] flex flex-col justify-center items-center'}>
          <li className='py-4 text-3xl'><a href='#home'>Home</a></li>
          <li className='py-4 text-3xl'><a href='#aboutMe'>About</a></li>
          <li className='py-4 text-3xl'><a href='#skillsForm'>Skills</a></li>
          <li className='py-4 text-3xl'><a href='#portfolio_Tag'>Portfolio</a></li>
          <li className='py-4 text-3xl'><a href='#contactForm'>Contact</a></li>
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
