const text = document.querySelector("#text");
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const resetButton = document.querySelector("#reset");
const playerName = document.querySelector("#player-name");
const computerName = document.querySelector("#computer-name");
const playerEmoji = document.querySelector("#player-emoji");
const computerEmoji = document.querySelector("#computer-emoji");
const playerScoreText = document.querySelector("#player-score");
const computerScoreText = document.querySelector("#computer-score");
const messageBoard = document.querySelector("#message-board");

let playerScore = 0;
let computerScore = 0;

playerScoreText.textContent = playerScore;
computerScoreText.textContent = computerScore;

rockButton.onclick = () => game("rock");
paperButton.onclick = () => game("paper");
scissorsButton.onclick = () => game("scissors");
resetButton.onclick = reset;

// Functions for main game

function game(player) {
    let computer = computerChoice();
    round(player, computer);

    if (playerScore == 5 || computerScore == 5) {
        final()
    }
}

function round(player, computer) {
    let message;
    let winner;

    if (player == computer) {
        message = `Draw, you both chose ${player}`;
        winner = "none";
    } else if (
        (player == "rock" && computer == "scissors") ||
        (player == "paper" && computer == "rock") ||
        (player == "scissors" && computer == "paper")
    ) {
        playerScore++;
        message = `You win, ${player} beats ${computer}`;
        winner = "player";
    } else {
        computerScore++;
        message = `You lose, ${player} loses to ${computer}`;
        winner = "computer";
    }

    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;
    return output(message, winner, player, computer)
}

function computerChoice() {
    const rps = ["rock", "paper", "scissors"];
    const choice = rps[Math.floor(Math.random() * rps.length)];
    return choice;
}

// Functions for Scoreboard and Messageboard

function output(message, winner, player, computer) {
    emojiAdd(player, computer);
    messageAdd(message, winner);
}

function final() {
    if (playerScore == 5) {
        text.textContent = "Congratulation, you are the winner :D";
        playerName.setAttribute("style", "color: green");
        playerScoreText.setAttribute("style", "color: green");
    } else {
        text.textContent = "Unfortunately, computer is the winner :(";
        computerName.setAttribute("style", "color: green");
        computerScoreText.setAttribute("style", "color: green");
    }

    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}

function emojiAdd(choice1, choice2) {
    playerEmoji.src = emojiPath(choice1);
    computerEmoji.src = emojiPath(choice2);
}

function emojiPath(choice) {
    if (choice == "rock") {
        return "assets/rock.png"
    } else if (choice == "paper") {
        return "assets/paper.png"
    } else {
        return "assets/scissors.png"
    }
}

function messageAdd(message, winner) {
    const add = document.createElement("p");
    add.textContent = message;

    if (winner == "player") {
        add.setAttribute("style", "color: green")
    } else {
        add.setAttribute("style", "color: red")
    }

    messageBoard.appendChild(add)
}

// Functions for reset button

function reset() {
    playerScore = 0;
    computerScore = 0;
    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;
    text.textContent = "The first to get 5 points is the winner!";
    playerName.setAttribute("style", "color: black");
    playerScoreText.setAttribute("style", "color: black");
    computerName.setAttribute("style", "color: black");
    computerScoreText.setAttribute("style", "color: black");
    messageBoard.textContent = "";
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
}
