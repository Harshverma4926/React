import React from 'react'
import Navbar from './Navbar'
import Section1content from './Section1content'

const Section1 = (props) => {
  return (
    <div className='h-screen w-full'>
      <Navbar/>
      <Section1content user={props.user} />
    </div>
  )
}

export default Section1
