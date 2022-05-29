const myArray = ["rock", "paper", "scissors"];

// choose randome rock, paper or scissors
const computerPlay = () => {
    return myArray[Math.floor(Math.random() * 3)];
};

// popup winner screen
const popup = document.querySelector(".popup-wrapper");
const winnerQuestion = document.querySelector(".winnerQuestion");

const winnerScreen = () => {
    popup.style.display = "block";

    if (playerScore > computerScore) {
        winnerQuestion.innerHTML = "YOU WON!";
    } else {
        winnerQuestion.innerHTML = "YOU LOST!";
    }
};

// call winnerScreen if points are over 5
const checkWinner = () => {
    if (playerScore >= 5 || computerScore >= 5) {
        winnerScreen();
    }
};

// add round number
let round = 0;
const roundNumber = document.querySelector(".roundNumber");

const addRoundNumber = () => {
    roundNumber.innerHTML = ++round;
};

// add score
let playerScoreBoard = document.querySelector(".playerScoreBoard");
let computerScoreBoard = document.querySelector(".computerScoreBoard");

const addScore = (roundWinner, playerScore, computerScore) => {
    if (roundWinner === "player") {
        playerScoreBoard.innerHTML = playerScore;
    }
    if (roundWinner === "computer") {
        computerScoreBoard.innerHTML = computerScore;
    }
};

// display winner message
const scoreMessage = document.querySelector(".scoreMessage");

const roundWinnerMessage = (
    roundWinner,
    playerSelection,
    computerSelection
) => {
    if (roundWinner === "player") {
        scoreMessage.innerHTML = `${playerSelection} beats ${computerSelection}. You won this round`;
    } else if (roundWinner === "computer") {
        scoreMessage.innerHTML = `${computerSelection} beats ${playerSelection}. You lost this round`;
    } else {
        scoreMessage.innerHTML = "tie :(";
    }
};

// check round winner and add score
let playerScore = 0;
let computerScore = 0;
let roundWinner = "";

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundWinner = "tie";
        addScore(roundWinner, playerScore, computerScore);
        roundWinnerMessage(roundWinner, playerSelection, computerSelection);
    }
    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "PAPER") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        playerScore++;
        roundWinner = "player";
        addScore(roundWinner, playerScore, computerScore);
        roundWinnerMessage(roundWinner, playerSelection, computerSelection);
    }
    if (
        (computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "scissors" && playerSelection === "paper") ||
        (computerSelection === "paper" && playerSelection === "rock")
    ) {
        computerScore++;
        roundWinner = "computer";
        addScore(roundWinner, playerScore, computerScore);
        roundWinnerMessage(roundWinner, playerSelection, computerSelection);
    }
    addRoundNumber();
    checkWinner();
}

// main function
const items = document.querySelectorAll(".item");

items.forEach((item) => {
    item.addEventListener("click", (e) => {
        let lol = computerPlay();
        playRound(e.target.id, lol);
    });
});

// play again
const playAgainButton = document.querySelector(".playAgain");

const playAgain = () => {
    playerScore = 0;
    computerScore = 0;
    round = 0;
    playerScoreBoard.innerHTML = playerScore;
    computerScoreBoard.innerHTML = computerScore;
    roundNumber.innerHTML = round;
    scoreMessage.innerHTML = "to score 5 points wins the game";
    popup.style.display = "none";
};

playAgainButton.addEventListener("click", playAgain);
