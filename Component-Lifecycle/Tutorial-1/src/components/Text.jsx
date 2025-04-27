import React, { useEffect, useState } from 'react';

export default function Text()
{
    const [text , setText] = useState("");

    console.log("Text component re-rendered.");

    useEffect( () => {
        console.log("Text component did mount....");
        return () => {
            console.log("Text component will unmount.....");
        }
      } , [] )    

    function handleTextChange(event)
    {
        setText(event.target.value);
    }

    return (
        <div>
            <input type="text" onChange={handleTextChange} />
            <h2> {text} </h2>
        </div>
    )
}