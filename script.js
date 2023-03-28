function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];

    let randomNumber = Math.floor(Math.random() *choices.length);
    let computerChoice = choices[randomNumber];

    return computerChoice;
}

function getPlayerChoice() {
    let playerChoiceInput = prompt("Please enter your choice: ");
    let playerChoice = playerChoiceInput.toLowerCase();

    return playerChoice;
}
let CPUChoice = getComputerChoice();
let playerChoice = getPlayerChoice();

console.log(playerChoice);

