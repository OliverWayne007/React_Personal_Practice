import React from 'react';

function Joke(props)
{
    let ratingStars = ""
    for(let i = 1 ; i <= props.rating ; i++)
    {
        ratingStars += '⭐';
    }

    return (
        <div>
            <p> {props.joke} </p>
            <p> {ratingStars} </p>
        </div>
    )
}

export default Joke;