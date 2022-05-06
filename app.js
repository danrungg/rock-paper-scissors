const myArray = ["Rock", "Paper", "Scissors"];

const computerPlay = () => {
    return myArray[Math.floor(Math.random() * 3)];
};

console.log(computerPlay());
