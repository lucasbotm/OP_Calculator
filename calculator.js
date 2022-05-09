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
    let result = null;
    switch (operation){
        case "add":
            result = add(a,b);
            return result;
            break;
        case "subtract":
            result = subtract(a,b);
            return result;
            break;
        case "multiply":
            result = multiply(a,b);
            return result;
            break;
        case "divide":
            result = divide(a,b);
            return result;
            break;
    }
}

function populateDisplay(input){
    if (currentOperation === null){
        if (Object.keys(operations).includes(input)){
            if (display.innerHTML === ""){
                return
            }
            currentResult = +display.innerHTML;
            currentOperation = operations[input];
            display.innerHTML = "";
        }

        else if (display.innerHTML===""){
            display.innerHTML = input
        }
        else{
            display.innerHTML += input
        }
    }
    else {
        if (Object.keys(operations).includes(input)){
            console.log(currentResult)
            input = + input

            currentResult = operate(currentResult,input,currentOperation);
            display.innerHTML = currentResult;
            console.log(currentResult)
            currentOperation = null;
        }

        else if (display.innerHTML===""){
            display.innerHTML = input
        }
        else{
            display.innerHTML += input
        }
    }
}

let display = document.querySelector(".display");
display.innerHTML = ""

let operations = {
    "+": "add",
    "-": "subtract",
    "*": "multiply",
    "/": "divide",
    "=": "equals"
};

let currentResult = null;
let currentOperation = null;

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
