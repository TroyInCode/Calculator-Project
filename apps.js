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
            return "Invalid Operator";      
    };

};


//Display Numbers when Clicked

const displayNumbers = () => {
    numberButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            displayScreen.innerText += button.innerText;
            if (operator === "") {  //Read first number if no operator set yet
                firstNumber += e.target.innerText;
                console.log(`First Number is: ${firstNumber}`);
             //Read Second Number only if operator and first number are present  
            } else if (operator !== "" && firstNumber !== ""){
                secondNumber += e.target.innerText;
                console.log(`Second Number is : ${secondNumber}`);
            }

        })
    })
    
    };


//Set Operator and Store Displayed Number
const setOperator = () => {
    operatorButtons.forEach(op => {
        op.addEventListener("click", (e) => {
            displayScreen.innerText = `${firstNumber}${op.innerText}`;
            if (e.target.innerText !==  "=" && firstNumber !== "" && secondNumber == "" && operator == ""){
                operator = e.target.innerText;
                console.log(`Operator is: ${operator}`);
            }


            if (firstNumber !== "" && secondNumber !== "" && operator !== "") {
                let result = operate(firstNumber, secondNumber, operator);
                result = result.toString();

                //If result has a decimal, round to the nearest hundreth
                if (result.includes(".")){
                result = parseFloat(result).toFixed(2);
                };

                if (operator == "/" && firstNumber == "0" || secondNumber == "0"){
                    result = "No Division By Zero";
                }

                //Reset firstNumber to result for further calculations
                firstNumber = result; 
                operator = op.innerText;
                secondNumber = "";
                displayScreen.innerText = `${firstNumber}${operator}${secondNumber}`;
                
  
                console.log(`New First Number is: ${firstNumber}`);
                console.log(`New Operator: ${operator}`);
                console.log(`New Second Number is : ${secondNumber}`);
            }
        })
    })
};

//Equals Button is Pressed & Operation is Performed
const pressEqualsButton = () => {
    equalsButton.addEventListener("click", e => {
    let result = operate(firstNumber, secondNumber, operator);
    result = result.toString();

    //If result has a decimal, round to the nearest hundreth
    if (result.includes(".")){
        result = parseFloat(result).toFixed(2);
    };

    if (operator == "/" && firstNumber == "0" || secondNumber == "0"){
        result = "No Division By Zero";
    }

    displayScreen.innerText = result;
    console.log(result);


    //Reset firstNumber to the result for further calculations
    firstNumber = result;
    operator = "";
    secondNumber = "";
    console.log(`New First Number is : ${firstNumber}`);

    
}
    )};



//Clear Display when "Clear" is Clicked"
const clearNumbers = () => { 
clearButton.addEventListener("click", () => {
    displayScreen.innerHTML = "";
    firstNumber = "";
    operator = "";
    secondNumber = "";
});
};





//Call Display Function, Clear Display, and Perform Operations//
displayNumbers();
clearNumbers();
setOperator();
pressEqualsButton();