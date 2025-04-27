import React, { useEffect } from 'react';

function Name( {name} )
{
    useEffect( () => { 
        console.log("Name component is re-rendered"); 
    } )

    useEffect( () => {
        console.log("Name component did mount....");
        return () => {
            console.log("Name component will un-mount....");
        }
    } , [] )

    return (
        <div>
            <h1> Name: {name} </h1>
        </div>
    )
}

export default React.memo(Name);