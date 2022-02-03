let playerScore = 0
let computerScore = 0

const buttons = document.querySelectorAll('.game-buttons button')
for (button of buttons) {
    button.addEventListener('click', (e) => {
        if (playerScore < 5 && computerScore < 5) {
            playRound(e.currentTarget.innerText, computerPlay())
        }
    })
}

const score = document.querySelector('#score')
score.innerText = `Player: ${playerScore}\nComputer: ${computerScore}`

const result = document.querySelector('#result')
result.innerText = 'The game has begun!'

function playRound(playerSelection, computerSelection) {
    // Play a single round of Rock Scissors Paper
    // Returns 1 for win, 0.5 for tie, and 0 for loss
    
    let roundResult
    let roundScore

    if (playerSelection === 'Rock') {
        if (computerSelection === 'Rock') {
            roundResult = 'Tie'
        }
        else if (computerSelection === 'Scissors') {
            roundResult = 'Win'
        }
        else {
            roundResult = 'Lose'
        }
    }
    else if (playerSelection === 'Scissors') {
        if (computerSelection === 'Scissors') {
            roundResult = 'Tie'
        }
        else if (computerSelection === 'Paper') {
            roundResult = 'Win'
        }
        else {
            roundResult = 'Lose'
        }
    }
    else {
        if (computerSelection === 'Paper') {
            roundResult = 'Tie'
        }
        else if (computerSelection === 'Rock') {
            roundResult = 'Win'
        }
        else {
            roundResult = 'Lose'
        }
    }

    if (roundResult === 'Win') {
        result.innerText = `You ${roundResult}! ${playerSelection} beats ${computerSelection}.`
        roundScore = 1
    }
    else if (roundResult === 'Lose') {
        result.innerText = `You ${roundResult}! ${playerSelection} loses against ${computerSelection}.`
        roundScore = 0
    }
    else {
        result.innerText = `You ${roundResult}! ${playerSelection} is equal to ${computerSelection}.`
        roundScore = 0.5
    }

    playerScore += roundScore
    computerScore += (1 - roundScore)
    score.innerText = `Player: ${playerScore}\nComputer: ${computerScore}`

    if (playerScore >= 5 && computerScore < 5) {
        result.innerText = `You won! The final score was: (You) ${playerScore} to (Computer) ${computerScore}`
    }
    else if (computerScore >= 5 && playerScore < 5) {
        result.innerText = `You lost! The final score was: (You) ${playerScore} to (Computer) ${computerScore}`
    }
    else if (computerScore >= 5 && playerScore >= 5) {
        result.innerText = `You tied! The final score was: (You) ${playerScore} to (Computer) ${computerScore}`
    }
}

function computerPlay() {
    // Randomly pick a choice for the computer to play

    return ['Rock', 'Scissors', 'Paper'][Math.floor(Math.random() * 3)]
}
