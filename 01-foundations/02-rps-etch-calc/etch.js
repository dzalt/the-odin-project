const screenEtch = document.querySelector("#etch-screen");
const sizeBtn = document.querySelector("#size");
const blackBtn = document.querySelector("#black");
const randomBtn = document.querySelector("#random");
const resetEtchBtn = document.querySelector("#etch-reset");
let color = "black";

// function getSize = size button. resize screen
// function createSquare = add little squares to main screen
// function colorSquare = to color the squares

createSquare(16);

sizeBtn.addEventListener("click", () => {
    let size = getSize();
    createSquare(size);
});

// blackBtn.addEventListener("click", () => {
//     color = "black"
// });

blackBtn.onclick = () => color = "black";
randomBtn.onclick = () => color = "random";
resetEtchBtn.onclick = reset;

function getSize() {
    let input = prompt("Input board size:");

    if (input >= 1 && input <= 100) {
        alert(`Screen is set to ${input}`);
        return input
    } else {
        alert("Please input a number between 1 - 100")
    }
}

function createSquare(size) {
    screenEtch.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    screenEtch.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numSquare = size * size;

    for (let i = 0; i < numSquare; i++) {
        const square = document.createElement("div");
        square.setAttribute("class", "square");
        square.addEventListener("mouseover", colorSquare);
        screenEtch.appendChild(square)
    }
}

function colorSquare() {
    if (color == "random") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = "black"
    }
}

function reset() {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => square.style.backgroundColor = "white")
}