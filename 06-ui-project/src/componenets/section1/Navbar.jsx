import React from 'react'
import image from '../../assets/image.png'


const Navbar = () => {
  return (
    <div className='px-3 py-3'>
      <div className=' rounded-[10px] flex flex-row justify-between font-(family-name:Iosevka Charon Mono) px-3 bg-stone-200 h-15'>
        <div className='flex items-center px-3 hover:cursor-pointer'>
            <img className='h-14 w-14 rounded-full' src={image} alt=''></img>
            <h3 className='font-bold font-extrabold text-2xl pl-1'>Advisora</h3>
        </div>
        <div className='flex flex-row gap-8 font-normal items-center'>
          <h4 className='hover:cursor-pointer hover:text-stone-600'>Home</h4>
          <h4 className='hover:cursor-pointer hover:text-stone-600'>Product</h4>
          <h4 className='hover:cursor-pointer hover:text-stone-600'>Solution</h4>
          <h4 className='hover:cursor-pointer hover:text-stone-600'>Pricing</h4>
          <h4 className='hover:cursor-pointer hover:text-stone-600'>About Us</h4>
          <h4 className='hover:cursor-pointer hover:text-stone-600'>Contact</h4>
        </div>
        <div className='items-center w-1/7 p-5 gap-2 flex'>
          <button className='border-[0.2px] hover:scale-105 transition duration-200 border-stone-400 rounded-full px-2 py-1 hover:cursor-pointer shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hover:bg-stone-400 bg-white'>Sign UP</button>
          <button className=' rounded-full hover:scale-105 transition duration-200 px-2 py-1 bg-orange-500 text-white shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hover:bg-orange-700 hover:cursor-pointer'>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
