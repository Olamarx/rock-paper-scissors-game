let myArray = ['rock', 'paper', 'scissors'];

function computerPlay(){
    return myArray[(Math.floor(Math.random()* myArray.length))];
}

let playerScore = 0;
let computerScore = 0;
let moves =0;

const playerSelection = document.querySelector('.player-selection');
const computerSelection = computerPlay()
let submit = document.querySelector('.submit')

    let playersOptions = [playerSelection]

    playersOptions.forEach(selection => {
        selection.addEventListener('click', function(){
            const movesLeft = document.querySelector('.movesLeft');
            moves++;
            movesLeft.innerText = `Move Left: ${10 - moves}`;



winner(this.innerText, computerSelection)

if(moves == 10){
    gameOver(playersOptions,movesLeft)
}

        })
    })

function playRound(playerSelection, computerSelection){

     const result = document.querySelector('.result');
     const playerScoreBoard = document.querySelector('.p-count');
     const computerScoreBoard = document.querySelector('.c-count');
     playerSelection = playerSelection.toLowerCase();
     computerSelection = playerSelection.toLowerCase();


//    if(upperCaseOfPlayerSelection == myArray[0] || lowerCaseOfPlayerSelection == myArray[0]){
//         return 'You won, Rock';
//     } else if(upperCaseOfPlayerSelection == myArray[1] || lowerCaseOfPlayerSelection == myArray[1]){
//         return 'You won, Paper';
//     } else if(upperCaseOfPlayerSelection == myArray[2] || lowerCaseOfPlayerSelection == myArray[2]){
//         return 'You won, Scissors'
//     }

    if (playerSelection === computerSelection) {
        result.textContent = "Oops! It is a tie";


    } else if (playerSelection == 'rock') {


        if (computerSelection == 'paper') {
             result.textContent = `Computer wins! ${computerSelection} beats ${playerSelection}!`;
             computerScore++;
             computerScoreBoard.textContent = computerScore;
        } else {
            result.textContent =  `Player wins! ${playerSelection} beats ${computerSelection}!`;
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }


    } else if (playerSelection == 'scissors') {


        if (computerSelection == 'rock') {
             result.textContent = `Computer wins! ${computerSelection} beats ${playerSelection}!`;
             computerScore++;
             computerScoreBoard.textContent = computerScore;

        } else {
             result.textContent =  `Player wins! ${playerSelection} beats ${computerSelection}!`;
             playerScore++;
             playerScoreBoard.textContent = playerScore;
        }
    }


    else if(computerSelection == 'paper'){
         if(computerSelection == 'scissors'){
             result.textContent = `Computer wins! ${computerSelection} beats ${playerSelection}!`;
             computerScore++;
             computerScoreBoard.textContent = computerScore;

        } else {
             result.textContent =  `Player wins! ${playerSelection} beats ${computerSelection}!`;
             playerScore++;
             playerScoreBoard.textContent = playerScore;
         }
    }
}


function gameOver(playersOptions, movesLeft){
        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reload');

        playersOptions.forEach(choice =>{
            choice.style.display = 'none';
       });

       
        chooseMove.innerText = 'Game Over!!'
        movesLeft.style.display = 'none';
        if(playerScore > computerScore){
            result.style.fontSize = '2rem';
            result.innerText = 'You Won The Game'
            result.style.color = '#308D46';
        }
        else if(playerScore < computerScore){
            result.style.fontSize = '2rem';
            result.innerText = 'You Lost The Game';
            result.style.color = 'red';
        }
        else{
            result.style.fontSize = '2rem';
            result.innerText = 'Tie';
            result.style.color = 'grey'
        }
        reloadBtn.innerText = 'Restart';
        reloadBtn.style.display = 'flex'
        reloadBtn.addEventListener('click',() => {
            window.location.reload();
        })
    } 















// let myArray = ['rock', 'paper', 'scissors'];

// function computerPlay(){
//     return myArray[(Math.floor(Math.random()* myArray.length))];
// }


// let playerSelection = prompt('Input your selection.', '');
// const computerSelection = computerPlay()

// function playRound(playerSelection, computerSelection){
//     let lowerCaseOfPlayerSelection = playerSelection.toLowerCase();
//     let upperCaseOfPlayerSelection = playerSelection.toUpperCase();


//     if(upperCaseOfPlayerSelection == myArray[0] || lowerCaseOfPlayerSelection == myArray[0]){
//         return 'You won, Rock';
//     } else if(upperCaseOfPlayerSelection == myArray[1] || lowerCaseOfPlayerSelection == myArray[1]){
//         return 'You won, Paper';
//     } else if(upperCaseOfPlayerSelection == myArray[2] || lowerCaseOfPlayerSelection == myArray[2]){
//         return 'You won, Scissors'
//     }

//     if (playerSelection == computerSelection) {
//         return "Oops! It is a tie";


//     } else if (playerSelection == 'rock') {


//         if (computerSelection == 'paper') {
//             return `Hurray!
//             Computer wins! {{computerSelection}} beats {{playerSelection}}!`;
//         } else {
//             return  `Player wins! {{playerSelection}} beats {{computerSelection}}!`;
//         }


//     } else if (playerSelection =='scissors') {


//         if (computerSelection == 'rock') {
//             return `Computer wins! {{computerSelection}} beats {{playerSelection}}!`;
//         } else {
//             return  `Player wins! {{playerSelection}} beats {{computerSelection}}!`;
//         }
//     }


// }


// console.log(playRound(playerSelection, computerSelection))


// function game(){
//     playRound(playerSelection, computerSelection);
//     for(let i = 0; i < 5; i++){
//         if()
//     }
// }



// function computerPlay(playerSelection, computerSelection){
//     let random = ['rock', 'paper', 'scissors'];
//     let computerSelection = Math.floor(Math.random()*4);

//         let lowerCase = playerSelection.toLowerCase();
//         let upperCase = playerSelection.toLowerCase();

//     if(lowerCase  === random[0] || upperCase ==== computerSelection[0]){
//         return 'Rock';
//     } 
//     else if(lowerCase  === random[1] || upperCase ==== computerSelection[1]){
//         return 'Paper';
//     } else if (lowerCase  === random[2] || upperCase ==== computerSelection[2]){
//         return 'Scissors';
//     }


//     }