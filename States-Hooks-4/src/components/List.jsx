import React from 'react';

function List( { numList } )
{
    console.log("List component rendered.");
    console.log("numList: " , numList);

    return (
        <>
        { numList.map( (num) => {return <h2 key={num}> {num} </h2> } ) }
        </>
    )
}

export default React.memo(List);