const text = document.querySelector("#text");
const playerScoreText = document.querySelector("#player-score");
const compScoreText = document.querySelector("#comp-score");
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const resetRpsBtn = document.querySelector("#rps-reset");
const messageBoard = document.querySelector("#message");

let playerScore = 0;
let compScore = 0;

playerScoreText.textContent = playerScore;
compScoreText.textContent = compScore;

// function game = main game function
// function round = score
// function compChoice = randomizer
// function addMessage = add message from round result
// function final = execute when winner is decided

rockBtn.onclick = () => game("ROCK");
paperBtn.onclick = () => game("PAPER");
scissorsBtn.onclick = () => game("SCISSORS");
resetRpsBtn.onclick = reset;

function game(player) {
    let comp = compChoice();
    round(player, comp);

    if (playerScore == 5 || compScore == 5) {
        final()
    }
}

function compChoice() {
    const rps = ["ROCK", "PAPER", "SCISSORS"];
    return rps[Math.floor(Math.random() * rps.length)]
}

function round(player, comp) {
    let message;

    if (player == comp) {
        message = `Draw, you both chose ${player}`
    } else if (
        (player == "ROCK" && comp == "SCISSORS") || 
        (player == "PAPER" && comp == "ROCK") || 
        (player == "SCISSORS" && comp == "PAPER")
    ) {
        playerScore++;
        message = `You win, ${player} beats ${comp}`
    } else {
        compScore++;
        message = `You lose, ${player} loses to ${comp}`
    }

    playerScoreText.textContent = playerScore;
    compScoreText.textContent = compScore;
    addMessage(message);
}

function addMessage(message) {
    const add = document.createElement("p");
    add.textContent = message;
    messageBoard.appendChild(add)
}

function final() {
    if (playerScore == 5) {
        text.textContent = "Congratulation, you are the winner!"
    } else {
        text.textContent = "Too bad, computer is the winner!"
    }
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}

function reset() {
    playerScore = 0;
    compScore = 0;
    playerScoreText.textContent = playerScore;
    compScoreText.textContent = compScore;
    text.textContent = "The first to get 5 points is the winner!";
    messageBoard.textContent = "";
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
}
