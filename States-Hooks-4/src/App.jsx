import { useEffect, useState } from "react"

import List from "./components/List";

// const nums = [10 , 20 , 30 , 40];

function App() {

  const [dark , setDark] = useState(false);

  const [input , setInput] = useState(0);

  const handleInputChange = (event) => {
    setInput(Number(event.target.value));
  }

  // const numList = [10 , 20 , 30 , 40];

  const [numList , setNumList] = useState([]);

  useEffect( () => {
    setNumList( [input , input + 1 , input + 2] );
  } , [input] )

  function handleToggle()
  {
    setDark( (prevTheme) => { return !prevTheme } );
  }

  const theme = {
    backgroundColor: dark ? "black" : "white" , 
    color: dark ? "white" : "black" , 
    padding: "10px"
  }

  return (
    <div style={theme}>
      <input type="text" onChange={handleInputChange}/>
      <button onClick={handleToggle}> Toggle Theme </button>
      <List numList = {numList} />
    </div>
  )

}

export default App
