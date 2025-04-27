import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);
  const [doubleCount , setDoubleCount] = useState(2 * count);

  const handleCount = () => {
    setCount( (c) => c + 1 );
  }

  return (
    <>
    <button onClick={handleCount}> Count: {count} </button>
    <button> Double Count: {doubleCount} </button>
    </>
  )

}

export default App
