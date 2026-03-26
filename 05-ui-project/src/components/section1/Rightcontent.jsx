import React from 'react'
import Rightcard from './Rightcard'

const Rightcontent = (props) => {
  return (
    <div id='right' className='h-full w-2/3 flex rounded-4xl overflow-auto flex-nowrap gap-10 p-6'>
      {props.user.map(function(elem,idx){
        return <Rightcard key={idx} id={idx} img={elem.img} tag={elem.tag}/>
      })}
    </div>
  )
}

export default Rightcontent
