function game() {

    let playerScore = 0;
    let computerScore = 0;


    for(let i = 0; i < 5; i++) {
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


        function getComputerChoice() {
            const rps = ["rock", "paper", "scissors"];
            const computerChoice = rps[Math.floor(Math.random() * rps.length)];
            return computerChoice;
        }
        

        const playerSelection = prompt("Choose between Rock, Paper, or Scissors: ").toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }

    
    console.log(`Result:\nYour score is ${playerScore} and Computer score is ${computerScore}`);
    if (playerScore > computerScore) {
        console.log("You Win!")
    } else if (playerScore < computerScore) {
        console.log("You Lose!")
    } else {
        console.log("Draw!")
    }
    
}

game();
