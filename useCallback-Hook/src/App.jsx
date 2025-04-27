import { useState } from "react"

import List from "./components/List";

// This example is taken from kyle's channel web-dev-simplified on youtube.

function App() {

  console.log("App component is rendered");

  const [dark , setDark] = useState(false);

  const [input , setInput] = useState(0);

  const handleInputChange = (event) => {
    setInput(Number(event.target.value));
  }

  function getList()
  {
    return [input , input + 1 , input + 2];
  }

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
      <List getList = {getList} />
    </div>
  )

}

export default App;