import { useState , useEffect } from "react";

const App = () => {

    const [ showHeading , setShowHeading ] = useState(true);

    const hideHeading = () => {
        setShowHeading( !showHeading );
    }

    // Note:

    // the callback functions in useEffect hooks are executed after the DOM update and rendering phase is completed. 
    // This ensures that React has fully updated the DOM before running the useEffect hooks.
    
    // Order of Execution of useEffect Callbacks:

    // Render Phase:
    // The component is rendered, and console.log("App component is rendered..."); is executed.

    // Commit Phase (after rendering):
    // The useEffect callbacks are executed in the order they are defined in the code.

    // useEffect( () => {
    //     console.log("The showHeading state was changed...");
    // } , [showHeading] );

    useEffect( () => {
        console.log("useEffect-Hook: App component mounted...");
    } , [] );

    // useEffect( () => {
    //     console.log("The showHeading state was changed...");
    // } , [showHeading] );

    useEffect( () => {
        console.log("useEffect-Hook: The App component was rendered...");
    })

    useEffect( () => {
        console.log("useEffect-Hook: The showHeading state was changed...");
    } , [showHeading] );

    console.log("App component is rendered...");

    return (
        <div id="App">
            <button id="btn" onClick={ hideHeading }> Hide Heading </button>
            { showHeading == true ? <h1> This is the App component ! </h1> : <></> }
        </div>
    )
};

export default App;