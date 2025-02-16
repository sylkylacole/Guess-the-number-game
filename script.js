// Import all elements

const comArea = document.getElementById("com-area");
const oneButton = document.getElementById("one");
const twoButton = document.getElementById("two");
const threeButton = document.getElementById("three");
const fourButton = document.getElementById("four");
const fiveButton = document.getElementById("five");
const sixButton = document.getElementById("six");
const sevenButton = document.getElementById("seven");
const eightButton = document.getElementById("eight");
const nineButton = document.getElementById("nine");
const tenButton = document.getElementById("ten");
const startButton = document.getElementById("start");
const resetButton = document.getElementById("reset");

// Set defaults (before the game even begins)

let alive = false;

let points = 0;

let randomNumber = Math.floor(Math.random() * 10) + 1;

let guess = 0;

// Create a function that will reassign random number; call this when a user gets a guess RIGHT

function newRandomNumber() {
    randomNumber = Math.floor(Math.random() * 10) + 1;
}

// When the start button is clicked, the game is running

startButton.addEventListener("click", () => {
    startGame();
    comArea.className = "";
});

function startGame() {
    alive = true;
    getGuess();
}

function getGuess() {
        oneButton.addEventListener("click", () => {
            guess = 1;
            checkGuess();
        });
        twoButton.addEventListener("click", () => {
            guess = 2;
            checkGuess();
        });
        threeButton.addEventListener("click", () => {
            guess = 3;
            checkGuess();
        });
        fourButton.addEventListener("click", () => {
            guess = 4;
            checkGuess();
        });
        fiveButton.addEventListener("click", () => {
            guess = 5;
            checkGuess();
        });
        sixButton.addEventListener("click", () => {
            guess = 6;
            checkGuess();
        });
        sevenButton.addEventListener("click", () => {
            guess = 7;
            checkGuess();
        });
        eightButton.addEventListener("click", () => {
            guess = 8;
            checkGuess();
        });
        nineButton.addEventListener("click", () => {
            guess = 9;
            checkGuess();
        });
        tenButton.addEventListener("click", () => {
            guess = 10;
            checkGuess();
        });
    
    function checkGuess() {
        if (guess === randomNumber) {
            points++;
            comArea.innerHTML = `<h3>Correct! You currently have ${points} points! Guess again!</h3>`;
            newRandomNumber();
            getGuess();
        } else {
            comArea.innerHTML = `<h3>Game over! You scored  ${points} points! Reset to play again!</h3>`;
        }
    }
}


// Write a function to reset the game

function resetGame() {
    window.location.reload();
}

resetButton.addEventListener("click", () => {
    resetGame();
});