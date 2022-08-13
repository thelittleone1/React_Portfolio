import React from 'react'
import Devise from '../assets/devise_login.png';
import LandingPage from '../assets/landingpage.png';
import Movieish from '../assets/Movieish.png';
import TeamP from '../assets/teamProfileGen.png';
import eccon from '../assets/eccom.png'
import sql from '../assets/sql.png'
import ThoughtsForShots from '../assets/ThoughtsForShots.png';

export const Portfolio = () => {
  return (
    <div id='portfolio_Tag' name="portfolio" className='w-full md:h-screen bg-[#D3D9E9]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#A6A9C8]'>
                    Projects
                </p>
            </div>

            {/*Container for Projects*/}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div className='shadow-md shadow-[#c6d3fa] hover:scale-110'> 
                    <a href='https://github.com/OwenMG/DEVise.git'>
                        <img src={Devise} alt='Devise Png' />
                    </a>
                </div>

                <div className='shadow-md shadow-[#c6d3fa] hover:scale-110'> 
                    <a href='https://github.com/thelittleone1/Tailwing-Landing-Page.git'>
                        <img src={LandingPage} alt='Landing Page Png' />
                    </a>
                </div>

                <div className='shadow-md shadow-[#c6d3fa] hover:scale-110'> 
                    <a href='https://github.com/Pillifino/movie-ish.git'>
                        <img src={Movieish} alt='Movieish Png' />
                    </a>
                </div>

                <div className='shadow-md shadow-[#c6d3fa] hover:scale-110'> 
                    <a href='https://github.com/elarso2/ThoughtsForShots.git'>
                        <img src={ThoughtsForShots} alt='Ecomerce Png' />
                    </a>
                </div>

                <div className='shadow-md shadow-[#c6d3fa] hover:scale-110'> 
                    <a href='https://github.com/thelittleone1/teamProfileGenerator.git'>
                        <img src={TeamP} alt='Team Png' />
                    </a>
                </div>

                <div className='shadow-md shadow-[#c6d3fa] hover:scale-110'> 
                    <a href='https://github.com/thelittleone1/employeeTracker.git'>
                        <img src={sql} alt='Sql Png' />
                    </a>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Portfolio;
