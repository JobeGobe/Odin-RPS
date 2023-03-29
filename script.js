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

function getPlayerChoice(roundNumber) {
    let validSelection = false;
    let playerChoice;
    while(validSelection === false){
        let playerChoiceInput = prompt(`Round ${roundNumber}: Please enter your choice: `);
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
        console.log(`You lose. ${CPUChoice} beats ${playerChoice}.`);
        return 'loss';
    } else if( pChoiceEnum === cChoiceEnum){
        console.log(`Draw.`)
        return 0;
    } else {
        playerChoice = capitalize(playerChoice);
        console.log( `You win! ${playerChoice} beats ${CPUChoice}.`);
        return 'win';
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
    const NUMBER_OF_ROUNDS = 5;
    let playerScore = 0;
    let CPUScore = 0;
    for( round = 1; round <= NUMBER_OF_ROUNDS; round++ ) {
        let CPUChoice = getComputerChoice();
        let playerChoice = getPlayerChoice(round);

        let result = playRound(playerChoice, CPUChoice);
        if (result === 'win') {
            playerScore += 1;
        } else if(result === 'loss') {
            CPUScore += 1;
        }

        
    }

    if (playerScore > CPUScore){
        console.log(`You Win with a final Score of ${playerScore}-${CPUScore}.`);
    } else if (CPUScore > playerScore) {
        console.log(`You Lose with a final Score of ${playerScore}-${CPUScore}.`);
    } else if(playerScore === CPUScore) {
        console.log(`The game ends in a draw.`)
    }
    console.log(playerScore);
    console.log(CPUScore);
}
game();


