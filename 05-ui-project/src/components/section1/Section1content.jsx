import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Section1content = (props) => {
  return (
    <div className='pb-16 pt-6 flex items-center gap-10 px-18 h-[90vh]'>
        <Leftcontent />
        <Rightcontent user={props.user} />
    </div>
  )
}

export default Section1content
