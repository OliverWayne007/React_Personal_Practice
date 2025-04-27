import { useEffect, useState } from "react"
import Text from "./components/Text"

function App() {

  const [showText , setShowText] = useState(false);

  // console.log("App component re-rendered.");

  useEffect( () => {
    console.log("App component did mount....");
    return () => {
      console.log("App component will unmount....");
    }
  } , [] )

  console.log("App component re-rendered.");

  function handleShowText()
  {
    setShowText(!showText);
  }

  return (
    <>
    <button onClick={handleShowText}> Show Text </button>
    { showText ? <Text /> : <></> }
    </>
  )

}

export default App;
