const options = ['rock', 
                 'paper', 
                 'scissors'];

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];

    let randomNumber = Math.floor(Math.random() *choices.length);
    let computerChoice = choices[randomNumber];

    return computerChoice;
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
        console.log(`The game ends in a draw. ${playerScore}-${CPUScore}`);
    }
    console.log(playerScore);
    console.log(CPUScore);
}
/*game();*/

const buttonContainer = document.querySelector('.button-container');

for(choice in options){
    button = document.createElement('button');
    console.log(options[choice]);
    button.textContent = capitalize(`${options[choice]}`);
    button.classList.add('player-choice');
    button.setAttribute('data-choice', `${options[choice]}`);
    buttonContainer.appendChild(button);
}


buttonContainer.addEventListener('click', (e)=> {
    let choice = e.target.getAttribute('data-choice');

    if( choice !== null){
        console.log(choice);
    }
});


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


