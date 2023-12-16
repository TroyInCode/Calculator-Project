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
let firstNumber = "";
let operator = "";
let secondNumber = "";
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
            return add(parseFloat(firstNumber), parseFloat(secondNumber));
        case '-':
            return subtract(parseFloat(firstNumber), parseFloat(secondNumber));
        case '*':
            return multiply(parseFloat(firstNumber), parseFloat(secondNumber));
        case '/':
            return divide(parseFloat(firstNumber), parseFloat(secondNumber));
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
                firstNumber += parseFloat(e.target.innerText);
                console.log(`First Number is: ${firstNumber}`);
            } else { // Read Second Number
                secondNumber += parseFloat(e.target.innerText);
                console.log(`Second Number is : ${secondNumber}`);
            }
        
        })
    })
    
    };


//Set Operator and Store Displayed Number
const setOperator = () => {
    operatorButtons.forEach(op => {
        op.addEventListener("click", (e) => {
            displayScreen.innerText += op.innerText;
            if (e.target.innerText !==  "="){
                operator = e.target.innerText;
                console.log(`Operator is: ${operator}`);
                //Press Equals Button and Perform Operation on Displayed Numbers
            } else {
               pressEqualsButton();
            }
            ;
        })
    })
}

//Equals Button is Pressed & Operation is Performed
const pressEqualsButton = () => {
    let result = operate(firstNumber, secondNumber, operator);
    displayScreen.innerText = result;
    console.log(result);
    
    //Reset firstNumber to the result for further calculations
    firstNumber = result.toString();
    operator = "";
    secondNumber = "";
    console.log(`New First Number is: ${firstNumber}`);
};


//Clear Display when "Clear" is Clicked"
const clearNumbers = () => {
clearButton.addEventListener("click", () => {
    displayScreen.innerHTML = "";
    firstNumber = "";
    operator = "";
    secondNumber = "";
})
};







//Call Display Function, Clear Display, and Perform Operations//
displayNumbers();
clearNumbers();
setOperator();