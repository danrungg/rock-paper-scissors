const myArray = ["rock", "paper", "scissors"];

const computerPlay = () => {
    return myArray[Math.floor(Math.random() * 3)];
};

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        console.log("tie", computerSelection);
        return "tie";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        console.log("win", computerSelection);
        return "playerWin";
    } else {
        console.log("loose", computerSelection);
        return "computerWin";
    }
};

const buttons = document.querySelectorAll("button");
buttons.forEach((item) => {
    item.addEventListener("click", function () {
        playRound(this.innerText.toLowerCase(), computerPlay());
    });
});
