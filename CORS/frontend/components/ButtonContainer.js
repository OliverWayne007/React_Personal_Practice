const ButtonContainer = () => {

    const sendPostRequest = async () => {
        await fetch("http://localhost:3000/products" , 
        {
            method: "POST" , 
            body: JSON.stringify( { name: "Iphone" } ) ,
            headers :  {
                "Content-Type" : "application/json"
            }
        } )
    }

    const handleOnClick = () => {
        sendPostRequest();
    }

    return (
        <div id="ButtonContainer">
            <button id="button" onClick={handleOnClick}> Click to send a POST request </button>
        </div>
    )
}

export default ButtonContainer;