import React from 'react'

const Leftcontent = () => {
  return (
    <div className='bg-stone-200 w-1/2 h-[80vh] px-5 rounded-[10px]'>
      <div className='flex flex-col px-12 py-25 gap-20'>
      <div>
        <h1 className='text-5xl leading-[1.1] '>Scalable and flexible<br></br> infrastructure to <br></br>grow</h1>
        <p className='mt-5 text-stone-600'>Easily adapt to changes and scale your operations with our flexible<br></br> infrastructure, designed to support your business growth and evolving<br></br> requirements.</p>
      </div>
      <div className='w-full flex flex-row gap-2'>
        <input className='h-11 hover:scale-105 transition duration-200 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] bg-white rounded-full px-5 border-[1.1px] border-stone-400' type='text' id='email' placeholder='Enter your email'></input>
        <button className='bg-orange-500 h-11 rounded-full px-3 text-white hover:cursor-pointer hover:bg-orange-700 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hover:scale-105 transition duration-200 focus:ring-2'>Get start for free</button>
      </div>
      </div>
    </div>
  )
}

export default Leftcontent
