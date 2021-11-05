let buttons = document.querySelectorAll('[data-selection]')
let computer = document.querySelectorAll('[data-comp')
let userScore = document.querySelector('.user-score')
let computerScore = document.querySelector('.computer-score')
let replay = document.querySelector('#replay')
let user_score = 0;
let computer_score = 0;
const title = document.querySelector('h2')
const audio = document.querySelector('audio')
//Defining startGame function and call it

startGame()
replay.addEventListener('click', startGame)

function startGame() {
        replay.style.visibility = 'hidden'
        title.style.visibility = 'hidden'
        userScore.innerText = '0'
        computerScore.innerText = '0'
        user_score = 0;
        computer_score = 0;
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].style.background = 'white';
        computer[i].style.background = 'white';
        buttons[i].style.pointerEvents = 'auto'
        buttons[i].addEventListener('click', turnClick)
    }
}

function turnClick(event) {
    sound()
    const selection = event.target;
    for(let j = 0; j < buttons.length; j++) {
        buttons[j].style.background = 'white';
        computer[j].style.background = 'white';

    }
    checkWinner(selection, computerPick())
    userScore.innerText = user_score
    computerScore.innerText = computer_score 
    gameOver() 
}
//Declaring computerPick function
function computerPick() {
    let rand = Math.floor(Math.random() * 3);
    return computer[rand].dataset.comp
}

//Declaring checkWinner function
function checkWinner(user, comp) {
    if(user.dataset.selection === 'rock' && comp === 'scissors' ||
    user.dataset.selection === 'paper' && comp === 'rock' ||
    user.dataset.selection === 'scissors' && comp === 'paper') {
        user_score++
        user.style.background = 'green';
        for(let i of computer) {
            if(i.dataset.comp === comp) {
                i.style.background = 'red'
            }
        }
    }
    else if(user.dataset.selection === 'rock' && comp ==='rock' ||
    user.dataset.selection === 'paper' && comp === 'paper' ||
    user.dataset.selection === 'scissors' && comp === 'scissors') {
        user.style.background = 'yellow';
        for(let i of computer) {
            if(i.dataset.comp === comp) {
                i.style.background = 'yellow'
            }
        }
    }
    else {
        computer_score++
        user.style.background = 'red';
        for(let i of computer) {
            if(i.dataset.comp === comp) {
                i.style.background = 'green'
            }
        }
    }
}

function gameOver() {
    if(user_score === 5 || computer_score === 5) {
        if(user_score === 5) {
            title.style.visibility = 'visible'
            title.innerText = 'You win'
        }
        else if(computer_score === 5) {
            title.style.visibility = 'visible'
            title.innerText = 'You lose'
        }
    replay.style.visibility = 'visible'
    for(let i of buttons) {
        i.removeEventListener('click', turnClick);
        i.style.pointerEvents = 'none'
    }
 }
}

function sound() {
    audio.play()
}