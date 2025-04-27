import react , { useEffect, useState } from 'react';

import './MyComponent.css';

function MyComponent()
{

    const [count , setCount] = useState(0);

    // useEffect( () => {
    //     console.log("Count was updated !!!");
    // } , [count] );

    useEffect( () => {
        console.log("MyComponent is mounting....");
    } , [] );

    useEffect( () => {
        console.log("MyComponent is rendered !!!");
        return ( () => { console.log("Clean-up performed before re-rendering MyComponent !!!") } );
    } );

    useEffect( () => {
        console.log("Count was updated: " , {count});
        return function() {
            console.log("Returning count: " , count);
        }
    } , [count] );

    return (
        <>
        <div>
            <h2> This is MyComponent </h2>
            <h3> The count is: {count} </h3>
            <button className='button' onClick={ () => { setCount(count + 1); } }> Update Count </button>
        </div>
        </>
    );
}

export default MyComponent;