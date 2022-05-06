const myArray = ["rock", "paper", "scissors"];

const computerPlay = () => {
    return myArray[Math.floor(Math.random() * 3)];
};

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return "TIE";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return "WIN";
    } else {
        return "LOOSE";
    }
};

playerSelection = "paper".toLowerCase();
computerSelection = computerPlay();
console.log(computerSelection);

console.log(playRound(playerSelection, computerSelection));
