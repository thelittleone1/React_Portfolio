import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import GITHUB from '../assets/github.png';
import JS from '../assets/javascript.png';
import Mongo from '../assets/mongo.png';
import REACTICON from '../assets/react.png';
import Node from '../assets/node.png';
import TAILWIND from '../assets/tailwind.png'

const Skills = () => {
  return (
    <div id='skillsForm' name='skills' className='w-full h-screen bg-[#D3D9E9]'>
        {/*Main Container*/}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#A6A9C8]'>
                Technologies Used:
                </p>
            </div>
            {/*Icon Container*/}
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-10'>
                
                <div className='shadow-md shadow-[#c6d3fa] hover:scale-110'>
                    <img className='w-20 mx-auto' src={HTML} alt='HTML Icon' />
                    <p className='my-4'>HTML</p>
                </div>

                <div className='shadow-md shadow-[#c6d3fa] hover:scale-110'>
                    <img className='w-20 mx-auto' src={CSS} alt='CSS Icon' />
                    <p className='my-4'>CSS</p>
                </div>

                <div className='shadow-md shadow-[#c6d3fa] hover:scale-110'>
                    <img className='w-20 mx-auto' src={GITHUB} alt='Github Icon' />
                    <p className='my-4'>Github</p>
                </div>

                <div className='shadow-md shadow-[#c6d3fa] hover:scale-110'>
                    <img className='w-20 mx-auto' src={JS} alt='Javascript Icon' />
                    <p className='my-4'>Javascript</p>
                </div>

                <div className='shadow-md shadow-[#c6d3fa] hover:scale-110'>
                    <img className='w-20 mx-auto' src={Mongo} alt='Mongo Icon' />
                    <p className='my-4'>Mongo</p>
                </div>

                <div className='shadow-md shadow-[#c6d3fa] hover:scale-110'>
                    <img className='w-20 mx-auto' src={REACTICON} alt='React Icon' />
                    <p className='my-4'>React</p>
                </div>

                <div className='shadow-md shadow-[#c6d3fa] hover:scale-110'>
                    <img className='w-20 mx-auto' src={Node} alt='Node Icon' />
                    <p className='my-4'>Node</p>
                </div>

                <div className='shadow-md shadow-[#c6d3fa] hover:scale-110'>
                    <img className='w-20 mx-auto' src={TAILWIND} alt='Tailwind Icon' />
                    <p className='my-4'>Tailwind</p>
                </div>


            </div>
        </div>
    </div>
  )
}

export default Skills;
