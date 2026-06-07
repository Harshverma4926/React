import React, { useState } from 'react'

const App = () => {
  const submitHandler = (e) =>{
    e.preventDefault()
    console.log('Form submitted by',title)

    setTitle('')
  }
  const [title, setTitle] = useState()
  return (
    <div>
      <form className='p-20 flex flex-col w-100 gap-5' onSubmit={(e)=>{
          submitHandler(e)
        }}>
        <input className='border-1 rounded-full p-1' type='text' placeholder='Enter you name' 
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }} />
        <button className='border-1 p-1 bg-gray-500 text-white rounded-full'>Submit</button>
      </form>
    </div>
  )
}

export default App
