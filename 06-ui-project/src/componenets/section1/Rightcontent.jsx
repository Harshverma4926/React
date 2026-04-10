import React from 'react'
import RightCard from './RightCard'

const Rightcontent = () => {
  return (
    <div className='bg-stone-200 w-1/2 h-[80vh] relative rounded-[10px]'>
      <div>
        <img className='h-[80vh] rounded-[10px] object-cover ' src='https://images.unsplash.com/photo-1762522928601-862bf2a04902?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''></img>
        <RightCard />
      </div>
    </div>
  )
}

export default Rightcontent
