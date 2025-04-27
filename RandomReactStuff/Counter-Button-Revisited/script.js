"use strict";

const root = document.getElementById("root");

const button = document.createElement("button");

let counter = 0;

function handleButtonClick()
{
    counter += 1;
    button.innerText = `Counter: ${counter}`;
}

button.setAttribute("id" , "btn");

button.setAttribute("onclick" , "handleButtonClick()");

button.innerText = `Counter: ${counter}`;

root.appendChild(button);