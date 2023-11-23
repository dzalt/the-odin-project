const screen = document.querySelector("#screen");
const sizeBtn = document.querySelector("#size");
const blackBtn = document.querySelector("#black");
const randomBtn = document.querySelector("#random");
const resetBtn = document.querySelector("#reset");
let color = "black";
createSquare(16);


// BUTTONS

sizeBtn.addEventListener("click", () => {
    let size = getSize();
    createSquare(size);
});

blackBtn.addEventListener("click", () => {
    color = "black";
});

randomBtn.addEventListener("click", () => {
    color = "random";
});

resetBtn.onclick = reset;


// FUNCTIONS

function getSize() {
    // function to resize screen
    // for size button

    let input = prompt("Input board size:");

    if (input == "") {
        alert("You didn't input any value");
    } else if (input >= 1 && input <= 100) {
        alert(`Screen is set to ${input}`);
        return input;
    } else {
        alert("Please input a number between 1 - 100");
    }
}

function createSquare(size) {
    // function to add little squares to draw on screen

    screen.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    screen.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numSquare = size * size;

    for (let i = 0; i < numSquare; i++) {
        const square = document.createElement("div");
        square.setAttribute("class", "square");
        square.addEventListener("mouseover", colorSquare);
        screen.appendChild(square);
    }
}

function colorSquare() {
    // function to add color to the squares 
    // for createSquare function

    if (color == "random") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = "black";
    }
}

function reset() {
    //  function to give all square class a white background

    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => square.style.backgroundColor = "white");
}
