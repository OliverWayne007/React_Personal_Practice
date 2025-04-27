import React, { useEffect } from 'react';

function Marks( {maths , physics , chemistry} )
{
    useEffect( () => { 
        console.log("Marks component is re-rendered"); 
    } )

    useEffect( () => {
        console.log("Marks component did mount....");
        return () => {
            console.log("Marks component will un-mount.....");
        }
    } , [] )

    return (
        <>
            <h2> MATHS: {maths} </h2>
            <h2> PHYSICS: {physics} </h2>
            <h2> CHEMISTRY: {chemistry} </h2>
        </>
    )
}

export default React.memo(Marks);