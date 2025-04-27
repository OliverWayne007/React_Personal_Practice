// This example is taken from Sofia Goyal's tutorial on useMemo hook on youtube.

// Example of closures can be used for memoization
// function sum()
// {

//   let obj = {}

//   return function(a , b)
//   {
//     const key = `${a} , ${b}`;
//     if( !obj[key] )
//     {
//       console.log("Were not present !");
//       obj[key] = a + b;
//     }
//     return obj[key];
//   }

// }

// const memoizationFxn = sum();

// console.log(memoizationFxn(7 , 3));
// console.log(memoizationFxn(7 , 3));

import React, { useEffect, useState } from 'react';
;import Name from "./components/Name";
import Result from "./components/Result";

function App() {

  const [displayResult , setDisplayResult] = useState(false);
  
  useEffect( () => { 
    console.log("App component is re-rendered"); 
  } )

  useEffect( () => {
    console.log("App component did mount....");
    return () => {
      console.log("App component will un-mount....");
    }
  } , [] )

  function handleDisplayResult()
  {
    setDisplayResult(!displayResult);
  }


  return (
    <>
    <Name name = "Arpit Singh" />
    <button onClick={handleDisplayResult}> Display Result </button>
    { displayResult ? <Result /> : <></> }
    </>
  )

}

export default App;