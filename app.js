const myArray = ["rock", "paper", "scissors"];

const computerPlay = () => {
    return myArray[Math.floor(Math.random() * 3)];
};

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return "tie";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return "playerWin";
    } else {
        return "computerWin";
    }
};

const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt(`??? ${i + 1} of 5`).toLowerCase();
        console.log(playerSelection);
        let computerSelection = computerPlay();
        console.log(`The computer choose ${computerSelection}`);

        if (playRound(playerSelection, computerSelection) === "playerWin") {
            playerScore += 1;
            console.log(
                `Playerscore: ${playerScore}, ComputerScore: ${computerScore}`
            );
        } else if (
            playRound(playerSelection, computerSelection) === "computerWin"
        ) {
            computerScore += 1;
            console.log(
                `Playerscore: ${playerScore}, ComputerScore: ${computerScore}`
            );
        } else {
            console.log("TIE!");
        }
    }

    if (playerScore > computerScore) {
        return "You won!";
    } else {
        return "The Computer won!";
    }
};

console.log(game());
