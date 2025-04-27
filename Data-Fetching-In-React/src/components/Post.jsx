import React from 'react';

export default function Post( { title , body } )
{
    return (
        <div className='Post'>
            <h3> {title} </h3>
            <p> {body} </p>
        </div>
    )
}