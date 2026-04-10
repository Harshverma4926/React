import React from 'react'
import {ChartColumnDecreasing,PencilLine} from 'lucide-react';

const Card = () => {
  return (
    <div className='absolute top-1/25 pt-70 h-50 w-85 ml-20 flex flex-col gap-12 text-white '>
        <div className=' h-45 p-2 gap-7 flex flex-col justify-between bg-white/25  rounded-[20px]'>
      <div className='px-2.5 py-2'>
        <ChartColumnDecreasing className='bg-white p-2 rounded-[10px]' color='orange' stroke-width='3px' size={35}/>
        </div>
        <div className='px-2.5'>
            <p><span>Real-time analysis </span>Gain actionable<br></br> insights with our real-time analytics<br></br> feature</p>
        </div>
        </div>

        <div className=' h-45  p-3 gap-7 flex flex-col justify-between bg-white/25 rounded-[20px]'>
      <div className='px-2.5 py-2'>
        <PencilLine className='bg-white p-2 rounded-[10px]' color='orange' stroke-width='3px' size={35}/>
        </div>
        <div className='px-2.5'>
            <p><span>Real-time analysis</span>Gain actionable<br></br> insights with our real-time analytics<br></br> feature</p>
        </div>
        </div>
    </div>
  )
}

export default Card
