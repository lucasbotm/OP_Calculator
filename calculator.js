"use strict";

function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b 
}

function operate(a,b,operation){
    switch (operation){
        case "add":
            result = add(a,b);
            break;
        case "subtract":
            result = subtract(a,b);
            break;
        case "multiply":
            result = multiply(a,b);
            break;
        case "divide":
            result = divide(a,b);
            break;
    }
}

function populateDisplay(input){
    if (display.innerHTML===""){
        display.innerHTML = input
    }
    else{
        display.innerHTML += input
    }
}

let display = document.querySelector(".display");
display.innerHTML = ""

document.querySelectorAll(".button").forEach(button =>{
    button.addEventListener("click", e=>{
        populateDisplay(e.target.id);
    })
})
// console.log(buttons.length)
// for (let i=0; i< buttons.length; i++){
//     console.log(buttons[i].id);
//     //button.addEventListener("click",console.log("CU"))
// }
