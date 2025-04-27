const express = require("express");

const bodyParser = require("body-parser");

const cors = require("cors");

const app = express();


const PORT = 3000;

app.use(cors());

app.use(bodyParser.urlencoded( { extended: true } ) );

app.use(bodyParser.json());

app.use(bodyParser.text());


app.get("/" , (request , response) => {
    return response.status(200).json( { message: "GET request recieved on / route" } );
} );

app.post("/products" , (request , response) => {
    return response.status(201).json( { message: "POST request recieved on /products"} );
} )


app.listen(PORT , () => {
    console.log("Server started....");
    console.log(`Server listening on port: ${PORT}`);
} )