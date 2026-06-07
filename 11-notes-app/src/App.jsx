import React, { useState } from 'react'
import { CopyPlus, X } from 'lucide-react';


const App = () => {
const [title,setTitle]= useState('')
const [details, setDetails] = useState('')

const [task,setTask] = useState([])

  const submitHandler=(e)=>{
    e.preventDefault();
    const copyTask = [...task];
    copyTask.push({title,details})
    setTask(copyTask)


    setTitle(' ')
    setDetails(' ')
  }

  const deleteNode=(idx)=>{
    const copyTask=[...task];
    copyTask.splice(idx,1)
    setTask(copyTask)
  }
  return (
    <div className='bg-black lg:flex text-white h-screen'>
      <form
      onSubmit={(e)=>{
        submitHandler(e);
      }} className=' p-20 flex lg:w-1/2 flex-col gap-5 w-full ' >
              <h1 className='text-3xl font-bold'>Add Notes</h1>

          <input className='border-2 rounded-2xl p-2' type="text" placeholder='Enter Notes Heading'
          value={title}
          onChange={(e)=>{setTitle(e.target.value)}}></input>


          <textarea className='border-2 flex flex-row rounded-2xl p-2' type='text' placeholder='Write Details here'
          value={details}
          onChange={(e)=>{
            setDetails(e.target.value)
          }}></textarea>


          <button className='bg-white active:bg-gray-500 active:scale-95 text-black cursor-pointer hover:bg-gray-400 border-amber-50 rounded-full h-10'>Add Button</button>
      </form>
      <div className='bg-gray-950 lg:border-l-2 w-full lg:w-1/2 lg:p-10'>
      <h1 className='text-3xl font-bold'>Recent Notes</h1>
      <div className='flex flex-wrap gap-5 items-start justify-start mt-6 h-full overflow-auto'>
        {task.map(function(elem,idx){
          return <div key={idx} className="bg-[url('https://imgs.search.brave.com/gdj8Z1ytbW8aZOWpD6Z9OpfqXN3QnYyZE5j6gYrwlnY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90ZW1w/bGF0ZS5jYW52YS5j/b20vRUFFOWFGaHlW/UmsvMS8wLzExMzF3/LWxLa2NDbF8tQXlV/LmpwZw')] bg-cover text-black px-3 py-8 h-52 w-40 relative rounded-xl">
            <h2 onClick={(idx)=>{
              deleteNode()
            }} className='absolute top-1.5 right-1.5 shadow-lg active:scale-80 border-1 border-white shadow-black cursor-pointer bg-red-600 rounded-full p-1 '><X strokeWidth={3} size={17} color='white' /></h2>
            <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
            <p className='leading-tight font-medium mt-1 text-xs~ text-gray-600'>{elem.details}</p>
          </div>
        })}
        </div>
      </div>
    </div>
  )
}

export default App
