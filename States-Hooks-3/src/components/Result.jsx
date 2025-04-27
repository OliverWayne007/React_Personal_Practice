import React, { useEffect } from 'react';
import Marks from './Marks';

export default function Result()
{
    useEffect( () => { 
        console.log("Result component is re-rendered"); 
    } )

    useEffect( () => {
        console.log("Result component did mount.....");
        return () => {
            console.log("Result component will un-mount....");
        }
    } , [] )

    return (
        <div>
            <Marks maths={100} physics={95} chemistry={94} />
        </div>
    )
}