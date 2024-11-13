// console.log("test test babe")
// test test the branch thing

// step 1: Get computer choice
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

    nround++;
    const containerComputerChoice = document.querySelector(".computer-choice");
    if (nround > 1) {
        containerComputerChoice.lastChild.remove();
    }

    const elComputerChoice = document.createElement("div");
    elComputerChoice.textContent = computerChoice;
    containerComputerChoice.appendChild(elComputerChoice);

    return computerChoice;
}

// Step 2: Declare the players score variables in global scope
let nround = 0;
let computerScore = 0;
let humanScore = 0;

// Step 3: Write the logic to play a single round
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
    
    const containerHumanChoice = document.querySelector(".human-choice");
    if (nround > 1) {
        containerHumanChoice.lastChild.remove();
    }
    
    const elHumanChoice = document.createElement("div");
    elHumanChoice.textContent = "Your choice of the round is " + humanChoice;
    containerHumanChoice.appendChild(elHumanChoice);
    
    const containerBody = document.querySelector("body");
    if (nround > 1) {
        containerBody.lastChild.remove();
    }

    const elRoundResult = document.createElement("div");
    elRoundResult.textContent = "The winner of round " + nround + " is " + winner;
    containerBody.appendChild(elRoundResult);

    console.log("It's round " + nround + ", and the round winner is: " + winner);
    
    console.log("It's round " + nround + ", and computer's current score is " + computerScore);
    console.log("It's round " + nround + ", and human's current score is " + humanScore);

    if (computerScore === 5) {
        finalWinner = "computer";
        console.log("Computer has won the game.");
    } else if (humanScore === 5) {
        finalWinner = "human";
        console.log("YOU WON THE GAME!!!")
    }

    return winner;
}

// step 4: Get human choice from button and run the round
const btnRock = document.querySelector("#btnrock");
btnRock.addEventListener("click", () => {
    playRound(getComputerChoice(), "rock");
});
const btnPaper = document.querySelector("#btnpaper");
btnPaper.addEventListener("click", () => {
    playRound(getComputerChoice(), "paper");
});
const btnScissor = document.querySelector("#btnscissor");
btnScissor.addEventListener("click", () => {
    playRound(getComputerChoice(), "scissor");
});


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

// console.log("The final winner of the game is " + playGame());

// Test test
// myComputerChoice = getComputerChoice();
// myHumanChoice = getHumanChoice();

// console.log(playRound(myComputerChoice, myHumanChoice));
// console.log("Computer's current score is " + computerScore);
// console.log("Human's current score is " + humanScore);