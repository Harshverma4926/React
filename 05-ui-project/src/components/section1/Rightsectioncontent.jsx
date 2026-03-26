import React from 'react'

const Rightsectioncontent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-7 flex flex-col justify-between'>
        <h2 className='bg-white rounded-full text-xl font-semibold h-10 w-10 flex justify-center items-center'>{props.id+1}</h2>
        <div>
            <p className='text-shadow-2xs text-l leading-normal text-white mb-9 leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis iusto voluptates ea recusandae aperiam voluptas?</p>
            <div className='flex justify-between'>
                <button className='bg-blue-600 text-white font-semibold px-7 py-1 rounded-full'>{props.tag}</button>
                <button className='bg-blue-600 text-white font-semibold px-3 py-1 rounded-full'><i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
        </div>
  )
}

export default Rightsectioncontent
