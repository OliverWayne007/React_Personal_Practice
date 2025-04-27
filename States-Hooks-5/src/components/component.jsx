import React, { useState } from 'react';

export default function Component( { message } )
{

    const [greeting , setGreeting] = useState(message);

    return (
        <>
        <div className='Greeting'> Greeting: {greeting} </div>
        <div className='Greeting'> Message: {message} </div>
        </>
    )

    // Note that changing the props of a component does not change the local state of the component.
    // Every component has it's own lifecycle and states.
    // The local state of a component can only be changed during re-rendering using the setter function provided by the useState hook.
    // React maintains the state of every component across re-renders.
    // It does not recreate the state variables on re-rendering.
    // This is the reason why, once the "greeting" state is set to "Hello, Goodmorning !" on-mounting, it remains intact 
    // irrespective of the prop change, unless the setGreeting function is called with the changed prop. 
}