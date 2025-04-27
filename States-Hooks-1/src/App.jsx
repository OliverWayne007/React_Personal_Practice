import { useState , useEffect } from 'react';

import './App.css'

// The Difference Between Mounting and Rendering
// Mounting occurs when a component is first added to the page, while rendering occurs when a component's state changes. 
// Mounting initializes the component and sets it up for interaction, while rendering updates the component's view based on 
// changes to its state.

function App() {

  console.log("Render is logged !!!");

  let [name , setName] = useState("Jon Doe");

  const [resourceType , setResourceType] = useState("Posts");

  useEffect( () => { 
    console.log("Renders only on Mount !!!");
   } , [] );

  useEffect( 
    () => { console.log("Render Everytime !!!"); }
  );

  useEffect(
    () => {
      console.log("Resource Type was changed !!!");
    } , [resourceType]
  );

  useEffect( () => { 
    console.log("The name was changed !!!");
   } , [name]);
  
  return (
    <>
    <div>
      <input type="text" placeholder='Enter your name' onChange={ (event) => { name = event.target.value } } />
      <button className='button' onClick = { () => { setName(name) } }> Submit </button>
    </div>
    <h1> Hey ! My name is {name} </h1>
    <div>
      <button className = "button" onClick = { () => setResourceType("Posts") } > Posts </button>
      <button className = "button" onClick = { () => { setResourceType("Users") } }> Users </button>
      <button className = "button" onClick = { () => { setResourceType("Comments") } }> Comments </button>
    </div>
    <h1> Resource Type: {resourceType} </h1>
    </>
  )
}

export default App;
