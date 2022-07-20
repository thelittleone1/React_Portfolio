import React from 'react'

export const About = () => {
  return (
    <div id='aboutMe' name='about' className='w-full h-screen bg-[#D3D9E9] text-[black]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full x-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-rigth pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#A6A9C8]'>About</p>
                </div>
                    
                <div>
                </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 x-4'>
                    <div className='sm:text-left text-4xl'>
                        <p>
                            Hello, my name is Urooj, please take a look around my portfolio.
                        </p>
                    </div>
                    <div>
                        <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </p>
                    </div>
                </div>
            </div>
        </div>
    
  )
}

export default About;