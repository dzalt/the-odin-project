// initialize

let rockButton = document.querySelector("#rock-btn");
let paperButton = document.querySelector("#paper-btn");
let scissorsButton = document.querySelector("#scissors-btn");

let playerScore = 0;
let computerScore = 0;

document.getElementById("player-score").textContent = playerScore;
document.getElementById("computer-score").textContent = computerScore;


// functions

function getComputerChoice() {
    const rps = ["rock", "paper", "scissors"];
    const computerChoice = rps[Math.floor(Math.random() * rps.length)];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return `Draw! You both chose ${playerSelection}`;
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ) {
        playerScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (
        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "rock")
    ) {
        computerScore++;
        return `You Lose! ${playerSelection} loses to ${computerSelection}`;
    } else {
        return "Invalid Input";
    }
}

function game(playerSelection) {
    let computerSelection = getComputerChoice();
    let message = playRound(playerSelection, computerSelection);

    document.getElementById("message").textContent = message;
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = computerScore;

    if (playerScore == 5 || computerScore == 5) {

        if (playerScore == 5) {
            document.getElementById("message").textContent = "You are the winner";
        } else if (computerScore == 5) {
            document.getElementById("message").textContent = "Computer is the winner";
        }

        // remove rock and paper button
        // alter scissors button as reset button
        rockButton.remove();
        paperButton.remove();
        document.getElementById("scissors-btn").textContent = "Reset";
        scissorsButton.addEventListener("click", () => {
            location.reload() // to reset browser
        });
    }
}


// event listener for buttons

rockButton.addEventListener("click", () => {
    game("rock")
});

paperButton.addEventListener("click", () => {
    game("paper")
});

scissorsButton.addEventListener("click", () => {
    game("scissors")
});
