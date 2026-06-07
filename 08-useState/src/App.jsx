import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  function increase(){
    setCount(count+1)
  }
  function decrease(){
    setCount(count-1)
  }
  function increase5(){
    setCount(count+5)
  }
  return (
    <div className='pl-140 pt-30 '>
      <div className='h-100 w-100 rounded-2xl'>
      <div className='pt-15 text-9xl '>
        <div className='pl-15 justify-center'>
        <h1 className='text-center bg-gray-300 border-none  border-2 rounded-4xl w-70 h-50 pt-7'>{count}</h1>
        </div>
      </div>
      <div className='flex flex-row justify-center gap-5 pt-10'>
        <div>
          <button onClick={increase} className='border-2 p-4 w-40 rounded-full bg-gray-600 border-none text-white text-xl cursor-pointer hover:bg-gray-900'>Increase</button>
        </div>
        <div>
          <button onClick={decrease} className='border-2 p-4 w-40 rounded-full bg-gray-600 border-none text-white text-xl cursor-pointer hover:bg-gray-900'>Decrease</button>
        </div>
      </div>
      <div className='mt-3 pl-30'>
        <button onClick={increase5} className='border-2 p-4 w-40 rounded-full bg-gray-600 border-none text-white text-xl cursor-pointer hover:bg-gray-900'>Increase by 5</button>
      </div>
      </div>
    </div>
  )
}

export default App
