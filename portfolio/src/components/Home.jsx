import React from 'react'

const Home = () => {
  return (
    <div name="home" className='w-full h-screen bg-[#D3D9E9]'>

        {/*Container*/}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full '>
            <p className='text-4xl sm:text-7xl '>Hello, my name is Urooj Qureshi</p>
            <h1 className='text-3xl sm:text-4xl text-[white] py-3'>I'm a full stack developer with a focus on UX design.</h1>

            <div>
                <button className='text-white bg-[#28398d] border-2 px-6 py-2 my-5 flex items-center hover:bg-[#7387c3]'>View Work </button>
            </div>
        </div>

    </div>
  )
}

export default Home;