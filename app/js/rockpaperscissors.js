////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

var move 
function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    move = getInput();
    return move;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    move = randomPlay();
    return move;
}

function getWinner(playerMove,computerMove) {
    var winner; 

    var playerMove = getPlayerMove(move);

    var computerMove = getComputerMove(move);

    if (playerMove === computerMove) {
        winner = 'tie';

    }   else if ((playerMove === 'rock') && (computerMove === 'paper')) {
        winner = 'computer';

    }   else if ((playerMove === 'rock') && (computerMove === 'scissors')) {
        winner = 'player';

    }   else if ((playerMove === 'paper') && (computerMove === 'rock')) {
        winner = 'player';

    }   else if ((playerMove === 'paper') && (computerMove === 'scissors')) {
        winner = 'computer';

    }   else if ((playerMove === 'scissors') && (computerMove === 'rock')) {
        winner = 'computer';

    }   else if ((playerMove === 'scissors') && (computerMove === 'paper')) {
        winner = 'player';

    }

    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */

    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

    while ((playerWins < 5) || (computerWins < 5)) {

            if (getWinner(playerMove, computerMove) === 'player') {
                playerWins += 1;
                console.log('player has won 'playerWins' times!');
            }   else if (getWinner(playerMove, computerMove) === 'computer') {
                computerWins += 1;
                console.log('computer has won 'computerWins' times!');
            }

   };
   
    if (playerWins > computerWins) {
        console.log('Player Wins!!!')
    } else if (computerWins < playerWins) {
        console.log('Computer Wins!!!')
    };

    return [playerWins, computerWins];
}

