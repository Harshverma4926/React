import React from 'react'
import { Plus } from 'lucide-react'
import { ChartNoAxesColumnIncreasing } from 'lucide-react'
import { ChevronDown } from 'lucide-react'
import { ChartNoAxesColumnDecreasing } from 'lucide-react'

const RightCard = () => {
  return (
    <div >
        <div className=''>
        <div className="absolute bottom-80  left-11  px-2 py-2 bg-white rounded-full shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] flex items-center  gap-2">
      <span className="text-[13px] font-extrabold ">Mobile Accessibility</span>
      <Plus className='bg-orange-500 rounded-full hover:scale-130 transition duration-200 hover:bg-orange-700 hover:cursor-pointer' size={25} color='white' strokeWidth={2} />
      </div>
      </div>

      <div>
      <div className='absolute bottom-15 left-11 h-40 w-50 bg-white rounded-[15px] px-1 py-1 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]'>
        <span className='flex flex-row justify-between items-center'><span className='pl-1 font-extrabold'>Expenses <h1 className='text-2xl text-orange-500 font-extrabold'>85  %</h1></span></span>
        <ChartNoAxesColumnIncreasing color='#F97316' size={90} strokeWidth={20} absoluteStrokeWidth />
      </div>
      <div className='absolute bottom-17.5 left-32 flex flex-col '>
        <span className='flex items-center gap-1 pb-9 font-extrabold text-[12px] ml-15'>view<ChevronDown size={16} strokeWidth={1.25} absoluteStrokeWidth /></span>
        <span>
        <ChartNoAxesColumnDecreasing color='#F97316' size={90} strokeWidth={20} absoluteStrokeWidth />
        </span>
      </div>
      <div>
        <div className="absolute bottom-60 left-125 bg-white px-2 py-2 rounded-full shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] flex items-center gap-2">
      <span className="text-[13px] font-extrabold">Enhanced Security</span>
      <Plus className='bg-orange-500 rounded-full hover:scale-130 transition duration-200 hover:bg-orange-700 hover:cursor-pointer' size={25} color='white' strokeWidth={2} />
      </div>
      </div>
      </div>
    </div>
    
  )
}

export default RightCard