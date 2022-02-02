function game() {
    // Play a complete five round game
    // Best out of five wins

    let choice
    let roundScore
    let playerScore = 0

    for (let i = 0; i < 5; ++i) {
        do {
            choice = prompt("Rock, Scissors, or Paper? ")
        } while (choice.toLowerCase() !== 'rock' && choice.toLowerCase() !== 'scissors' && choice.toLowerCase() !== 'paper')
        roundScore = playRound(choice, computerPlay())
        playerScore += roundScore
    }

    if (playerScore > 2.5) {
        console.log(`You won! The final score was: (You) ${playerScore} to (Computer) ${5 - playerScore}`)
    }
    else if (playerScore < 2.5) {
        console.log(`You lost! The final score was: (You) ${playerScore} to (Computer) ${5 - playerScore}`)
    }
    else {
        console.log(`You tied! The final score was: (You) ${playerScore} to (Computer) ${5 - playerScore}`)
    }
}

function playRound(playerSelection, computerSelection) {
    // Play a single round of Rock Scissors Paper
    // Returns 1 for win, 0.5 for tie, and 0 for loss

    // Capitalize the player's choice
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()
    let roundResult

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
        console.log(`You ${roundResult}! ${playerSelection} beats ${computerSelection}.`)
        return 1
    }
    else if (roundResult === 'Lose') {
        console.log(`You ${roundResult}! ${playerSelection} loses against ${computerSelection}.`)
        return 0
    }
    else {
        console.log(`You ${roundResult}! ${playerSelection} is equal to ${computerSelection}.`)
        return 0.5
    }
}

function computerPlay() {
    // Randomly pick a choice for the computer to play

    return ['Rock', 'Scissors', 'Paper'][Math.floor(Math.random() * 3)]
}

// Start the game
game()