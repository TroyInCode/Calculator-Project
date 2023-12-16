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
        button.addEventListener("click", (e) => {
            displayScreen.innerText += button.innerText;
            if (operator === "") {  //Read first number if no operator set yet
                firstNumber += e.target.innerText;
                console.log(firstNumber);
            } else { // Read Second Number
                secondNumber += e.target.innerText;
                console.log(secondNumber);
            }
        })
    })
    
    };
    

//Set Operator and Store Displayed Number
const setOperator = () => {
    operatorButtons.forEach(op => {
        op.addEventListener("click", (e) => {
            if (e.target.innerText !==  "="){
                operator = e.target.innerText;
            }
            console.log(secondNumber);
        })
    })
}
//Press Equals Button and Perform Operation on Displayed Numbers
const pressEquals = () => {
 
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
