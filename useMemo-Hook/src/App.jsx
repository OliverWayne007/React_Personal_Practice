import { useState , useMemo, useEffect } from "react";

function App() {

  const [input , setInput] = useState(0);

  const [dark , setDark] = useState(false);

  const slowFunction = () => 
  {
    for(let i = 1 ; i < 100000000 ; i++) {}
    const doubleInput = 2 * input;
    return doubleInput;
  }

  const handleInputChange = (event) => {
    setInput(Number(event.target.value));
  }

  function handleChangeTheme()
  {
    setDark(!dark);
  }

  const theme = useMemo( () => {
    return ( 
      {
        backgroundColor: dark ? "black" : "white" , 
        color: dark ? "white" : "black"
      } 
    )
  } , [dark] )

  // Applying useEffect to a non-state variable
  useEffect( () => {
    console.log("Theme changed !!!");
  } , [theme] )

  // We apply useMemo on the slowFunction() call not on the slowFunction() definition
  const doubleInput = useMemo( () => { return slowFunction() } , [input] );

  return (
    <div className="App">
      <input type="text"  onChange={handleInputChange}/>
      <button onClick={handleChangeTheme}> Change Theme </button>
      <div style={theme}> {doubleInput} </div>
    </div>
  )

}

export default App
