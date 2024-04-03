let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
/* We will build a Number Guesser Game:
    - Human vs. Computer - each player guesses a number
    - The closest guess to the target number wins
    - JavaScript functions to build:
        > Generate the secret target number
        > Deduce whose guess is closest to the target number
        > Keep track of playfer scores and round played */

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    
    const humanDifference = Math.abs(targetGuess - humanGuess);
    
    const computerDifference = Math.abs(targetGuess - computerGuess);  
    
    return humanDifference <= computerDifference;
    
}

const updateScore = winner => {
    if (winner === "human") {
        humanScore++;
    } else if (winner === "computer") {
        computerScore++;
    }
}

const advanceRound = () => {
    currentRoundNumber++;
} 