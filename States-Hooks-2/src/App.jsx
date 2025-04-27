import { useEffect , useState } from 'react'
import './App.css'

import MyComponent from './components/MyComponent.jsx';

function App() {

  const [isVisible , setIsVisible] = useState(true);

  useEffect( () => {
    console.log("App component is mounting....");
    return ( () => { console.log("Clean-up performed during App's un-mounting !!!"); } );
  } , [] );

  useEffect( () => {
    console.log("App component is rendered !!!");
    return ( () => { console.log("Clean-up performed before re-rendering the App component !!!"); } );
  } );

  useEffect( () => {
    console.log("The toggle button is clicked !!!");
    return ( () => { console.log("Clean-up performed after isVisible is updated by pressing the Toggle button !!!"); } );
  } , [isVisible] );

  const Toggle = () => { setIsVisible(!isVisible); }

  return (
    <div className='App'>
      {/* <MyComponent /> */}
      {/* Conditional Rendering */}
    { isVisible == true ? <MyComponent /> : <></> }
    <button onClick = { Toggle } > Toggle </button>
    </div>
  );

}

export default App
