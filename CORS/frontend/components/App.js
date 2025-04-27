import { useEffect } from "react";

import Header from "./Header";

import ButtonContainer from "./ButtonContainer";

const App = () => {

    const hitBackend = async () => {
        const response = await fetch("http://localhost:3000" , 
        {
            method: "GET" , 
            headers: {
                Authorization: "Bearer token"
            }
        });
        const responseJson = await response.json();
        console.log(`Response from server: ${responseJson}`);
        return responseJson;
    }

    // This useEffect() is run only once after the App component mounts or is rendered for the first time
    useEffect( () => {
        const responseFromServer = hitBackend();
    } , [] );

    return (
        <div id="App">
            <Header heading = "This is the App component" />
            <ButtonContainer />
        </div>
    )
};

export default App;