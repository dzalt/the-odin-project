const screenCalc = document.querySelector("#calc-screen");
const prevNumText = document.querySelector("#prev-num");
const currentNumText = document.querySelector("#current-num");
const resetCalcBtn = document.querySelector("#calc-reset");
const numberBtn = document.querySelectorAll(".number");
const operatorBtn = document.querySelectorAll(".operator");
const decimalBtn = document.querySelector("#decimal");
const equalBtn = document.querySelector("#equal");
let prevNum = "";
let currentNum = "";
let operator = "";
currentNumText.textContent = 0;

// function getNumber = to process input from number button
// function getOperator = to process input from operator button
// function calculate = calculate current number and prev number

numberBtn.forEach((button) => {
    button.addEventListener("click", (e) => {
        getNumber(e.target.textContent)
    });
});

operatorBtn.forEach((button) => {
    button.addEventListener("click", (e) => {
        getOperator(e.target.textContent)
    });
});

equalBtn.onclick = calculate;
decimalBtn.onclick = decimal;
resetCalcBtn.onclick = reset;

function getNumber(num) {
    currentNum += num;
    currentNumText.textContent = currentNum
}

function getOperator(op) {
    // to calculate multiple number without clicking equal button
    if (operator != "") {
        calculate()
    }

    operator = op;
    prevNum = currentNum;
    currentNum = "";
    prevNumText.textContent = prevNum + " " + operator;
    currentNumText.textContent = 0;
}

function calculate() {
    prevNum = Number(prevNum);
    currentNum = Number(currentNum);

    switch(operator) {
        case "+":
            currentNum = prevNum + currentNum;
            break;
        case "-":
            currentNum = prevNum - currentNum;
            break;
        case "X":
            currentNum = prevNum * currentNum;
            break;
        case "/":
            currentNum = prevNum / currentNum;
            break;
    }

    prevNumText.textContent = "";
    currentNumText.textContent = currentNum;
    operator = ""
}

function decimal() {
    // if current number has decimal, don't add again
    if (!currentNum.includes(".")) {
        currentNum += ".";
        currentNumText.textContent = currentNum
    }
}

function reset() {
    prevNum = "";
    currentNum = "";
    operator = "";
    prevNumText.textContent = prevNum;
    currentNumText.textContent = 0;
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
        decimal();
    } else if (e.key === "Backspace") {
        backspace()
    }
}

function backspace() {
    currentNum = currentNum.slice(0, -1);
    currentNumText.textContent = currentNum
}