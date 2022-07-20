import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#D3D9E9] flex justify-center items-center p-4'>

        <form action='' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#A6A9C8]'>Contact Me!</p>
            </div>
            <input className='my-4 p-2' type="text" placeholder='Name' name='name' />
            <input className="my-4 p-2" type="email" placeholder='Email' name='email' />
            <textarea className='my-4 p-2' name='message' rows="10" placeholder='Message'></textarea>
            <button className='text-2xl border-2 hover:bg-[#bcacdb] px-4 py-3 mx-auto flex items-center'>Submit</button>
        </form>

    </div>
  )
}

export default Contact;