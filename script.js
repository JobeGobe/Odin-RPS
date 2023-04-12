const options = ['rock', 
                 'paper', 
                 'scissors',
                 ];

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];

    let randomNumber = Math.floor(Math.random() *choices.length);
    let computerChoice = choices[randomNumber];

    return computerChoice;
}

function playRound( playerChoice ) {
    let CPUChoice = getComputerChoice();
    let pChoiceEnum = enumerateChoice(playerChoice);
    let cChoiceEnum = enumerateChoice(CPUChoice);
    // let resultsContainer = document.createElement('div');    //If adding new result div after every round instead of updating uncomment and change
    // resultsContainer.classList.add('result-container');
    if((pChoiceEnum + 1) % 3 === cChoiceEnum){
        CPUChoice = capitalize(CPUChoice);
        console.log(`You lose. ${CPUChoice} beats ${playerChoice}.`);
        resultContainer.textContent = `Round ${roundNumber}: You lose. ${CPUChoice} beats ${playerChoice}`;
        resultContainer.style.backgroundColor = 'rgb(160, 20, 20)';
        computerScore++;
        
    } else if( pChoiceEnum === cChoiceEnum){
        console.log(`Draw.`)
        resultContainer.textContent = `Round ${roundNumber}: Draw`;
        resultContainer.style.backgroundColor = 'rgb(35, 35, 35)';
    } else {
        playerChoice = capitalize(playerChoice);
        console.log( `You win! ${playerChoice} beats ${CPUChoice}.`);
        resultContainer.textContent = `Round ${roundNumber}: You win! ${playerChoice} beats ${CPUChoice}`;
        resultContainer.style['background-color'] = 'rgb(0, 90, 28)';
        playerScore++;
    }
    updateScoreDisplay();
    
    if(roundNumber++ >= 5){
        removeEventButtons();
        gameOver = true;
        resetButton.style.visibility = 'visible'
    }
    //gameContainer.appendChild(resultContainer);       //usable but prefer premade result container so buttons don't shift after first press
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

function updateScoreDisplay(){
    playerScoreDisplay.textContent = `${playerScore}`;
    computerScoreDisplay.textContent = `${computerScore}`;
}

function resetGame(){
    initializeGame();
    if(gameOver === true){
        gameOver === false;
        addEventButtons();
    }
}

function addEventButtons(){
    buttonContainer.addEventListener('click', notAnonymous);
}

function notAnonymous(e) {
    let choice = e.target.getAttribute('data-choice');

    if( choice !== null){
        playRound(choice);
    }
}

function removeEventButtons(){
    buttonContainer.removeEventListener('click', notAnonymous);
}

// function game() {
//     const NUMBER_OF_ROUNDS = 5;
//     let playerScore = 0;
//     let CPUScore = 0;
//     for( round = 1; round <= NUMBER_OF_ROUNDS; round++ ) {
//         let CPUChoice = getComputerChoice();
//         let playerChoice = getPlayerChoice(round);

//         let result = playRound(playerChoice, CPUChoice);
//         if (result === 'win') {
//             playerScore += 1;
//         } else if(result === 'loss') {
//             CPUScore += 1;
//         }

        
//     }

//     if (playerScore > CPUScore){
//         console.log(`You Win with a final Score of ${playerScore}-${CPUScore}.`);
//     } else if (CPUScore > playerScore) {
//         console.log(`You Lose with a final Score of ${playerScore}-${CPUScore}.`);
//     } else if(playerScore === CPUScore) {
//         console.log(`The game ends in a draw. ${playerScore}-${CPUScore}`);
//     }
//     console.log(playerScore);
//     console.log(CPUScore);
// }

function initializeGame(){
    computerScore = 0;
    playerScore = 0;
    updateScoreDisplay();
    resultContainer.textContent = 'Rock -> Scissors -> Paper -> Rock';
    resultContainer.style['background-color'] = 'black';
    roundNumber = 1;
    resetButton.style.visibility = 'hidden';
}
/*game();*/
const gameContainer = document.querySelector('.game-container');
const buttonContainer = document.querySelector('.button-container');
const playerScoreDisplay = document.querySelector('.player-score-number');
const computerScoreDisplay = document.querySelector('.computer-score-number');

const resultContainer = document.createElement('div');
resultContainer.classList.add('result-container');
resultContainer.textContent = 'Rock -> Scissors -> Paper -> Rock';
gameContainer.appendChild(resultContainer);

const resetButton = document.createElement('button');
resetButton.textContent = 'Restart Game';
resetButton.style.visibility = 'hidden';

const gameResult = document.createElement('div');
gameResult.classList.add('victory-container');
gameResult.textContent = 'You Win!'

gameContainer.appendChild(resetButton);


let computerScore = 0;
let playerScore = 0;
let roundNumber = 1;

let gameOver = false;


resetButton.addEventListener('click', () => {
    resetGame();

})

playerScoreDisplay.textContent = `${playerScore}`;
computerScoreDisplay.textContent = `${computerScore}`;
for(choice in options){
    button = document.createElement('button');
    button.textContent = capitalize(`${options[choice]}`);
    button.classList.add('player-choice');
    button.setAttribute('data-choice', `${options[choice]}`);
    buttonContainer.appendChild(button);
}

addEventButtons();

gameContainer.appendChild(gameResult);



// for( item in buttonOptions){
//     item.addEventListener('click', ()=> {
//         console.log(item.getAttribute('data-choice'));
//     })
// }

// const rockButton = document.createElement('button');
// rockButton.textContent = 'Rock';
// rockButton.classList.add('player-choice');
// rockButton.setAttribute('data-choice', 'rock');

// const paperButton = document.createElement('button');
// paperButton.textContent = 'Paper';
// paperButton.classList.add('player-choice');
// paperButton.setAttribute('data-choice', 'paper');

// const scissorsButton = document.createElement('button');
// scissorsButton.textContent = 'Scissors';
// scissorsButton.classList.add('player-choice');
// scissorsButton.setAttribute('data-choice', 'scissors');


// buttonContainer.appendChild(rockButton);
// buttonContainer.appendChild(paperButton);
// buttonContainer.appendChild(scissorsButton);


// rockButton.addEventListener('click', ()=> {
//     console.log(rockButton.getAttribute('data-choice'));
// });

// paperButton.addEventListener('click', ()=> {
//     console.log(paperButton.getAttribute('data-choice'));
// });



// scissorsButton.addEventListener('click', () => {
//     console.log(scissorsButton.getAttribute('data-choice'));
// })


