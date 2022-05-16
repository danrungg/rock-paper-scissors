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
