"use strict";

let state = 
{
    count : 0
}

function onButtonClick()
{
    state.count += 1;
    buttonComponentReRender();
}

function buttonComponent()
{
    const root = document.getElementById("root");

    const button = document.createElement("button");
    button.setAttribute("id" , "btn");
    button.setAttribute("onclick" , "onButtonClick()");
    button.innerText = `Counter: ${state.count}`;

    root.appendChild(button);
}

function buttonComponentReRender()
{
    document.getElementById("btn").innerText = `Counter: ${state.count}`;
}

function buttonComponentMount()
{
    buttonComponent();
}

buttonComponentMount();