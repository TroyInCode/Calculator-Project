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
let firstNumber;
let operator;
let secondNumber;

//Global Variables for Calculator

const numberButtons = document.querySelectorAll(".reg-button");
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
        displayScreen.innerHTML += button.innerText;
        const firstDisplayedNumber = displayScreen.innerHTML;
    })
})

};

//Clear Display when "Clear" is Clicked"
const clearNumbers = () => {
clearButton.addEventListener("click", () => {
    displayScreen.innerHTML = "";
    firstNumber = undefined;
    operator = undefined;
    secondNumber = undefined;
})
};


const setOperator = (op) => {
    operator = op;
    if (firstNumber === undefined) {
        firstNumber = parseFloat(displayScreen.innerHTML);
        displayScreen.innerHTML="";
    }
};

const calculateNumbers = () => {
    const equalsButton = document.getElementById("=");

    equalsButton.addEventListener("click", () => {
        if (operator && firstNumber !== undefined) {
            secondNumber = parseFloat(displayScreen.innerHTML);
            const result = operate(firstNumber, secondNumber, operator);
            displayScreen.innerHTML = result;
            firstNumber = result;
            operator = undefined;
            secondNumber = undefined;
        }
    })
}


//Call Display Function, Clear Display, and Perform Operations//
displayNumbers();
clearNumbers();
