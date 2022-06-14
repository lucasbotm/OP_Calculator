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

function convertStringToFloat(a,b){
    let aFloat = parseFloat(a);
    let bFloat = parseFloat(b);
    return [aFloat,bFloat]
}

function checkIfOperation(input){
    if (Object.keys(operations).includes(input)){
        return true;
    return false;
    }
}


function operate(a,b,operation){
    let inputValues = convertStringToFloat(a,b)
    a = inputValues[0];
    b = inputValues[1];

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
    let isOperation = checkIfOperation(input);

    if (isOperation){
        if (currentOperation === null){
            if (display.innerHTML === ""){
                return
            }
            else {
            currentResult = display.innerHTML;
            currentOperation = operations[input];
            display.innerHTML = "";
            }
        }
        
        else{
            currentResult = operate(currentResult,display.innerHTML,currentOperation);
            display.innerHTML = currentResult;
            currentOperation = operations[input];
            operationLast = true;
        }
    }
    else {
        if (currentOperation === null){
            if (display.innerHTML===""){
                display.innerHTML = input
            }
            else{
                display.innerHTML += input
            }
        }
        else{
            if (operationLast){
                display.innerHTML = input;
                operationLast = false;
            }
            else{
                display.innerHTML += input;
            }


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
let operationLast = false;

document.querySelectorAll(".button").forEach(button =>{
    button.addEventListener("click", e=>{
        populateDisplay(e.target.id);
    })
})


