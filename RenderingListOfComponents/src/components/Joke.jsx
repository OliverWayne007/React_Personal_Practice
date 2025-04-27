import React from 'react';

function Joke(props)
{
    return (
        <div>
            <h2> {props.joke} </h2>
            <h2> {props.rating} </h2>
        </div>
    )
}

export default Joke;