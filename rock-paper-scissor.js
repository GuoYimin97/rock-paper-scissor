// console.log("test test babe")

// step 2: Get computer choice
function getComputerChoice() {
    const randomNumber = Math.random();
    console.log("The random number generated is " + randomNumber);

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerChoice = "rock";
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissor";
    }

    console.log("Computer's choice is " + computerChoice)
    return computerChoice;
}

// step 3: Get human choice
const properHumanInput = ["rock", "paper", "scissor"];

function getHumanChoice() {
    let humanChoice = window.prompt("Alright what's your move?").toLowerCase();
    
    if (!properHumanInput.includes(humanChoice)) {
        humanChoice = "invalid!";
    }

    console.log("Human choice is " + humanChoice);
    return humanChoice;
}

// console.log("Human choice is " + getHumanChoice());

// Step 4: Declare the players score variables in global scope
let computerScore = 0;
let humanScore = 0;

// Step 5: Write the logic to play a single round
function playRound(computerChoice, humanChoice) {
    if (humanChoice === "invalid!") {
        winner = null;
        console.log("Invalid game!! Human choice is not following the game rules!!")
    } else {
        if (computerChoice === humanChoice) {
            winner = "tied game";
            console.log("Both have " + computerChoice + ", it's a tie this round.");
        } else if (computerChoice === "rock") {
            winner = (humanChoice === "paper") ? "human" : "computer";
        } else if (computerChoice === "paper") {
            winner = (humanChoice === "scissor") ? "human" : "computer";
        } else if (computerChoice === "scissor") {
            winner = (humanChoice === "rock") ? "human" : "computer";
        }
    } 
    
    if (winner === "computer") {
        computerScore++;
    } else if (winner === "human") {
        humanScore++;
    }

    // console.log("The winner of the round is " + winner);
    return winner;
}

// Step 6: Write the logic to play the entire game
function playGame() {
    let i = 0;
    while (i < 5) {
        roundWinner = playRound(getComputerChoice(), getHumanChoice());
        if (roundWinner !== null) {
            i++;
        } else {
            alert("Input not valid, try again!");
        }
        console.log("It's round " + i + ", and computer's current score is " + computerScore);
        console.log("It's round " + i + ", and human's current score is " + humanScore);
      }
    
    if (computerScore > humanScore) {
        finalWinner = "computer";
    } else if (computerScore < humanScore) {
        finalWinner = "human";
    } else if (computerScore === humanScore) {
        finalWinner = "neither player, it's a tied game";
    }

    return finalWinner;
}

console.log("The final winner of the game is " + playGame());

// Test test
// myComputerChoice = getComputerChoice();
// myHumanChoice = getHumanChoice();

// console.log(playRound(myComputerChoice, myHumanChoice));
// console.log("Computer's current score is " + computerScore);
// console.log("Human's current score is " + humanScore);