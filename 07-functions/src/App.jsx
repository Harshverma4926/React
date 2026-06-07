import React from 'react'

const App = () => {
  function inputChanging(val){
    console.log(val)
  }
  return (
    <div className='input'>
      <input onChange={function(elem){
    inputChanging(elem.target.value)
  }} type='text' placeholder='Enter text'></input>
    </div>
  )
}

export default App
