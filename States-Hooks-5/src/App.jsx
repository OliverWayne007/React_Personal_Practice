import { useState } from "react"
import Component from "./components/component";

function App() {

  const [state , setState] = useState("Hello, Goodmorning !");
  
  const handleChangeMessage = () => {
    if(state === "Hello, Goodmorning !")
    {
      setState("Bye, Goodnight !");
    }
    else
    {
      setState("Hello, Goodmorning !");
    }
  }

  return (
    <div className="App">
      <Component message = {state} />
      <button onClick={handleChangeMessage}> Change Message </button>
    </div>
  )

}

export default App
