import React from 'react'
import Navbar from './Navbar'
import Section1content from './Section1content'
import FloatingLines from '../section2/FloatingLines';



const Section1 = () => {
  return (
    <>
    
    <div className='relative overflow-hidden h-screen w-full'>
      <Navbar />
      <Section1content />
    </div>
    </>
  )
}

export default Section1
