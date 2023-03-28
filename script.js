function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];

    let randomNumber = Math.floor(Math.random() *choices.length);
    let computerChoice = choices[randomNumber];

    return computerChoice;
}

function checkPlayerSelection(inputString) {
    if ( inputString === 'rock' || inputString === 'scissors' || inputString === 'paper' ) {
        return true;
    } else {
        return false;
    }
}

function getPlayerChoice() {
    let validSelection = false;
    let playerChoice;
    while(validSelection === false){
        let playerChoiceInput = prompt("Please enter your choice: ");
        playerChoice = playerChoiceInput.toLowerCase();
        validSelection = checkPlayerSelection(playerChoice);
    }

    return playerChoice;
}

function playRound( playerChoice, CPUChoice ) {
    let pChoiceEnum = enumerateChoice(playerChoice);
    let cChoiceEnum = enumerateChoice(CPUChoice);
    if((pChoiceEnum + 1) % 3 === cChoiceEnum){
         CPUChoice = capitalize(CPUChoice);
        return `You lose. ${CPUChoice} beats ${playerChoice}.`;
    } else if( pChoiceEnum === cChoiceEnum){
        return `Draw`;
    } else {
        playerChoice = capitalize(playerChoice);
        return `You win! ${playerChoice} beats ${CPUChoice}.`;
    }
}
function enumerateChoice( choice ){
    if(choice === "rock"){
        return 0;
    } else if( choice === 'paper'){
        return 1;
    } else if( choice === 'scissors'){
        return 2;
    }
}

function capitalize( inputString ){
    let capitalizedString = (inputString[0].toUpperCase() + inputString.slice(1));
    return capitalizedString;
}

function game() {
    for( i = 1; i <= roundCount; i++ ) {
        let CPUChoice = getComputerChoice();
        let playerChoice = getPlayerChoice();

        playRound(playerChoice, CPUChoice);
    }
}
let CPUChoice = getComputerChoice();
let playerChoice = getPlayerChoice();

let result = playRound(playerChoice, CPUChoice);

console.log(result);
console.log(playerChoice);
console.log(CPUChoice);

