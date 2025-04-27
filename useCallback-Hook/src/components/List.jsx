import React, { useEffect, useState } from 'react';

function List( { getList } )
{
    console.log("List component is rendered.");

    console.log("getList: " , getList());

    const [items , setItems] = useState(getList());

    useEffect( () => {
        setItems(getList());
    } , [getList] )

    console.log("items: " , items);

    return (
        <>
        { items.map( (num) => {return <h2 key={num}> {num} </h2> } ) }
        </>
    )
}

export default List;