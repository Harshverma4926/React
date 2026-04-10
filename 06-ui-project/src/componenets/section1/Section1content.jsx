import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Section1content = () => {
  return (
    <div className='px-3 flex flex-row gap-4'>
      <Leftcontent />
      <Rightcontent />
    </div>
  )
}

export default Section1content
