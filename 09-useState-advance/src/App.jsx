import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState({user:'Harsh',age:21})
  function btn(){
    console.log(num.user);
    console.log(num.age);
  }
  return (
    <div>
      <h1>{num.user},{num.age}</h1>
      <button onClick={btn}>Click</button>
    </div>
  )
}

export default App
