import { useState } from 'react'
import './App.css'

function App() {

  const [count , setCount] = useState(0);

  function handleClick()
  {
    // Using updater functions to update the state variable
    setCount( (prevCount) => { return prevCount + 1 } );
  }

  return (
    <>
    <button onClick = {handleClick} > Counter: {count} </button>
    </>
  )
}

export default App
