// declare
let screen = document.querySelector(".screen");
let equalButton = document.querySelector(".equal");
let clearButton = document.querySelector(".clear");
let decimalButton = document.querySelector(".decimal");

let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");

let prevNumberDisplay = document.querySelector(".prev-num");
let currentNumberDisplay = document.querySelector(".current-num");
let prevNumber = "";
let currentNumber = "";
let currentOperator = "";


// event listener
numbers.forEach((button) => {
    button.addEventListener("click", (e) => {
        getNumber(e.target.textContent);
    });
});

operators.forEach((button) => {
    button.addEventListener("click", (e) => {
        getOperator(e.target.textContent);
    });
});

equalButton.addEventListener("click", calculate);
clearButton.addEventListener("click", clearDisplay);
decimalButton.addEventListener("click", addDecimal);


// functions
function getNumber(number) {
    // console.log(num);
    // to make number not go off screen:
    if (currentNumber.length < 16) {
        currentNumber += number;
        currentNumberDisplay.textContent = currentNumber;
    }
}
console.log

function getOperator(operator) {
    currentOperator = operator;
    // move numbers from bottom screen to top screen:
    prevNumber = currentNumber;
    prevNumberDisplay.textContent = prevNumber + " " + operator;
    currentNumber = "";
    currentNumberDisplay.textContent = currentNumber;
}

function calculate() {
    // convert string to number:
    prevNumber = Number(prevNumber);
    currentNumber = Number(currentNumber);

    if (currentOperator === "+") {
        prevNumber += currentNumber;
    } else if (currentOperator === "-") {
        prevNumber -= currentNumber;
    } else if (currentOperator === "X") {
        prevNumber *= currentNumber;
    } else if (currentOperator === "/") {
        if (currentNumber == 0) {
            prevNumber = "Error";
            display();
            return; // to ignore the rest of if-else
        }
        prevNumber /= currentNumber;
    }
    prevNumber = prevNumber.toString(); // without this, slice (on display function) won't work
    display();
}

function display() {
    currentOperator = ""; // to not calculate again when user accidentaly double-click equal button
    prevNumberDisplay.textContent = "";
    currentNumber = prevNumber;

    // to make number not go off screen:
    if (prevNumber.length > 16) {
        currentNumberDisplay.textContent = prevNumber.slice(0, 16) + "...";
    } else {
        currentNumberDisplay.textContent = prevNumber;
    }

    console.log(prevNumber);
    console.log(currentNumber);
}

function clearDisplay() {
    currentNumber = "";
    prevNumber = "";
    currentOperator = "";
    currentNumberDisplay.textContent = "";
    prevNumberDisplay.textContent = "";
}

function addDecimal() {
    // if user already has decimal, don't add again
    if (!currentNumber.includes(".")) {
        currentNumber += ".";
        currentNumberDisplay.textContent = currentNumber;
    }
}


// keyboard functionality
window.addEventListener("keydown", getKeyboard);

function getKeyboard(e) {
    if (e.key >= 0 && e.key <= 9) {
        getNumber(e.key);
    } else if (e.key === "+" || e.key === "-" || e.key === "/") {
        getOperator(e.key);
    } else if (e.key === "*" || e.key === "x" || e.key === "X") {
        getOperator("X");
    } else if (e.key === "Enter" || e.key === "=") {
        calculate();
    } else if (e.key === ".") {
        addDecimal();
    } else if (e.key === "Backspace") {
        backspace()
    }
}

function backspace() {
    currentNumber = currentNumber.slice(0,-1);
    currentNumberDisplay.textContent = currentNumber;
}
