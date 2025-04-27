import React from 'react';

function Form( { handleSubmit , handleTextChange } )
{

    function handleOnSubmit(e)
    {
        e.preventDefault();
        handleSubmit();
    }

    return (
    <form action="" onSubmit = { handleOnSubmit }>
        <input type="text" onChange = { handleTextChange } />
        <button type='submit'> Submit </button>
        </form>
    )
}

export default Form;