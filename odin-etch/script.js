// default value
createSquare(16);
let color = "black"


// functions
function createSquare(size) {
    let container = document.querySelector("#container");

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numSquare = size * size;

    for(let i = 0; i < numSquare; i++) {
        let square = document.createElement("div");
        square.setAttribute("class", "square");

        // square.addEventListener("mouseover", function(){
        //     square.style.backgroundColor = "black"
        // });

        square.addEventListener("mouseover", colorSquare)

        container.appendChild(square);
    }
}

function getSize() {
    let input = prompt("Input board size:");
    let message = document.querySelector("#message");

    if (input == "") {
        message.textContent = "You didn't input any value"
    } else if (input < 0 || input > 100) {
        message.textContent = "Please input a number between 1 - 100"
    } else {
        message.textContent = `Board is set to ${input}`;
        return input;
    }
}

function colorSquare() {
    if (color == "random") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    } else {
        this.style.backgroundColor = "black"
    }
}


// config buttons
let sizeButton = document.querySelector("#size-btn");
let blackButton = document.querySelector("#black-btn");
let randomButton = document.querySelector("#random-btn");
let resetButton = document.querySelector("#reset-btn");

sizeButton.addEventListener("click", () => {
    let size = getSize();
    createSquare(size)
});

blackButton.addEventListener("click", () => {
    color = "black"
});

randomButton.addEventListener("click", () => {
    color = "random"
});

resetButton.addEventListener("click", () => {
    let allSquares = document.querySelectorAll(".square");
    // allSquares.forEach(square => square.parentNode.removeChild(square));
    allSquares.forEach(square => square.style.backgroundColor = "white")
});

