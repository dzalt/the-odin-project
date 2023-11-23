const numberBtn = document.querySelectorAll(".number");
const operatorBtn = document.querySelectorAll(".operator");
const equalBtn = document.querySelector("#equal");
const decimalBtn = document.querySelector("#decimal");
const resetBtn = document.querySelector("#reset");
const prevNumText = document.querySelector("#prev-num");
const currentNumText = document.querySelector("#current-num");
let prevNum = "";
let currentNum = "";
let operator = "";
currentNumText.textContent = 0;

// BUTTONS

numberBtn.forEach((button) => {
    button.addEventListener("click", (e) => {
        getnumber(e.target.textContent)
    });
});

operatorBtn.forEach((button) => {
    button.addEventListener("click", (e) => {
        getoperator(e.target.textContent)
    });
});

equalBtn.onclick = calculate;
decimalBtn.onclick = decimal;
resetBtn.onclick = reset;

// FUNCTIONS

function getnumber(num) {
    // to process input from number buttons

    currentNum += num;
    currentNumText.textContent = currentNum
}

function getoperator(op) {
    // to process input from operator buttons

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
    // to calculate current number and prev number
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
    operator = "";
}

function decimal() {
    // to add decimal, but if current number has decimal, don't add again
    if (!currentNum.includes(".")) {
        currentNum += ".";
        currentNumText.textContent = currentNum;
    }
}

function reset() {
    // to reset to initial value
    prevNum = "";
    currentNum = "";
    operator = "";
    prevNumText.textContent = prevNum;
    currentNumText.textContent = 0;
}

// KEYBOARD FUNCTIONALITY

window.addEventListener("keydown", getkeyboard);

function getkeyboard(e) {
    if (e.key >= 0 && e.key <= 9) {
        getnumber(e.key);
    } else if (e.key === "+" || e.key === "-" || e.key === "/") {
        getoperator(e.key);
    } else if (e.key === "*" || e.key === "x" || e.key === "X") {
        getoperator("X");
    } else if (e.key === "Enter" || e.key === "=") {
        calculate();
    } else if (e.key === ".") {
        decimal();
    } else if (e.key === "Backspace") {
        backspace()
    }
}

function backspace() {
    currentNum = currentNum.slice(0,-1);
    currentNumText.textContent = currentNum;
}
