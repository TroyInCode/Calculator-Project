//Basic Calculator Functions
const add = (a, b) => {
    return a + b;
};

const subtract = (a, b) => {
    return a - b;
}

const multiply =  (a, b) => {
    return a * b;
}

const divide = (a, b) => {
    return a/b;
}

//Variables for Calculator Operation
let firstNumber = undefined;
let operator = undefined;
let secondNumber = undefined;
const operatorButtons = document.querySelectorAll(".op-button");
const equalsButton = document.getElementById("=");

//Global Variables for Calculator

const numberButtons = document.querySelectorAll(".number-button");
const displayScreen = document.querySelector(".display");
const clearButton = document.getElementById("clear");

//Operate Function
const operate = (firstNumber, secondNumber, operator) => {
    switch (operator) {
        case '+':
            return add(firstNumber, secondNumber);
        case '-':
            return subtract(firstNumber, secondNumber);
        case '*':
            return multiply(firstNumber, secondNumber);
        case '/':
            return divide(firstNumber, secondNumber);
        default:
            return "Invalid operator";
    };
};

//Display Numbers when Clicked

const displayNumbers = () => {
    numberButtons.forEach(button => {
        button.addEventListener("click", () => {
            displayScreen.innerHTML += button.innerHTML;
        })
    })
    
    };
    

//Set Operator and Store Displayed Number
const setOperator = () => {
    operatorButtons.forEach(button => {
        button.addEventListener("click", () => {
        firstNumber = parseFloat(displayScreen.innerHTML);
        displayScreen.innerHTML = button.id;

        })
    })
}




//Clear Display when "Clear" is Clicked"
const clearNumbers = () => {
clearButton.addEventListener("click", () => {
    displayScreen.innerHTML = "";
    firstNumber = undefined;
    operator = undefined;
    secondNumber = undefined;
})
};







//Call Display Function, Clear Display, and Perform Operations//
displayNumbers();
clearNumbers();
setOperator();
