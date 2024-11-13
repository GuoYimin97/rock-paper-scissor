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
    if (ngames > 0 && nround === 1) {
        containerComputerChoice.lastChild.remove();
    }
    
    if (nround > 1) {
        containerComputerChoice.lastChild.remove();
    }

    const elComputerChoice = document.createElement("div");
    elComputerChoice.textContent = computerChoice;
    elComputerChoice.style.cssText = "font-size: 64px; font-weight: 900;";
    containerComputerChoice.appendChild(elComputerChoice);

    return computerChoice;
}

// Step 2: Declare the players score variables in global scope
let ngames = 0;
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
    if (ngames > 0 && nround === 1) {
        containerHumanChoice.lastChild.remove();
    }
    
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
    elRoundResult.textContent = "The winner of round " + nround + " is " + winner +
        ", and computer's current score is " + computerScore + ", and human's current score is " + humanScore + ".";
    elRoundResult.style.cssText = "font-size: 20px; align-self: center; font-family: \"Roboto\", sans-serif; font-weight: 500;";
    containerBody.appendChild(elRoundResult);

    console.log("It's round " + nround + ", and the round winner is: " + winner);
    console.log("It's round " + nround + ", and computer's current score is " + computerScore);
    console.log("It's round " + nround + ", and human's current score is " + humanScore);

    if (computerScore === 5) {
        finalWinner = "computer";
        console.log("Computer has won the game.");
        const elFinalResult = document.createElement("div");
        elFinalResult.textContent = "Computer has won the game.";
        elFinalResult.style.cssText = "font-size: 20px; align-self: center; font-family: \"Roboto\", sans-serif; font-weight: 500; color: #f95959; margin-bottom: 16px;";
        containerBody.appendChild(elFinalResult);
        nround = 0;
        computerScore = 0;
        humanScore = 0;
        ngames++;
    } else if (humanScore === 5) {
        finalWinner = "human";
        console.log("YOU WON THE GAME!!!")
        const elFinalResult = document.createElement("div");
        elFinalResult.textContent = "YOU WON THE GAME!!!";
        elFinalResult.style.cssText = "font-size: 36px; align-self: center; font-family: \"Roboto\", sans-serif; font-weight: 900; color: #42b883; margin-bottom: 16px;";
        containerBody.appendChild(elFinalResult);
        nround = 0;
        computerScore = 0;
        humanScore = 0;
        ngames++;
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